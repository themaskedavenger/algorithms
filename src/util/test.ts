/**
 * @file Test utilities.
 */

import fsExtra from 'fs-extra';
import ini from 'node-ini';
import path from 'path';

export const tryAwaitNotThrows = async (
  t: any,
  name: string,
  promise: Promise<any>,
): Promise<any> => {
  try {
    await promise;
  } catch (err) {
    t.fail(`Promise unexpectedly threw an error (for '${name}'): ${err}`);
    return;
  }
  t.pass(`Promise did not throw an error (for '${name}'), as expected.`);
  return promise;
};

export const notThrows = async (
  t: any,
  name: string,
  // tslint:disable-next-line ban-types
  input: Function | Promise<any>,
  asyncFn: boolean = true,
) => {
  let res;
  if (typeof input === 'function') {
    if (asyncFn) {
      res = input();
      if (typeof res.then !== 'function') {
        t.fail(`Function did not return a promise (for '${name}').`);
      } else {
        return tryAwaitNotThrows(t, name, res);
      }
    } else {
      try {
        input();
      } catch (err) {
        t.fail(`Synchronous function threw an error (for '${name}'), as expected: ${err}`);
        return;
      }
      t.pass(`Synchronous function did not throw an error (for '${name}').`);
    }
  } else if (typeof input.then === 'function') {
    return tryAwaitNotThrows(t, name, input);
  } else {
    throw new Error('Invalid input');
  }
};

export const tryAwaitThrows = async (t: any, name: string, promise: Promise<any>): Promise<any> => {
  try {
    await promise;
  } catch (err) {
    t.pass(`Promise threw an error (for '${name}'):`, err);
    return err;
  }
  t.fail(`Promise did not throw an error (for '${name}')`);
};

export const throws = async (
  t: any,
  name: string,
  // tslint:disable-next-line ban-types
  input: Function | Promise<any>,
  asyncFn: boolean = true,
) => {
  let res;

  if (typeof input === 'function') {
    if (asyncFn) {
      res = input();
      if (typeof res.then !== 'function') {
        t.fail(`Function did not return a promise (for '${name}').`);
      } else {
        return tryAwaitThrows(t, name, res);
      }
    } else {
      try {
        input();
      } catch (err) {
        t.pass(`Synchronous function threw an error (for '${name}'): ${err}`);
        return err;
      }
      t.fail(`Synchronous function did not throw an error (for '${name}')`);
    }
  } else if (typeof input.then === 'function') {
    return tryAwaitThrows(t, name, input);
  } else {
    throw new Error('Invalid input');
  }
};

export const getTestIniFile = async (fileName: string): Promise<any> => {
  const appRoot = path.resolve(__dirname).split(path.sep);
  appRoot.pop();

  const fileFullpath = `${appRoot.join(path.sep)}/test/${fileName}`;
  if (!(await fsExtra.pathExists(fileFullpath))) {
    throw new Error(`INI file '${fileFullpath}' does not exist.`);
  }

  return ini.parseSync(fileFullpath);
};
