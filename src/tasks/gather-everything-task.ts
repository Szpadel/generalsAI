import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {Point} from "../tile";
import {getBestPoint} from "../decision-makers";

export class GatherEverythingTask extends AbstractTask{
    name = 'Gather Everything';
    priority = 0;
    valid = 0;
    level = 0;
    unitsInLevel: Point[];

    constructor(board: Board) {
        super(board);
        window['trigger'] = () => {
            this.priority = 1000;
        };
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.valid--;
    }

    getTaskPriority(): number {
        return this.priority;
    }

    doMove(): boolean {
        if(this.valid <= 0) {
            this.init();
        }
        this.valid = 10;

        while (this.level > 0) {
            console.log('consider level', this.level, this.unitsInLevel);
            if(this.unitsInLevel.length == 0) {
                this.nextLevel();
                continue;
            }

            let moved = this.tryMove();
            if(moved) {
                return true;
            }
        }

        this.priority = 0;
        return false;
    }

    tryMove(): boolean {
        while(this.unitsInLevel.length > 0) {
            console.log('consider move', this.level, this.unitsInLevel);
            const p = this.unitsInLevel.shift();
            const tp = this.board.getTileProperties(p);
            if(tp.army <= 1 || !tp.isMine) {
                continue;
            }

            let move = getBestPoint(p, (n) => {
                if(!this.board.validatePoint(n)) {
                    return -Infinity;
                }
                return 1000-this.board.generalDistance.getGeneralDistance(n);
            });

            if(move.score > 0) {
                this.board.debug.showPath([move.p, p]);
                this.board.attack(p, move.p, false);
                return true;
            }

        }
        return false;
    }


    init() {
        this.level = this.countMaxLevel();
        this.unitsInLevel = this.getUnitsFromLevel(this.level);
        console.log('init', this.level, this.unitsInLevel);
    }

    nextLevel() {
        this.level--;
        this.unitsInLevel = this.getUnitsFromLevel(this.level);
    }

    countMaxLevel():number {
        let maxLevel = 0;
        this.board.playersArmy.myArmyList.forEach((pNum) => {
            const p = this.board.toPoint(pNum);
            const dist = this.board.generalDistance.getGeneralDistance(p);
            if(dist < 1000 && maxLevel < dist) {
                maxLevel = dist;
            }
        });

        return maxLevel;
    }

    getUnitsFromLevel(level: number): Point[] {
        let units = [];
        this.board.playersArmy.myArmyList.forEach((pNum) => {
            const p = this.board.toPoint(pNum);
            const dist = this.board.generalDistance.getGeneralDistance(p);
            if(dist === level) {
                units.push(p);
            }
        });

        return units;
    }

}
