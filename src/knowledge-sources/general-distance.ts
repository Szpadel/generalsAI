import {AbstractKnowledgeSource} from "./abstract-knowledge-source";
import {BoardChanges, Board} from "../board";
import {Target, PriorityMap} from "../priority-map";
import {PointHelpers, Point} from "../tile";


export class GeneralDistanceKnowledgeSource extends AbstractKnowledgeSource {

    private generalLocation: Point;
    private priorityMap: PriorityMap;


    constructor(board: Board) {
        super(board);
        this.priorityMap = new PriorityMap(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
        if(!this.generalLocation) {
            this.generalLocation = this.board.getMyGeneralLocation();
            this.priorityMap.addTarget(new DistanceTarget(this.generalLocation));
            console.log('addGeneral', this.generalLocation);
        }
    }

    getGeneralDistance(point: Point): number {

        return this.priorityMap.getPriorityIn(point);
    }
}

class DistanceTarget extends Target {

    constructor(point: Point) {
        super(point, 0,0,0);
    }

    getPriorityForDepth(depth: number): number {
        return depth;
    }


    isMaximumDepth(depth: number): boolean {
        return false;
    }
}
