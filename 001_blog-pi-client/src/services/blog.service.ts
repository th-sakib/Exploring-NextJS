export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = fetch(``);
      return { data: res, error: null };
    } catch (err) {
      console.error(err);
      return { data: null, error: (err as any).message };
    }
  },
};
