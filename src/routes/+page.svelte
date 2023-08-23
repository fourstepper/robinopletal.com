<script lang="ts">
  import Code from "$lib/components/Code.svelte";

  const code = `
package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func getRoot(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "OK\\n")
}
func main() {
	http.HandleFunc("/", getRoot)

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Printf("error starting server: %s\\n", err)
		os.Exit(1)
	}
}`;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-2xl font-bold">This is the heading of this page</h1>

<h2 class="text-xl font-bold">This is an example code block under h2</h2>

<Code language="go" {code} />

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident possimus
  ipsam amet quas unde blanditiis eius. Fuga corrupti minus, optio minima
  molestiae aliquam ipsam et aperiam excepturi! Deserunt, est soluta! Lorem
  ipsum dolor sit amet consectetur adipisicing elit. Maiores quia accusamus sed
  veritatis beatae explicabo fuga in magni. Doloribus placeat ducimus hic enim.
  Tempora quaerat, neque quos illum excepturi sapiente!
</p>

<h2 class="text-xl font-bold">This is an h2</h2>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
  similique quisquam! Eaque, ducimus! Cupiditate dignissimos hic veritatis
  excepturi ab. Blanditiis delectus culpa sequi consectetur reprehenderit sed
  quidem id? Minus?
</p>

<h3 class="text-lg font-bold">This is an h3</h3>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
  similique quisquam! Eaque, ducimus! Cupiditate dignissimos hic veritatis
  excepturi ab. Blanditiis delectus culpa sequi consectetur reprehenderit sed
  quidem id? Minus?
</p>

<h4 class="font-bold">This is an h4</h4>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
  similique quisquam! Eaque, ducimus! Cupiditate dignissimos hic veritatis
  excepturi ab. Blanditiis delectus culpa sequi consectetur reprehenderit sed
  quidem id? Minus?
</p>

<h3 class="text-lg font-bold">This is another h3</h3>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro pariatur
  similique quisquam! Eaque, ducimus! Cupiditate dignissimos hic veritatis
  excepturi ab. Blanditiis delectus culpa sequi consectetur reprehenderit sed
  quidem id? Minus?
</p>
