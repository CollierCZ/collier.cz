<script lang="ts">
  export let category = "";
  export let description: string;
  export let published: string;
  export let slug: string;
  export let tags = [""];
  export let title: string;
  import ArticlePublishedInfo from "./ArticlePublishedInfo.svelte"
</script>

<article>
  <h3><a href="/articles/{slug}">{title}</a></h3>
  <ArticlePublishedInfo category={category} tags={tags} date={published} />
  <p>{description}</p>
</article>
