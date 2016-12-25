import {Board, BoardChanges} from "./board";
import {Point} from "./tile";
import {AbstractTask} from "./tasks/abstract-task";
import {TileProperties} from "./tile-properties";

const TrackTopUnits = 10;

export class UnitManager {
    bigUnits: Unit[] = [];

    constructor(private board: Board) {}

    onNextTurn(boardChanges: BoardChanges) {
        this.bigUnits.sort((a: Unit, b: Unit) => {
            return a.getTileProperties().army - b.getTileProperties().army;
        });

        boardChanges.armyChanges.forEach((armyChange, pNum) => {

        });
    }
}

abstract class Unit {
    constructor(protected board: Board,
                protected location: Point) {

    }

    getTileProperties(): TileProperties {
        return this.board.getTileProperties(this.location);
    }
}

export class MyUnit extends Unit{
    private task: AbstractTask = null;

    getMissionPriority(): number {
        //Todo: Implement
        return 0;
    }

    makeMove(targetLocation: Point) {
        this.location = targetLocation;
    }
}
