import fetchPosts from "$lib/helpers/fetchPosts";
import { json } from "@sveltejs/kit";

export const prerender = true;

export const GET = async () => {
  const options = {};

  const { posts }: { posts: Post[] } = await fetchPosts(options);
  return json(posts);
};
