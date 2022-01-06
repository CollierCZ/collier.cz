<script>
  export let description;
  export let published;
  export let slug;
  export let title;
  import PublishedDate from "../components/PublishedDate.svelte"
</script>

<article>
<h3><a href="/articles/{slug}">{title}</a></h3>
<PublishedDate date={published} />
<p>{description}</p>
</article>
