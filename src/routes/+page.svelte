<script lang="ts">
  import { siteTitle, siteDescription } from "$lib/config";
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name={siteDescription} />
</svelte:head>

<div>
  <div class="intro">
    <h1>Hey there, I am Robin!</h1>
    <h2>Welcome to my website</h2>
  </div>
  <p>The homepage is still in the making...</p>
</div>

<style lang="scss">
  .intro {
    h1 {
      margin-bottom: 0;
    }
    h2 {
      color: getColor(green);
      margin-top: 0;
    }
  }
</style>
