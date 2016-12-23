import {Board} from "./board";
import {Point} from "./tile";
import {getBestPoint} from "./decision-makers";

export class PriorityAgent {
    constructor(private board: Board) {
    }

    doMove() {

        let bestMove: Move = null;
        let bestScore = -Infinity;

        for (let pNum of this.board.myArmy.armyList) {
            let p = this.board.toPoint(pNum);
            let tp = this.board.getTileProperties(p);
            const useHalf = tp.isCity || tp.isGeneral;
            const tileArmy = useHalf ? (tp.army)/2 : tp.army;

            if(tileArmy <= 1) {
                continue;
            }

            let currPrio = this.board.priorityMap.getPriorityIn(p);
            let bonus = 1;

            let armyBonus = ((tileArmy*tileArmy)/50);
            //if(armyBonus > 10) {
            //    armyBonus = 10;
            //}

            if(tp.isGeneral) {
                bonus = 0.2;
            }

            let localBestPoint = getBestPoint(p, (tPoint: Point) => {
                if(!this.board.validatePoint(tPoint)) {
                    return -99999;
                }

                const tTp = this.board.getTileProperties(tPoint);
                const half = tTp.isMine && (tTp.isCity || tTp.isGeneral);
                const tArmy = half ? (tTp.army) / 2 : tTp.army;

                const resultArmy = tTp.isMine ? tileArmy -1 + tArmy : -tTp.army + tileArmy -1;
                let tPrio = this.board.priorityMap.getPriorityIn(tPoint);
                if(resultArmy < 0 && isFinite(resultArmy)) {
                    tPrio += resultArmy * 20 / (tileArmy - 1);
                }
                const prioDiff = (tPrio - currPrio) + resultArmy/10;


                if(!isFinite(prioDiff)) {
                    console.warn(armyBonus, prioDiff, currPrio, tPrio);
                }

                return (prioDiff + armyBonus) * bonus;
            });

            if(!localBestPoint) {
                continue;
            }

            if(bestScore < localBestPoint.score) {
                bestMove = {start: p, end: localBestPoint.p};
                bestScore = localBestPoint.score;
            }
        }

        if(bestMove && bestScore > -1) {
            console.log(bestMove, bestScore);
            let tp = this.board.getTileProperties(bestMove.start);
            this.board.attack(bestMove.start, bestMove.end, tp.isCity || tp.isGeneral);
        }else {
            console.warn('couldn\'t find best move' , bestMove, bestScore)
        }

    }

}

interface Move {
    start: Point;
    end: Point;
}
