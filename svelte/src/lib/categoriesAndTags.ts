import type { ArticleMetadata } from "../routes/articles.json";
import type { ArticleProps } from "../routes/index.svelte"
import type { Page } from "@sveltejs/kit"
import type { fetch } from "@sveltejs/kit/install-fetch"

type CategoryOrTag = "category" | "tag"

export const filterArticles = async (fetch: fetch, page: Page, type: CategoryOrTag): Promise<ArticleProps> => {
  const url = '/articles.json';

  const result = await fetch(url);
  const articlesJson = await result.json()

  const filteredArticles = articlesJson.filter((article: ArticleMetadata) => {
    if (type === "category") return article.category === page.params.category;
    return article.tags.find(tag => tag === page.params.tag);
  })

  return checkIfArticles(filteredArticles)
}

const checkIfArticles = (articles: ArticleMetadata[]): ArticleProps => {
  if (articles.length === 0) return { status: 404 }

  return {
    status: 200,
    props: {
      articles: articles
    }
  };
}