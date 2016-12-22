import {Board} from "./board";
import {Point, PointHelpers} from "./tile";

export class AnaliseTarget {
    constructor(private board: Board) {

    }

    analise(p: Point, c: (p: Point) => number): number {
        return this.analisePoint(PointHelpers.up(p), c)
            + this.analisePoint(PointHelpers.right(p), c)
            + this.analisePoint(PointHelpers.down(p), c)
            + this.analisePoint(PointHelpers.left(p), c)
            ;
    }

    analisePoint(p: Point, condition: (p: Point) => number): number {
        if (!this.board.validatePoint(p)) {
            return 0;
        }
        if (this.board.getTile(p) < 0) {
            return 0;
        }

        return condition(p);
    }
}
