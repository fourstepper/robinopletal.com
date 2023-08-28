<script lang="ts">
  export let posts: PostMetadata[] = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <article>
        <a href="/blog/{post.slug}">
          <h2>
            {post.title}
          </h2>
        </a>
      </article>
    </li>
  {/each}
</ul>

<style lang="scss">
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-color: getColor(green);
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
</style>
