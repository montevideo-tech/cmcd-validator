/* eslint-disable import/no-extraneous-dependencies */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'CMCDValidator',
      file: pkg.browser,
      format: 'umd',
      globals: {
        process: 'process',
      },
    },
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: false }),
      commonjs({
        include: [
          /node_modules/,
          /src/,
        ],
        transformMixedEsModules: true,
      }),
      json(),
      nodePolyfills(),
      babel({
        babelHelpers: 'bundled',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                chrome: '100',
                firefox: '100',
              },
            },
          ],
        ],
        exclude: ['/node_modules/**'],
      }),
      globals(),
      builtins(),
      terser(),
      cleanup({
        comments: 'none',
        sourcemap: false,
      }),
      filesize(),
    ],
  },
  {
    input: './src/index.js',
    output: [
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: true }),
      commonjs({
        include: [/node_modules/, /src/],
        transformMixedEsModules: true,
      }),
      json(),
      babel({
        babelHelpers: 'bundled',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 6,
                chrome: '100',
                firefox: '100',
              },
            },
          ],
        ],
        exclude: './node_modules/*',
      }),
    ],
  },
];
