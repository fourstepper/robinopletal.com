import { error } from "@sveltejs/kit";

export async function load({ params }: { params: any }) {
  let post;
  try {
    post = await import(`../../../lib/posts/${params.slug}.md`);
  } catch {
    throw error(404, "Post not found");
  }

  try {
    const { title, date, description, tags } = post.metadata;
    const content = post.default;

    return {
      content,
      title,
      date: new Date(date).toDateString(),
      description,
      tags,
    };
  } catch {
    throw error(
      500,
      "Something went wrong while loading the post. Please contact the site administrator.",
    );
  }
}
