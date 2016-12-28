import {PointHelpers, Point} from "./tile";
import {Board} from "./board";

export class DeepTreeSearch {
    constructor(private board: Board) {
    }

    process(p: Point, maxDepth: number, processCb: (p: Point, depth: number, acc: any, stop: () => void) => any, initialAcc: any) {
        this.processPoint(p, processCb, [], maxDepth, initialAcc);
    }

    private processPoint(p: Point, processCb: (p: Point, depth: number, acc: any, stop: () => void) => any, ignorePoints: Point[], depth: number, acc: any) {
        ignorePoints = ignorePoints.slice();
        ignorePoints.push(p);
        let stop = false;
        acc = processCb(p, depth, acc, () => {
            stop = true;
        });
        depth--;
        if( depth <= 0 || stop) {
            return;
        }
        for(let n of this.getTileNeighbors(p)) {
            let ignore = false;
            for(let i of ignorePoints) {
                if(PointHelpers.equals(i, n)) {
                    ignore = true;
                }
            }
            if(!ignore) {
                this.processPoint(n, processCb, ignorePoints, depth, acc);
            }
        }
    }

    private getTileNeighbors(point: Point) {
        let n = [];
        n.push(PointHelpers.up(point));
        n.push(PointHelpers.down(point));
        n.push(PointHelpers.left(point));
        n.push(PointHelpers.right(point));

        n = n.filter((p) => {
            return this.board.validatePoint(p)
                && this.board.getTileProperties(p).isWalkable;
        });

        return n;
    }
}
