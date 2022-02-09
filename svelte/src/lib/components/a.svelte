<script lang="ts">
  export let rel = ''
  export let href: string
</script>

<a {href} rel={rel ? 'noopener' : ''} class="font-semibold"><slot /></a>
