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
