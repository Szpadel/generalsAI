import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target} from "../priority-map";
import {Tile} from "../game-interfaces";

export class EnemyTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();

    onNextTurn(boardChanges: BoardChanges) {
        boardChanges.mapChanges.forEach((change: number[], pNum: number) => {
            const tp = this.board.getTileProperties(this.board.toPoint(pNum));
            if(!tp.isEnemy && tp.tileType !== Tile.TILE_FOG) {
                this.removeTarget(pNum);
            }
        });

        boardChanges.armyChanges.forEach((army: number[], pNum) => {
            const tp = this.board.getTileProperties(this.board.toPoint(pNum));
            if(tp.isEnemy) {
                this.removeTarget(pNum);
                this.addTarget(pNum, army[1]);
            }
        });
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number, army:number) {

        if(!this.targets.has(pNum)) {
            let prio = army === 0 ? 20 : 20/army;
            if(prio < 10) {
                prio = 10;
            }
            let target = new Target(this.board.toPoint(pNum), prio, 0.7);
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}
