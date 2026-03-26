const baseUrl = "https://jaxtam.dev";

const languages = {
  en: `${baseUrl}/`,
  "zh-HK": `${baseUrl}/hk`,
};

export default async function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      alternates: { languages },
    },
    {
      url: `${baseUrl}/hk`,
      lastModified,
      alternates: { languages },
    },
  ];
}
