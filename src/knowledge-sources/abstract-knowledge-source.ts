import {Board, BoardChanges} from "../board";

export abstract class AbstractKnowledgeSource {
    constructor(protected board: Board) {

    }

    abstract onNextTurn(boardChanges: BoardChanges);
}
