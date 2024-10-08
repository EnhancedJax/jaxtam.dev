import { getNotes, getPosts } from "../lib";

export default async function sitemap() {
  const baseUrl = "https://jaxtam.dev";

  // Get dynamic posts
  const posts = await getPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/thoughts/${post.node.slug}`,
    lastModified: new Date(post.node.updatedAt),
  }));

  // Get dynamic notes
  const notes = await getNotes();
  const noteUrls = notes.map((note) => ({
    url: `${baseUrl}/notes/${note.node.code}`,
    lastModified: new Date(note.node.pdf.updatedAt),
  }));

  // Define static pages
  const staticPages = ["", "/thoughts", "/notes", "/stack"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...postUrls, ...noteUrls];
}
