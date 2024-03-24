import { redirect } from "next/navigation";
import { getFeaturedPostSlug } from "@src/lib";

export default async function Work() {
  const featuredPostSlug = (await getFeaturedPostSlug()) || [];

  redirect(`/work/${featuredPostSlug}`);

  return <></>;
}
