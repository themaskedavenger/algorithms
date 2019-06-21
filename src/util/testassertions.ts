/**
 * @file Test assertions helper functions.
 */

export const assertStringContains = (
  t,
  name,
  mainString: string,
  inputStrings: string | string[],
): void => {
  const strings = typeof inputStrings === 'object'
    ? inputStrings
    : [inputStrings];

  let failed = false;
  for (const testString of strings) {
    if (!mainString.includes(testString)) {
      t.fail(
        `Main string '${mainString}' does not include test string '${testString}' (for '${name}').`,
      );
      failed = true;
    }
  }
  if (!failed) {
    t.pass(`Main string included all test strings for '${name}'.`);
  }
};

export const assertStringDoesNotContain = (
  t,
  name,
  mainString: string,
  inputStrings: string | string[],
): void => {
  const strings = typeof inputStrings === 'object'
    ? inputStrings
    : [inputStrings];

  let passed = false;
  for (const testString of strings) {
    if (mainString.includes(testString)) {
      t.fail(
        `Main string '${mainString}' unexpectedly includes test string '${testString}' (for `
        + `'${name}').`,
      );
      passed = true;
    }
  }
  if (!passed) {
    t.pass(`No test strings found in main string for '${name}'.`);
  }
};
