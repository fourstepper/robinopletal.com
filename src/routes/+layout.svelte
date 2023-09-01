<script lang="ts">
  import "../app.scss";
  import "prism-themes/themes/prism-a11y-dark.min.css";
  import { siteTitle, siteDescription, siteURL, siteLink } from "$lib/config";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  export let data: LayoutData;

  const duration = 150;
  const delay = 50;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
</script>

<svelte:head>
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/favicon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/favicon/favicon-16x16.png"
  />
  <link rel="manifest" href="/favicon/site.webmanifest" />

  <meta property="og:url" content={siteLink} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={siteDescription} />
  <meta property="og:image" content="${siteLink}/opengraph/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={siteURL} />
  <meta property="twitter:url" content={siteLink} />
  <meta name="twitter:title" content={siteTitle} />
  <meta name="twitter:description" content={siteDescription} />
  <meta name="twitter:image" content="${siteLink}/opengraph/og-image.png" />
</svelte:head>

<main class="wrapper">
  <div>
    <Header />
    {#key data.pathname}
      <div in:fly={transitionIn}>
        <slot />
      </div>
    {/key}
    <Footer />
  </div>
</main>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    place-content: center;
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    max-width: 56rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
</style>
