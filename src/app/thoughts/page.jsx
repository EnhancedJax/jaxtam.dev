import { redirect } from "next/navigation";
import { getFeaturedPostSlug } from "../../lib";

export default async function ThoughtsIndex() {
  const slug = await getFeaturedPostSlug();
  redirect(`/thoughts/${slug}`);
}
