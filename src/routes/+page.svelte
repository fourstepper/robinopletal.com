<script lang="ts">
  import { siteTitle, siteDescription } from "$lib/config";
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name={siteDescription} />
</svelte:head>

<div class="homepage">
  <h1>Welcome to my website!</h1>
  <p>The homepage is still in the making...</p>
</div>

<style lang="scss">
  .homepage {
    place-content: center;
    text-align: center;
  }
</style>
