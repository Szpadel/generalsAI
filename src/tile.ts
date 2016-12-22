export type Point = number[];


export class PointHelpers {
    static up(p: Point) {
        let u = p.slice();
        u[0] -= 1;
        return u;
    }

    static down(p: Point) {
        let d = p.slice();
        d[0] += 1;
        return d;
    }

    static left(p: Point) {
        let l = p.slice();
        l[1] -= 1;
        return l;
    }

    static right(p: Point) {
        let r = p.slice();
        r[1] += 1;
        return r;
    }

    static equals(p1: Point, p2: Point) {
        return p1[0] === p2[0] && p1[1] === p2[1];
    }
}

