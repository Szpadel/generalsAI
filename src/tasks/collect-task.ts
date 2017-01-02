import {AbstractTask} from "./abstract-task";
import {BoardChanges, Board} from "../board";
import {ArmyTargetGenerator} from "../targets-generators/army-target-generator";
import {PriorityMap} from "../priority-map";
import {IncreaseScoreMoveChoicer} from "../move-choicer/increase-score";
import {Point} from "../tile";
import {DeepTreeSearch} from "../deep-tree-search";
import {DebugParameters} from "../debug-layout";
import {MapProcessor} from "../map-processor";

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
    private mapProcessor: MapProcessor;


    constructor(board: Board) {
        super(board);
        this.priorityMap = new PriorityMap(this.board);
        this.moveChoicer = new IncreaseScoreMoveChoicer(this.board);
        this.deepTreeSearch = new DeepTreeSearch(this.board);
        this.armyTargetGenerator = new ArmyTargetGenerator(this.board, this.priorityMap);
        this.mapProcessor = new MapProcessor(this.board);
    }

    onNextTurn(boardChanges: BoardChanges) {
        this.armyTargetGenerator.onNextTurn(boardChanges);
        if (this.priority < 19) {
            //this.priority += 0.25;
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
        const maxPath = 20;

        const armyPoints = [];
        let bestPath;
        let bestArmy = -Infinity;

        this.board.playersArmy.myArmyList.forEach((pNum) => {
           const p = this.board.toPoint(pNum);
           armyPoints.push(p);
        });

        this.mapProcessor.process(armyPoints, (p, r) => {
            const tp = this.board.getTileProperties(p);

            if(!tp.isMine || r.path.length > maxPath) {
                r.terminate();
                return;
            }

            if(r.customData.lastGap < 1) {
                r.customData.lastGap = 1;
            }

            const availableArmy = tp.army-1;
            r.customData.lastGap -= availableArmy;
            r.customData.army += availableArmy;

            r.score = r.customData.army;
            r.isValid = r.customData.lastGap <= 0;

        }, {army: 0, lastGap: 1});


        this.mapProcessor.forEach((r) => {
            if (r.path.length >= 2 && r.isValid) {
                const betterPath = r.score > bestArmy;

                if(betterPath) {
                    bestPath = r.path;
                    bestArmy = r.score;
                }
            }
        });

        this.debugMap.set('Best Score', bestArmy);


        if (bestPath) {
            this.priority -= 1;
            let l = bestPath.length;
            this.board.debug.showPath(bestPath);
            console.log('Collect');
            return this.board.attack(bestPath[l - 1], bestPath[l - 2], false);

        }
        this.priority = -10;
        return false;
    }

}
