import {Point} from "../tile";
import {Board} from "../board";
import {getBestPoint} from "../decision-makers";

export class IncreaseArmyScoreMoveChoicer {
    constructor(private board: Board) {

    }

    findMove(calculatePerArmyScore: (p: Point) => number,
             isValidMove: (start: Point, end: Point) => boolean,
             armyMultipler: number = 0.8): Move {

        let bestMove: Move = null;
        let bestScore = -Infinity;

        for (let pNum of this.board.playersArmy.myArmyList) {
            let p = this.board.toPoint(pNum);
            let tp = this.board.getTileProperties(p);
            const tileArmy = tp.army;

            if (tileArmy <= 1) {
                continue;
            }

            let currPrio = calculatePerArmyScore(p) * tileArmy * armyMultipler;


            let localBestPoint = getBestPoint(p, (tPoint: Point) => {
                if (!this.board.validatePoint(tPoint)) {
                    return -Infinity;
                }

                const tTp = this.board.getTileProperties(tPoint);
                const tArmy = tTp.army * armyMultipler;

                const resultArmy = tTp.isMine ? tileArmy - 1 + tArmy : -tTp.army + tileArmy - 1;
                let tPrio = calculatePerArmyScore(tPoint) * resultArmy;
                const prioDiff = (tPrio - currPrio);


                if (!isFinite(prioDiff)) {
                    console.warn(prioDiff, currPrio, tPrio);
                }

                return prioDiff;
            });

            if (!localBestPoint) {
                continue;
            }

            if (bestScore < localBestPoint.score && isValidMove(p, localBestPoint.p)) {
                bestMove = {start: p, end: localBestPoint.p};
                bestScore = localBestPoint.score;
            }
        }

        if (bestScore > 0) {
            return bestMove;
        } else {
            console.log(bestScore);
            return null;
        }

    }
}

interface Move {
    start: Point;
    end: Point;
}
