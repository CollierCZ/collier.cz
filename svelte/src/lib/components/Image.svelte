<script lang="ts">
  export let alt = ''
  export let name = 'avatar'
  export let hero = false
  export let original = false
  export let height = ''
  export let width = ''
  import { media } from '$lib/mediaQueries'
  let imageSrc = ''
  $: imageSrc = `/formatted-images/${
    hero && !original ? 'heroes' : 'originals'
  }/${name}`
</script>

<div class={!hero && $media.medium ? 'px-8' : ''}>
  <picture>
    <source
      srcset={`${imageSrc}-narrow.webp 300w, ${imageSrc}-medium.webp 500w, ${imageSrc}.webp 800w, ${imageSrc}-wide.webp 1050w`}
      sizes="(min-width: 480px) 500px, (min-width: 768px) 800px, (min-width: 1024px) 1050px, 300px"
    />
    <img
      class="p-0"
      src={`${imageSrc}-placeholder.webp`}
      {alt}
      loading={hero ? '' : 'lazy'}
      decoding={hero ? 'sync' : 'async'}
      height={height || ($media.small ? '400' : '300')}
      width={width || ($media.small ? '800' : $media.xSmall ? '600' : '440')}
      style="background-size: cover;background-image: url({`${imageSrc}-placeholder.webp`});"
      data-test-id="placeholder-image"
    />
  </picture>
</div>
