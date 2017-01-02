import {Point, PointHelpers} from "./tile";
import {Board} from "./board";
import {generateCopyFn} from "./utils/executionUtils";

export class MapProcessor {

    private results: Map<number, Result> = new Map();
    private toProcess: Map<number, Result> = new Map();

    constructor(private board: Board,
                private validatePoint: (p: Point) => void = null,
                private resultComparator:(a: Result, b: Result) => number = null
    ) {
        if (this.validatePoint === null) {
            this.validatePoint = this.defaultPointValidation;
        }

        if(this.resultComparator === null) {
            this.resultComparator = this.defaultResultComparator;
        }
    }

    defaultPointValidation = (p) => {
        const tp = this.board.getTileProperties(p);
        return tp.isWalkable;
    };

    /**
     * -1 => a < b
     * 0 => a == b
     * +1 a > b
     */
    defaultResultComparator = (a: Result, b: Result) => {
        return a.score - b.score;
    };

    process(points: Point[],
            processCb: (p: Point, r: Result) => any,
            initialData: any) {

        this.reset();

        const cpyFn = generateCopyFn(initialData);

        const initialResult = new Result();
        initialResult.customData = initialData;
        for (const p of points) {
            this.processPoint(p, initialResult, cpyFn, processCb);
        }

        while (this.toProcess.size > 0) {
            const pNum = this.toProcess.keys().next().value;
            const p = this.board.toPoint(pNum);
            const r = this.toProcess.get(pNum);
            this.toProcess.delete(pNum);
            this.processPoint(p, r, cpyFn, processCb);
        }
    }

    reset() {
        this.results.clear();
        this.toProcess.clear();
    }

    private processPoint(p: Point, prevResult: Result, cpyFn: Function, processCb: (p: Point, r: Result) => void) {
        const r = prevResult.clone(cpyFn);
        r.path.push(p);

        processCb(p, r);

        if (r.isTerminated) {
            return;
        }

        let oldResult = this.getResult(p);
        if (!oldResult || r.score > oldResult.score) {
            if (r.isValid) {
                this.setResult(p, r);
            }
            this.queuePoints(this.getTileNeighbors(p, r.path), r);
        }
    }

    private queuePoints(points: Point[], r: Result) {
        for (const p of points) {
            const pNum = this.board.toNum(p);
            const oldRes = this.toProcess.get(pNum);
            const sameValidity = oldRes && oldRes.isValid === r.isValid;
            const betterValidity = oldRes && !oldRes.isValid && r.isValid;
            const better = oldRes && this.resultComparator(oldRes, r) < 0;

            if (!oldRes ||
                betterValidity ||
                (sameValidity && better)
            ) {
                this.toProcess.set(pNum, r);
            }
        }
    }

    forEach(cb: (r: Result, p: Point) => void) {
        this.results.forEach((r, pNum) => {
            const p = this.board.toPoint(pNum);
            return cb(r, p);
        });
    }

    getResult(p: Point): Result {
        return this.results.get(this.board.toNum(p));
    }

    private setResult(p: Point, r: Result) {
        this.results.set(this.board.toNum(p), r);
    }

    private getTileNeighbors(point: Point, ignoredPoints: Point[]) {
        let n = [];
        n.push(PointHelpers.up(point));
        n.push(PointHelpers.down(point));
        n.push(PointHelpers.left(point));
        n.push(PointHelpers.right(point));

        n = n.filter((p) => {
            for (const i of ignoredPoints) {
                if (PointHelpers.equals(p, i)) {
                    return false;
                }
            }
            return this.board.validatePoint(p)
                && this.validatePoint(p);
        });

        return n;
    }
}

export class Result {
    path: Point[] = [];
    customData: any;
    isTerminated = false;
    score: number = -Infinity;
    isValid = false;

    terminate() {
        this.isTerminated = true;
    }

    clone(customDataCopyFn: Function) {
        const r = new Result();
        r.path = this.path.slice();
        r.customData = customDataCopyFn(this.customData);
        r.isTerminated = this.isTerminated;

        return r;
    }
}
