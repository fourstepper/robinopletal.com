<script>
  import "../app.postcss";

  const currentYear = new Date().getFullYear();
</script>

<main class="flex h-screen flex-col justify-between">
  <div class="navbar mx-auto h-16 max-w-[865px]">
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
          class="menu dropdown-content rounded-box menu-sm z-[1] w-52 bg-base-200 shadow"
        >
          <!-- TODO: abstract menu items into component -->
          <li><a href="/about">about</a></li>
          <li><a href="/posts">posts</a></li>
        </ul>
      </div>
      <!-- TODO: get rid of the weird padding on the left of the site title -->
      <a href="/" class="btn btn-ghost no-animation text-2xl normal-case"
        >Robin Opletal</a
      >
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

  <div
    class="mx-auto mb-auto flex w-full max-w-4xl flex-col place-content-center gap-4 px-7 md:px-10"
  >
    <slot />
  </div>

  <!-- <Footer /> -->
  <div class="mx-auto max-w-4xl place-content-center">
    <footer class="mb-2 mt-12">
      <div
        class="flex flex-col flex-wrap place-content-center justify-between px-4 py-1 text-center text-xs sm:flex-row"
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
