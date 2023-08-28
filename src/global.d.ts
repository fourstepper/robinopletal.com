type Theme = 'system' | 'light' | 'dark'

interface PostMetadata {
	'slug' : string,
	'title' : string,
	'date' : string,
	'description' : string,
	'content': ConstructorOfATypedSvelteComponent,
}
