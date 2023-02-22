import pkg from './package.json' assert { type: 'json' };
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'


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
        include: ["./node_modules/*", "./src/*"],
        transformMixedEsModules: true
      }),
      json(),
      babel({
        exclude: './node_modules/**',
      }),
    ],
  },
  {
    input: './src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
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
  },
];
