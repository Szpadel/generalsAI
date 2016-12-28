import {Board} from "./board";
import {Point, PointHelpers} from "./tile";
import {Tile} from "./game-interfaces";

export class TileProperties {
    constructor(private board: Board, private point: Point) {
    }

    private _army: number = null;
    get army() {
        if (this._army === null) {
            this._army = this.board.getArmy(this.point);
        }
        return this._army;
    }

    private _isCity: boolean = null;
    get isCity() {
        if (this._isCity === null) {
            this._isCity = this.board.isCity(this.point) || PointHelpers.equals(this.point, this.board.getMyGeneralLocation());
        }
        return this._isCity;
    }

    private _tileType: number = null;
    get tileType() {
        if (this._tileType === null) {
            this._tileType = this.board.getTile(this.point);
        }
        return this._tileType;
    }

    private _isEnemy: boolean = null;
    get isEnemy() {
        if (this._isEnemy === null) {
            this._isEnemy = this.tileType >= 0 && this.tileType !== this.board.data.playerIndex;
        }
        return this._isEnemy;
    }

    private _isMine: boolean = null;
    get isMine() {
        if (this._isMine === null) {
            this._isMine = this.tileType === this.board.data.playerIndex;
        }
        return this._isMine;
    }

    private _isGeneral: boolean = null;
    get isGeneral() {
        if(this._isGeneral === null) {
            this._isGeneral = this.board.isGeneral(this.point);
        }
        return this._isGeneral;
    }

    private _isWalkable: boolean = null;
    get isWalkable() {
        if(this._isWalkable === null)  {
            this._isWalkable = this.tileType >= 0 || this.tileType === Tile.TILE_EMPTY || this.tileType === Tile.TILE_FOG || this.isCity || this.isGeneral;
        }
        return this._isWalkable;
    }

    get isEmpty() {
        return this.tileType === Tile.TILE_EMPTY && !this.isCity;
    }

    get isEmptyOrFog() {
        return this.isEmpty || this.tileType === Tile.TILE_FOG;
    }

    get isFog() {
        return this.tileType === Tile.TILE_FOG || this.tileType === Tile.TILE_FOG_OBSTACLE;
    }
}
