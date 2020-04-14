/**
 * @file Native JS function sorter class.
 */

import Sorter from './Sorter';

export default class JSNativeSorter extends Sorter {
  public static sort(arr: number[]): void {
    arr.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
}
