import pkg from './package.json';
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

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'cmcd-validator-library',
      file: pkg.browser,
      format: 'umd',
      globals: {
        process: 'process' 
      } 
    },
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        module: true
      }),
      commonjs({
        include: [/node_modules/, /src/],
        transformMixedEsModules: true
      }),
      json(),
      nodePolyfills(),
      babel({
        babelHelpers: 'runtime',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                chrome: '100',
                safari: '11',
                firefox: '100'
              },
              useBuiltIns: 'usage',
              corejs: {
                version: pkg.devDependencies['core-js'],
                proposals: false
              }
            }
          ]
        ],
        exclude: ['/node_modules/**'],
        plugins: ['@babel/plugin-transform-runtime']
      }),
      globals(),
      builtins(),
      terser(),
      cleanup({
        comments: 'none',
        sourcemap: false
      }),
      filesize()
    ]
  }
];
