<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		const url = '/articles.json';
		const res = await fetch(url);

    return {
      props: {
        articles: await res.json()
      }
    };
	}
</script>


<script>
	/** @type {array} */
	export let articles;

  import ArticleCard from "../components/ArticleCard.svelte"
</script>

<aside class="flex flex-row items-center justify-center my-8 h-48">
	<div class="w-48">
		<img alt="" src="/avatar.png" />
	</div>
	<div class="w-128 pl-8 prose-lg">
		<h1 class="text-3xl font-extrabold leading-relaxed">Aaron Collier</h1>
		<p>Originally from Lexington and now residing in Brno, Aaron is an educator, editor, and elucidator. <a href="https://collier.cz/aaron-collier" class="underline hover:no-underline focus:no-underline">More about Aaron</a>.</p>
	</div>
</aside>

<section>
	{#each articles as article}
	<ArticleCard {...article} />
	{/each}
</section>
