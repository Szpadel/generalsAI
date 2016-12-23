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
        if(this.needRefresh || Math.random() < 0.02) {
            this.computeMap();
        }

        return this.priorityMap.get(this.board.toNum(point)) || 0;
    }

    computeTargets() {
        for(let target of this.targets) {
            if(target.priorityMap.size > 0 && Math.random() < 0.99) {
                continue;
            }else {
                target.priorityMap.clear();
            }

            let priorityDecrease = [
                target.priority // in distance 0 it is target priority
            ];

            this.floodMap.process(target.point, (p, tp, depth) => {
                while(priorityDecrease.length -1 < depth) {
                    let l = priorityDecrease.length;
                    priorityDecrease[l] = priorityDecrease[l-1] * target.decrease1 * target.decrease2 * target.decrease2;
                }

                if(priorityDecrease[depth] < MIN_PRIORITY_PROCESS) {
                    // stop processing
                    return false;
                }

                target.priorityMap.set(this.board.toNum(p), priorityDecrease[depth]);
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

    constructor(public readonly point: Point,
                public readonly priority: number,
                public readonly decrease1: number = 0.7,
                public readonly decrease2: number = 1) {

    }
}
