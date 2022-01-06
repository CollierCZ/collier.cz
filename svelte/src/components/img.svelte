<script lang="ts">
  import Image from "svelte-image"

  export let src: string;
  export let alt: string;
</script>

{#if src.startsWith("http") }
  <img class="px-8" src={src} alt={alt} />
{:else}
  <Image class="px-8" src={src} alt={alt} />
{/if}
