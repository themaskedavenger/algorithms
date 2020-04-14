/**
 * @file String-related helper functions for Enmesh.
 */
export declare function smallHash(str: any): number;
export declare function cssSafe(str: any): string;
export declare function random(l?: number): string;
export declare const firstCharUpper: (s: any) => string;
export declare const isValidJSON: (s: string) => boolean;
export declare const commaSeparateNumber: (s: string | number) => string;
export declare const roundString: (s: string | number, decimals?: number) => string;
export declare const padString: (string: string | number, toLength: number, char: string, atEnd?: boolean, extraLongOk?: boolean) => string;
