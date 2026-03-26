import HomePageClient from "../components/HomePageClient";
import LocomotiveHomeShell from "../components/LocomotiveHomeShell";

const baseUrl = "https://jaxtam.dev";

export const metadata = {
  description:
    "Jax Tam is a web developer who builds digital products with the users in mind. Based in Hong Kong.",
  alternates: {
    canonical: `${baseUrl}/`,
    languages: {
      en: `${baseUrl}/`,
      "zh-HK": `${baseUrl}/hk`,
    },
  },
};

export default async function Home() {
  return (
    // <PageWrapper>
    <LocomotiveHomeShell>
      <HomePageClient />
    </LocomotiveHomeShell>
    // </PageWrapper>
  );
}
