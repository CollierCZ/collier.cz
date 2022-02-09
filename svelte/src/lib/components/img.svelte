<script lang="ts">
  export let src: string
  export let alt: string
  export let width: string
  export let height: string
  export let blurDataUrl: string
</script>

<img
  class="px-8"
  {src}
  {alt}
  loading="lazy"
  {width}
  {height}
  data-blurDataURL={blurDataUrl}
/>
