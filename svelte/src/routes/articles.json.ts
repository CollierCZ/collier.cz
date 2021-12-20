export interface MetadataObject {
  description: string,
  published: string,
  slug: string,
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
    
  const articlesMetadata = JSON.stringify(filteredArticleKeys.reduce((articlesMetadataCollector, article): Array<MetadataObject> => {
    const articleMetadata = allArticles[article].metadata
    const slug = article.replace("/src/routes/articles/","").replace(".svelte.md","")
    const { description, published, title } = articleMetadata
    return [...articlesMetadataCollector, { description, published, slug, title}]
  }, []))

  return { body: articlesMetadata } 
}