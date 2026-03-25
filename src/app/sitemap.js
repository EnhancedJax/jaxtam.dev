import { getPosts } from "../lib";

export default async function sitemap() {
  const baseUrl = "https://jaxtam.dev";

  const posts = await getPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/thoughts/${post.node.slug}`,
    lastModified: new Date(post.node.updatedAt),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
