import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'bubbles',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      commonjs(),
      babel({
        exclude: 'node_modules/**',
      }),
      scss({
        output: 'dist/bubbles.css',
      }),
    ],
  },
];
