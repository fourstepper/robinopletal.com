<script lang="ts">
  import TagsList from "$lib/components/TagsList.svelte";
  import { siteTitle } from "$lib/config";

  export let data;
</script>

<svelte:head>

  <title>Tags | {siteTitle}</title>
  <meta name="description" content="Home of my blog post tags" />
</svelte:head>

# Tags

<TagsList uniqueTags={data.uniqueTags} />

<style lang="scss">
  h1 {
		margin-bottom: 2rem;
	}
</style>
