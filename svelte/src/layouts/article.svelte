<script>
  export let title;
  export let published;
</script>

<script context="module">
  import { a } from '../components/components'
  import PublishedDate from "../components/PublishedDate.svelte"
  export { a }
</script>

<h1>{ title }</h1>
<PublishedDate date={published} />
<slot>
  <!-- the mdsvex content will be slotted in here -->
</slot>