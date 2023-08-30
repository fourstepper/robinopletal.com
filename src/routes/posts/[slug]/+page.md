<script lang="ts">
  export let data: PostMetadata;
  import { siteTitle } from "$lib/config";
</script>

<svelte:head>

  <title>{data.title} | {siteTitle}</title>
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
		font-size: 2rem;
	}
</style>
