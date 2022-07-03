import { resolve } from 'path';
import { defineConfig } from 'vite';
import multiInput from 'rollup-plugin-multi-input';

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['index.html','slides/*'],
      plugins: [multiInput()]
    }
  }
})
