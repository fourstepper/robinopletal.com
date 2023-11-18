<script lang="ts">
  import { page } from "$app/stores";
  import { siteTitle, siteDescription } from "$lib/config";
</script>

<svelte:head>
  <title>{$page.status} | {siteTitle}</title>
  <meta name="description" content={siteDescription} />
</svelte:head>

<h1 class="mx-auto mb-auto text-4xl">
  {$page.status}: {$page.error?.message}
</h1>
