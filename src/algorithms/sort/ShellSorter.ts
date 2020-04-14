/**
 * @file Selection sorter class.
 */

import Sorter from './Sorter';

export default class ShellSorter extends Sorter {

  public static hSort(a: number[], h: number): void {
    for (let i = h; i < a.length; i += h) {
      for (let j = 0; j < i; j += h) {
        if (ShellSorter.less(a[i], a[j])) {
          const t = a[i];

          for (let k = i; k > j; k -= 1) {
            a[k] = a[k - 1];
          }

          a[j] = t;
          break;
        }
      }
    }
  }

  public static sort(a: number[]): void {
    ShellSorter.hSort(a, 1);
  }

  // public static sort(a: number[]): void {
  //   let h = 1;
  //   while (h < a.length / 3) {
  //     h = (3 * h) + 1;
  //   }
  //
  //   while (h >= 1) {
  //     ShellSorter.hSort(a, h);
  //     h /= 3;
  //   }
  // }
}
