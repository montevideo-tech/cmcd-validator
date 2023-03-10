import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

export default [
  {
    input: './src/index.js',
    output: {
      name: 'cmcd-validator',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: false }),
      commonjs({
        include: ['./node_modules/*', './src/*'],
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
  {
    input: './src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: false }),
      commonjs({
        include: ['./node_modules/*', './src/*'],
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
  {
    input: './src/index.js',
    output: {
      name: 'cmcd-validator-debug',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: false }),
      commonjs({
        include: ['./node_modules/*', './src/*'],
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
