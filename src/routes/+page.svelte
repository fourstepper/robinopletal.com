<script lang="ts">
  import { siteTitle, siteDescription } from "$lib/config";
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name="description" content={siteDescription} />
</svelte:head>

<div>
  <div>
    <h1>Hey there, I am Robin!</h1>
    <p class="intro">Welcome to my website ☺️</p>
  </div>
  <h2>What I do 🛠️</h2>
  <p>
    I enjoy running and
    <a title="My Github profile" href="https://github.com/fourstepper"
      >building</a
    > great software, making sure it's stable and observable.
  </p>
  <p>
    No matter the project, I focus on building simple and reliable
    infrastructure that serves it's purpose, on a scale from a single user to
    millions of users.
  </p>
  <p>
    I currently work as an Infrastructure Engineer at <a
      href="https://heureka.group/cz-en">Heureka Group</a
    >.
  </p>
  <p>
    If you think I could help you with your project as well, <a href="/contact"
      >please do let me know!</a
    >
  </p>
  <h2>How I relax 🏃 📖 💻</h2>
  <p>
    I am up for most sports, however running and climbing have been my top
    choices as of late.
  </p>
  <p>
    I am currently preparing for my first 100 km ultra-marathon, which will be
    the beautiful <a href="https://mozart.utmb.world/races/mozart100"
      >mozart 100</a
    > race in Austria. Super excited already!
  </p>
  <p>
    Other than that, I like to spend time with my loved ones, geek out on and
    around the computer, read books, watch movies and TV shows, eat good food
    and drink great coffee.
  </p>
  <h2>Get in touch!</h2>
  <p>If you think we should talk, feel free to reach out to me!</p>
  <p>
    I'm available via
    <a title="Send me an e-mail" href="mailto:me@robinopletal.com">E-mail</a>,
    on
    <a
      title="My Matrix account"
      href="https://matrix.to/#/@fourstepper:matrix.org">Matrix</a
    >, and on
    <a title="My Mastodon profile" href="https://mastodon.social/@fourstepper"
      >Mastodon</a
    >.
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
</style>
