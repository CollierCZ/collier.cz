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
	import { sortArticles } from '$lib/utilities'
  import Avatar from "../images/avatar.png?w=300;400;800&format=webp&srcset"
  import AvatarPlaceholder from "../images/avatar.png?w=10"	
	import { media } from "$lib/mediaQueries"

	export let articles: Array<ArticleMetadata>;
	articles = sortArticles(articles)
</script>

<aside class="text-center items-center justify-center max-w-xs sm:max-w-80ch mx-auto sm:mx-0 my-8 sm:flex sm:text-left">
	<div class="sm:pl-8 prose lg:prose-lg sm:order-2">
		<h1 class="text-3xl font-extrabold leading-relaxed">Aaron Collier</h1>
		<p>Originally from Lexington and now residing in Brno, Aaron is an educator, editor, and elucidator. <a href="https://collier.cz/aaron-collier" class="underline hover:no-underline focus:no-underline">More about Aaron</a>.</p>
	</div>
	<div class="sm:order-1 w-auto sm:w-32 sm:flex-shrink-0 lg:w-36 mx-auto">
		<picture>
			<source
				srcset={Avatar}
				sizes="(max-width: 800px) 100vw, 800px"
			/>
			<img
				class="p-0"
				src={AvatarPlaceholder}
				alt=""
				style="background-size: cover;background-image: url({AvatarPlaceholder});"
				width={$media.large ? "144" : $media.small ? "128" : "320"}
				height={$media.large ? "144" : $media.small ? "128" : "320"}
			/>
		</picture>
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
