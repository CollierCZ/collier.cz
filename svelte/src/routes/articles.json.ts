interface MetadataObject {
  description: string,
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
    const { description, published, slug, title } = articleMetadata
    return [...articlesMetadataCollector, { description, published, slug, title}]
  }, []))

  return { body: articlesMetadata } 
}