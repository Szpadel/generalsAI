import {Target, PriorityMap} from "../priority-map";
import {BoardChanges} from "../board";

export abstract class AbstractTargetGenerator {
    constructor(protected board,
                protected priorityMap: PriorityMap) {

    }

    abstract onNextTurn(boardChanges: BoardChanges);
}
