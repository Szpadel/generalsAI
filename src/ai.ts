interface StateObject {
    attackIndex: number;
    playerIndex: number;
    cities: number[];
    generals: number[];
    map: MapObject;
    scores: ScoreObject[];
    turn: number;
}

interface MapObject {
    _armies: number[];
    _map: number[];
    height: number;
    width: number;
}

interface ScoreObject {
    dead: boolean;
    i: number;
    tiles: number;
    total: number;
}

const TILE_EMPTY = -1;
const TILE_MOUNTAIN = -2;
const TILE_FOG = -3;
const TILE_FOG_OBSTACLE = -4;

type Point = number[];

class Board {
    public data: StateObject;
    private bot: SpreadStrategy;
    public myArmy: MyArmyData;
    private lastAttack: number = 0;

    constructor() {
        this.bot = new SpreadStrategy(this);
        this.myArmy = new MyArmyData(this);
        console.log('Board init');
    }

    applyUpdate(updateEvent: StateObject) {
        let newData = JSON.parse(JSON.stringify(updateEvent));
        let nextTurn = false;
        //if(update.cities) {
        //    newData.cities = this.mergeCities(this.data.cities, update.cities);
        //}

        if (this.data) {
            if (newData.attackIndex >= this.lastAttack) {
                nextTurn = true;
            }
        }

        this.data = newData;
        if (nextTurn) {
            this.myArmy.onNextTurn();

            this.bot.doMove();
        }
    }

    getEnemyTotalArmy(enemy: number) {
        return this.data.scores[enemy].total;
    }

    getMyGeneralLocation(): Point {
        return this.toPoint(this.data.generals[this.data.playerIndex]);
    }

    toNum(p: Point): number {
        return this.data.map.width * p[0] + p[1];
    }


    toPoint(num: number): Point {
        let x = Math.floor(num / this.data.map.width);
        let y = num % this.data.map.width;
        return [x, y];
    }

    getTile(p: Point): number {
        if (!this.validatePoint(p)) {
            return -2;
        }
        return this.data.map._map[this.toNum(p)];
    }

    getArmy(p: Point): number {
        if (!this.validatePoint(p)) {
            return 0;
        }
        return this.data.map._armies[this.toNum(p)];
    }

    isCity(p: Point): boolean {
        let pNum = this.toNum(p);
        for (let c of this.data.cities) {
            if (c === pNum) {
                return true;
            }
        }
        return false;
    }

    isGeneral(p: Point): boolean {
        let pNum = this.toNum(p);
        for (let c of this.data.generals) {
            if (c === pNum) {
                return true;
            }
        }
        return false;
    }

    validatePoint(p: Point): boolean {
        return p[0] >= 0 && p[0] < this.data.map.height
            && p[1] >= 0 && p[1] < this.data.map.width;
    }

    attack(start: Point, end: Point, half: boolean) {
        console.log('attack', start, end);
        this.lastAttack = this.data.attackIndex + 1;
        window.gameCtrl.attack(this.toNum(start), this.toNum(end), half, this.lastAttack);
    }

    private mergeCities(oldCities: number[], newCities: number[]): number[] {
        return newCities;
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

abstract class ExtraData {
    constructor(protected board: Board) {

    }

    onNextTurn() {

    }
}

class MyArmyData extends ExtraData {
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

class PointHelpers {
    static up(p: Point) {
        let u = p.slice();
        u[0] -= 1;
        return u;
    }

    static down(p: Point) {
        let d = p.slice();
        d[0] += 1;
        return d;
    }

    static left(p: Point) {
        let l = p.slice();
        l[1] -= 1;
        return l;
    }

    static right(p: Point) {
        let r = p.slice();
        r[1] += 1;
        return r;
    }

    static equals(p1: Point, p2: Point) {
        return p1[0] === p2[0] && p1[1] === p2[1];
    }
}

function randomOrder(...fns) {
    shuffle(fns);
    for (let fn of fns) {
        let res;
        if (res = fn()) {
            return res;
        }
    }
}

class CalculateFlood {

    private list: Point[] = [];

    constructor(private board: Board,
                private targetPoint: Point) {


    }

    addPoint(p: Point) {

    }

    isFree(p: Point) {

    }
}

class TileProperties {
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
            this._isEnemy = this.tileType > 0 && this.tileType !== this.board.data.playerIndex;
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
}

class Gather {

    point: Point;
    targetPoints: number;
    queue: Point[];

    constructor(private board: Board) {

    }


    doMove() {

    }
}

class ProtectKing {
    constructor(private board: Board) {

    }

    doMove() {

    }
}

class AnaliseTarget {
    constructor(private board: Board) {

    }

    analise(p: Point, c: (p: Point) => number): number {
        return this.analisePoint(PointHelpers.up(p), c)
            + this.analisePoint(PointHelpers.right(p), c)
            + this.analisePoint(PointHelpers.down(p), c)
            + this.analisePoint(PointHelpers.left(p), c)
            ;
    }

    analisePoint(p: Point, condition: (p: Point) => number): number {
        if (!this.board.validatePoint(p)) {
            return 0;
        }
        if (this.board.getTile(p) < 0) {
            return 0;
        }

        return condition(p);
    }
}

function getBestNextPoint(a: AnaliseTarget, p: Point, cond: (p: Point) => number): {p: Point, score: number} {
    let up = a.analise(PointHelpers.up(p), cond);
    let down = a.analise(PointHelpers.down(p), cond);
    let left = a.analise(PointHelpers.left(p), cond);
    let right = a.analise(PointHelpers.right(p), cond);

    let max = Math.max(up, down, left, right);
    if (up === max) {
        return {p: PointHelpers.up(p), score: max};
    }
    if (down === max) {
        return {p: PointHelpers.down(p), score: max};
    }
    if (left === max) {
        return {p: PointHelpers.left(p), score: max};
    }
    if (right === max) {
        return {p: PointHelpers.right(p), score: max};
    }
}

function getBestPoint(p: Point, cond: (p: Point) => number): {p: Point, score: number} {
    let up = cond(PointHelpers.up(p));
    let down = cond(PointHelpers.down(p));
    let left = cond(PointHelpers.left(p));
    let right = cond(PointHelpers.right(p));

    let max = Math.max(up, down, left, right);

    let res = randomOrder(
        () => {
            if (up === max) {
                return {p: PointHelpers.up(p), score: max};
            }
        },
        () => {
            if (down === max) {
                return {p: PointHelpers.down(p), score: max};
            }
        },
        () => {
            if (left === max) {
                return {p: PointHelpers.left(p), score: max};
            }
        },
        () => {
            if (right === max) {
                return {p: PointHelpers.right(p), score: max};
            }
        }
    );

    if(!res) {
        console.error(max, up, down, left, right)
    }

    return res;
}

class SpreadStrategy {

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

                    const isEmpty = tile.tileType === TILE_EMPTY
                        || tile.tileType === TILE_FOG;


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
        return t === TILE_EMPTY;
    }
}

interface Window {
    ai: Board;
    gameCtrl: any;
}

window.ai = new Board();