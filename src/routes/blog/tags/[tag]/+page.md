<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";

  export let data;
</script>

<h1>Tag: <span>{data.params.tag}</span></h1>

<a href="/blog/tags">All tags ></a>

<PostsList posts={data.filteredPosts} />

<style lang="scss">
	span {
		color: getColor(red);
	}
	h1 {
		margin-bottom: 0;
	}
</style>
