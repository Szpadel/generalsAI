import {AbstractTargetGenerator} from "./abstract-target-generator";
import {BoardChanges} from "../board";
import {Target} from "../priority-map";
import {Tile} from "../game-interfaces";

export class EmptyTileTargetGenerator extends AbstractTargetGenerator {
    private targets:Map<number, Target> = new Map<number, Target>();

    onNextTurn(boardChanges: BoardChanges) {
        boardChanges.mapChanges.forEach((change: number[], pNum: number) => {
            if(this.isEmpty(change[0]) && !this.isEmpty(change[1])) {
                this.removeTarget(pNum);
            }else if(!this.isEmpty(change[0]) && this.isEmpty(change[1])) {
                if(!this.board.getTileProperties(this.board.toPoint(pNum)).isCity) {
                    this.addTarget(pNum);
                }
            }
        });
    }

    private isEmpty(t: number): boolean {
        return t === Tile.TILE_EMPTY || t === Tile.TILE_FOG;
    }

    private removeTarget(pNum: number) {
        if(this.targets.has(pNum)) {
            this.priorityMap.removeTarget(this.targets.get(pNum));
            this.targets.delete(pNum);
        }
    }

    private addTarget(pNum: number) {
        if(!this.targets.has(pNum)) {
            let target = new Target(this.board.toPoint(pNum), 8);
            this.targets.set(pNum, target);
            this.priorityMap.addTarget(target);
        }
    }
}
