<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<main class="flex h-screen flex-col justify-between">
  <Navbar />

  <div class="py-4" />

  <div
    class="mx-auto mb-auto flex w-full max-w-4xl flex-col place-content-center gap-4 px-7 md:px-10"
  >
    <slot />
  </div>

  <Footer />
</main>
