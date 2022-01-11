import type { ArticleMetadata } from "../routes/articles.json";

export const sortArticles = (articlesToSort: ArticleMetadata[]): ArticleMetadata[] => {
  return articlesToSort.sort((first,second) => new Date(second.published).getTime() - new Date(first.published).getTime())
}