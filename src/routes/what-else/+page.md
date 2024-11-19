<script lang="ts">
  import { siteTitle } from "$lib/config";
</script>

<svelte:head>

  <title>What else? | {siteTitle}</title>
  <meta name="description" content="Page with various links to content on this site and elsewhere on the internet" />
</svelte:head>

<div class="blog">

# What else?

This page works (or rather, _eventually_ will work) as a collection of hopefully _cool_ pages, either on this site or elsewhere on the internet.

All headers have anchors on hover (you can tap-hold on mobile to show the clickable anchor to get the URL updated in your browser to copy).

## Cool things on this site

Empty for now... (aside from what's available in the navbar).

[Here](https://robinopletal.com/posts/switched-to-sveltekit#whats-next) are some ideas that might be coming as pages on this blog later on. :)

<h2 class="red">Why this page?</h2>

I didn't want to implement a complicated, Javascript-dependent navigation bar. Maybe it can be done, however I thought that a separate page could work really well - both for navigation to stuff on this site, as well as things on the world-wide web.

</div>

<style lang="scss">
	.red {
		color: getColor(red)
	}
</style>
