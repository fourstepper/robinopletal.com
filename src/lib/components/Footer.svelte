<script>
  const currentYear = new Date().getFullYear();
</script>

<div>
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
    display: flex;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
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
        text-decoration-color: $sunglow;
        text-decoration-thickness: 0.1rem;
      }
    }
  }
  .vertical-divider {
    background-color: $red-crayola;
    width: 0.1rem;
    margin: 0.1rem 0.5rem 0.2rem 0.5rem;
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
    }
  }
</style>
