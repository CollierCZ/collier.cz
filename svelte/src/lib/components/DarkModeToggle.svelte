<script lang="ts">
  import { browser } from '$app/env'
  import darkMode, {
    getStoredValue,
    isPreferenceSet,
  } from '$lib/stores/darkMode'
  const toggleDarkMode = () => {
    darkMode.set(!$darkMode)
    isPreferenceSet.set(true)
  }
  const resetDarkMode = () => {
    localStorage.removeItem('darkMode')
    darkMode.set(getStoredValue())
    isPreferenceSet.set(false)
  }
  import Icon from 'svelte-awesome'
  import { lightbulbO, moonO } from 'svelte-awesome/icons'
</script>

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
    class="w-16 h-10 ml-2 bg-green-100 rounded-3xl p-1 dark:text-gray-700"
  >
    <Icon
      data={$darkMode ? moonO : lightbulbO}
      scale={1.5}
      class="bg-white rounded-1/2 h-8 w-8 p-1 relative transition-left duration-500 {$darkMode
        ? 'left-2'
        : '-left-2'}"
    />
  </button>
</div>
