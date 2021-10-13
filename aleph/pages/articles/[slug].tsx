import marked from 'https://esm.sh/marked@3.0.4'
import React from 'https://esm.sh/react'
import { useRouter } from 'aleph/react'
import useStrapi from '~/lib/useStrapi.ts'
 
const Article = () => {
  const router = useRouter()
  const slug = router.params.slug
  const article = useStrapi(`articles?slug_eq=${slug}`)[0]
  console.log(article)
  return (
    <div className="page">
      <head>
        <title>{article?.title ? `${article.title} | ` : ""}Aaron Collier</title>
      </head>
      <div className="flex flex-row items-center justify-center my-8 h-48">
      </div>
      <div className="flex justify-center py-8">
        <div className="max-w-80ch">
          {article?.body.map(item => {
            console.log(item.__component === "body.text")
            if (item.__component === "body.text") return <div dangerouslySetInnerHTML={{ __html: marked.parse(item.content) }} />
            return ""
          })}
        </div>
      </div>
    </div>
  )
}

export default Article;