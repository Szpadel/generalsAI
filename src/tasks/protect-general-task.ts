import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";
import {Point} from "../tile";
import {DebugParameters} from "../debug-layout";
import {MapProcessor, Result} from "../map-processor";

export class ProtectGeneralTask extends AbstractTask implements DebugParameters{
    debugSectionName: string = 'Protect General Task';
    name = 'Protect General';
    private mapProcessor: MapProcessor;
    private dangerArmy: Point;
    private maxScore = 0;
    private distance = 0;

    constructor(board: Board) {
        super(board);
        this.mapProcessor = new MapProcessor(this.board, null, ProtectGeneralTask.compareResults);
    }

    static compareResults(a: Result, b: Result) {
        const aKillIt = a.customData.army > 0;
        const bKillIt = b.customData.army > 0;

        if(aKillIt && !bKillIt) {
            return 1;
        }else if(!aKillIt && bKillIt) {
            return -1;
        }

        const moves = b.customData.moves - a.customData.moves;

        if(moves !== 0 && aKillIt && bKillIt) {
            return moves;
        }

        const army = a.customData.army - b.customData.army;

        if(army !== 0) {
            return army;
        }

        return b.customData.generalDistance - a.customData.generalDistance;
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.maxScore = 0;
        this.dangerArmy = null;
        this.distance = Infinity;
        for (let playerArmy of this.board.playersArmy.enemyPlayers) {
            for (let pNum of playerArmy) {
                let p = this.board.toPoint(pNum);
                let dist = this.board.generalDistance.getGeneralDistance(p);
                if(dist > 25) {
                    continue;
                }
                const tp = this.board.getTileProperties(p);
                const armyMultiplier = dist > 5 ?  (tp.army -dist) : tp.army*5;
                let score = ((25 - dist)*(25 - dist) * armyMultiplier);

                if(this.maxScore < score) {
                    this.maxScore = score;
                    this.dangerArmy = p;
                    this.distance = dist;
                }
            }
        }

        if(this.dangerArmy && this.maxScore > 0) {
            this.board.debug.markTile(this.dangerArmy, 'X');
        }
    }

    getDebugParameters(): Map<string, string> {
        let map = new Map();
        map.set('enemy distance', this.distance);

        return map;
    }

    getTaskPriority(): number {
        return this.maxScore;
    }

    doMove(): boolean {
        if(!this.dangerArmy) {
            return false;
        }

        let bestResult: Result;

        this.mapProcessor.process([this.dangerArmy], (p, r) => {
            const tp = this.board.getTileProperties(p);
            if(r.customData.lastGap < 1) {
                r.customData.lastGap = 1;
                r.customData.gapLength = 0;
            }

            if(tp.isFog) {
                r.terminate();
            }

            if(r.customData.army > 0) {
                r.terminate();
                //return;
            }

            const availableArmy = tp.isMine ? (tp.army-1) : -(tp.army+1);
            r.customData.moves += tp.isEnemy ? 2 : 1;
            r.customData.lastGap -= availableArmy;
            r.customData.army += availableArmy;

            if(r.path.length === 1) {
                r.customData.lastGap = 1;
                r.customData.gapLength = 0;
            }

            if(r.customData.lastGap > 0 ) {
                r.customData.gapLength++;
            }

            r.customData.generalDistance += this.board.generalDistance.getGeneralDistance(p);

            if(r.customData.moves > 25) {
                r.terminate();
            }

            r.score = r.customData.army / r.customData.moves;
            r.isValid = r.customData.lastGap <= 0;
        }, {army: 0, lastGap: 1, gapLength: 0, moves: 0, generalDistance: 0});


        this.mapProcessor.forEach((r) => {
            if (r.path.length >= 2 && r.isValid) {
                const betterPath = bestResult && ProtectGeneralTask.compareResults(bestResult, r) < 0;

                if (!bestResult || betterPath) {
                    bestResult = r;
                }
            }
        });

        if (bestResult) {
            if (bestResult.path.length < 2) {
                return false;
            }

            // this.board.debug.displayMapOverlay(this.board, (p) =>{
            //     const r = this.mapProcessor.getResult(p);
            //     if(r) {
            //         return `${r.score}-${r.customData.moves}`;
            //     }
            //     return '';
            // });

            let l = bestResult.path.length;

            console.log('Protect General!');
            this.board.debug.showPath(bestResult.path);
            return this.board.attack(bestResult.path[l - 1], bestResult.path[l - 2], false);

        }
        return false;
    }

}
