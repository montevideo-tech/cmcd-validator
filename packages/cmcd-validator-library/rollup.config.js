import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'cmcd-validator-library',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      nodeResolve({ browser: true, preferBuiltins: false }),
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
                safari: '11',
                firefox: '66'
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
      terser(),
      cleanup({
        comments: 'none',
        sourcemap: false
      }),
      filesize()
    ]
  },


  // {
  //   input: './src/index.js',
  //   output: {
  //     name: 'cmcd-validator',
  //     file: pkg.browser,
  //     format: 'umd',
  //     extend: true,
  //     globals: {
  //       winston: 'winston',
  //       loglevel: 'loglevel',
  //     },
  //     // umdNamedDefine: true,
  //   },
  //   plugins: [
  //     // nodeResolve(),
  //     // nodeResolve({
  //     // //   preferBuiltins: true,
  //     // }),
  //     nodeResolve({ browser: true, preferBuiltins: true }),
  //     // commonjs(),
  //     commonjs({
  //       include: ['./node_modules/*', './src/*'],
  //       transformMixedEsModules: true,
  //     }),
  //     // json(),
  //     babel({
  //       babelHelpers: 'bundled',
  //       presets: [
  //         [
  //           '@babel/preset-env',
  //           {
  //             targets: {
  //               node: 'current',
  //             },
  //           },
  //         ],
  //       ],
  //       // plugins: [
  //       //   '@babel/plugin-transform-modules-commonjs',
  //       // ],
  //       exclude: './node_modules/*',
  //     }),
  //   ],
  //   external: [
  //     'winston',
  //     '@montevideo-tech/cmcd-validator',
  //     // 'loglevel',
  //   ],
  // },
  // {
  //   input: './src/index.js',
  //   output: [
  //     { file: pkg.main, format: 'cjs' },
  //     { file: pkg.module, format: 'es' },
  //   ],
  //   plugins: [
  //     nodeResolve({ browser: true, preferBuiltins: false }),
  //     commonjs({
  //       include: ['./node_modules/*', './src/*'],
  //       transformMixedEsModules: true,
  //     }),
  //     json(),
  //     babel({
  //       babelHelpers: 'bundled',
  //       presets: [
  //         [
  //           '@babel/preset-env',
  //           {
  //             targets: {
  //               node: 6,
  //               chrome: '100',
  //               firefox: '100',
  //             },
  //           },
  //         ],
  //       ],
  //       exclude: './node_modules/*',
  //     }),
  //   ],
  // },
  // {
  //   input: './src/index.js',
  //   output: {
  //     name: 'cmcd-validator-debug',
  //     file: pkg.browser,
  //     format: 'umd',
  //     sourcemap: true,
  //   },
  //   plugins: [
  //     nodeResolve({ browser: true, preferBuiltins: false }),
  //     commonjs({
  //       include: ['./node_modules/*', './src/*'],
  //       transformMixedEsModules: true,
  //     }),
  //     json(),
  //     babel({
  //       babelHelpers: 'bundled',
  //       presets: [
  //         [
  //           '@babel/preset-env',
  //           {
  //             targets: {
  //               chrome: '100',
  //               firefox: '100',
  //             },
  //           },
  //         ],
  //       ],
  //       exclude: './node_modules/*',
  //     }),
  //   ],
  // },
];
