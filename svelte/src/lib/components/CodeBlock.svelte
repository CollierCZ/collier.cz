<script lang="ts">
  import CopyButton from './CopyButton.svelte'
  import './CodeBlock.css'
  export let code: string
  export let lang: string
  export let html: string
</script>

<div class="rounded-md bg-codeBlockNord">
  <div
    class="flex {lang
      ? 'justify-between'
      : 'justify-end'} pt-4 pl-4 lg:pl-6 pr-4"
  >
    {#if lang}
      <div class="text-green-300">{lang}</div>
    {/if}
    <CopyButton textToCopy={code} />
  </div>
  {@html html}
</div>
