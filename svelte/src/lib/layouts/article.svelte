<script lang="ts">
  export let category = "";
  export let description = "";
  export let heroImage = "";
  export let published = "";
  export let tags = [""];
  export let title = "";
  import Seo from '$lib/components/Seo.svelte';
</script>

<script context="module" lang="ts">
  import { a, CodeBlock, Image, img } from '../components/components'
  import ArticlePublishedInfo from "../components/ArticlePublishedInfo.svelte"
  import ArticleTags from "../components/ArticleTags.svelte"
  export { a, CodeBlock, Image, img }
</script>

<Seo isArticle={true} url={``} title={title} description={description} image={heroImage} published={published} />

<h1>{ title }</h1>
{#if category}
  <ArticlePublishedInfo category={category} date={published} />
{/if}
  {#if tags[0]}
  <ArticleTags tags={tags} />
{/if}

{#if heroImage}
  <svelte:component this={Image} name={heroImage} hero height="264" />
{/if}

<!-- Article content -->
<div class="mt-4">
  <slot />
</div>
