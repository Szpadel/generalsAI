import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";
import {Point} from "../tile";
import {DebugParameters} from "../debug-layout";
import {ScoreObject, PlayerColors} from "../game-interfaces";

export class AttackTask extends AbstractTask implements DebugParameters{
    debugSectionName: string = 'Attack Task';
    name = 'Attack';
    private deepTreeSearch: DeepTreeSearch;
    private bestEnemyScore: ScoreObject;
    private bestEnemyPlayerStrength = 0;

    constructor(board: Board) {
        super(board);
        this.deepTreeSearch = new DeepTreeSearch(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
    }

    getDebugParameters(): Map<string, string> {
        const map = new Map();

        map.set('Victim color', this.bestEnemyScore ? PlayerColors[this.bestEnemyScore.i] : 'none');
        map.set('Victim free army', this.bestEnemyPlayerStrength);

        return map;
    }

    getTaskPriority(): number {
        if(this.board.data.turn < 50) {
        }
        return this.board.data.turn < 50*2 ? 5 : 18;
    }


    doMove(): boolean {
        const maxDepth = 10;
        let bestMove: Point[];
        let bestScore = -Infinity;
        this.bestEnemyPlayerStrength = Infinity;

        let list = this.board.playersArmy.enemyPlayers.slice();

        for (let playerArmy of list) {
            for (let pNum of playerArmy) {
                const enemyScore = this.board.getPlayerScore(this.board.getTileProperties(this.board.toPoint(pNum)).tileType);
                const enemyArmy = enemyScore.total;

                if(this.bestEnemyPlayerStrength < enemyArmy) {
                    continue;
                }

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
                                this.bestEnemyPlayerStrength = enemyArmy;
                                this.bestEnemyScore = enemyScore;
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
