import { redirect } from "next/navigation";
import { getFeaturedPostSlug } from "@src/lib";
import LogoLoader from "@comp/LogoLoader";

export default async function thoughts() {
  const featuredPostSlug = (await getFeaturedPostSlug()) || [];

  redirect(`/thoughts/${featuredPostSlug}`);

  return <LogoLoader />;
}
