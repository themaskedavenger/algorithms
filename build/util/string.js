"use strict";
/**
 * @file String-related helper functions for Enmesh.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math");
function smallHash(str) {
    var hash = 0;
    if (str.length === 0)
        return hash;
    for (var i = 0; i < str.length; i += 1) {
        var chr = str.charCodeAt(i);
        // eslint-disable-next-line no-bitwise
        hash = ((hash << 5) - hash) + chr;
        // eslint-disable-next-line no-bitwise
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
exports.smallHash = smallHash;
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
function cssSafe(str) {
    var lower = str
        .trim()
        .replace(/^[A-Z]/, function (s) { return s.toLowerCase(); })
        .replace(/[A-Z]/g, function (s) { return "-" + s.toLowerCase(); })
        .replace(/[^a-z0-9-]/g, '')
        .replace(/([0-9]+)/g, '-$1-')
        .replace(/-+/g, '-');
    if (lower[lower.length - 1] === '-') {
        lower = lower.substr(0, lower.length - 1);
    }
    return lower;
}
exports.cssSafe = cssSafe;
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function random(l) {
    if (l === void 0) { l = 10; }
    var str = '';
    for (var i = 0; i < l; i += 1) {
        str = "" + str + chars.charAt(math_1.random(0, chars.length - 1, 0));
    }
    return str;
}
exports.random = random;
exports.firstCharUpper = function (s) { return "" + s.charAt(0).toUpperCase() + s.slice(1, s.length); };
exports.isValidJSON = function (s) {
    try {
        JSON.parse(s);
    }
    catch (e) {
        return false;
    }
    return true;
};
exports.commaSeparateNumber = function (s) {
    var newStr = s.toString().replace(/[^0-9]/g, '');
    if (newStr.length > 3) {
        var commaStr = '';
        for (var i = newStr.length - 1; i >= 0; i -= 1) {
            var backwardPos = newStr.length - 1 - i;
            if (backwardPos % 3 === 0 && backwardPos !== 0) {
                commaStr = commaStr + ",";
            }
            commaStr = "" + commaStr + newStr[i];
        }
        newStr = commaStr.split('').reverse().join('');
    }
    return newStr;
};
var addZeroes = function (s, n) {
    var string = s;
    for (var i = 0; i < n; i += 1) {
        string = string + "0";
    }
    return string;
};
exports.roundString = function (s, decimals) {
    if (decimals === void 0) { decimals = 0; }
    var roundedString = math_1.round(typeof s === 'string' ? parseFloat(s) : s, decimals).toString();
    if (roundedString.includes('.')) {
        var afterDecimalLength = roundedString.split('.')[1].length;
        if (afterDecimalLength < decimals) {
            roundedString = addZeroes(roundedString, decimals - afterDecimalLength);
        }
    }
    else {
        roundedString = addZeroes(roundedString + ".", decimals);
    }
    return roundedString;
};
exports.padString = function (string, toLength, char, atEnd, extraLongOk) {
    if (atEnd === void 0) { atEnd = true; }
    if (extraLongOk === void 0) { extraLongOk = false; }
    var s = "" + string;
    if (s.length === toLength) {
        return s;
    }
    if (s.length > toLength) {
        if (!extraLongOk) {
            throw new Error("String '" + s + "' can't be padded to length " + toLength + " because it is already too long");
        }
    }
    var pad = '';
    var padToLength = toLength - s.length;
    for (var i = s.length; i < toLength; i += char.length) {
        var finalLength = pad.length + char.length;
        var addChar = finalLength > padToLength
            ? char.slice(0, finalLength - padToLength)
            : char;
        pad = "" + pad + addChar;
    }
    return atEnd ? "" + s + pad : "" + pad + s;
};
//# sourceMappingURL=string.js.map