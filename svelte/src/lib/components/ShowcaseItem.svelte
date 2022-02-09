<script lang="ts">
  import Image from './Image.svelte'
  export let title: string
  export let link: string
  export let image = 'avatar'
</script>

<h2><a href={link}>{title}</a></h2>

<Image name={image} />

<slot />
