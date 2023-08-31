<script lang="ts">
  import "../app.scss";
  import "prism-themes/themes/prism-a11y-dark.min.css";

  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { fly } from "svelte/transition";
  import { cubicIn, cubicOut } from "svelte/easing";
  export let data: LayoutData;

  const duration = 150;
  const delay = duration + 50;
  const y = 10;

  const transitionIn = { easing: cubicOut, y, duration, delay };
  const transitionOut = { easing: cubicIn, y: -y, duration };
</script>

{#key data.pathname}
  <main class="wrapper" in:fly={transitionIn} out:fly={transitionOut}>
    <div>
      <Header />
      <slot />
      <Footer />
    </div>
  </main>
{/key}

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
