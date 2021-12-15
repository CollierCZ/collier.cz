import React from 'https://esm.sh/react'
import useStrapi from '~/lib/useStrapi.ts'
 
interface Article {
    title: string;
    slug: string;
    description: string;
    published: Date;
  }
const Index = () => {
    const articles = useStrapi("articles")
    return (
      <>
          {articles.map((article: Article, index) => {
            const isLast = index >= articles.length - 1
            const link = `/articles/${article.slug}`
            return (
              <React.Fragment key={article.slug}>
                <article className="p-8">
                  <h2 className="text-3xl mb-4"><a href={link} className="underline hover:no-underline focus:no-underline">{article.title}</a></h2>
                  <p className="mb-2">
                    <time dateTime={article.published}>{article.published}</time>
                  </p>
                  <p className="mb-2">{article.description}</p>
                  <p className="mb-2"><a href={link} className="underline hover:no-underline focus:no-underline">Read more</a></p>
                </article>
                {!isLast && <hr />}
              </React.Fragment>
          )})}
          </>
  )
}

export default Index;
