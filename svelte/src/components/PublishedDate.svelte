<script>
  export let date
  const publishedDate = new Date(date)
</script>

<p class="font-light">Published <time datetime="{date}">{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(publishedDate)}</time></p>
