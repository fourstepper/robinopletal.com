<script lang="ts">
  export let posts: PostMetadata[] = [];

  import PostsListItem from "$lib/components/PostsListItem.svelte";
</script>

<ul>
  {#each posts as post}
    <PostsListItem {post} />
  {/each}
</ul>
