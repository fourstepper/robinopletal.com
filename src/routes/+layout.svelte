<script lang="ts">
  import "@fontsource/open-sans";
  import "../app.scss";

  import Footer from "$lib/components/Footer.svelte";
</script>

<main>
  <div class="wrapper">
    <slot />
  </div>

  <Footer></Footer>
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
