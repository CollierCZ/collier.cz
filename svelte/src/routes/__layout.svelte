<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import 'virtual:windi.css'
  export let dark = true
</script>

<div class:dark>
  <div class="h-full min-h-screen dark:bg-dark-500 dark:text-white">
    <Header bind:darkMode={dark} />

    <main class="flex justify-center pb-8 font-sans">
      <div
        class="max-w-80ch pt-8 px-4 prose dark:prose-dark lg:prose-lg xl:prose-xl 2xl:prose-2xl"
      >
        <slot />
      </div>
    </main>
  </div>
</div>
