<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <a href="/">Robin Opletal, 2023-{currentYear}</a>
  <div class="vertical-divider"/>
  <div>
    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
      >Licensed under CC-BY-4.0</a
    >
  </div>
  <div class="vertical-divider"/>
  <div>
    <a
      class="link-hover"
      href="https://codeberg.org/fourstepper/robinopletal.com"
      target="_blank">View source</a
    >
  </div>
</footer>

<style lang="scss">
  footer {
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
    display: flex;
    flex-direction: row;
    place-content: center;
  }
  .vertical-divider {
    background-color: black;
    width: 1px;
    // TODO: fix height 100% that doesn't work
    height: 100%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
</style>
