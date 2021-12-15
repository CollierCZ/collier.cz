<script>
  export let rel = '';
  export let href;
</script>

<a {href} rel={rel ? "noopener" : ""} class="underline font-semibold hover:no-underline focus:no-underline"><slot /></a>