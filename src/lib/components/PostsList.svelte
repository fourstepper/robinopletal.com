<script lang="ts">
  export let posts: PostMetadata[] = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <a href="/posts/{post.slug}">
        <div class="bordered-list">
          <div class="date">
            {post.date}
          </div>
          <h2>
            {post.title}
          </h2>
          {#if post.description}
            <div class="description">
              {post.description}
            </div>
          {/if}
          {#if post.tags}
            <div class="tags">
              <span>Tags: </span>
              <ul>
                {#each post.tags as tag}
                  <li>
                    <a href="/posts/tags/{tag}">{tag}</a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    padding: 0;
  }
  h2 {
    margin: 0;
  }
  li {
    list-style-type: none;
    margin-bottom: 2rem;
    a {
      text-decoration: none;
    }
  }
  li:first-child {
    margin-top: 2rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
  .description {
    margin-bottom: 0.5rem;
  }
  .date {
    font-size: 0.875rem;
  }
  .bordered-list {
    border: solid;
    border-width: 0.1rem;
    border-color: getColor(blue);
    border-radius: 10px;
    padding: 1rem;
  }
  .tags {
    align-content: center;
    display: flex;
    font-size: 0.875rem;
    flex-direction: row;
    column-gap: 0.5rem;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    a {
      text-decoration: none;
    }
    ul {
      display: flex;
      column-gap: 0.5rem;
      li {
        background-color: getColor(purple);
        color: getColor(background);
        margin: 0;
        padding: 0.1rem 0.5rem 0.1rem 0.5rem;
        border-radius: 5px;
      }
    }
  }
</style>
