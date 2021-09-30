import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'

const extensions = ['.js', '.ts', '.tsx']

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    resolve({ extensions }), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    production && terser(), // minify, but only in production
    typescript({config: './tsconfig.json'}),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
}
