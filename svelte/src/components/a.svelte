<script lang="ts">
  export let rel = '';
  export let href: string;
</script>

<a {href} rel={rel ? "noopener" : ""} class="underline font-semibold hover:no-underline focus:no-underline"><slot /></a>