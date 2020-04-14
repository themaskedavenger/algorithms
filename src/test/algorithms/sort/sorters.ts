/**
 * @file Selection sort unit tests.
 */

/* eslint-disable import/no-extraneous-dependencies */

import test from 'ava';

import { assertSorterWorks } from '../../../util/testassertions';

import { sorters } from '../../../data/util';
import InsertionSorter from '../../../algorithms/sort/InsertionSorter';

for (const sorter of sorters) {
  const { name } = sorter.prototype.constructor;

  test(`${name} sorter works`, async t => {
    assertSorterWorks(
      t,
      name,
      sorter,
    );
  });
}

const sorter = InsertionSorter;
test.only('Test sorter works', async t => {
  assertSorterWorks(
    t,
    sorter.prototype.constructor.name,
    sorter,
  );
});
