export const load = async ({ url }: { url: URL }) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`);
  const posts = await postRes.json();

  return { posts };
};
