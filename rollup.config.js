/**
 * @file Rollup config.
 */

import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'build/start.js',
  output: {
    file: 'rollup/start.js',
    format: 'umd',
  },
  plugins: [
    nodeBuiltins(),
    typescript(),
    resolve(),
    commonjs(),
    json(),
  ],
};
