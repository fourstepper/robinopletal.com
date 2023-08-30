<script lang="ts">
  import "@fontsource/open-sans";
  import "../app.scss";
  import "prism-themes/themes/prism-a11y-dark.min.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="wrapper">
  <div>
    <Header />
    <slot />
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
