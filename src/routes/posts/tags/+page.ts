export const load = async ({ url }: { url: URL }) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`);
  const posts = await postRes.json();

  let uniqueTags: string[] = [];

  for (let post of posts) {
    if (!post.tags) {
      continue;
    }
    for (let tag of post.tags)
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
  }

  return { uniqueTags };
};
