/* eslint-disable import/no-extraneous-dependencies */
/**
 * @file Test page.
 */

import React, { FC } from 'react';

const TestPage: FC<{
  className?: string;
  [key: string]: any;
}> = ({ className }) => {
  const classes: string[] = [''];
  if (className) {
    classes.push(className);
  }

  return (
    <div className={classes.join(' ')} />
  );
};

export default TestPage;
