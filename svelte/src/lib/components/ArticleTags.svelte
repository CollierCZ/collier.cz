<script lang="ts">
  export let tags = ['']
</script>

{#if tags}
  <div
    class="flex flex-wrap inline text-sm lg:text-base xl:text-lg 2xl:text-xl"
  >
    {#each tags as tag}
      <div
        class="mr-1 mt-2 rounded-md bg-green-50 hover:bg-fuchsia-5 px-1 py-1.5"
      >
        <a sveltekit:prefetch class="px-2 py-3 not-prose" href="/tag/{tag}/"
          >{tag}</a
        >
      </div>
    {/each}
  </div>
{/if}
