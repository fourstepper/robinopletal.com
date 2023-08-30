<script lang="ts">
  export let uniqueTags: string[] = [];
</script>

<ul>
  {#each uniqueTags as tag}
    <li>
      <a href="/posts/tags/{tag}">
        {tag}
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    font-size: 1.2rem;
    padding: 0;
    li {
      list-style: none;
      margin: 0;
      a {
        text-decoration: none;
        padding: 10px;
        border-radius: 10px;
        background-color: getColor(purple);
        color: getColor(background);
      }
    }
  }
  @media screen and (max-width: 640px) {
    ul {
      place-content: start;
    }
  }
</style>
