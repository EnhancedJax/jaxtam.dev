import { redirect } from "next/navigation";
import LogoLoader from "../../components/LogoLoader";
import { getFeaturedPostSlug } from "../../lib";

export default async function thoughts() {
  const featuredPostSlug = (await getFeaturedPostSlug()) || [];

  redirect(`/thoughts/${featuredPostSlug}`);

  return <LogoLoader />;
}
