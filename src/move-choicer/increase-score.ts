import {Point} from "../tile";
import {Board} from "../board";
import {getBestPoint} from "../decision-makers";

export class IncreaseScoreMoveChoicer {
    constructor(private board: Board) {

    }

    findMove(calculateMoveScore: (p: Point, t: Point) => number,
             isValidMove: (start: Point, end: Point) => boolean): Move {

        let bestMove: Move = null;
        let bestScore = -Infinity;

        for (let pNum of this.board.playersArmy.myArmyList) {
            let p = this.board.toPoint(pNum);
            let tp = this.board.getTileProperties(p);
            const tileArmy = tp.army;

            if (tileArmy <= 1) {
                continue;
            }

            let localBestPoint = getBestPoint(p, (tPoint: Point) => {
                if (!this.board.validatePoint(tPoint)) {
                    return -Infinity;
                }

                let prioDiff = calculateMoveScore(p, tPoint);

                if (!isFinite(prioDiff)) {
                    console.warn(prioDiff);
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
