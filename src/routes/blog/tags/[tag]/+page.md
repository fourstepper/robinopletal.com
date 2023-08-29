<script lang="ts">
  import PostsList from "$lib/components/PostsList.svelte";

  export let data;
</script>

# Tag: {data.params.tag}

<PostsList posts={data.filteredPosts} />
