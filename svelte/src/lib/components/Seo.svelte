
<script lang="ts">
  export let title: string;
  export let description: string;
  export let isArticle = false;
  export let category = "";
  export let image = "";
  export let published = "";
  export let tags = [""];
  export let url = "";

  let imageUrl = isArticle ? `https://collier.cz/formatted-images/heroes/${image}-social.png` : `https://collier.cz/avatar.png`
  let publishedDate = isArticle ? new Date(published).toISOString() : new Date().toISOString()

  /* Structured data for SEO */
  const aaronObject = {
    "@type": "Person",
    name: "Aaron Collier",
    image: "https://collier.cz/formatted-images/originals/avatar.webp",
    url: "https://collier.cz",
  }

  let getJsonLd = () => {
    if (isArticle) {
      return {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: url,
        headline: title,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        description,
        datePublished: publishedDate,
        author: aaronObject,
        publisher: aaronObject,
      }
    }
    return {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: url,
      name: title,
    };
  };

  let jsonLdString = JSON.stringify(getJsonLd())

  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
  <link rel="canonical" href="{url}" />
  {@html jsonLdScript}

  <meta property="og:site_name" content="Aaron Collier" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={isArticle ? 'article' : 'website'} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content={isArticle ? "800" : "400"} />
  <meta property="og:image:height" content={isArticle ? "264" : "400"} />
  {#if isArticle}
    <meta property="article:author" content="Aaron Collier" />
    <meta property="article:section" content={category} />
    <meta name="twitter:card" content="summary_large_image" />
    {#each tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
    <meta property="article:published_time" content={publishedDate} />
  {/if}
</svelte:head>
