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
        return this.board.data.turn < 50 ? 0 : 20;
    }


    doMove(): boolean {
        const maxDepth = 10;
        let possibleMoves = [];
        let x = 0;

        let list = [].concat(this.board.cityLocations, this.board.generalLocations);

        for (let cityLoc of list) {
            const cityTp = this.board.getTileProperties(this.board.toPoint(cityLoc));
            if(cityTp.isMine) {
                continue;
            }
            this.deepTreeSearch.process(this.board.toPoint(cityLoc), maxDepth,
                (p, depth, acc, stop) => {
                    const tp = this.board.getTileProperties(p);
                    let armyLeft = acc.armyLeft;
                    let path = acc.path.slice();
                    let enemyArmy = acc.enemyArmy;
                    path.push(p);

                    if (armyLeft === null) {
                        armyLeft = tp.army;
                        enemyArmy = armyLeft;
                    } else {
                        if (!tp.isMine) {
                            stop();
                            return;
                        }
                        armyLeft -= (tp.isCity ? tp.army / 2 : tp.army) - 1;
                    }

                    if (armyLeft < 0 && path.length >= 2) {
                        possibleMoves.push({armyLeft, path, enemyArmy});
                    }
                    x++;

                    return {armyLeft, path, enemyArmy};
                }, {armyLeft: null, path: [], enemyArmy: 0})
        }

        let bestMove;
        let depth = Infinity;
        let enemyArmy = -Infinity;
        possibleMoves.forEach((move) => {
            if (move.path.length < depth
                || move.path.length === depth && move.enemyArmy > enemyArmy) {
                bestMove = move;
                enemyArmy = move.enemyArmy;
                depth = move.path.length;
            }
        });

        if (bestMove) {
            if (bestMove.path.length < 2) {
                return false;
            }

            let moved = false;
            let l = bestMove.path.length;
            do {

                console.log(JSON.stringify(bestMove));

                const tp = this.board.getTileProperties(bestMove.path[l - 1]);
                console.log('City Capture');
                moved = this.board.attack(bestMove.path[l - 1], bestMove.path[l - 2], tp.isCity);
                l--;
            }while(!moved && l >= 2);
            return moved;

        }
        return false;
    }

}
