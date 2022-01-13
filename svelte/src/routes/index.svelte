<script context="module" lang="ts">
	export const prerender = true;
	import type { ArticleMetadata } from "./articles.json";
	export interface ArticleProps {
		status: number
		props?: {
			articles: ArticleMetadata[]
		}
	}
	export async function load({ fetch }): Promise<ArticleProps> {
		const url = '/articles.json';
		const result = await fetch(url);
    return {
			status: 200,
      props: {
        articles: await result.json()
      }
    };
	}
</script>


<script lang="ts">
  import ArticleCard from "../components/ArticleCard.svelte"
	import Image from "../components/Image.svelte";
	import { sortArticles } from '$lib/utilities'
	import { media } from "$lib/mediaQueries"

	const avatarSrc = `/formatted-images/avatar`
	export let articles: Array<ArticleMetadata>;
	articles = sortArticles(articles)
</script>

<aside class="text-center items-center justify-center max-w-xs sm:max-w-80ch mx-auto sm:mx-0 my-8 sm:flex sm:text-left">
	<div class="sm:pl-8 prose lg:prose-lg sm:order-2">
		<h1 class="text-3xl font-extrabold leading-relaxed">Aaron Collier</h1>
		<p>Originally from Lexington and now residing in Brno, Aaron is an educator, editor, and elucidator. <a href="https://collier.cz/aaron-collier" class="underline hover:no-underline focus:no-underline">More about Aaron</a>.</p>
	</div>
	<div class="sm:order-1 w-auto sm:w-32 sm:flex-shrink-0 lg:w-36 mx-auto">
		<Image name="avatar" hero original />
	</div>
</aside>

<section>
	{#each articles as article}
		<ArticleCard {...article} />
	{/each}
</section>

<style>
	aside h1 {
		margin-bottom: 0.5rem;
	}
	aside div p {
		margin-bottom: 1rem;
	}
</style>
