import {AnaliseTarget} from "./analize-target";
import {Board} from "./board";
import {getBestPoint} from "./decision-makers";
import {Point, PointHelpers} from "./tile";
import {Tile} from "./game-interfaces";
import {TileProperties} from "./tile-properties";

export class SimpleAgent {

    analise: AnaliseTarget;
    bestMoveScore = 50;

    constructor(private board: Board) {
        this.analise = new AnaliseTarget(board);
    }

    doMove() {
        for (let a = 0; a < 5; a++) {

            for (let num of this.board.myArmy.armyList) {
                let p = this.board.toPoint(num);
                if (this.board.getArmy(p) <= 1) {
                    continue;
                }

                let ourTile = new TileProperties(this.board, p);

                let bestPoint = getBestPoint(p, (point: Point) => {

                    if(!this.board.validatePoint(point)) {
                        return -100;
                    }

                    let tile = new TileProperties(this.board, point);

                    let score = 0;

                    if(tile.isMine) {
                        return 0;
                    }

                    const isEmpty = tile.tileType === Tile.TILE_EMPTY
                        || tile.tileType === Tile.TILE_FOG;


                    if (isEmpty && !tile.isCity) {
                        score += 2;
                    }

                    if (tile.isEnemy && !tile.isCity) {
                        score += ourTile.army - tile.army;
                    }

                    if (tile.isGeneral && !tile.isMine) {
                        score += (ourTile.army - tile.army) * 10;
                    }

                    if (tile.isCity && tile.isEnemy) {
                        let c = (ourTile.army - tile.army);
                        score +=  c < 0
                            ? c * 3
                            : c / 3;
                    }else if (tile.isCity) {
                        let c = (ourTile.army - tile.army);
                        score +=  c < 0
                            ? c * 3
                            : c / 3;
                    }

                    // if(!tile.isGeneral && tile.isEnemy) {
                    //     const enemyScore = this.board.getEnemyTotalArmy(tile.tileType);
                    //     if(enemyScore > 0) {
                    //         let m = this.board.getEnemyTotalArmy(this.board.data.playerIndex) / enemyScore;
                    //         m -= 1;
                    //         m /= 4;
                    //         score *= (m+1);
                    //     }
                    // }

                    if(ourTile.isCity) {
                        score /= 4;
                    }

                    if(ourTile.isGeneral) {
                        score /= 8;
                    }


                    return score;
                });

                if(!bestPoint) {
                    console.error('no best point!');
                    continue;
                }

                if (bestPoint.score >= this.bestMoveScore) {
                    console.log(bestPoint);
                    if(!this.board.validatePoint(bestPoint.p)) {
                        console.log('invalid target');
                        continue;
                    }
                    this.board.attack(p, bestPoint.p, ourTile.isCity);
                    this.bestMoveScore++;
                    return;
                }


                // if(randomOrder(
                //     () => this.tryMove(p, PointHelpers.up(p)),
                //     () => this.tryMove(p, PointHelpers.left(p)),
                //     () => this.tryMove(p, PointHelpers.right(p)),
                //     () => this.tryMove(p, PointHelpers.down(p))
                // )) {
                //     return true;
                // }
            }
            if(this.bestMoveScore == 1) {
                return;
            }
            this.bestMoveScore--;
        }
        console.log('minScore: ', this.bestMoveScore);
    }

    tryMove(s: Point, t: Point) {
        const tileArmy = this.board.getArmy(s);
        const targetArmy = this.board.getArmy(t);
        const inCity = this.board.isCity(s) || PointHelpers.equals(s, this.board.getMyGeneralLocation());
        const tileType = this.board.getTile(t);
        const isEnemy = tileType > 0 && tileType !== this.board.data.playerIndex;
        const isMine = tileType == this.board.data.playerIndex;
        const isCity = this.board.isCity(t) && !isMine;
        const isEmpty = !isCity && this.isTileEmpty(t);

        const multipler = inCity ? 2 : 1.2;

        if (isEmpty) {
            this.board.attack(s, t, inCity);
            return true;
        } else if ((isCity || isEnemy) && tileArmy > targetArmy * multipler) {
            this.board.attack(s, t, inCity);
            return true;
        }
        return false;
    }

    isTileEmpty(p: Point) {
        let t = this.board.getTile(p);
        return t === Tile.TILE_EMPTY;
    }
}
