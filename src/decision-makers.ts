import {PointHelpers, Point} from "./tile";
import {randomOrder} from "./utils/executionUtils";
import {AnaliseTarget} from "./analize-target";

export function getBestNextPoint(a: AnaliseTarget, p: Point, cond: (p: Point) => number): {p: Point, score: number} {
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

function validateScore(score) {
    if(!isFinite(score)) {
        return -Infinity;
    }
    return score;
}

export function getBestPoint(p: Point, cond: (p: Point) => number): {p: Point, score: number} {
    let up = validateScore(cond(PointHelpers.up(p)));
    let down = validateScore(cond(PointHelpers.down(p)));
    let left = validateScore(cond(PointHelpers.left(p)));
    let right = validateScore(cond(PointHelpers.right(p)));

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
