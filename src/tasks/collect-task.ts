import {AbstractTask} from "./abstract-task";
import {BoardChanges} from "../board";

export class CollectTask extends AbstractTask {
    name = 'Collect';
    onNextTurn(boardChanges: BoardChanges) {
    }

    getTaskPriority(): number {
        return undefined;
    }

    doMove(): boolean {
        return undefined;
    }

}
