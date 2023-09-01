<script>
  import PostsList from "$lib/components/PostsList.svelte";
  import { siteTitle } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>Blog | {siteTitle}</title>
  <meta name="description" content="Robin Opletal's blog" />
</svelte:head>

<h1>Blog</h1>

<a href="/posts/tags">All tags ></a>

<PostsList posts={data.posts} />

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }
</style>
