import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DebugParameters} from "../debug-layout";
import {MapProcessor, Result} from "../map-processor";

export class AttackTask extends AbstractTask implements DebugParameters{
    debugSectionName: string = 'Attack Task';
    name = 'Attack';
    private mapProcessor: MapProcessor;
    private movesLimit = 20;
    private toursGap = 0;
    private priority = 18;
    private bigAttackTime = 25;

    constructor(board: Board) {
        super(board);
        this.mapProcessor = new MapProcessor(this.board, null, AttackTask.compareResults);

    }

    onNextTurn(boardChanges: BoardChanges) {
        this.toursGap++;
    }

    getDebugParameters(): Map<string, string> {
        const map = new Map();

        map.set('Moves limit', this.movesLimit);
        map.set('Tours gap', this.toursGap);
        map.set('Big attack countdown', this.bigAttackTime);

        return map;
    }

    static compareResults(a: Result, b: Result) {
        const general = a.customData.isGeneral - b.customData.isGeneral;
        if(general !== 0) {
            return general;
        }

        const enemy = a.customData.enemyScore - b.customData.enemyScore;
        if (enemy !== 0) {
            return enemy;
        }

        const gain = a.customData.gained - b.customData.gained;

        if(gain !== 0) {
            return gain;
        }

        const score = a.score - b.score;
        if(score !== 0) {
            return score;
        }

        return a.customData.scorePerMove - b.customData.scorePerMove;
    }

    getTaskPriority(): number {
        if(this.board.data.turn < 100) {
            return 5;
        }
        return this.priority;
    }

    doMove(): boolean {
        if(this.priority > 20) {
            this.bigAttackTime--;
        }
        if((this.toursGap > 20 || this.bigAttackTime <= 0) && this.priority < 20) {
            this.movesLimit += 15;
            if(Math.random() < 0.1) {
                this.movesLimit += 30;
            }
            if(Math.random() < 0.01) {
                this.movesLimit += 30;
            }
        }

        if(this.bigAttackTime < 0 && this.priority < 20) {
            this.bigAttackTime = 50;
        }

        this.priority = 25;
        this.toursGap = 0;

        let bestResult: Result;

        let list = this.board.playersArmy.enemyPlayers.slice();
        let enemyList = [];

        for (let playerArmy of list) {
            for (let pNum of playerArmy) {
                const p = this.board.toPoint(pNum);

                enemyList.push(p);
            }
        }

        this.mapProcessor.process(enemyList, (p, r) => {
            const tp = this.board.getTileProperties(p);


            if (r.customData.lastGap < 1) {
                r.customData.lastGap = 1;
                r.customData.gapLength = 0;
            }

            if(tp.isFog || (tp.isMine && tp.isGeneral)) {
                r.terminate();
            }

            const availableArmy = tp.isMine ? tp.army - 1 : -(tp.army + 1);
            r.customData.moves += tp.isEnemy ? 0 : 1;
            if(tp.isEnemy) {
                r.customData.gained++;
            }
            r.customData.lastGap -= availableArmy;
            r.customData.army += availableArmy;

            if (r.path.length === 1) {
                const enemyScore = this.board.getPlayerScore(tp.tileType);
                const enemyArmy = enemyScore.total;

                r.customData.isGeneral = tp.isGeneral ? 1 : 0;
                r.customData.lastGap = 1;
                r.customData.gapLength = 0;
                r.customData.enemyScore = -enemyArmy;
            }

            if (r.customData.lastGap > 0) {
                r.customData.gapLength++;
            }


            const movesAllowed = r.customData.isGeneral ? this.movesLimit*2 : this.movesLimit;

            if (r.customData.gapLength > 5 || r.customData.moves > movesAllowed) {
                r.terminate();
            }

            r.score = r.customData.army;
            r.customData.scorePerMove = r.score / r.customData.army;
            r.isValid = r.customData.lastGap <= 0 && r.customData.army > 0;

        }, {army: 0, lastGap: 1, gapLength: 0, enemyScore: 0, gained: 0, isGeneral: 0, moves: 0, scorePerMove: 0});

        this.mapProcessor.forEach((r) => {
            if (r.path.length >= 2 && r.isValid) {
                const betterPath = bestResult && AttackTask.compareResults(bestResult, r) < 0;

                if (!bestResult || betterPath) {
                    bestResult = r;
                }
            }
        });

        if (bestResult) {
            if(this.movesLimit > 1) {
                this.movesLimit -= 1;
            }

            if(bestResult.customData.moves > 1 && bestResult.customData.moves < this.movesLimit - 15) {
                //this.movesLimit = bestResult.customData.moves;
            }

            if (bestResult.path.length < 2) {
                return false;
            }

            let l = bestResult.path.length;
            this.board.debug.showPath(bestResult.path);

            return this.board.attack(bestResult.path[l - 1], bestResult.path[l - 2], false);

        }else {
            this.movesLimit += 3;
            if(this.movesLimit > 25) {
                this.movesLimit = 25;
            }
            this.priority = 18;
        }
        return false;
    }

}
