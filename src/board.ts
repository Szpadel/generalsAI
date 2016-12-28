import {StateObject, ScoreObject} from "./game-interfaces";
import {Point} from "./tile";
import {ArmyKnowledgeSource} from "./knowledge-sources/army";
import {TileProperties} from "./tile-properties";
import {AbstractTask} from "./tasks/abstract-task";
import {SpreadTask} from "./tasks/spread-task";
import {AttackTask} from "./tasks/attack-task";
import {GeneralDistanceKnowledgeSource} from "./knowledge-sources/general-distance";
import {ProtectGeneralTask} from "./tasks/protect-general-task";
import {CityCaptureTask} from "./tasks/city-capture-task";
import {DebugLayout, DebugParameters} from "./debug-layout";
import {FastSpreadTask} from "./tasks/fast-spread-task";
import {CollectTask} from "./tasks/collect-task";

export interface GameWindow extends Window{
    ai: Board;
    gameCtrl: any;
}

declare const window: GameWindow;

export class Board {
    public data: StateObject;
    public playersArmy: ArmyKnowledgeSource;
    private lastAttack: number = 0;
    public cityLocations: Set<number> = new Set<number>();
    public generalLocations: Set<number> = new Set<number>();
    private tilePropertiesCache: WeakMap<Point, TileProperties>;
    private generalOwner: Map<number, number> = new Map<number, number>();
    public generalDistance: GeneralDistanceKnowledgeSource;
    public debugParameters: DebugParameters[] = [];

    private tasks: AbstractTask[] = [];
    private lastAttackTime = 0;
    public debug: DebugLayout = new DebugLayout();

    public stop = false;

    constructor() {
        this.playersArmy = new ArmyKnowledgeSource(this);
        this.generalDistance = new GeneralDistanceKnowledgeSource(this);


        let protectGeneral = new ProtectGeneralTask(this);
        this.tasks.push(protectGeneral);
        this.debugParameters.push(protectGeneral);

        this.tasks.push(new AttackTask(this));
        this.tasks.push(new SpreadTask(this));
        this.tasks.push(new CityCaptureTask(this));
        this.tasks.push(new FastSpreadTask(this));

        this.tasks.push(new CollectTask(this));

        this.resetTileProperties();
        console.log('Board init');
    }

    resetTileProperties() {
        this.tilePropertiesCache = new WeakMap<Point, TileProperties>();
    }

    computeMapChanges(oldMap: number[], newMap: number[]) {
        let mapChanges: Map<number, number[]> = new Map<number, number[]>();
        newMap.forEach((newTile, pNum) => {
            const oldTile = oldMap[pNum] || -100;

            if (oldTile !== newTile) {
                mapChanges.set(+pNum, [oldTile, newTile]);
            }
        });

        return mapChanges;
    }

    applyUpdate(updateEvent: StateObject) {
        if(this.stop) {
            return;
        }
        const startTime = performance.now();
        let newData: StateObject = JSON.parse(JSON.stringify(updateEvent));
        let nextTurn = false;

        this.resetTileProperties();
        if (this.data) {
            if (newData.attackIndex >= this.lastAttack) {
                nextTurn = true;
                this.debug.clearMarks();
            }
        }

        const oldMap = this.data ? this.data.map._map : [];
        const oldArmy = this.data ? this.data.map._armies : [];
        const generalChanges = [];

        const mapChanges = this.computeMapChanges(oldMap, newData.map._map);
        const armyChanges = this.computeMapChanges(oldArmy, newData.map._armies);


        this.data = newData;

        this.data.cities.forEach((city) => {
            this.cityLocations.add(city);
        });

        this.data.generals.forEach((general) => {
            if(general < 0) {
                return;
            }
            if (!this.generalLocations.has(general)) {
                generalChanges.push(general);
            }
            this.generalLocations.add(general);
            this.generalOwner.set(general, this.data.map._map[general]);
        });

        this.data.scores.forEach((player: ScoreObject) => {
            if (player.dead) {
                this.generalOwner.forEach((playerNumber, general) => {
                    if (playerNumber == player.i) {
                        generalChanges.push(general);
                        this.generalLocations.delete(general);
                        this.cityLocations.add(general);
                        this.generalOwner.delete(general);
                    }
                });
            }
        });

        const boardChanges = new BoardChanges(mapChanges, armyChanges, generalChanges);

        this.playersArmy.onNextTurn(boardChanges);
        this.generalDistance.onNextTurn(boardChanges);

        this.tasks.forEach((task) => {
            task.onNextTurn(boardChanges);
        });

        if (nextTurn) {
            this.doMove();
            this.debug.time = performance.now() - startTime;
            this.debug.updateDebugParameters(this.debugParameters);
        }else {
            if(Date.now() - this.lastAttackTime > 3 * 1000) {
                console.warn('Hang detected, resetting attack counter!');
                this.lastAttack = 0;
            }
        }

    }

