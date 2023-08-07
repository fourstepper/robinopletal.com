<script>
  import "../app.postcss";

  const currentYear = new Date().getFullYear();
</script>

<main class="flex flex-col h-screen justify-between">
  <div class="navbar max-w-[865px] mx-auto">
    <div class="navbar-start">
      <div class="dropdown">
        <label for="dropdown" tabindex="-1" class="btn btn-ghost sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </label>
        <ul
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <!-- TODO: abstract menu items into component -->
          <li><a class="text-lg" href="/about">about</a></li>
          <li><a class="text-lg" href="/posts">posts</a></li>
        </ul>
      </div>
      <!-- TODO: get rid of the weird padding on the left of the site title -->
      <a href="/" class="btn btn-ghost normal-case text-2xl">Robin Opletal</a>
    </div>
    <div class="navbar-end hidden sm:flex">
      <ul class="menu menu-horizontal px-1 text-lg">
        <li><a href="/about">about</a></li>
        <li><a href="/posts">posts</a></li>
      </ul>
    </div>
  </div>
  <!-- </div> -->

  <div class="py-4" />

  <div class="max-w-4xl px-7 md:px-10 mx-auto mb-auto place-content-center">
    <slot />
  </div>

  <!-- <Footer /> -->
  <div class="max-w-4xl mx-auto place-content-center">
    <footer class="mb-2">
      <div
        class="flex flex-col sm:flex-row flex-wrap justify-between place-content-center text-sm text-center py-1 px-4"
      >
        <a href="/" class="link-hover">Robin Opletal, 2023-{currentYear}</a>
        <div class="divider divider-horizontal" />
        <div>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            class="link-hover"
            target="_blank">Licensed under CC-BY-4.0</a
          >
        </div>
        <div class="divider divider-horizontal" />
        <div>
          <a
            class="link-hover"
            href="https://codeberg.org/fourstepper/robinopletal.com"
            target="_blank">View source</a
          >
        </div>
      </div>
    </footer>
  </div>
</main>
