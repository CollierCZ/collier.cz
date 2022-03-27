import type { ArticleMetadata } from './articles.json'
import { getArticlesJson } from './articles.json'

interface SitemapObject {
  headers: {
    'Cache-Control': string
    'Content-Type': string
  }
  body: string
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(): Promise<SitemapObject> {
  const articlesJson = getArticlesJson()

  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${3600}`,
    'Content-Type': 'application/xml',
  }

  const body = xmlify(articlesJson).trim()

  return { headers, body }
}

const baseUrl = "https://collier.cz/"
const pages = ["about-me"]

const xmlify = (articles: ArticleMetadata[]) => `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
 >
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
  </url>
  ${pages
    .map((page) => `
  <url>
    <loc>${baseUrl}/${page}/</loc>
    <changefreq>daily</changefreq>
  </url>
    `)
    .join('')}
  ${articles
    .map((article) => `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <changefreq>daily</changefreq>
  </url>
    `)
    .join('')}
</urlset>
`
