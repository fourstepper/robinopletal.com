<script>
  import PostsList from "$lib/components/PostsList.svelte";

  export let data;
</script>

<!-- TODO: edit the meta for SEO -->

<svelte:head>
  <title>Blog</title>
  <meta data-key="description" name="description" content="Testing" />
</svelte:head>

<h1>Blog</h1>

<a href="/blog/tags">All tags ></a>

<PostsList posts={data.posts} />

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }
  a {
    font-size: 1.1rem;
  }
</style>
