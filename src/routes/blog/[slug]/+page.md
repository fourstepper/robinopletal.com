<script lang="ts">
  export let data: PostMetadata;
</script>

<svelte:head>

  <meta name={data.description} />
</svelte:head>

# {data.title}

Published: {data.date}

<hr />

<svelte:component this={data.content} />

<style lang="scss">
	hr {
	  width: 100%;
		opacity: 0.2;
		color: getColor(red);
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
</style>
