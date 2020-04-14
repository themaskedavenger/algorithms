/**
 * @file Utility data.
 */

import InsertionSorter from '../algorithms/sort/InsertionSorter';
import JSNativeSorter from '../algorithms/sort/JSNativeSorter';
import SelectionSorter from '../algorithms/sort/SelectionSorter';
import ShellSorter from '../algorithms/sort/ShellSorter';

export const sorters = [JSNativeSorter, SelectionSorter, InsertionSorter, ShellSorter];
