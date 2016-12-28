import {Point, PointHelpers, Direction} from "./tile";
import {AbstractTask} from "./tasks/abstract-task";
export class DebugLayout {
    private debugWindow:HTMLDivElement;
    private css: string = `
    .ai-debug-window {
        width: 300px;
        height: 600px;
        background-color: white;
        position: fixed;
        left: 3px;
        bottom: calc(50% - 300px);
        color: black;
        padding: 5px;
        z-index: 100;
    }
    
    .ai-debug-window h1 {
        color: black;
        font-size: 24px;
    }
    
    .ai-debug-window .ai-center {
        width: 100%;
        text-align: center;
    }
    
`;

    private actionTask: HTMLSpanElement;
    private attackElement: HTMLSpanElement;
    private timeElement: HTMLSpanElement;
    private tasksListElement: HTMLSpanElement;
    private pathStylesElement: HTMLStyleElement;
    private markStylesElement: HTMLStyleElement;
    private parametersElement: HTMLDivElement;

    private smoothTime = 0;

    constructor() {
        this.debugWindow = document.createElement('div');
        this.debugWindow.className = "ai-debug-window";
        this.debugWindow.innerHTML = this.getDebugWindowHtml();
        document.body.appendChild(this.debugWindow);
        this.actionTask = <HTMLSpanElement>this.debugWindow.querySelector('#ai-task');
        this.attackElement = <HTMLSpanElement>this.debugWindow.querySelector('#ai-attack');
        this.timeElement = <HTMLSpanElement>this.debugWindow.querySelector('#ai-time');
        this.tasksListElement = <HTMLDivElement>this.debugWindow.querySelector('#ai-tasks-list');
        this.pathStylesElement = <HTMLStyleElement>this.debugWindow.querySelector('#ai-path-styles');
        this.markStylesElement = <HTMLStyleElement>this.debugWindow.querySelector('#ai-mark-tile');
        this.parametersElement = <HTMLDivElement>this.debugWindow.querySelector('#ai-debug-parameters');
    }

    getDebugWindowHtml() {
        return `
<style>${this.css}</style>
<style id="ai-path-styles"></style>
<style id="ai-mark-tile"></style>
<h1>Ai Debug</h1>
<div><b>Current Task: </b><span id="ai-task"></span></div>
<div><b>Last Attack: </b><span id="ai-attack"></span></div>
<div><b>Thinking time: </b><span id="ai-time"></span></div>

<div class="ai-center"><b>Tasks</b></div>
<div id="ai-tasks-list"></div>
<div id="ai-debug-parameters"></div>
`;
    }

    set currentTask(value) {
        this.actionTask.innerText = value;
    }

    setAttack(start: Point, end: Point) {
        this.attackElement.innerText = `(${start[0]}, ${start[1]}) -> (${end[0]}, ${end[1]})`;
        const arrowCss = this.getArrowCss(start, end);
        let css = `
${arrowCss}

    #map tr:nth-child(${end[0]+1}) td:nth-child(${end[1]+1}) {
        border-color: red;
    }
`;

        this.pathStylesElement.innerHTML = css;
    }

    set time(value) {
        this.smoothTime = (this.smoothTime * 9 + value)/10;
        this.timeElement.innerText = `${Math.round(value)} ms (avg: ${Math.round(this.smoothTime)} ms)`;
    }

    set tasks(tasks: AbstractTask[]) {
        let html = '';
        for(let task of tasks) {
            html += `<li>${task.name}: ${Math.round(task.getTaskPriority())}</li>`;
        }
        this.tasksListElement.innerHTML = `<ul>${html}</ul>`;
    }

    showPath(path: Point[]) {
        let css = '';
        for (let a = path.length - 1; a > 0; a--) {
            css += this.getArrowCss(path[a], path[a-1], 0.3 + (0.3*a/(path.length - 1)) );
        }
        this.pathStylesElement.innerHTML = css;
    }

    markTile(tile: Point, mark: string) {
        this.markStylesElement.innerHTML += `
#map tr:nth-child(${tile[0] + 1}) td:nth-child(${tile[1] + 1}):before {
       content: "${mark}";
       position: absolute;
       text-align: center;
       opacity: 0.5;
       font-size: 35px;
       top: 5px;
       color: black;
}
`;
    }

    clearMarks() {
        this.markStylesElement.innerHTML = '';
    }

    getArrowCss(start: Point, end:Point, opacity: number = 0.5) {
        let arrow;
        let offset = [0,0];
        switch (PointHelpers.getDirection(start, end)) {
            case Direction.UP:
                arrow = '⇧';
                offset = [-18, -17];
                break;
            case Direction.Down:
                arrow = '⇩';
                offset = [-51, -17];
                break;
            case Direction.Left:
                arrow = '⇦';
                offset = [-40, -2];
                break;
            case Direction.Right:
                arrow = '⇨';
                offset = [-40, -30];
                break;
            default:
                return '';
        }

        return `
        #map tr:nth-child(${start[0]+1}) td:nth-child(${start[1]+1}):before {
            content: "${arrow}";
            position: absolute;
            text-align: center;
            top: ${offset[0]}px;
            left: ${offset[1]}px;
            opacity: ${opacity};
            font-size: 100px;
        }
`;
    }

    updateDebugParameters(parameters: DebugParameters[]) {
        let html = '';
        for(let section of parameters) {
            let parametersHtml = '';
            section.getDebugParameters().forEach((value, name) => {
                parametersHtml += `<div><b>${name}: </b>${value}</div>`
            });
            html += `<div><b>${section.debugSectionName}</b><br/>${parametersHtml}</div>`;
        }

        this.parametersElement.innerHTML = html;
    }
}

export interface DebugParameters {
    debugSectionName: string;
    getDebugParameters():Map<string, string>;
}
