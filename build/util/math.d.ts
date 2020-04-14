/**
 * @file Math utility functions.
 */
export declare type RoundFns = 'round' | 'floor' | 'ceil';
export declare const round: (n: number, decimals?: number, roundFn?: RoundFns) => number;
export declare const roundToN: (n: number, roundTo?: number, roundFn?: RoundFns) => number;
export declare const random: (min?: number, max?: number, decimals?: number | undefined) => number;
