<script lang="ts">
  import { browser } from '$app/env'
  import darkMode, { isPreferenceSet } from '$lib/stores/darkMode'

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', String(!$darkMode))
    darkMode.set(!$darkMode)
    isPreferenceSet.set(true)
  }
  const resetDarkMode = () => {
    isPreferenceSet.set(false)
  }

  import WeatherSunny from 'svelte-material-icons/WeatherSunny.svelte'
  import WeatherNight from 'svelte-material-icons/WeatherNight.svelte'

  let height = '100%'
  let width = height
</script>

<svelte:head>
  <script>
    if (document) {
      const setToDark = () => {
        // Get classes for dark mode holder
        const classes = document.documentElement.classList
        if (!classes.contains('dark')) {
          classes.add('dark')
        }
      }
      const prefs = localStorage.getItem('darkMode')
      // If preference set through local storage
      if (prefs === 'true') {
        setToDark()
      } else if (
        // If no stored preferences, look at OS
        !prefs &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setToDark()
      }
    }
  </script>
</svelte:head>

<div class="flex justify-end align-middle">
  {#if browser}
    {#if $isPreferenceSet}
      <button
        on:click={() => resetDarkMode()}
        class="text-dark-50 text-sm dark:text-light-50">Reset to OS</button
      >
    {/if}
  {/if}

  <button
    role="switch"
    aria-checked={$darkMode || false}
    aria-label="Dark mode"
    id="Dark mode toggle"
    on:click={() => toggleDarkMode()}
    class="w-16 min-w-16 h-10 ml-2 bg-green-100 rounded-3xl p-1 dark:text-gray-700"
    data-testid="dark-mode-toggle"
  >
    <div
      class={`bg-white rounded-1/2 h-8 w-8 p-1 relative transition-left duration-500 ${
        $darkMode ? 'left-6' : 'left-0'
      }`}
    >
      {#if $darkMode}
        <WeatherNight {height} {width} />
      {:else}
        <WeatherSunny {height} {width} />
      {/if}
    </div>
  </button>
</div>
