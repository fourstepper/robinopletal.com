<script lang="ts">
  import "highlight.js/styles/stackoverflow-dark.css";
	import hljs from 'highlight.js';

  export let language : string;
	export let code : string;
</script>

<div class="mockup-code mx-auto w-[100%] rounded-lg">
  <pre class="p-4"><code>{@html hljs.highlight(code, { language: language }).value}</code></pre>
</div>
