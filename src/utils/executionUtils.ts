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

export function generateCopyFn (obj: any): Function {
    let f = 'var cpy = {};';
    for(let a in obj) {
        if(obj.hasOwnProperty(a)) {
            f += `cpy.${a} = obj.${a};`;
        }
    }
    f += 'return cpy;';

    return new Function('obj', f);
}
