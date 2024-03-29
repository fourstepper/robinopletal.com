export const load = async ({
  url,
  fetch,
  params,
}: {
  url: URL;
  fetch: any;
  params: any;
}) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`);
  const posts: Post[] = await postRes.json();

  let filteredPosts: Post[] = [];

  for (let post of posts) {
    if (post.tags && post.tags.includes(params.tag)) {
      filteredPosts.push(post);
    }
  }

  return { filteredPosts, params };
};
