<script lang="ts">
  export let data: PostMetadata;
  import { siteTitle } from "$lib/config";
</script>

<svelte:head>

  <title>{data.title}</title>
  <meta property="og:title" content="{data.title}" />
  <meta name="twitter:title" content="{data.title}" />
</svelte:head>

<article class="blog">

# {data.title}

{#if data.tags?.length}
<ul class="tags">
{#each data.tags as tag}
<li><a href="/posts/tags/{tag}">{tag}</a></li>
{/each}
</ul>
{/if}

<p class="published">Published: {data.date}</p>

<svelte:component this={data.content} />

</article>

<style lang="scss">
	.published {
		margin-top: 0;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0.5rem 0;
		padding: 0;
		font-size: 0.875rem;
		li {
			list-style-type: none;
			background-color: getColor(purple);
			color: getColor(background);
			padding: 0.1rem 0.5rem;
			border-radius: 5px;
		}
		a {
			text-decoration: none;
		}
	}
	h1 {
		margin-bottom: 0;
		font-size: 2rem;
	}
</style>
