export const load = async ({ url, fetch }: { url: URL; fetch: any }) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`);
  const posts: Post[] = await postRes.json();

  let uniqueTags: Post["tags"] = [];
  let tagCounts: Record<string, number> = {};

  for (let post of posts) {
    if (!post.tags) {
      continue;
    }
    for (let tag of post.tags) {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }

  return { uniqueTags, tagCounts };
};
