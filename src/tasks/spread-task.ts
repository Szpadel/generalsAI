import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {PriorityMap} from "../priority-map";
import {EmptyTileTargetGenerator} from "../targets-generators/empty-tile-target-generator";
import {IncreaseArmyScoreMoveChoicer} from "../move-choicer/increase-army-score";

export class SpreadTask extends AbstractTask {
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
        return 5;
    }

    doMove(): boolean {
        let move = this.moveChoicer.findMove((p)=> this.priorityMap.getPriorityIn(p), ()=> true);
        if(move) {
            this.board.attack(move.start, move.end, false);
            console.log('Spread');
            return true;
        }
        console.log('no moves');
        return false;
    }
}
