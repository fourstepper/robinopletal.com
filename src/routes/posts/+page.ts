export const load = async ({ url, fetch }: { url: URL; fetch: any }) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`);
  const posts = await postRes.json();

  return { posts };
};
