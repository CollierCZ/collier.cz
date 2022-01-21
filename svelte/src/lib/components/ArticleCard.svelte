<script lang="ts">
  export let category = "";
  export let description: string;
  export let heroImage: string;
  export let published: string;
  export let slug: string;
  export let tags = [""];
  export let title: string;
  import ArticlePublishedInfo from "./ArticlePublishedInfo.svelte"
  import ArticleTags from "./ArticleTags.svelte"
  import Image from "./Image.svelte";
  import SquareImage from "./SquareImage.svelte";
	import { media } from "$lib/mediaQueries"
</script>

<article class="grid grid-cols-1 sm:grid-cols-[2fr,1fr] sm:gap-2 lg:gap-4">
  <div>
    <h2><a href="/articles/{slug}">{title}</a></h2>
    <ArticlePublishedInfo category={category} date={published} />
    <div class="mb-2">{description}</div>
    <ArticleTags tags={tags} />
  </div>
  {#if heroImage}
    {#if $media.small}
      <SquareImage name={heroImage} />
    {:else}
      <Image name={heroImage} hero />
    {/if}
  {/if}
</article>
