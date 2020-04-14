/**
 * @file Main sorter class.
 */

export default class Sorter {
  public static sort(a: number[]): void {}

  protected static less(v: number, w: number): boolean {
    return v < w;
  }

  protected static exch(a: number[], i: number, j: number): void {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  }

  protected static show(a: number[]): void {
    // eslint-disable-next-line no-console
    console.log('Array:', a);
  }

  public static isSorted(a: number[]): boolean {
    for (let i = 1; i < a.length; i += 1) {
      if (Sorter.less(a[i], a[i - 1])) return false;
    }
    return true;
  }
}
