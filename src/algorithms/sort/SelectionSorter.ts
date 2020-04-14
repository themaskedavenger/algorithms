/**
 * @file Selection sorter class.
 */

import Sorter from './Sorter';

export default class SelectionSorter extends Sorter {
  public static sort(a: number[]): void {
    for (let i = 0; i < a.length; i += 1) {
      let min;
      let minKey = i;
      for (let j = i; j < a.length; j += 1) {
        if (typeof min === 'undefined' || SelectionSorter.less(a[j], min)) {
          min = a[j];
          minKey = j;
        }
      }

      SelectionSorter.exch(a, i, minKey);
    }
  }
}
