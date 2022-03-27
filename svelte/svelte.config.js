import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import WindiCSS from 'vite-plugin-windicss'
import { mdsvex } from 'mdsvex'
import relativeImages from 'mdsvex-relative-images'
import shiki from 'shiki'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const highlighter = async (code, lang) => {
  const highlighterTool = await shiki.getHighlighter({
    theme: 'nord',
  })
  const html = highlighterTool.codeToHtml(code, { lang: lang })
  return `<Components.CodeBlock html={\`${html}\`} code={\`${code}\`} lang={\`${lang}\`} />`
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.svelte.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svx', '.svelte.md'],
      highlight: {
        highlighter,
      },
      layout: join(
        dirname(fileURLToPath(import.meta.url)),
        './src/lib/layouts/article.svelte',
      ),
      remarkPlugins: [relativeImages],
    }),
    preprocess(),
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    trailingSlash: 'ignore',

    vite: {
      plugins: [
        WindiCSS({
          configPath: './windi.config.ts',
        }),
      ],
    },
  },
}

export default config
