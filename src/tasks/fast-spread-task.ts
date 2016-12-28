import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {PriorityMap} from "../priority-map";
import {EmptyTileTargetGenerator} from "../targets-generators/empty-tile-target-generator";
import {IncreaseArmyScoreMoveChoicer} from "../move-choicer/increase-army-score";
import {Tile} from "../game-interfaces";
import {shuffle} from "../utils/arrayUtils";
import {AnaliseTarget} from "../analize-target";
import {Point} from "../tile";
import {getBestPoint} from "../decision-makers";

export class FastSpreadTask extends AbstractTask {
    name = 'Fast Spread';
    moveChoicer: IncreaseArmyScoreMoveChoicer;
    priority = 0;
    analise: AnaliseTarget;

    constructor(board: Board) {
        super(board);
        this.analise = new AnaliseTarget(this.board);
        this.moveChoicer = new IncreaseArmyScoreMoveChoicer(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.priority += 0.5;
    }

    getTaskPriority(): number {
        return this.priority;
    }

    doMove(): boolean {
        let army = this.board.playersArmy.myArmyList.slice();
        shuffle(army);
        let move;

        for(let pNum of army) {
            let p = this.board.toPoint(pNum);
            const sTp = this.board.getTileProperties(p);

            if(sTp.army <= 1) {
                continue;
            }

            const hasEmptyNeighbor = this.analise.analise(p, (n:Point) => {
                    const tp = this.board.getTileProperties(n);
                    return tp.isEmpty ? 1 : 0;
                }) > 0;

            if(hasEmptyNeighbor) {

                let best = getBestPoint(p, (n: Point) => {
                    const ttp = this.board.getTileProperties(n);

                    if(!this.board.validatePoint(n)) {
                        return -Infinity;
                    }

                    return ttp.isEmpty ? 1 : 0;
                });

                if(best.score > 0) {
                    move = {start: p, end: best.p};
                    break;
                }

            }
        }


        if(move) {
            console.log('Fast Spread');
            this.board.debug.showPath([move.end, move.start]);
            return this.board.attack(move.start, move.end, false);
        }
        this.priority = 0;
        return false;
    }
}
