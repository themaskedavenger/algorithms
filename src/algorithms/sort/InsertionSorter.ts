/**
 * @file Selection sorter class.
 */

import Sorter from './Sorter';

export default class InsertionSorter extends Sorter {
  public static sort(a: number[]): void {
    for (let i = 1; i < a.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
        if (InsertionSorter.less(a[i], a[j])) {
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
}
