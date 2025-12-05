<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";
  import { siteTitle } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>Archive | {siteTitle}</title>
  <meta property="og:title" content="Archive | {siteTitle}" />
  <meta name="twitter:title" content="Archive | {siteTitle}" />
</svelte:head>

<h1>Archive</h1>

<p>Blog posts older than one year.</p>

<a href="/posts">Back to current posts ></a>

<PostsList posts={data.posts} />

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }
</style>
