<script>
  import TagsList from "$lib/components/TagsList.svelte";

  export let data;
</script>

<!-- TODO: edit the meta for SEO -->

<svelte:head>

  <title>Tags</title>
  <meta data-key="description" name="description" content="Testing" />
</svelte:head>

# Tags

<TagsList posts={data.posts} />
