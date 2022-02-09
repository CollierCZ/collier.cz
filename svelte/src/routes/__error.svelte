<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        errorCode: status,
        errorMessage: error.message,
      },
    }
  }
</script>

<script lang="ts">
  export let errorCode: string
  export let errorMessage: string
</script>

<h1>{errorCode}</h1>

<p>{errorMessage}</p>
