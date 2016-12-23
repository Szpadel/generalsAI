import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target} from "../priority-map";

export class CitiesTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();

    onNextTurn(boardChanges: BoardChanges) {
        const score = this.board.getMyScore();
        const freeArmy = (score.total - score.tiles)/2;

        this.board.cityLocations.forEach((cityNum) => {
            const tp = this.board.getTileProperties(this.board.toPoint(cityNum));
            if(tp.isCity && !tp.isMine && freeArmy > 70) {
                this.addTarget(cityNum);
            }else {
                this.removeTarget(cityNum);
            }
        });
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number) {

        if(!this.targets.has(pNum)) {
            let target = new Target(this.board.toPoint(pNum), 10, 0.7);
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}
