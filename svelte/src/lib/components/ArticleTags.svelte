<script lang="ts">
  export let tags = ['']
</script>

{#if tags}
  <div
    class="flex flex-wrap text-green-700 inline text-sm lg:text-base xl:text-lg 2xl:text-xl"
  >
    {#each tags as tag}
      <div
        class="border-1 mr-1 mt-2 rounded-md border-green-300 hover:border-fuchsia-300 bg-green-50 hover:bg-fuchsia-50 py-0.5"
      >
        <a sveltekit:prefetch class="px-2 py-2" href="/tag/{tag}/">{tag}</a>
      </div>
    {/each}
  </div>
{/if}
