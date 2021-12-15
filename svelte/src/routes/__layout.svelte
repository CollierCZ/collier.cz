<script lang="ts">
	import Header from '../components/Header.svelte';
	import "virtual:windi.css"
</script>

<Header title="hi aaron" />

<main class="flex justify-center pb-8 font-sans">
	<div class="max-w-80ch prose-lg pt-8">
		<slot />
	</div>
</main>
