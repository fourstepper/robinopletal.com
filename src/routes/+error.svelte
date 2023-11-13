<script lang="ts">
  import { page } from "$app/stores";
</script>

<h1 class="mx-auto mb-auto text-4xl">
  {$page.status}: {$page.error?.message}
</h1>
