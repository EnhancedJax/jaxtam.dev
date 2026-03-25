import { redirect } from "next/navigation";
import PageWrapper from "../../../components/PageWrapper";
import { getPostDetails } from "../../../lib";
import Content from "./containers/Display";

export async function generateMetadata({ params }) {
  const thisPost = await getPostDetails(params.slug);

  if (!thisPost) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: thisPost.title,
    description: thisPost.description,
    openGraph: {
      images: [thisPost.heroImage.url],
    },
  };
}

export default async function ThoughtPost({ params }) {
  const thisPost = await getPostDetails(params.slug);

  if (!thisPost) {
    redirect("/not-found");
  }

  return (
    <PageWrapper>
      <Content thisPost={thisPost} />
    </PageWrapper>
  );
}
