import type { ArticleMetadata } from './articles.json'
import { getArticlesJson } from './articles.json'

interface RssObject {
  headers: {
    'Cache-Control': string
    'Content-Type': string
  }
  body: string
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<RssObject> {
  const articlesJson = getArticlesJson()

  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  }

  const body = xmlify(articlesJson)

  return { headers, body }
}

const xmlify = (articles: ArticleMetadata[]) => `
  <rss version="2.0">
    <channel>
      <title>Feed for collier.cz</title>
      <description>Educator, editor, elucidator</description>
      <link>https://collier.cz</link>
      <lastBuildDate>${new Date().toString()}</lastBuildDate>
      ${articles
        .map(
          (article) => `
        <item>
        <title>${article.title}</title>
        <description>${article.description}</description>
        <link>https://collier.cz/articles/${article.slug}</link>
        <guid>https://collier.cz/articles/${article.slug}</guid>
        <category>${article.category}</category>
        ${article.tags.map((tag) => `<category>${tag}</category>`).join('')}
        <pubDate>${new Date(article.published).toString()}</pubDate>
        </item>
      `,
        )
        .join('')}
    </channel>
  </rss>
`
