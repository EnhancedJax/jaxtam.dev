export default async function sitemap() {
  const baseUrl = "https://jaxtam.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
