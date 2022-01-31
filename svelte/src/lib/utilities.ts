import type { ArticleMetadata } from "../routes/articles.json";
import type { fetch } from "@sveltejs/kit/install-fetch"

export const sortArticles = (articlesToSort: ArticleMetadata[]): ArticleMetadata[] => (
  articlesToSort.sort((first,second) => new Date(second.published).getTime() - new Date(first.published).getTime())
)

export const getArticles = async (fetch?: fetch): Promise<ArticleMetadata[]> => {
  try {
    const result = await fetch(`/articles.json`)
    const articlesJson = await result.json()

    return sortArticles(articlesJson)
  } catch (error) {
    console.error(`Error loading articles: ${error}`);
  }
}