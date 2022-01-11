<script lang="ts">
  export let category = "";
  export let published = "";
  export let tags = [""];
  export let title = "";
</script>

<script context="module">
  import { a, CodeBlock, Image, img } from '../components/components'
  import ArticlePublishedInfo from "../components/ArticlePublishedInfo.svelte"
  export { a, CodeBlock, Image, img }
</script>

<h1>{ title }</h1>
<ArticlePublishedInfo category={category} date={published} tags={tags} />
<slot>
  <!-- the mdsvex content will be slotted in here -->
</slot>
