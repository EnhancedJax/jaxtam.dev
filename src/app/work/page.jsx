import { redirect } from "next/navigation";
import { getFeaturedPostSlug } from "../../lib";

export default async function Work() {
  const featuredPostSlug = (await getFeaturedPostSlug()) || [];

  redirect(`/work/${featuredPostSlug}`);

  return <></>;
}
