export interface ArticleMetadata {
  category: string
  description: string
  heroImage: string
  published: string
  slug: string
  tags: string[]
  title: string
}

interface JsonObject {
  body: string
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export function get(): JsonObject {
  const allArticles = import.meta.globEager('/src/routes/articles/*.{md,svx}');

  const articleKeys = Object.keys(allArticles)
  const filteredArticleKeys = articleKeys.filter((article) => new Date(allArticles[article].metadata.published) <= new Date())
    
  const articlesMetadata = JSON.stringify(filteredArticleKeys.reduce((articlesMetadataCollector, article): Array<ArticleMetadata> => {
    const articleMetadata = allArticles[article].metadata
    const slug = article.replace("/src/routes/articles/","").replace(".svelte.md","")
    const { category, description, heroImage, published, tags, title } = articleMetadata
    return [...articlesMetadataCollector, { category, description, heroImage, published, slug, tags, title}]
  }, []))

  return { body: articlesMetadata } 
}
