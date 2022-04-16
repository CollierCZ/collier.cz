<script lang="ts">
  export let category = ''
  export let date: string
  const publishedDate = new Date(date)
</script>

<div class="font-light dark:text-sky-50 mt-0">
  Published <time datetime={date}
    >{new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(publishedDate)}</time
  >
  {#if category}
    in <a sveltekit:prefetch href="/category/{category}/"
      >{category.charAt(0).toUpperCase() + category.slice(1)}</a
    >
  {/if}
</div>
