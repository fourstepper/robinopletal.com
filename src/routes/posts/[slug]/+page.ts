import { error } from "@sveltejs/kit";

// Disable prerendering for blog posts to support dynamic comments
export const prerender = false;

export async function load({ params, fetch }: { params: any; fetch: any }) {
  let post;
  try {
    post = await import(`../../../lib/posts/${params.slug}.md`);
  } catch {
    throw error(404, "Post not found");
  }

  try {
    const { title, date, description } = post.metadata;
    const content = post.default;

    // Fetch comments for this post
    let comments = [];
    try {
      const commentsResponse = await fetch(`/api/comments/${params.slug}`);
      if (commentsResponse.ok) {
        comments = await commentsResponse.json();
      }
    } catch (err) {
      console.error("Failed to load comments:", err);
      // Continue without comments if fetch fails
    }

    return {
      content,
      title,
      date: new Date(date).toDateString(),
      description,
      slug: params.slug,
      comments,
    };
  } catch {
    throw error(
      500,
      "Something went wrong while loading the post. Please contact the site administrator.",
    );
  }
}
