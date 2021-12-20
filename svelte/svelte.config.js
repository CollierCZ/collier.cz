import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.svelte.md'],
	preprocess: [
    mdsvex({ extensions: ['.svx','.svelte.md'], layout: "src/layouts/article.svelte" }),
		preprocess(),
	],
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [
				WindiCSS({
          configPath: './windi.config.js'
        }),
			],
		},
	}
};

export default config;
