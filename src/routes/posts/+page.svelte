<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";
  import { siteTitle } from "$lib/config";

  export let data;
</script>

<svelte:head>
  <title>Blog | {siteTitle}</title>
  <meta property="og:title" content="Blog | {siteTitle}" />
  <meta name="twitter:title" content="Blog | {siteTitle}" />
</svelte:head>

<h1>Blog</h1>

<div class="links">
  <a href="/posts/tags">All tags ></a>
  <a href="/posts/archive">Archive ></a>
</div>

{#if data.posts.length === 0}
  <p>
    No recent posts. Check out the <a href="/posts/archive">archive</a> for older
    posts.
  </p>
{:else}
  <PostsList posts={data.posts} />
{/if}

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }

  .links {
    display: flex;
    gap: 1rem;
  }
</style>
