import {AbstractKnowledgeSource} from "./abstract-knowledge-source";
import {shuffle} from "../utils/arrayUtils";

export class MyArmyKnowledgeSource extends AbstractKnowledgeSource {
    public armyList: number[];

    onNextTurn() {
        this.armyList = this.board.data.map._map
            .reduce<number[]>((army: number[], team: number, point: number) => {
                if (team === this.board.data.playerIndex) {
                    army.push(point);
                }
                return army;
            }, []);

        shuffle(this.armyList);
    }
}
