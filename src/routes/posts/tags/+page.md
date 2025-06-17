<script lang="ts">
  import TagsList from "$lib/components/TagsList.svelte";
  import { siteTitle } from "$lib/config";

  export let data;
</script>

<svelte:head>

  <title>Tags | {siteTitle}</title>
  <meta property="og:title" content="Tags | {siteTitle}" />
  <meta name="twitter:title" content="Tags | {siteTitle}" />
</svelte:head>

# Tags

<TagsList uniqueTags={data.uniqueTags} tagCounts={data.tagCounts} />

<style lang="scss">
  h1 {
		margin-bottom: 2rem;
	}
</style>
