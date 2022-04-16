<script lang="ts">
  import darkMode from '$lib/stores/darkMode'
  import Header from '$lib/components/Header.svelte'
  import 'virtual:windi.css'
  import { page } from '$app/stores'
  import Icon from 'svelte-awesome'
  import { envelopeSquare, github, rssSquare } from 'svelte-awesome/icons'
  import Image from '$lib/components/Image.svelte'
  import { media } from '$lib/mediaQueries'
</script>

<div class={$darkMode ? 'dark' : ''}>
  <div class="h-full min-h-screen dark:bg-dark-500 dark:text-white">
    <Header />

    {#if $page.url.pathname === '/'}
      <div class="mt-4 font-sans relative">
        <div
          class="bg-hero-topography absolute inset-0 my-3 border-t-2 border-b-2 border-green-500 bg-green-500 opacity-40 dark:opacity-100"
        />
        <aside
          class="relative mx-auto sm:mx-6 md:mx-auto text-center items-center justify-center max-w-xs opacity-100 sm:max-w-80ch px-4 py-4 sm:py-0 sm:flex sm:text-left prose dark:prose-dark lg:prose-lg xl:prose-xl 2xl:prose-2xl border-2 border-green-200 dark:border-green-500 rounded-md bg-white dark:bg-dark-500"
        >
          <div class="sm:pl-8 sm:order-2">
            <h1 class="text-3xl font-extrabold leading-relaxed">
              Aaron Collier
            </h1>
            <p>
              Originally from Lexington and now residing in Brno, I'm an
              educator, editor, and elucidator.
              <a
                href="/about-me/"
                class="underline hover:no-underline focus:no-underline"
                >More about me</a
              >.
            </p>
            <div>
              <a class="pr-2" href="https://github.com/CollierCZ"
                ><Icon
                  data={github}
                  scale={$media.large ? 3 : 2}
                  label="GitHub"
                /></a
              >
              <a href="mailto:aaron@collier.cz"
                ><Icon
                  data={envelopeSquare}
                  scale={$media.large ? 3 : 2}
                  label="Email"
                /></a
              >
              <a class="pl-2" target="_self" href="/rss.xml"
                ><Icon
                  data={rssSquare}
                  scale={$media.large ? 3 : 2}
                  label="RSS"
                /></a
              >
            </div>
          </div>
          <div
            class="sm:order-1 w-auto sm:w-42 sm:flex-shrink-0 lg:w-52 xl:w-58 2xl:w-64 mx-auto"
          >
            <Image name="avatar" hero original />
          </div>
        </aside>
      </div>
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

<style>
  aside h1 {
    margin-bottom: 0.5rem;
  }
  aside div p {
    margin-bottom: 1rem;
  }
</style>
