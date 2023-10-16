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
    I enjoy running (and sometimes
    <a title="My Codeberg (git) profile" href="https://codeberg.org/fourstepper"
      >building</a
    >) great software, making sure it's stable and observable. If the software
    isn't great, isn't stable or isn't observable, I enjoy changing it to be.
  </p>
  <p>
    No matter the project, I focus on building simple and reliable
    infrastructure that serves it's purpose and it's users to the maximum,
    <strong>on scales from one to millions of users</strong>.
  </p>
  <p>
    Some technologies I am currently excited about include the
    <a title="Grafana website" href="https://grafana.com">Grafana LGTM stack</a
    >,
    <a title="Golang website" href="https://go.dev">Golang</a>,
    <a title="Svelte website" href="https://svelte.dev">Svelte</a><a
      title="SvelteKit website"
      href="https://kit.svelte.dev">(Kit)</a
    >,
    <span class="lower">(which runs the website you are looking at)</span>, and
    lately,
    <a
      title="Hashicorp adopts BSL"
      href="https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license"
      >unfortunately</a
    >, <s>OpenTF</s>
    <a title="OpenTofu website" href="https://opentf.org/">OpenTofu</a> as well.
  </p>
  <p>
    I currently work as an Infrastructure Engineer at <a
      href="https://heureka.group/cz-en">Heureka Group</a
    >.
  </p>
  <h2>How I relax 🏃 📖 💻</h2>
  <p>
    I have been getting back into excercising. I enjoy running / swimming in the
    morning and longer walks in the evening. I also recreationally <span
      class="lower">(read: occassionally)</span
    > climb, hike, dive and play tennis.
  </p>
  <p>
    I would like to, eventually, run a 100K ultra-marathon.
    <s>
      I am specifically eyeing the easier, Czech <a
        title="Barokomaraton website"
        href="http://barokomaraton.cz/en/en/">Barokomaraton 100K</a
      >
      to start off with and the
      <a href="https://valdaran.utmb.world/">Val d'Aran 100K / 100 miler</a>
      later on, as I progress.
    </s>
    For 2024, I've registered for the beautiful
    <a href="https://mozart.utmb.world/races/mozart100">mozart 100</a> race in Austria.
    Super excited already!
  </p>
  <p>
    Other than that, similarly to most others, I like to spend time with my
    loved ones, read books, watch TV shows, eat good food and drink great
    coffee. Nothing extraordinary. 🫠
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
  .lower {
    font-size: 0.875rem;
    font-style: italic;
  }
</style>
