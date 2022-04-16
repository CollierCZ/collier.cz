<script lang="ts">
  import darkMode from '$lib/stores/darkMode'
  const toggleDarkMode = () => {
    darkMode.set(!$darkMode)
  }
  import Icon from 'svelte-awesome'
  import { lightbulbO, moonO } from 'svelte-awesome/icons'
</script>

<button
  role="switch"
  aria-checked={$darkMode}
  on:click={() => toggleDarkMode()}
>
  <Icon
    data={$darkMode ? lightbulbO : moonO}
    scale={2}
    label={$darkMode ? 'Dark mode' : 'Light mode'}
  />
</button>
