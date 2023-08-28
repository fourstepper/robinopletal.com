<script lang="ts">
  export let data: PostMetadata;
</script>

<svelte:head>

  <meta name={data.description} />
</svelte:head>

# {data.title}

<p class="published">Published: {data.date}</p>

<hr />

<svelte:component this={data.content} />

<style lang="scss">
	.published {
		font-size: 0.8rem;
		margin-top: 0;
	}
	h1 {
		margin-bottom: 0;
	}
	hr {
      width: 100%;
			opacity: 0.4;
      margin-bottom: 1rem;
			margin-top: 1rem;
      color: getColor(green);
	}
</style>
