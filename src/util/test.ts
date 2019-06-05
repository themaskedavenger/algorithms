/**
 * @file Test utilities.
 */

export const notThrowsAsync = async (t, input) => {
  let p = input;
  if (typeof input === 'function') {
    p = input();
    if (typeof p.then !== 'function') {
      t.fail('Function did not return a promise.');
    }
  }

  let res;
  try {
    res = await p;
  } catch (err) {
    t.fail('Promise threw an error');
    return;
  }
  t.pass();
  return res;
};

export const throwsAsync = async (t, input) => {
  let p = input;
  if (typeof input === 'function') {
    p = input();
    if (typeof p.then !== 'function') {
      t.fail('Function did not return a promise.');
    }
  }

  try {
    await p;
  } catch (err) {
    t.pass('Promise threw an error:', err.message);
    return;
  }
  t.fail('Promise did not throw an error');
};

