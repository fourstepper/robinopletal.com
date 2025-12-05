const fetchPosts = async ({
  offset = 0,
  includeArchived = false,
  allPosts = false,
} = {}) => {
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

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  let sortedPosts = posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

  // Add 'archived' tag to posts older than one year
  sortedPosts = sortedPosts.map((post) => {
    const postDate = new Date(post.date);
    const isArchived = postDate < oneYearAgo;

    if (isArchived) {
      const tags = post.tags || [];
      if (!tags.includes("archived")) {
        return { ...post, tags: [...tags, "archived"] };
      }
    }

    return post;
  });

  // Filter by archive status (unless allPosts is true)
  if (!allPosts) {
    sortedPosts = sortedPosts.filter((post) => {
      const postDate = new Date(post.date);
      const isArchived = postDate < oneYearAgo;
      return includeArchived ? isArchived : !isArchived;
    });
  }

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
