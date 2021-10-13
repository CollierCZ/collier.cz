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
    <div className="page">
      <head>
        <title>Aaron Collier</title>
      </head>
      <div className="flex flex-row items-center justify-center my-8 h-48">
        <div className="w-48">
          <img src="avatar.png" />
        </div>
        <div className="w-128 pl-8">
          <h1 className="text-5xl font-extrabold leading-relaxed pb-8">Aaron Collier</h1>
          <p>Originally from Lexington and now residing in Brno, Aaron is an educator, editor, and elucidator. <a href="https://collier.cz/aaron-collier" className="underline hover:no-underline focus:no-underline">More about Aaron</a>.</p>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <div className="max-w-80ch">
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
        </div>
      </div>
    </div>
  )
}

export default Index;
