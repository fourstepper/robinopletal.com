<script lang="ts">
  import "../app.scss";
  import "prism-themes/themes/prism-a11y-dark.min.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  export let data: LayoutData;

  const duration = 300;
  const delay = 50;
  const y = 15;

  const transitionIn = { easing: cubicOut, y, duration, delay };
</script>

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
