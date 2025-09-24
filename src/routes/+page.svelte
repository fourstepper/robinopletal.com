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
    I enjoy
    <a title="My Github profile" href="https://github.com/fourstepper"
      >building</a
    > and running great software, making sure it's stable, observable and secure.
  </p>
  <p>
    I currently work as a Cloud Security Engineer at <a href="https://kiwi.com"
      >kiwi.com</a
    > ✈️.
  </p>
  <p>
    If you think I could help you with your project as well, <a href="/contact"
      >please do let me know!</a
    >
  </p>
  <h2>How I relax 🏃 📖 💻</h2>
  <p>
    I am up for most sports, however swimming, cycling, running and climbing
    have been my top choices as of late.
  </p>
  <p>
    <a href="https://www.strava.com/athletes/125532839">Follow me on Strava</a> if
    you wanna see what I'm up to!
  </p>
  <p>
    Other than that, I like to spend time with my loved ones, geek out on and
    around the computer, read books, watch movies and TV shows, eat good food
    and drink great coffee.
  </p>
  <h2>Get in touch!</h2>
  <p>
    If you think we should talk, feel free to reach out to me via <a
      title="Send me an e-mail"
      href="mailto:me@robinopletal.com">e-mail</a
    >!
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
