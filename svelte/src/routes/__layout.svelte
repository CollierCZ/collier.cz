<script lang="ts">
  import darkMode from '$lib/stores/darkMode'
  import Header from '$lib/components/Header.svelte'
  import 'virtual:windi.css'
  import { page } from '$app/stores'
  import HomeHero from '$lib/components/HomeHero.svelte'
</script>

<div class={$darkMode ? 'dark' : ''} data-test-id="app-container">
  <div class="h-full min-h-screen dark:bg-dark-500 dark:text-white">
    <Header />

    {#if $page.url.pathname === '/'}
      <HomeHero />
    {/if}
    <main class="flex justify-center pb-8 font-sans">
      <div
        class="max-w-80ch pt-8 px-4 prose dark:prose-dark lg:prose-lg xl:prose-xl 2xl:prose-2xl"
      >
        <slot />
      </div>
    </main>
  </div>
</div>
