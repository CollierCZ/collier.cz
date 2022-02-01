<script context="module" lang="ts">
  import type { ArticleMetadata } from "./articles.json";
  import type { fetch } from "@sveltejs/kit/install-fetch";
  import { getArticles } from "$lib/utilities";

  export const prerender = true;
  export interface ArticleProps {
    status: number
    props?: {
      articles: ArticleMetadata[]
    }
  }

  interface loadProps {
    fetch: fetch
  }
  
  export async function load({ fetch }: loadProps): Promise<ArticleProps> {
    const articles = await getArticles(fetch)
    return {
      status: 200,
      props: {
        articles: articles
      }
    };
  }
</script>


<script lang="ts">
  import Icon from "svelte-awesome"
  import { envelopeSquare, github, rssSquare } from "svelte-awesome/icons"

  import ArticleCard from "$lib/components/ArticleCard.svelte"
  import Image from "$lib/components/Image.svelte";

  export let articles: Array<ArticleMetadata>;
</script>

<aside class="text-center items-center justify-center max-w-xs sm:max-w-80ch mx-auto sm:mx-0 my-8 sm:flex sm:text-left">
  <div class="sm:pl-8 prose lg:prose-lg sm:order-2">
    <h1 class="text-3xl font-extrabold leading-relaxed">Aaron Collier</h1>
    <p>Originally from Lexington and now residing in Brno, I'm an educator, editor, and elucidator. <a href="/about-me/" class="underline hover:no-underline focus:no-underline">More about me</a>.</p>
  <div>
    <a class="pr-2" href="https://github.com/CollierCZ"><Icon data={github} scale={2} label="GitHub" /></a>
    <a href="mailto:aaron@collier.cz"><Icon data={envelopeSquare} scale={2} label="Email" /></a>
    <a class="pl-2" target="_self" href="/rss.xml"><Icon data={rssSquare} scale={2} label="RSS" /></a>
  </div>
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
