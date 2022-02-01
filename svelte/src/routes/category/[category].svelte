<script context="module" lang="ts">
  export const prerender = true;
  import type { ArticleProps } from "../index.svelte";
  import type { LoadProps } from "$lib/categoriesAndTags";
  import { filterArticles } from "$lib/categoriesAndTags";

  let title = ""

  export async function load({ params, fetch }: LoadProps): Promise<ArticleProps> {
    title = `Articles about ${params.category}`

    return await filterArticles(fetch, params, "category")
  }
</script>

<script lang="ts">
  import type { ArticleMetadata } from "../articles.json";
  import ArticleCard from "$lib/components/ArticleCard.svelte"

  export let articles: Array<ArticleMetadata>;
</script>

<svelte:head>
  <title>{title} | Aaron Collier</title>
</svelte:head>

<h1>
  {title}
</h1>

<section>
  {#each articles as article}
    <ArticleCard {...article} />
  {/each}
</section>