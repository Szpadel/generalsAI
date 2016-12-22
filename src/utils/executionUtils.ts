import {shuffle} from "./arrayUtils";

export function randomOrder(...fns) {
    shuffle(fns);
    for (let fn of fns) {
        let res;
        if (res = fn()) {
            return res;
        }
    }
}
