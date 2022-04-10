import type { ArticleMetadata } from '../routes/articles.json'
import type { ArticleProps } from '../routes/index.svelte'
import type nodeFetch from '$lib/types/nodeFetch'
import { getArticles } from '$lib/utilities'

type CategoryOrTag = 'category' | 'tag'

interface ArticleParameters {
  category?: string
  tag?: string
}

export interface LoadProps {
  fetch: typeof nodeFetch
  params: ArticleParameters
}

export const filterArticles = async (
  fetch: typeof nodeFetch,
  params: ArticleParameters,
  type: CategoryOrTag,
): Promise<ArticleProps> => {
  const articlesJson = await getArticles(fetch)

  const filteredArticles = articlesJson.filter((article: ArticleMetadata) => {
    if (type === 'category') return article.category === params.category
    return article.tags.find((tag) => tag === params.tag)
  })

  return checkIfArticles(filteredArticles, type, params)
}

const checkIfArticles = (
  articles: ArticleMetadata[],
  type: CategoryOrTag,
  params: ArticleParameters,
): ArticleProps => {
  if (articles.length === 0)
    return {
      status: 404,
      error: `No articles found ${
        type === 'category'
          ? `in the ${params.category} category`
          : `tagged as ${params.tag}`
      }`,
    }

  return {
    status: 200,
    props: {
      articles: articles,
    },
  }
}
