<script context="module" lang="ts">
  import type { ArticleMetadata } from './articles.json'
  import type nodeFetch from '$lib/types/nodeFetch'
  import { getArticles } from '$lib/utilities'
  import Seo from '$lib/components/Seo.svelte'

  export const prerender = true
  export interface ArticleProps {
    status: number
    props?: {
      articles: ArticleMetadata[]
    }
    error?: string
  }

  interface loadProps {
    fetch: typeof nodeFetch
  }

  export async function load({ fetch }: loadProps): Promise<ArticleProps> {
    const articles = await getArticles(fetch)
    return {
      status: 200,
      props: {
        articles: articles,
      },
    }
  }
</script>

<script lang="ts">
  import ArticleCard from '$lib/components/ArticleCard.svelte'
  export let articles: Array<ArticleMetadata>
</script>

<svelte:head>
  <link
    rel="sitemap"
    type="application/xml"
    title="Sitemap"
    href="../sitemap.xml"
  />
  <link
    rel="alternate"
    type="application/rss+xml"
    title="feed one"
    href="/rss.xml"
  />
</svelte:head>

<Seo
  title="Aaron Collier"
  description="Articles by Aaron Collier on technology and education."
/>

<section>
  {#each articles as article}
    <ArticleCard {...article} />
  {/each}
</section>
