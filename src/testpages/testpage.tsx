/**
 * @file Test page.
 */

import React, { Component } from 'react';

interface IProps {
  className?: string;
  [key: string]: any;
}

interface IState {
  [key: string]: any;
}

export default class ClassName extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  public render() {

    const {
      className,
    } = this.props;

    const classes: string[] = [''];
    if (className) {
      classes.push(className);
    }

    return (
      <div className={classes.join(' ')}>

      </div>
    );
  }
}
