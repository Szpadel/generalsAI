import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";
import {Point} from "../tile";

export class AttackTask extends AbstractTask {
    name = 'Attack';
    private deepTreeSearch: DeepTreeSearch;


    constructor(board: Board) {
        super(board);
        this.deepTreeSearch = new DeepTreeSearch(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
    }

    getTaskPriority(): number {
        if(this.board.data.turn < 50) {
        }
        return this.board.data.turn < 50 ? 5 : 18;
    }


    doMove(): boolean {
        const maxDepth = 10;
        let bestMove: Point[];
        let bestScore = -Infinity;

        let list = this.board.playersArmy.enemyPlayers.slice();

        for (let playerArmy of list) {
            for (let pNum of playerArmy) {
                this.deepTreeSearch.process(this.board.toPoint(pNum), maxDepth,
                    (p, depthLeft, acc, stop) => {
                        const tp = this.board.getTileProperties(p);
                        let armyLeft = acc.armyLeft;
                        let path = acc.path.slice();
                        let score = acc.score;
                        path.push(p);

                        if(armyLeft === null) {
                            armyLeft = tp.army;
                        }else {
                            if(!tp.isMine && !tp.isEmpty || tp.isGeneral) {
                                stop();
                                return;
                            }

                            if(tp.isMine) {
                                armyLeft -= tp.army -1;
                            }else {
                                armyLeft += tp.army + 1;
                            }


                        }

                        if(armyLeft < 0 && path.length >= 2) {
                            let score = -armyLeft * depthLeft;
                            const betterScore = score > bestScore;
                            const sameScore = score === bestScore;
                            const shorter = !bestMove || path.length < bestMove.length;

                            if (betterScore ||
                                sameScore && shorter) {
                                bestMove = path;
                                bestScore = score;
                            }
                        }

                        return {armyLeft, path};
                    }, {armyLeft: null, path: [], score: 0})
            }
        }

        if (bestMove) {
            if (bestMove.length < 2) {
                return false;
            }

            let l = bestMove.length;
            this.board.debug.showPath(bestMove);

            return this.board.attack(bestMove[l - 1], bestMove[l - 2], false);

        }
        return false;
    }

}
