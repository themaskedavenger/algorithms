/**
 * @file String-related helper functions for Enmesh.
 */

import { random as randomNum, round } from './math';

export function smallHash(str): number {
  let hash = 0;

  if (str.length === 0) return hash;

  for (let i = 0; i < str.length; i += 1) {
    const chr = str.charCodeAt(i);
    // eslint-disable-next-line no-bitwise
    hash = ((hash << 5) - hash) + chr;
    // eslint-disable-next-line no-bitwise
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Doesn't work in Safari
/*
export function cssSafe(str) {
  return str
    .trim()
    .replace(/^[A-Z]/, s => s.toLowerCase())
    .replace(/[A-Z]/g, s => `-${s.toLowerCase()}`)
    .replace(/(?<!-)\s+(?!-)/g, '-')
    .replace(/\s+/g, '')
    .replace(/(?<!-)[^a-z0-9\-](?!-)/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/(?<![0-9\-])[0-9]/g, s => `-${s}`)
    .replace(/[0-9](?![0-9\-])/g, s => `${s}-`)
    .replace(/-$/, '');
}
*/

export function cssSafe(str): string {
  let lower = str
    .trim()
    .replace(/^[A-Z]/, s => s.toLowerCase())
    .replace(/[A-Z]/g, s => `-${s.toLowerCase()}`)
    .replace(/[^a-z0-9-]/g, '')
    .replace(/([0-9]+)/g, '-$1-')
    .replace(/-+/g, '-');

  if (lower[lower.length - 1] === '-') {
    lower = lower.substr(0, lower.length - 1);
  }

  return lower;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function random(l = 10) {
  let str = '';

  for (let i = 0; i < l; i += 1) {
    str = `${str}${chars.charAt(randomNum(0, chars.length - 1, 0))}`;
  }

  return str;
}

export const firstCharUpper = s => `${s.charAt(0).toUpperCase()}${s.slice(1, s.length)}`;

export const isValidJSON = (s: string) => {
  try {
    JSON.parse(s);
  } catch (e) {
    return false;
  }
  return true;
};

export const commaSeparateNumber = (s: string | number): string => {
  let newStr = s.toString().replace(/[^0-9]/g, '');

  if (newStr.length > 3) {
    let commaStr = '';
    for (let i = newStr.length - 1; i >= 0; i -= 1) {
      const backwardPos = newStr.length - 1 - i;
      if (backwardPos % 3 === 0 && backwardPos !== 0) {
        commaStr = `${commaStr},`;
      }
      commaStr = `${commaStr}${newStr[i]}`;
    }
    newStr = commaStr.split('').reverse().join('');
  }

  return newStr;
};

const addZeroes = (s: string, n: number): string => {
  let string = s;
  for (let i = 0; i < n; i += 1) {
    string = `${string}0`;
  }
  return string;
};

export const roundString = (s: string | number, decimals = 0): string => {
  let roundedString = round(
    typeof s === 'string' ? parseFloat(s) : s,
    decimals,
  ).toString();

  if (roundedString.includes('.')) {
    const afterDecimalLength = roundedString.split('.')[1].length;
    if (afterDecimalLength < decimals) {
      roundedString = addZeroes(roundedString, decimals - afterDecimalLength);
    }
  } else {
    roundedString = addZeroes(`${roundedString}.`, decimals);
  }

  return roundedString;
};

export const padString = (
  string: string | number,
  toLength: number,
  char: string,
  atEnd = true,
  extraLongOk = false,
) => {
  const s = `${string}`;

  if (s.length === toLength) {
    return s;
  }

  if (s.length > toLength) {
    if (!extraLongOk) {
      throw new Error(
        `String '${s}' can't be padded to length ${toLength} because it is already too long`,
      );
    }
  }

  let pad = '';
  const padToLength = toLength - s.length;
  for (let i = s.length; i < toLength; i += char.length) {
    const finalLength = pad.length + char.length;
    const addChar = finalLength > padToLength
      ? char.slice(0, finalLength - padToLength)
      : char;

    pad = `${pad}${addChar}`;
  }

  return atEnd ? `${s}${pad}` : `${pad}${s}`;
};
