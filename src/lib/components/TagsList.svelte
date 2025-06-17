<script lang="ts">
  export let uniqueTags: string[] = [];
  export let tagCounts: Record<string, number> = {};
</script>

<ul>
  {#each uniqueTags as tag}
    <li>
      <a href="/posts/tags/{tag}">
        <span class="tag-name">{tag}</span>
        <span class="tag-count">{tagCounts[tag] || 0}</span>
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 2rem;
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
        position: relative;
        display: inline-block;
      }
      .tag-count {
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: getColor(purple);
        color: getColor(background);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: bold;
        border: 0.5px solid getColor(background-rich);
      }
    }
  }
  @media screen and (max-width: 640px) {
    ul {
      place-content: start;
    }
  }
</style>
