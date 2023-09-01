<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";
  import { siteTitle } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>Tag: {data.params.tag}</title>
  <meta property="og:title" content="{data.params.tag}" />
  <meta name="twitter:title" content="{data.params.tag}" />
</svelte:head>

<h1>Tag: <span>{data.params.tag}</span></h1>

<a href="/posts/tags">All tags ></a>

<PostsList posts={data.filteredPosts} />

<style lang="scss">
	span {
		color: getColor(red);
	}
	h1 {
		margin-bottom: 0;
	}
</style>
