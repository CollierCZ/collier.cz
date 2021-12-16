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
  const allArticles = import.meta.globEager('/src/routes/articles/*.md');
    
  const articlesMetadata = JSON.stringify(Object.keys(allArticles).reduce((articlesMetadataCollector, article): Array<MetadataObject> => {
    const articleMetadata = allArticles[article].metadata
    const slug = article.replace("/src/routes/articles/","").replace(".svelte.md","")
    const { description, published, title } = articleMetadata
    return [...articlesMetadataCollector, { description, published, slug, title}]
  }, []))

  return { body: articlesMetadata } 
}