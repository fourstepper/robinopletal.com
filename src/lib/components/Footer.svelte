<script>
  const currentYear = new Date().getFullYear();
</script>

<div class="hover-links">
  <hr />
  <footer>
    <a href="/">Robin Opletal, 2023-{currentYear}</a>
    <div class="vertical-divider" />
    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
      >Content is CC-BY-4.0</a
    >
    <div class="vertical-divider" />
    <a
      class="link-hover"
      href="https://github.com/fourstepper/robinopletal.com"
      target="_blank">Source code is MIT</a
    >
  </footer>
</div>

<style lang="scss">
  div {
    margin-bottom: 1rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    hr {
      width: 100%;
      opacity: 0.4;
      margin-bottom: 1rem;
      color: getColor(green);
    }
    footer {
      display: flex;
      flex: 1;
      place-content: center;
      text-align: center;
    }
  }
  .vertical-divider {
    background-color: getColor(red);
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
      // accessibility score
      row-gap: 0.6rem;
    }
  }
</style>
