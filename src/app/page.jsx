import HomePageClient from "../components/HomePageClient";
import LocomotiveHomeShell from "../components/LocomotiveHomeShell";
import PageWrapper from "../components/PageWrapper";

export const metadata = {
  description:
    "Jax Tam is a web developer who builds digital products with the users in mind. Based in Hong Kong.",
};

export default async function Home() {
  return (
    <PageWrapper>
      <LocomotiveHomeShell>
        <HomePageClient />
      </LocomotiveHomeShell>
    </PageWrapper>
  );
}
