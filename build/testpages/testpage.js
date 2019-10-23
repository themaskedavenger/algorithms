/**
 * @file Test page.
 */
import React, { Component } from 'react';
export default class ClassName extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { className, } = this.props;
        const classes = [''];
        if (className) {
            classes.push(className);
        }
        return (React.createElement("div", { className: classes.join(' ') }));
    }
}
//# sourceMappingURL=testpage.js.map