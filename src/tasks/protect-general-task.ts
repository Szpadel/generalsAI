import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";
import {Point} from "../tile";

export class ProtectGeneral extends AbstractTask{
    private deepTreeSearch: DeepTreeSearch;
    private dangerArmy: Point;
    private maxScore = 0;

    constructor(board: Board) {
        super(board);
        this.deepTreeSearch = new DeepTreeSearch(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.maxScore = 0;
        this.dangerArmy = null;
        for (let playerArmy of this.board.playersArmy.enemyPlayers) {
            for (let pNum of playerArmy) {
                let p = this.board.toPoint(pNum);
                let dist = this.board.generalDistance.getGeneralDistance(p);
                if(dist > 10) {
                    continue;
                }
                const tp = this.board.getTileProperties(p);
                let score = ((10 - dist) * tp.army);
                if(this.maxScore < score) {
                    this.maxScore = score;
                    this.dangerArmy = p;
                }
            }
        }

        if(this.maxScore > 0) {
        }
    }

    getTaskPriority(): number {
        return this.maxScore;
    }

    doMove(): boolean {
        if(!this.dangerArmy) {
            return false;
        }

        const startDepth = 10;
        let bestPath: Point[];
        let bestScore = -Infinity;

        this.deepTreeSearch.process(this.dangerArmy, startDepth,
            (p, depth, acc, stop) => {
                const tp = this.board.getTileProperties(p);
                let armyLeft = acc.armyLeft;
                let path = acc.path.slice();
                path.push(p);

                if (armyLeft === null) {
                    armyLeft = tp.army;
                } else {
                    if (!tp.isMine) {
                        stop();
                        return;
                    }
                    armyLeft -= tp.army - 1;
                }

                if (path.length >= 2) {
                    let score = -armyLeft*depth;
                    if(bestScore < score) {
                        bestScore = score;
                        bestPath = path;
                    }
                }

                return {armyLeft, path};
            }, {armyLeft: null, path: []});


        if(bestPath) {
            console.log(JSON.stringify(bestPath));
            const l = bestPath.length;
            this.board.attack(bestPath[l-1], bestPath[l-2], false);
            console.log('Protect General!');
            return true;
        }
        return false;
    }

}
