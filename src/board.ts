import {StateObject, ScoreObject} from "./game-interfaces";
import {Point} from "./tile";
import {MyArmyKnowledgeSource} from "./knowledge-sources/my-army";
import {TileProperties} from "./tile-properties";
import {AbstractTargetGenerator} from "./targets-generators/abstract-target-generator";
import {EmptyTileTargetGenerator} from "./targets-generators/empty-tile-target-generator";
import {PriorityMap} from "./priority-map";
import {PriorityAgent} from "./priority-agent";
import {EnemyTargetGenerator} from "./targets-generators/enemy-target-generator";
import {GeneralTargetGenerator} from "./targets-generators/general-target-generator";
import {ArmyTargetGenerator} from "./targets-generators/army-target-generator";
import {CitiesTargetGenerator} from "./targets-generators/cities-target-generator";

export interface GameWindow extends Window{
    ai: Board;
    gameCtrl: any;
}

declare const window: GameWindow;

export class Board {
    public data: StateObject;
    private bot: PriorityAgent;
    public myArmy: MyArmyKnowledgeSource;
    private lastAttack: number = 0;
    public cityLocations: Set<number> = new Set<number>();
    public generalLocations: Set<number> = new Set<number>();
    private tilePropertiesCache: WeakMap<Point, TileProperties>;
    private generalOwner: Map<number, number> = new Map<number, number>();

    private targetGenerators: AbstractTargetGenerator[] = [];
    public readonly priorityMap: PriorityMap;

    constructor() {
        this.bot = new PriorityAgent(this);
        this.myArmy = new MyArmyKnowledgeSource(this);

        this.priorityMap = new PriorityMap(this);

        this.targetGenerators.push(new EmptyTileTargetGenerator(this, this.priorityMap));
        this.targetGenerators.push(new EnemyTargetGenerator(this, this.priorityMap));
        this.targetGenerators.push(new GeneralTargetGenerator(this, this.priorityMap));
        this.targetGenerators.push(new ArmyTargetGenerator(this, this.priorityMap));
        this.targetGenerators.push(new CitiesTargetGenerator(this, this.priorityMap));
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
        let newData: StateObject = JSON.parse(JSON.stringify(updateEvent));
        let nextTurn = false;

        if (this.data) {
            this.resetTileProperties();
            if (newData.attackIndex >= this.lastAttack) {
                nextTurn = true;
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

        this.myArmy.onNextTurn(boardChanges);
        this.targetGenerators.forEach((generator) => {
            generator.onNextTurn(boardChanges);
        });

        if (nextTurn) {
            this.bot.doMove();
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

    attack(start: Point, end: Point, half: boolean) {
        console.log('attack', start, end);
        this.lastAttack = this.data.attackIndex + 1;
        window.gameCtrl.attack(this.toNum(start), this.toNum(end), half, this.lastAttack);
    }

    getTileProperties(p: Point) {
        if (!this.tilePropertiesCache.has(p)) {
            this.tilePropertiesCache.set(p, new TileProperties(this, p));
        }
        return this.tilePropertiesCache.get(p);
    }
}

export class BoardChanges {
    constructor(public readonly mapChanges: Map<number, number[]>,
                public readonly armyChanges: Map<number, number[]>,
                public readonly generalChanges: number[]) {
    }
}
