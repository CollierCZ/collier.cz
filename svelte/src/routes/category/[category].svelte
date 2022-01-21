<script context="module" lang="ts">
	export const prerender = true;
	import type { ArticleProps } from "../index.svelte";
	import { filterArticles } from "$lib/categoriesAndTags";

	let title = ""

	export async function load({ page, fetch }): Promise<ArticleProps> {
		title = `Articles about ${page.params.category}`

		return await filterArticles(fetch, page, "category")
	}
</script>

<script lang="ts">
	import type { ArticleMetadata } from "../articles.json";
  import ArticleCard from "$lib/components/ArticleCard.svelte"
	import { sortArticles } from '$lib/utilities'

	export let articles: Array<ArticleMetadata>;
	articles = sortArticles(articles)
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