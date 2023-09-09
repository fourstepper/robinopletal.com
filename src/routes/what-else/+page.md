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

---

## On this site

- empty for now...

## On the internet

### Software

#### Utility

- Handling JSON in the shell
  - [`jo` - A shell command to create JSON](https://jpmens.net/2016/03/05/a-shell-command-to-create-json-jo/)
  - [`jq` is a lightweight and flexible command-line JSON processor](https://jqlang.github.io/jq/)

<h2 class="red">Why this site?</h2>

I didn't want to implement a complicated, Javascript-dependent navigation bar. Maybe it can be done, however I thought that a separate page could work really well - both for navigation on this site, as well as outside of it.

</div>

<style lang="scss">
	.red {
		color: getColor(red)
	}
</style>
