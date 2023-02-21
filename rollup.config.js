import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: './src/index.js',
    output: {
      name: 'cmcd-validator',
      file: pkg.browser,
      format: 'umd',
    },
  },
  {
    input: './src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],

  },
  {
    input: './src/index.js',
    output: {
      name: 'cmcd-validator-debug',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
  }
];
