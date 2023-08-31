const fetchPosts = async ({ offset = 0 } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/lib/posts/*.md")).map(
      async ([path, resolver]) => {
        // @ts-ignore
        const { metadata } = await resolver();
        const slug = path.split("/").pop()!.slice(0, -3);
        return { ...metadata, slug };
      },
    ),
  );

  let sortedPosts = posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }

  // if we want to paginate content...
  // if (limit && limit < sortedPosts.length && limit != -1) {
  // 	sortedPosts = sortedPosts.slice(0, limit)
  // }

  sortedPosts = sortedPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    date: new Date(post.date).toDateString(),
    description: post.description,
    tags: post.tags,
  }));

  return {
    posts: sortedPosts,
  };
};

export default fetchPosts;
