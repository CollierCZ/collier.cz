import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import { mdsvex } from "mdsvex";
import relativeImages from 'mdsvex-relative-images';
import shiki from "shiki";
import { imagetools } from 'vite-imagetools';


const highlighter = async (code, lang) => {
  const highlighter = await shiki.getHighlighter({
    theme: "nord",
  });
  const html = highlighter.codeToHtml(code, {lang: lang});
	return `<Components.CodeBlock html={\`${html}\`} code={\`${code}\`} lang={\`${lang}\`} />`
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.svelte.md'],
			highlight: {
				highlighter
			},
			layout: "src/layouts/article.svelte",
			remarkPlugins: [relativeImages],
		}),
		preprocess(),
	],
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [
				WindiCSS({
					configPath: './windi.config.ts'
				}),
				imagetools({force: true})
			],
		},
	}
};

export default config;
