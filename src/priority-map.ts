import {Board} from "./board";
import {FloodMap} from "./flood-map";
import {Point} from "./tile";

const MIN_PRIORITY_PROCESS = 0.0001;

export class PriorityMap {
    private priorityMap: Map<number, number> = new Map<number, number>();
    private targets: Target[] = [];
    private needRefresh = true;
    private floodMap: FloodMap;

    constructor(private board: Board) {
        this.floodMap = new FloodMap(this.board);
    }

    addTarget(target: Target) {
        this.needRefresh = true;
        this.targets.push(target);
    }

    removeTarget(target: Target) {
        this.needRefresh = true;
        this.targets = this.targets.filter((t) => t !== target);
    }

    removeAllTargets() {
        this.targets = [];
        this.needRefresh = true;
    }

    getPriorityIn(point: Point): number {
        if(this.needRefresh) {
            this.computeMap();
        }

        return this.priorityMap.get(this.board.toNum(point)) || 0;
    }

    computeTargets() {
        for(let target of this.targets) {
            if(target.priorityMap.size > 0) {
                continue;
            }else {
                target.priorityMap.clear();
            }

            this.floodMap.process(target.point, (p, tp, depth) => {
                let priority = target.getPriorityForDepth(depth);

                if(target.isMaximumDepth(depth)) {
                    // stop processing
                    return false;
                }

                target.priorityMap.set(this.board.toNum(p), priority);
            });
        }
    }

    computeMap() {
        this.priorityMap.clear();

        this.computeTargets();

        for (let target of this.targets) {
            target.priorityMap.forEach((prio, field) => {
                const newPrio = (this.priorityMap.get(field) || 0) + prio;
                this.priorityMap.set(field, newPrio);
            });
        }

        this.needRefresh = false;
    }


}

export class Target {
    public priorityMap: Map<number, number> = new Map<number, number>();
    protected priorityDecrease: number[];

    constructor(public readonly point: Point,
                public readonly priority: number,
                public readonly decrease1: number = 0.7,
                public readonly decrease2: number = 1) {
        this.priorityDecrease = [priority];
    }

    getPriorityForDepth(depth: number): number {
        while(this.priorityDecrease.length -1 < depth) {
            let l = this.priorityDecrease.length;
            this.priorityDecrease[l] = this.priorityDecrease[l-1] * this.decrease1 * this.decrease2;
        }

        return this.priorityDecrease[depth];
    }

    isMaximumDepth(depth: number): boolean {
        return this.getPriorityForDepth(depth) < MIN_PRIORITY_PROCESS;
    }
}
