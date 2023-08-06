<script>
  import "../app.postcss";
  // import Footer from "../Footer";
</script>

<main class="flex flex-col h-screen justify-between">
  <!-- navbar -->
  <div class="bg-base-300 rounded-box my-4 mx-4 md:self-stretch lg:self-center">
    <div class="navbar">
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
            <!-- menu items -->
            <!-- TODO: abstract menu items into component -->
            <li><a href="/about">about</a></li>
            <li><a href="/posts">posts</a></li>
          </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">Robin Opletal</a>
      </div>
      <div class="lg:px-64" />
      <div class="navbar-end hidden sm:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/about">about</a></li>
          <li><a href="/posts">posts</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-4" />

  <slot />

  <!-- <Footer /> -->
  <footer class="w-screen">
    <hr class="mb-4 h-px border-0 bg-gray-200" />
    <div class="text-center">Robin Opletal</div>
    <div
      class="flex flex-col sm:flex-row flex-wrap place-content-center items-center text-center py-1 gap-x-2"
    >
      <div>
        The content is <a
          href="https://creativecommons.org/licenses/by-sa/2.0/"
          class="link link-hover"
          target="_blank">CC-BY-SA</a
        >.
      </div>
      <div>
        The site code is
        <a
          class="link link-hover"
          href="https://www.gnu.org/licenses/agpl-3.0.en.html"
          target="_blank">AGPLv3</a
        >.
      </div>
    </div>
    <div class="text-center">
      <a
        class="link link-hover"
        href="https://codeberg.org/fourstepper/robinopletal.com"
        target="_blank">View source</a
      >
    </div>
  </footer>
</main>
