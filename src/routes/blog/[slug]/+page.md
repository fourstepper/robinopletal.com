<script lang="ts">
  export let data: PostMetadata;
</script>

<svelte:head>

  <meta name={data.description} />
</svelte:head>

<article class="blog">

# {data.title}

<p class="published">Published: {data.date}</p>

<svelte:component this={data.content} />

</article>

<style lang="scss">
	.published {
		font-size: 0.8rem;
		margin-top: 0;
	}
	h1 {
		margin-bottom: 0;
	}
</style>
