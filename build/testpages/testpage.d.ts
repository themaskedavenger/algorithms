/**
 * @file Test page.
 */
import { Component } from 'react';
interface IProps {
    className?: string;
    [key: string]: any;
}
interface IState {
    [key: string]: any;
}
export default class ClassName extends Component<IProps, IState> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
