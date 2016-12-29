import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {ArmyTargetGenerator} from "../targets-generators/army-target-generator";
import {PriorityMap} from "../priority-map";
import {IncreaseScoreMoveChoicer} from "../move-choicer/increase-score";
import {Point} from "../tile";
import {DeepTreeSearch} from "../deep-tree-search";
import {DebugParameters} from "../debug-layout";

export class CollectTask extends AbstractTask implements DebugParameters{
    debugSectionName: string = 'Collect Task';
    name = 'Collect Army';
    priorityMap: PriorityMap;
    armyTargetGenerator: ArmyTargetGenerator;
    moveChoicer: IncreaseScoreMoveChoicer;
    private deepTreeSearch: DeepTreeSearch;
    priority = 0;
    toursGap = 0;
    debugMap = new Map();

    constructor(board: Board) {
        super(board);
        this.priorityMap = new PriorityMap(this.board);
        this.moveChoicer = new IncreaseScoreMoveChoicer(this.board);
        this.deepTreeSearch = new DeepTreeSearch(this.board);
        this.armyTargetGenerator = new ArmyTargetGenerator(this.board, this.priorityMap);
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.armyTargetGenerator.onNextTurn(boardChanges);
        if (this.priority < 19) {
            this.priority += 0.25;
        }
        this.toursGap++;
    }

    getTaskPriority(): number {
        return this.priority;
    }

    getDebugParameters(): Map<string, string> {
        return this.debugMap;
    }

    doMove(): boolean {
        if (this.toursGap > 60) {
            this.priority += 10;
        }
        this.toursGap = 0;
        const maxDepth = 9;
        let maxPoints = 30;

        let bestArmyScore = 2;
        let bestPath;
        let bestArmySize = maxDepth * 2;

        for (let startPoint of this.sortByPrio()) {

            const sTp = this.board.getTileProperties(startPoint.p);
            if (sTp.army <= 1) {
                continue;
            }

            if (maxPoints <= 0) {
                break;
            }
            maxPoints--;

            this.deepTreeSearch.process(startPoint.p, maxDepth,
                (p, depthLeft, acc, stop) => {
                    const tp = this.board.getTileProperties(p);
                    let army = acc.army;
                    let path = acc.path.slice();
                    let armies = acc.armies.slice();
                    path.push(p);

                    if (!tp.isMine || tp.isGeneral) {
                        stop();
                        return;
                    }

                    army += tp.army - 1;
                    armies.push(tp.army - 1);

                    if (tp.army > 1 && path.length >= 2) {
                        const isShorter = !bestPath || path.length < bestPath.length;
                        const score = this.scoreIncrease(armies);
                        const betterScore = score > bestArmyScore;
                        const sameScore = score === bestArmyScore;
                        const sameArmySize = bestArmySize === army;

                        if (betterScore ||
                            sameScore && army > bestArmySize ||
                            sameScore && sameArmySize && isShorter
                        ) {
                            bestArmyScore = score;
                            bestPath = path;
                            bestArmySize = army;
                        }
                    }

                    return {army, path, armies};
                }, {army: 0, path: [], armies: []})

        }

        this.debugMap.set('Best Score', bestArmyScore);


        if (bestPath) {
            console.log(bestPath, bestArmyScore);
            this.priority -= 1;
            let l = bestPath.length;
            this.board.debug.showPath(bestPath);
            console.log('Collect');
            return this.board.attack(bestPath[l - 1], bestPath[l - 2], false);

        }
        this.priority = -10;
        return false;
    }

    protected scoreIncrease(armies: number[]) {
        let score = 0;
        for (let a of armies) {
            score += a * a;
        }
        return score;
    }

    protected sortByPrio(): {p: Point, prio: number}[] {
        let list = [];

        this.board.playersArmy.myArmyList.forEach((pNum) => {
            let p = this.board.toPoint(pNum);
            let prio = this.priorityMap.getPriorityIn(p);
            list.push({p, prio});
        });

        return list.sort((a, b) => b.prio - a.prio);
    }

}
