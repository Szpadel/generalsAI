import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {PriorityMap} from "../priority-map";
import {EmptyTileTargetGenerator} from "../targets-generators/empty-tile-target-generator";
import {IncreaseArmyScoreMoveChoicer} from "../move-choicer/increase-army-score";
import {Tile} from "../game-interfaces";

export class SpreadTask extends AbstractTask {
    name = 'Spread';
    priorityMap: PriorityMap;
    emptyTargetGenerator: EmptyTileTargetGenerator;
    moveChoicer: IncreaseArmyScoreMoveChoicer;

    constructor(board: Board) {
        super(board);
        this.priorityMap = new PriorityMap(board);
        this.emptyTargetGenerator = new EmptyTileTargetGenerator(this.board, this.priorityMap);
        this.moveChoicer = new IncreaseArmyScoreMoveChoicer(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.emptyTargetGenerator.onNextTurn(boardChanges);
    }

    getTaskPriority(): number {
        let prio = 2*75 - this.board.data.turn;
        if(prio < 5) {
            prio = 5;
        }
        return prio;
    }

    doMove(): boolean {
        let move = this.moveChoicer.findMove((p)=> this.priorityMap.getPriorityIn(p), (start, end)=> {
            const tp = this.board.getTileProperties(start);
            const endTp = this.board.getTileProperties(end);

            const notGeneral = this.board.data.turn < (75*2) || !tp.isGeneral;
            const toCity = endTp.isCity;
            const isFreeOrMine = endTp.isMine || endTp.isEmpty;

            return notGeneral && !toCity && isFreeOrMine;
        });
        if(move) {
            console.log('Spread');
            this.board.debug.showPath([move.end, move.start]);
            return this.board.attack(move.start, move.end, false);
        }
        console.log('no moves');
        return false;
    }
}
