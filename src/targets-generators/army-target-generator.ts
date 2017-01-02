import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target, DistanceTarget} from "../priority-map";

export class ArmyTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();

    onNextTurn(boardChanges: BoardChanges) {
        const score = this.board.getMyScore();
        const targetArmy = (score.total - score.tiles)/10;

        boardChanges.mapChanges.forEach((change: number[], pNum: number) => {
            if(!this.isMine(change[1])) {
                this.removeTarget(pNum);
            }
        });

        boardChanges.armyChanges.forEach((army: number[], pNum) => {
            const tp = this.board.getTileProperties(this.board.toPoint(pNum));
            if(tp.isMine) {
                this.removeTarget(pNum);
                this.addTarget(pNum, army[1], targetArmy);
            }
        });
    }

    private isMine(t: number): boolean {
        return t === this.board.data.playerIndex;
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number, army:number, targetArmy:number) {

        if(!this.targets.has(pNum)) {
            let prio = targetArmy - army;
            if(prio < 0) {
                prio = 0;
            }
            let target = new DistanceTarget(this.board.toPoint(pNum));
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}

class ArmyTarget extends Target {

    getPriorityForDepth(depth: number): number {
        while(this.priorityDecrease.length -1 < depth) {
            let l = this.priorityDecrease.length;
            if(depth > 10) {
                return 0;
            }
            this.priorityDecrease[l] = Math.log(this.priority * (10 - depth));
        }

        return this.priorityDecrease[depth];
    }
}
