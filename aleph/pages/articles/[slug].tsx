import { useRouter } from 'aleph/react'
import React from 'react'

import MdxThing from '../../components/MdxThing.tsx'

export default async function Query() {
  const router = useRouter()
  const slug = router.params.slug || 'test'

  const Mdx = await import(`../mdx/${slug}.md.js`)
  .catch(err => console.error(err))

  console.log(Mdx.default)
  return ("hi"
  )
}