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
        const aKillIt = a.score > 0;
        const bKillIt = b.score > 0;

        if(aKillIt && !bKillIt) {
            return 1;
        }else if(bKillIt && !aKillIt) {
            return -1;
        }

        const moves = b.customData.moves - a.customData.moves;

        if(moves !== 0) {
            return moves;
        }

        return a.score - b.score;
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.maxScore = 0;
        this.dangerArmy = null;
        this.distance = Infinity;
        for (let playerArmy of this.board.playersArmy.enemyPlayers) {
            for (let pNum of playerArmy) {
                let p = this.board.toPoint(pNum);
                let dist = this.board.generalDistance.getGeneralDistance(p);
                if(dist > 13) {
                    continue;
                }
                const tp = this.board.getTileProperties(p);
                const armyMultiplier = dist > 3 ?  (tp.army -dist) : tp.army*5;
                let score = ((13 - dist)*(13 - dist) * armyMultiplier);

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

        let bestPath: Point[];
        let minMoves = Infinity;
        let bestArmy = -Infinity;

        this.mapProcessor.process([this.dangerArmy], (p, r) => {
            const tp = this.board.getTileProperties(p);
            if(r.customData.lastGap < 1) {
                r.customData.lastGap = 1;
                r.customData.gapLength = 0;
            }

            if(r.path.length === 1) {
                r.customData.lastGap = 1;
                r.customData.gapLength = 0;
            }

            if(r.customData.army > 0) {
                //r.terminate();
                //return;
            }

            const availableArmy = tp.isMine ? tp.army-1 : -(tp.army+1);
            r.customData.moves += tp.isMine ? 1 : 2;
            r.customData.lastGap -= availableArmy;
            r.customData.army += availableArmy;


            if(r.customData.lastGap > 0 ) {
                r.customData.gapLength++;
            }

            if(r.customData.gapLength > 5) {
                //r.terminate();
            }

            r.score = r.customData.army;
            r.isValid = r.customData.lastGap <= 0;
        }, {army: 0, lastGap: 1, gapLength: 0, moves: 0});

        this.mapProcessor.forEach((r) => {
            if (r.path.length >= 2 && r.isValid) {
                const weCanKillIt = bestArmy > 0;
                const itCanKillIt = r.score > 0;
                const shorterPath = weCanKillIt && itCanKillIt && r.path.length < minMoves;
                const betterPath = !weCanKillIt && r.score > bestArmy;

                if(shorterPath || betterPath) {
                    bestPath = r.path;
                    minMoves = r.path.length;
                    bestArmy = r.score;
                }
            }
        });

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
