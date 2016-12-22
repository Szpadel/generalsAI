import {StateObject} from "./game-interfaces";
import {Point} from "./tile";
import {MyArmyKnowledgeSource} from "./knowledge-sources/my-army";
import {SimpleAgent} from "./simple-agent";

export interface GameWindow extends Window{
    ai: Board;
    gameCtrl: any;
}

declare const window: GameWindow;

export class Board {
    public data: StateObject;
    private bot: SimpleAgent;
    public myArmy: MyArmyKnowledgeSource;
    private lastAttack: number = 0;

    constructor() {
        this.bot = new SimpleAgent(this);
        this.myArmy = new MyArmyKnowledgeSource(this);
        console.log('Board init');
    }

    applyUpdate(updateEvent: StateObject) {
        let newData = JSON.parse(JSON.stringify(updateEvent));
        let nextTurn = false;
        //if(update.cities) {
        //    newData.cities = this.mergeCities(this.data.cities, update.cities);
        //}

        if (this.data) {
            if (newData.attackIndex >= this.lastAttack) {
                nextTurn = true;
            }
        }

        this.data = newData;
        if (nextTurn) {
            this.myArmy.onNextTurn();

            this.bot.doMove();
        }
    }

    getEnemyTotalArmy(enemy: number) {
        return this.data.scores[enemy].total;
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

    getArmy(p: Point): number {
        if (!this.validatePoint(p)) {
            return 0;
        }
        return this.data.map._armies[this.toNum(p)];
    }

    isCity(p: Point): boolean {
        let pNum = this.toNum(p);
        for (let c of this.data.cities) {
            if (c === pNum) {
                return true;
            }
        }
        return false;
    }

    isGeneral(p: Point): boolean {
        let pNum = this.toNum(p);
        for (let c of this.data.generals) {
            if (c === pNum) {
                return true;
            }
        }
        return false;
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

    private mergeCities(oldCities: number[], newCities: number[]): number[] {
        return newCities;
    }
}


