<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div>
    <a href="/">Robin Opletal, 2023-{currentYear}</a>
    <div>
      <div>
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
          >Licensed under CC-BY-4.0</a
        >
      </div>
      <div>
        <a
          class="link-hover"
          href="https://codeberg.org/fourstepper/robinopletal.com"
          target="_blank">View source</a
        >
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  footer {
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
    place-content: center;
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      place-content: center;
      justify-content: space-between;
    }
  }
</style>
