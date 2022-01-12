<script lang="ts">
  export let category = "";
  export let description: string;
  export let published: string;
  export let slug: string;
  export let tags = [""];
  export let title: string;
  import ArticlePublishedInfo from "./ArticlePublishedInfo.svelte"
  import ArticleTags from "./ArticleTags.svelte"
</script>

<article>
  <h2><a href="/articles/{slug}">{title}</a></h2>
  <ArticlePublishedInfo category={category} date={published} />
  <div class="mb-2">{description}</div>
  <ArticleTags tags={tags} />
</article>
