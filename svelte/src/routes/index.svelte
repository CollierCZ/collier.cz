<script context="module" lang="ts">
	export const prerender = true;
	interface ArticleProps {
		props: {
			articles: {
				description: string
				published: string
				slug: string
				title: string
			}
		}
	}
	export async function load({ fetch }): Promise<ArticleProps> {
		const url = '/articles.json';
		const res = await fetch(url);
    return {
      props: {
        articles: await res.json()
      }
    };
	}
</script>


<script lang="ts">
	import type { MetadataObject } from "./articles.json";
  import ArticleCard from "../components/ArticleCard.svelte"

	export let articles: Array<MetadataObject>;

	articles = articles.sort((first,second) => new Date(second.published).getTime() - new Date(first.published).getTime())
</script>

<aside class="text-center items-center justify-center my-8 sm:flex sm:text-left">
	<div class="sm:pl-8 prose lg:prose-lg sm:order-2">
		<h1 class="text-3xl font-extrabold leading-relaxed">Aaron Collier</h1>
		<p>Originally from Lexington and now residing in Brno, Aaron is an educator, editor, and elucidator. <a href="https://collier.cz/aaron-collier" class="underline hover:no-underline focus:no-underline">More about Aaron</a>.</p>
	</div>
	<div class="sm:order-1 w-48 sm:w-auto mx-auto">
		<img alt="" src="/avatar.png" />
	</div>
</aside>

<section>
	{#each articles as article}
		<ArticleCard {...article} />
	{/each}
</section>

<style>
	aside div img {
		margin: 0;
	}
	aside h1 {
		margin-bottom: 0.5rem;
	}
	aside div p {
		margin-bottom: 1rem;
	}
</style>
