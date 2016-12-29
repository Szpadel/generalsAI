export interface StateObject {
    attackIndex: number;
    playerIndex: number;
    cities: number[];
    generals: number[];
    map: MapObject;
    scores: ScoreObject[];
    turn: number;
}

export interface MapObject {
    _armies: number[];
    _map: number[];
    height: number;
    width: number;
}

export interface ScoreObject {
    dead: boolean;
    i: number;
    tiles: number;
    total: number;
}

export namespace Tile {
    export const TILE_EMPTY = -1;
    export const TILE_MOUNTAIN = -2;
    export const TILE_FOG = -3;
    export const TILE_FOG_OBSTACLE = -4;
}

export const PlayerColors = ["red", "blue", "green", "purple", "teal", "darkgreen", "orange", "maroon"];
