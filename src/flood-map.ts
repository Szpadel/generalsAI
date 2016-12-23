import {Board} from "./board";
import {Point, PointHelpers} from "./tile";
import {TileProperties} from "./tile-properties";

export class FloodMap {
    constructor(private board: Board) {

    }

    /**
     *
     * @param point
     * @param cb execute function on every tile, return false to stop processing
     */
    process(point: Point, cb: (p: Point, tp: TileProperties, depth: number) => boolean|void) {
        const visited: Set<number> = new Set<number>();
        let currentLevel: Point[] = [];
        let nextLevel: Point[] = [];
        let depth = 0;

        nextLevel.push(point);
        visited.add(this.board.toNum(point));

        while(nextLevel.length > 0) {
            currentLevel = nextLevel;
            nextLevel = [];

            while(currentLevel.length > 0) {
                let p = currentLevel.shift();

                if(cb(p, this.board.getTileProperties(p), depth) === false) {
                    return;
                }

                this.getTileNeighbors(p).forEach((n) => {
                    let nNum = this.board.toNum(n);
                    if(!visited.has(nNum)) {
                        nextLevel.push(n);
                        visited.add(nNum);
                    }
                });
            }

            depth++;
        }
    }

    getTileNeighbors(point: Point) {
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
