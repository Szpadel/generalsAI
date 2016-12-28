import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";
import {Point} from "../tile";

export class ProtectGeneralTask extends AbstractTask{
    name = 'Protect General';
    private deepTreeSearch: DeepTreeSearch;
    private dangerArmy: Point;
    private maxScore = 0;
    private distance = 0;

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
                if(dist > 13) {
                    continue;
                }
                const tp = this.board.getTileProperties(p);
                let score = ((13 - dist)*(13 - dist) * (tp.army -dist));

                if(this.maxScore < score) {
                    this.maxScore = score;
                    this.dangerArmy = p;
                    this.distance = dist;
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

        const startDepth = 13;
        let bestPath: Point[];
        let minMoves = Infinity;
        let bestArmyLeft = -Infinity;

        this.deepTreeSearch.process(this.dangerArmy, startDepth,
            (p, depthLeft, acc, stop) => {
                const tp = this.board.getTileProperties(p);
                let armyLeft = acc.armyLeft;
                let path = acc.path.slice();
                let moves = acc.moves;
                path.push(p);

                if (armyLeft === null) {
                    armyLeft = tp.army;
                } else {
                    if(tp.isMine) {
                        moves += 1;
                        armyLeft -= tp.army -1;
                    }else {
                        moves += 2;
                        armyLeft += tp.army + 1;
                    }

                    const canUse = tp.isMine || tp.isEmpty || (tp.isEnemy && tp.army <= 3);
                    if (!canUse || (minMoves < moves)) {
                        stop();
                        return;
                    }
                }

                if (path.length >= 2) {
                    const weCanKillIt = bestArmyLeft < 0;
                    const itCanKillIt = armyLeft < 0;
                    const shorterPath = weCanKillIt && itCanKillIt && moves < minMoves;
                    const betterPath = !weCanKillIt && armyLeft < bestArmyLeft;

                    if(shorterPath || betterPath) {
                        bestPath = path;
                        minMoves = moves;
                        bestArmyLeft = armyLeft;
                    }
                }

                return {armyLeft, path, moves};
            }, {armyLeft: null, path: [], moves: 0});


        if (bestPath) {
            if (bestPath.length < 2) {
                return false;
            }

            let l = bestPath.length;

            console.log('Protect General!');
            this.board.debug.showPath(bestPath);
            return this.board.attack(bestPath[l - 1], bestPath[l - 2], false);

        }
        return false;
    }

}
