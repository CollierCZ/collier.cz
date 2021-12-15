<script lang="ts">
	import { page } from '$app/stores';
	export let title = "Aaron Collier";
</script>

<header>
	<nav class="flex justify-center items-center mx-auto max-w-80ch prose-lg">
		<div class="flex-1">
			{#if $page.path !== '/'}
				<a sveltekit:prefetch href="/" class="hover:underline focus:underline">← Back</a>
			{/if}
		</div>
		<a sveltekit:prefetch href="/"><img class="rounded-1/2 w-14 h-14 hover:invert hover:filter duration-150" alt="Home" src="/quixote-small.jpg" /></a>
		<div class="flex-1"></div>
	</nav>
</header>

<svelte:head>
	<title>{title}</title>
	<meta name="viewport" content="width=device-width" />
</svelte:head>
