import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target} from "../priority-map";

export class GeneralTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();
    private myGeneral: number;
    private generalPrio = 0;

    onNextTurn(boardChanges: BoardChanges) {
        let score = this.board.getMyScore();
        let targetArmy = (score.total - score.tiles)/10;

        boardChanges.generalChanges.forEach((generalNum) => {
            const tp = this.board.getTileProperties(this.board.toPoint(generalNum));
            if(tp.isGeneral && !tp.isMine) {
                this.addTarget(generalNum, 200);
                console.warn('Found general!!!');
            }else {
                this.removeTarget(generalNum);
                console.warn('Lost general!!!');
            }

            if(tp.isMine && !this.myGeneral) {
                this.myGeneral = generalNum;
            }
        });

        const myGeneralTp = this.board.getTileProperties(this.board.toPoint(this.myGeneral));
        this.removeTarget(this.myGeneral);
        const prio = (targetArmy - myGeneralTp.army);
        this.generalPrio = (prio + this.generalPrio*59)/60;
        if(this.generalPrio > 0) {
            this.addTarget(this.myGeneral, this.generalPrio);
        }
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number, prio: number) {

        if(!this.targets.has(pNum)) {
            let target = new Target(this.board.toPoint(pNum), prio);
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}
