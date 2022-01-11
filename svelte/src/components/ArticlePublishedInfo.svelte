<script lang="ts">
  export let category= "";
  export let date: string;
  export let tags = [""];
  const publishedDate = new Date(date);
</script>

<p class="font-light mt-0">
  Published <time datetime="{date}">{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(publishedDate)}</time>
  {#if category}
    in <a sveltekit:prefetch href="/category/{category}">{category.charAt(0).toUpperCase() + category.slice(1)}</a>
  {/if}
  {#if tags}
    on
    {#each tags as tag, index}
      {#if tags.length > 1 && index === tags.length - 1}
        and
      {/if}
      <a sveltekit:prefetch class="font-light" href="/tag/{tag}">{tag}</a>{#if tags.length > 2 && index !== tags.length - 1},{/if}{" "}
    {/each}
  {/if}
</p>
