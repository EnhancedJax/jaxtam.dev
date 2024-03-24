import { redirect } from "next/navigation";
import { getFeaturedPostSlug } from "@src/lib";

export default async function Blog() {
  const featuredPostSlug = (await getFeaturedPostSlug()) || [];

  redirect(`/blog/${featuredPostSlug}`);

  return <></>;
}