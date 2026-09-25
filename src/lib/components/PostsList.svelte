<script lang="ts">
  export let posts: Post[] = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <div class="bordered-list">
        <div class="date">
          {post.date}
        </div>
        <h2>
          <a class="post-link" href="/posts/{post.slug}">{post.title}</a>
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
  // stretch the post link over the whole card so it stays clickable
  .post-link::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  .description {
    margin-bottom: 0.5rem;
  }
  .date {
    font-size: 0.875rem;
  }
  .bordered-list {
    position: relative;
    border: solid;
    border-width: 0.1rem;
    border-color: getColor(blue);
    border-radius: 1rem;
    padding: 1rem;
  }
  .tags {
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    a {
      position: relative;
      z-index: 1;
      text-decoration: none;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
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
