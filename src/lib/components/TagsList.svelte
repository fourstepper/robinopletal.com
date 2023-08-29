<script lang="ts">
  export let posts: PostMetadata[] = [];
</script>

<ul>
  {#each posts as post}
    {#if post.tags}
      {#each post.tags as tag}
        <li>
          <a href="/blog/tags/{tag}">
            {tag}
          </a>
        </li>
      {/each}
    {/if}
  {/each}
</ul>

<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 1.2rem;
    place-content: space-evenly;
    padding: 0;
    li {
      list-style: none;
      margin: 0;
      a {
        text-decoration: none;
        padding: 10px;
        border-radius: 10px;
        background-color: getColor(green);
        color: getColor(background);
      }
      a:hover {
        background-color: getColor(yellow);
        color: getColor(foreground);
      }
    }
  }
  @media screen and (max-width: 640px) {
    ul {
      place-content: start;
    }
  }
</style>
