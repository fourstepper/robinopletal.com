type Theme = 'system' | 'light' | 'dark'

interface PostMetadata {
	'description' : string,
	'title' : string,
	'date' : string,
	'content': ConstructorOfATypedSvelteComponent,
}
