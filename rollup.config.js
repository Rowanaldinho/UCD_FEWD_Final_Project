import svelte from '@rollup/plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

export default {
  input: 'src/main.js',
  output: {
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: !production
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    production && terser()
  ]
};
