<script lang="ts">
  export let data: PostMetadata;
</script>

<svelte:head>
  <meta name={data.description} />
</svelte:head>

<article>
  <h1>{data.title}</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