    getMyGeneralLocation(): Point {
        return this.toPoint(this.data.generals[this.data.playerIndex]);
    }

    toNum(p: Point): number {
        return this.data.map.width * p[0] + p[1];
    }


    toPoint(num: number): Point {
        let x = Math.floor(num / this.data.map.width);
        let y = num % this.data.map.width;
        return [x, y];
    }

    getTile(p: Point): number {
        if (!this.validatePoint(p)) {
            return -2;
        }
        return this.data.map._map[this.toNum(p)];
    }

    getMyScore() {
        return this.data.scores.find((score) => score.i === this.data.playerIndex);
    }

    getArmy(p: Point): number {
        if (!this.validatePoint(p)) {
            return 0;
        }
        return this.data.map._armies[this.toNum(p)];
    }

    isCity(p: Point): boolean {
        let pNum = this.toNum(p);
        return this.cityLocations.has(pNum);
    }

    isGeneral(p: Point): boolean {
        let pNum = this.toNum(p);
        return this.generalLocations.has(pNum);
    }

    validatePoint(p: Point): boolean {
        return p[0] >= 0 && p[0] < this.data.map.height
            && p[1] >= 0 && p[1] < this.data.map.width;
    }

    attack(start: Point, end: Point, half: boolean): boolean {
        const sTp = this.getTileProperties(start);
        if(sTp.army <= 1 || !sTp.isMine) {
            console.error('Invalid starting point!', sTp.army, sTp.isMine);
            this.stop = true;
            return true;
        }
        const tTp = this.getTileProperties(end);
        if(!tTp.isWalkable) {
            console.error('Target isn\'t walkable!');
            return false;
        }
        console.log('attack', start, end);
        //this.debug.setAttack(start, end);

        this.lastAttackTime = Date.now();
        this.lastAttack = this.data.attackIndex + 1;
        window.gameCtrl.attack(this.toNum(start), this.toNum(end), half, this.lastAttack);
        return true;
    }

    getTileProperties(p: Point) {
        if (!this.tilePropertiesCache.has(p)) {
            this.tilePropertiesCache.set(p, new TileProperties(this, p));
        }
        return this.tilePropertiesCache.get(p);
    }

    doMove() {
        this.tasks = this.tasks.sort((a, b) => {
            return b.getTaskPriority() - a.getTaskPriority();
        });

        for (let task of this.tasks) {
            console.log('move', task.getTaskPriority());
            this.debug.tasks = this.tasks;
            if (task.doMove()) {
                this.debug.currentTask = `${task.name} (${task.getTaskPriority()})`;
                return;
            }
        }

        console.warn('Didn\'t found move');
    }
}

export class BoardChanges {
    constructor(public readonly mapChanges: Map<number, number[]>,
                public readonly armyChanges: Map<number, number[]>,
                public readonly generalChanges: number[]) {
    }
}
