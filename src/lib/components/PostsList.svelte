<script lang="ts">
  export let posts: PostMetadata[] = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <div>
        <a href="/blog/{post.slug}">
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
                    <a href="/blog/tags/{tag}">{tag}</a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </a>
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
  .description {
    margin-bottom: 0.5rem;
  }
  .date {
    font-size: 0.875rem;
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
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 5px;
      }
    }
  }
</style>
