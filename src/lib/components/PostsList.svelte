<script lang="ts">
  export let posts: PostMetadata[] = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <a href="/blog/{post.slug}">
        <h2>
          {post.title}
        </h2>
      </a>
      <div>
        {post.date}
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
  a {
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-color: getColor(yellow);
    text-decoration-thickness: 0.15rem;
    text-underline-offset: 0.25rem;
  }
  li {
    list-style-type: none;
    margin-bottom: 1rem;
  }
  li:last-child {
    margin-bottom: 0;
  }
</style>
