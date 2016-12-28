import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";

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
        return this.board.data.turn < 50 ? 5 : 15;
    }


    doMove(): boolean {
        const maxDepth = 8;
        let possibleMoves = [];
        let x = 0;

        let list = this.board.playersArmy.enemyPlayers.slice();
        //list.push(this.board.playersArmy.empty);

        for (let playerArmy of list) {
            for (let pNum of playerArmy) {
                this.deepTreeSearch.process(this.board.toPoint(pNum), maxDepth,
                    (p, depth, acc, stop) => {
                        const tp = this.board.getTileProperties(p);
                        let armyLeft = acc.armyLeft;
                        let path = acc.path.slice();
                        let enemyArmy = acc.enemyArmy;
                        path.push(p);

                        if(armyLeft === null) {
                            armyLeft = tp.army;
                            enemyArmy = armyLeft;
                        }else {
                            if(!tp.isMine && !tp.isEmpty) {
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
                            possibleMoves.push({armyLeft, path, enemyArmy});
                        }
                        x++;

                        return {armyLeft, path, enemyArmy};
                    }, {armyLeft: null, path: [], enemyArmy: 0})
            }
        }

        let bestMove;
        let depth = Infinity;
        let armyLeft = -Infinity;
        possibleMoves.forEach((move) => {
            if(move.path.length < depth
            || move.path.length === depth && move.armyLeft < armyLeft) {
                bestMove = move;
                armyLeft = move.armyLeft;
                depth = move.path.length;
            }
        });

        if (bestMove) {
            if (bestMove.path.length < 2) {
                return false;
            }

            let l = bestMove.path.length;
            this.board.debug.showPath(bestMove.path);

            return this.board.attack(bestMove.path[l - 1], bestMove.path[l - 2], false);

        }
        return false;
    }

}
