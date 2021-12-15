import React from 'react'
import mdx from 'https://esm.sh/@mdx-js/mdx@2.0.0-ci.53?target=deno'
import { useDeno } from "https://deno.land/x/aleph/framework/react/mod.ts"
import { safeLoadFront } from 'https://esm.sh/yaml-front-matter@4.1.1'

const MdxThing = ({ path }: Props) => {
  const decoder = new TextDecoder("utf-8");
  const { content, metadata }: TotalMdx = useDeno(async () => {
    const { __content, ...meta } = safeLoadFront(decoder.decode(Deno.readFileSync(`articles/${path}.md`)))
    console.log(await mdx(__content))
    return { content: await mdx(__content), metadata: meta }
  })
  return content
}

interface Props {
  path: string
}

interface MetadataInterface {
  title: string,
  description?: string
}

interface TotalMdx {
  content: object,
  metadata: MetadataInterface
}

export default MdxThing