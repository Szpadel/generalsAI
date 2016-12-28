import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {DeepTreeSearch} from "../deep-tree-search";

export class CityCaptureTask extends AbstractTask {
    name = 'City Capture';
    private deepTreeSearch: DeepTreeSearch;

    constructor(board: Board) {
        super(board);
        this.deepTreeSearch = new DeepTreeSearch(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
    }

    getTaskPriority(): number {
        const score = this.board.getMyScore();
        const freeArmy = (score.total - score.tiles*2);
        return freeArmy > 50 ? 20 : 0;
    }


    doMove(): boolean {
        const maxDepth = 10;

        let bestPath;
        let bestArmyLeft = Infinity;

        let list = [];
        this.board.cityLocations.forEach((x) => {
            list.push(x);
        });

        this.board.generalLocations.forEach((x) => {
            list.push(x);
        });

        for (let cityLoc of list) {
            const cityTp = this.board.getTileProperties(this.board.toPoint(cityLoc));
            if(cityTp.isMine) {
                continue;
            }
            this.deepTreeSearch.process(this.board.toPoint(cityLoc), maxDepth,
                (p, depthLeft, acc, stop) => {
                    const tp = this.board.getTileProperties(p);
                    let armyLeft = acc.armyLeft;
                    let path = acc.path.slice();
                    path.push(p);

                    if (armyLeft === null) {
                        armyLeft = tp.army;
                    } else {
                        if (!tp.isMine || (bestPath && path.length > bestPath.length)) {
                            stop();
                            return;
                        }
                        armyLeft -= tp.army - 1;
                    }

                    if (armyLeft < 0 && path.length >= 2) {
                        const isShorter = !bestPath || path.length < bestPath.length;

                        if (isShorter || bestArmyLeft > armyLeft) {
                            bestArmyLeft = armyLeft;
                            bestPath = path;
                        }
                    }

                    return {armyLeft, path};
                }, {armyLeft: null, path: []})
        }


        if (bestPath) {
            let l = bestPath.length;
            this.board.debug.showPath(bestPath);
            console.log('City Capture');
            return this.board.attack(bestPath[l - 1], bestPath[l - 2], false);

        }
        return false;
    }

}
