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
  import Icon from 'svelte-awesome'
  import { envelopeSquare, github, rssSquare } from 'svelte-awesome/icons'

  import ArticleCard from '$lib/components/ArticleCard.svelte'
  import Image from '$lib/components/Image.svelte'
  import { media } from '$lib/mediaQueries'

  export let articles: Array<ArticleMetadata>
</script>

<svelte:head>
  <link
    rel="sitemap"
    type="application/xml"
    title="Sitemap"
    href="../sitemap.xml"
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
