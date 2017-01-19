import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {Point, PointHelpers} from "../tile";
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
        if(this.isGeneralWeak() && Math.random() < 0.05) {
            this.priority = 1000;
        }
    }

    getTaskPriority(): number {
        return this.priority;
    }

    doMove(): boolean {
        if(this.valid <= 0) {
            this.init();
        }
        this.valid = 100;

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
                const dist = PointHelpers.equals(n, this.board.getMyGeneralLocation())
                    ? 0
                    : this.board.generalDistance.getGeneralDistance(n);

                const tp = this.board.getTileProperties(n);
                if(!tp.isMine && tp.isCity || tp.isEnemy) {
                    return 0;
                }
                return 1000-dist;
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
        if(this.level > 5) {
            this.level = 5;
        }
        this.unitsInLevel = this.getUnitsFromLevel(this.level);
        console.log('init', this.level, this.unitsInLevel);
    }

    isGeneralWeak() {
        const p = this.board.getMyGeneralLocation();
        const tp = this.board.getTileProperties(p);
        const score = this.board.getMyScore();
        return tp.army < (score.total - score.tiles)/20;
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
