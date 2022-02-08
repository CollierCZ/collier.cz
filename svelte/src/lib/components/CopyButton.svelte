<script lang="ts">
  import { writable } from 'svelte/store';
  export const copyTextHandler = writable('Copy')
  import { browser } from '$app/env'; 
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher<{ copy: string; fail: never }>();

  const copy = (text: string): void => {
    if (browser) {
      navigator.clipboard?.writeText(text).then(
        () => dispatch("copy", text),
        () => dispatch("fail")
      );
    }
  }

  const handleClick = (text: string): void => {
    copy(text)
    copyTextHandler.update(() => "Copied")
    setTimeout(() => {copyTextHandler.update(() => "Copy")},1500)
  }

  let copyText: string;
  copyTextHandler.subscribe(value => copyText = value)
  export let textToCopy: string
</script>

<button
  class="rounded-lg bg-green-100 text-green-900 py-1 px-2 text-base {copyText === 'Copy' ? '' : 'font-extralight'}"
  on:click={() => handleClick(textToCopy)}
>
  {copyText}
</button>
