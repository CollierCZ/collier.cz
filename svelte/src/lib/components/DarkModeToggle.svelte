<script lang="ts">
  export let enabled: boolean
  const toggleDarkMode = () => (enabled = !enabled)

  import Icon from 'svelte-awesome'
  import { lightbulbO, moonO } from 'svelte-awesome/icons'
</script>

<button role="switch" aria-checked={enabled} on:click={() => toggleDarkMode()}>
  <Icon
    data={enabled ? lightbulbO : moonO}
    scale={2}
    label={enabled ? 'Dark mode' : 'Light mode'}
  />
</button>
