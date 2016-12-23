import {AbstractKnowledgeSource} from "./abstract-knowledge-source";
import {shuffle} from "../utils/arrayUtils";
import {BoardChanges} from "../board";

export class MyArmyKnowledgeSource extends AbstractKnowledgeSource {
    public armyList: number[];

    onNextTurn(boardChanges: BoardChanges) {
        if(boardChanges.mapChanges.size == 0) {
            return;
        }

        this.armyList = this.board.data.map._map
            .reduce<number[]>((army: number[], team: number, point: number) => {
                if (team === this.board.data.playerIndex) {
                    army.push(point);
                }
                return army;
            }, []);
    }
}
