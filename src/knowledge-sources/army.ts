import {AbstractKnowledgeSource} from "./abstract-knowledge-source";
import {BoardChanges} from "../board";
import {Tile} from "../game-interfaces";

const playersCount = 8;

export class ArmyKnowledgeSource extends AbstractKnowledgeSource {
    public armyList: number[][];
    public empty: number[];

    get myArmyList() {
        return this.armyList[this.board.data.playerIndex];
    }

    get enemyPlayers() {
        return this.armyList.filter((val, index) => index !== this.board.data.playerIndex);
    }

    onNextTurn(boardChanges: BoardChanges) {
        if(boardChanges.mapChanges.size == 0) {
            return;
        }

        this.resetArmyList();

        this.board.data.map._map
            .forEach((team: number, point: number) => {
                if (team >= 0) {
                    this.armyList[team].push(point);
                }
                if(team === Tile.TILE_EMPTY) {
                    this.empty.push(point);
                }
            });
    }

    private resetArmyList() {
        this.empty = [];
        this.armyList = [];
        for(let a = 0; a < playersCount; a++) {
            this.armyList.push([]);
        }
    }
}
