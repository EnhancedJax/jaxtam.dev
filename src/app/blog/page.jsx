import { redirect } from "next/navigation";
import { getFeaturedPostSlug } from "@src/lib";
import LogoLoader from "@comp/LogoLoader";

export default async function Blog() {
  const featuredPostSlug = (await getFeaturedPostSlug()) || [];

  redirect(`/blog/${featuredPostSlug}`);

  return (
    <LogoLoader />
  );
}