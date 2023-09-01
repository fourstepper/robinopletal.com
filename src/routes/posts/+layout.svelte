<script lang="ts">
  import { siteLink } from "$lib/config";
</script>

<svelte:head>
  <meta property="og:title" content="Blog | Robin Opletal" />
  <meta property="og:image" content="{siteLink}/opengraph/og-image-blog.png" />
	<meta property="og:description" content="Robin Opletal's blog" />

  <meta name="twitter:title" content="Blog | Robin Opletal" />
  <meta name="twitter:image" content="{siteLink}/opengraph/og-image-blog.png" />
	<meta name="twitter:description" content="Robin Opletal's blog" />
</svelte:head>

<slot />
