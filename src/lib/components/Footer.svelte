<script>
  const currentYear = new Date().getFullYear();
</script>

<div>
  <hr />
  <footer>
    <a href="/">Robin Opletal, 2023-{currentYear}</a>
    <div class="vertical-divider" />
    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
      >Licensed under CC-BY-4.0</a
    >
    <div class="vertical-divider" />
    <a
      class="link-hover"
      href="https://codeberg.org/fourstepper/robinopletal.com"
      target="_blank">View source</a
    >
  </footer>
</div>

<style lang="scss">
  div {
    margin-bottom: 1rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
    hr {
      width: 100%;
      opacity: 0.2;
      margin-bottom: 1rem;
      color: $blue;
    }
    footer {
      display: flex;
      flex: 1;
      place-content: center;
      text-align: center;
      a {
        text-decoration: none;
        color: inherit;
      }
      a:hover {
        text-decoration: underline;
        text-decoration-color: $green;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
      }
    }
  }
  .vertical-divider {
    background-color: $red;
    width: 2px;
    margin: 0.1rem 1rem 0.2rem 1rem;
  }
  @media screen and (max-width: 640px) {
    .vertical-divider {
      display: none;
    }
  }
  @media screen and (max-width: 640px) {
    footer {
      flex-direction: column;
      align-items: center;
      row-gap: 0.6rem;
    }
  }
</style>
