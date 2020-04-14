/**
 * @file Main sorter class.
 */
export default class Sorter {
    static sort(a: number[]): void;
    protected static less(v: number, w: number): boolean;
    protected static exch(a: number[], i: number, j: number): void;
    protected static show(a: number[]): void;
    static isSorted(a: number[]): boolean;
}
