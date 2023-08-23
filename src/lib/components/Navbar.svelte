<script>
import NavbarMenuItems from "./NavbarMenuItems.svelte";
</script>

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
        class="menu dropdown-content rounded-box z-[1] w-52 bg-base-200 shadow"
      >
        <li><a href="/">home</a></li>
        <NavbarMenuItems />
      </ul>
    </div>
    <a href="/" class="btn btn-ghost no-animation text-2xl normal-case"
      >Robin Opletal</a
    >
  </div>
  <div class="navbar-end hidden sm:flex">
    <ul class="menu menu-horizontal px-1 text-lg">
      <NavbarMenuItems />
    </ul>
  </div>
</div>
