import fetchPosts from "$lib/helpers/fetchPosts";

export const load = async () => {
  const { posts } = await fetchPosts({ includeArchived: true });
  return { posts };
};
