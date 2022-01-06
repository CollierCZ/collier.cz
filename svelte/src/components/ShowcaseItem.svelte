<script lang="ts">
  export let title: string;
  export let link: string;
</script>

<h2><a href={link}>{title}</a></h2>
<div><slot /></div>
