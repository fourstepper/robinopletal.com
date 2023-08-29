<script lang="ts">
  export let post: PostMetadata;
</script>

<li>
  <article>
    <a href="/blog/{post.slug}">
      <h2>
        {post.title}
      </h2>
    </a>
    <div>
      {post.date}
    </div>
  </article>
</li>

<style lang="scss">
  h2 {
    margin: 0;
  }
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
  li {
    list-style-type: none;
  }
</style>
