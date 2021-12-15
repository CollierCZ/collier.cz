import type { Aleph, LoadInput, LoadOutput, ResolveResult, Plugin } from '../types.d.ts'
import { safeLoadFront } from 'https://esm.sh/yaml-front-matter@4.1.1'
import mdx from 'https://esm.sh/@mdx-js/mdx@2.0.0-ci.53?target=deno'

const mdxSpecifier = /\.(md|mdx)$/i

const trimPrefix = (s: string, prefix: string): string => {
  if (prefix !== '' && s.startsWith(prefix)) {
    return s.slice(prefix.length)
  }
  return s
}

export const mdxResovler = (specifier: string): ResolveResult => {
  let pagePath = trimPrefix(specifier.replace(mdxSpecifier, ''), '/pages')
  return { asPage: { path: pagePath } }
}

export const mdxLoader = async ({ specifier }: LoadInput, aleph: Aleph): Promise<LoadOutput> => {
  const { content } = await aleph.fetchModule(specifier)
  const { __content, ...meta } = safeLoadFront((new TextDecoder).decode(content))
  let jsx = await mdx(__content, {
    format: "mdx",
    jsx: true,
    components: {
      h1: "h3",
      h2: "h6"
    }
  })
  console.log(jsx)
  const code = [
    `import React from 'react'`,
    `import ReactDom from 'react-dom'`,
    `${jsx}`,
    `MDXContent.meta = ${JSON.stringify(meta)}`
  ]
  return {
    type: "jsx",
    code: code.filter(Boolean).join('\n')
  }
}

export default (): Plugin => {
  return {
    name: 'mdx-loader',
    setup: aleph => {
      aleph.onResolve(mdxSpecifier, mdxResovler)
      aleph.onLoad(mdxSpecifier, input => mdxLoader(input, aleph))
    }
  }
}