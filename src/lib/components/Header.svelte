<script lang="ts">
  import { siteTitle, navItems } from "$lib/config";
</script>

<nav class="header">
  <a class="heading" href="/">
    <span>{siteTitle}</span>
  </a>
  <div>
    <ul>
      {#each navItems as item}
        <a href={item.route}>
          <li>{item.title}</li>
        </a>
      {/each}
    </ul>
  </div>
</nav>

<hr />

<style lang="scss">
  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: end;
    column-gap: 4rem;
  }
  .heading {
    color: getColor(purple);
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    font-size: 1.5rem;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    gap: 1rem;
    li {
      list-style-type: none;
    }
  }
  hr {
    width: 100%;
    opacity: 0.4;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: getColor(green);
  }
</style>
