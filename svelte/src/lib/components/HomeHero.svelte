<script lang="ts">
  import EmailOutline from 'svelte-material-icons/EmailOutline.svelte'
  import Github from 'svelte-material-icons/Github.svelte'
  import Rss from 'svelte-material-icons/Rss.svelte'
  import Image from '$lib/components/Image.svelte'
  import { media } from '$lib/mediaQueries'

  let size = $media.large ? '48' : '36'
  let height = $media.large ? '48' : '36'
  let width = $media.large ? '48' : '36'
</script>

<div class="mt-4 font-sans relative">
  <div
    class="bg-hero-topography absolute inset-0 my-3 border-t-2 border-b-2 border-green-500 bg-green-500 opacity-40 dark:opacity-100"
  />
  <aside
    class="relative mx-auto sm:mx-6 md:mx-auto text-center items-center justify-center max-w-xs opacity-100 sm:max-w-80ch px-4 py-4 sm:py-0 sm:flex sm:text-left prose dark:prose-dark lg:prose-lg xl:prose-xl 2xl:prose-2xl border-2 border-green-200 dark:border-green-500 rounded-md bg-white dark:bg-dark-500"
  >
    <div class="sm:pl-8 sm:order-2">
      <h1 class="text-3xl font-extrabold leading-relaxed">Aaron Collier</h1>
      <p>
        Originally from Lexington and now residing in Brno, I'm an educator,
        editor, and elucidator.
        <a
          href="/about-me/"
          class="underline hover:no-underline focus:no-underline"
          >More about me</a
        >.
      </p>
      <div class="flex justify-center sm:justify-start">
        <a class="pr-2" href="https://github.com/CollierCZ">
          <Github {size} {height} {width} />
        </a>
        <a href="mailto:aaron@collier.cz">
          <EmailOutline {size} {height} {width} />
        </a>
        <a class="pl-2" target="_self" href="/rss.xml">
          <Rss {size} {height} {width} />
        </a>
      </div>
    </div>
    <div
      class="sm:order-1 w-auto sm:w-42 sm:flex-shrink-0 lg:w-52 xl:w-58 2xl:w-64 mx-auto"
    >
      <Image name="avatar" hero original />
    </div>
  </aside>
</div>

<style>
  aside h1 {
    margin-bottom: 0.5rem;
  }
  aside div p {
    margin-bottom: 1rem;
  }
</style>
