<script context="module" lang="ts">
  import { a, CodeBlock, Image, img } from '../components/components'
  import ArticlePublishedInfo from '../components/ArticlePublishedInfo.svelte'
  import ArticleTags from '../components/ArticleTags.svelte'
  export { a, CodeBlock, Image, img }
</script>

<script lang="ts">
  export let category = ''
  export let description = ''
  export let heroImage = ''
  export let published = ''
  export let tags = ['']
  export let title = ''
  import Seo from '$lib/components/Seo.svelte'

  import { page } from '$app/stores'
  import { media } from '$lib/mediaQueries'
</script>

<Seo
  isArticle={true}
  slug={$page.url.pathname}
  {title}
  {description}
  image={heroImage}
  {published}
/>

<h1>{title}</h1>
{#if category}
  <ArticlePublishedInfo {category} date={published} />
{/if}
{#if tags[0]}
  <ArticleTags {tags} />
{/if}

{#if heroImage}
  <svelte:component
    this={Image}
    name={heroImage}
    hero
    height={$media.xXLarge
      ? 452
      : $media.large
      ? 452
      : $media.small
      ? 352
      : $media.xSmall
      ? 260
      : 132}
    width={$media.large
      ? '1050'
      : $media.small
      ? '800'
      : $media.xSmall
      ? '600'
      : '440'}
  />
{/if}

<!-- Article content -->
<div class="mt-4">
  <slot />
</div>
