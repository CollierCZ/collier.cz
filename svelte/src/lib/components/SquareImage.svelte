<script lang="ts">
  export let alt = ''
  export let name = 'avatar'
  import { media } from '$lib/mediaQueries'
  let imageSrc = ''
  $: imageSrc = `/formatted-images/heroes/${name}-square.webp`
</script>

<div class="md:pt-4 lg:pt-8">
  <img
    class="rounded-4xl"
    src={imageSrc}
    {alt}
    loading={'lazy'}
    decoding={'async'}
    height={$media.small ? '400' : '300'}
    width={$media.small ? '400' : '300'}
  />
</div>
