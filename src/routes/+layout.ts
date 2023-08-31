// prerender everything by default
export const prerender = true;

export const load = ({ url }: { url: URL }) => {
  const { pathname } = url;

  return {
    pathname,
  };
};
