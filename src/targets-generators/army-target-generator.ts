import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target} from "../priority-map";

export class ArmyTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();

    onNextTurn(boardChanges: BoardChanges) {
        const score = this.board.getMyScore();
        const targetArmy = (score.total - score.tiles)/10;
        console.log(targetArmy);

        boardChanges.mapChanges.forEach((change: number[], pNum: number) => {
            if(!this.isMine(change[1])) {
                this.removeTarget(pNum);
            }
        });

        boardChanges.armyChanges.forEach((army: number[], pNum) => {
            const tp = this.board.getTileProperties(this.board.toPoint(pNum));
            if(tp.isMine) {
                this.removeTarget(pNum);
                if(army[1] > 1 && army[1] < targetArmy) {
                    console.log('new target!', army[1], targetArmy);
                    this.addTarget(pNum, army[1], targetArmy);
                }
            }
        });
    }

    private isMine(t: number): boolean {
        return t === this.board.data.playerIndex;
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            console.log('remove', pNum);
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number, army:number, targetArmy:number) {

        if(!this.targets.has(pNum)) {
            let prio = army/targetArmy*0.1;
            let target = new Target(this.board.toPoint(pNum), prio, 0.5, 0.99);
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}
