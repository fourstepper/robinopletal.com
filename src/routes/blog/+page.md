<script>
  import PostsList from "$lib/components/PostsList.svelte";

  export let data;
</script>

<!-- TODO: edit the meta for SEO -->

<svelte:head>

  <title>Blog</title>
  <meta data-key="description" name="description" content="Testing" />
</svelte:head>

# Blog

<PostsList posts={data.posts} />
