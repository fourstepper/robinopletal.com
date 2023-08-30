<script lang="ts">
  import { siteTitle, siteDescription } from "$lib/config";
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name={siteDescription} />
</svelte:head>

<div>
  <div>
    <h1>Hey there, I am Robin! 🌊</h1>
    <p class="intro">I am a human being based in Prague, Czech Republic</p>
  </div>
  <h2>What I do 🛠️</h2>
  <p>
    I enjoy using and
    <a href="https://codeberg.org/fourstepper">building</a>
    quick, responsive software, making sure it's running and that it's observable.
  </p>
  <p>
    <s
      >I also enjoy screaming at websites when their cumulative layout shift
      makes me click the wrong thing for the fifth time in a row</s
    > <span class="lower">(definitely not that...)</span>
  </p>
  <p>
    Some technologies I am <i>currently</i> excited about include
    <a href="https://go.dev">Go</a>,
    <a href="https://svelte.dev">Svelte(kit)</a>,
    <span class="lower">(which runs the website you are looking at)</span>,
    <a href="https://www.rust-lang.org/">Rust</a> and lately,
    <a
      href="https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license"
      >unfortunately</a
    >,
    <a href="https://opentf.org/">OpenTF</a> as well.
  </p>
  <p>
    No matter the project, I focus on building stable, reliable infrastructure
    that serves it's purpose and it's users to the maximum,
    <strong>on scales from a single user to 10 million users</strong>.
  </p>
  <h2>How I relax 🏃 📖 💻</h2>
  <h4>Running et al.</h4>
  <p>
    I have been getting back into excercising. I enjoy running / swimming in the
    morning and longer walks in the evening. I also recreationally <span
      class="lower">(read: occassionally)</span
    > hike, dive and play tennis.
  </p>
  <p>
    I would like to, eventually, run a 100K ultra-marathon. I am specifically
    eyeing the <a href="https://mozart.utmb.world/">Mozart 100 by UTMB</a>.
  </p>
  <h4>Other activities</h4>
  <p>
    As per usual, I like spending time with my loved ones, reading books,
    watching TV shows, eating good food and drinking great coffee. Nothing
    extraordinary 🫠
  </p>
</div>

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }
  .intro {
    color: getColor(red);
    margin-top: 0;
    font-size: 1.125rem;
  }
  .lower {
    font-size: 0.875rem;
    font-style: italic;
  }
</style>
