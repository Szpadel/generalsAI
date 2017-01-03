import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target} from "../priority-map";
import {Tile} from "../game-interfaces";

export class EmptyTileTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();

    onNextTurn(boardChanges: BoardChanges) {
        boardChanges.mapChanges.forEach((change: number[], pNum: number) => {
            if(change[0] !== change[1]) {
                this.removeTarget(pNum);
            }
            const tp = this.board.getTileProperties(this.board.toPoint(pNum));

            if(this.isEmpty(change[1])) {
                const tp = this.board.getTileProperties(this.board.toPoint(pNum));
                if(!tp.isCity) {
                    this.addTarget(pNum, 100);
                }
            }
            if(tp.isEnemy) {
                this.addTarget(pNum, -tp.army*200);
            }
        });
    }

    private isEmpty(t: number): boolean {
        return t === Tile.TILE_FOG;
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number, prio) {
        if(!this.targets.has(pNum)) {
            let target = new FullMapTarget(this.board.toPoint(pNum), prio, 0.5);
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}

class FullMapTarget extends Target {
    isMaximumDepth(depth: number): boolean {
        return false;
    }

}
