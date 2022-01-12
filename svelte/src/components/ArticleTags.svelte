<script lang="ts">
  export let tags = [""];
</script>

{#if tags}
  <div class="flex flex-wrap text-green-700 inline text-base">
    {#each tags as tag}
      <div class="border-2 mr-4 mt-2 rounded-md border-green-700 hover:border-fuchsia-700 bg-green-50 hover:bg-fuchsia-50 py-1">
        <a sveltekit:prefetch class="px-2 py-1" href="/tag/{tag}">{tag}</a>
      </div>
    {/each}
  </div>
{/if}