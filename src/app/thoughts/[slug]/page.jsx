import { redirect } from "next/navigation";
import PageWrapper from "../../../components/PageWrapper";
import { getOtherPosts, getPostDetails } from "../../../lib";
import Content from "./containers/Display";
import Panel from "./containers/Panel";

// Add this function to generate metadata
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

export default async function thoughts({ params }) {
  const thisPost = await getPostDetails(params.slug);
  const posts = (await getOtherPosts(params.slug)) || [];

  if (!thisPost) {
    redirect("/not-found");
  }

  return (
    <PageWrapper>
      <Panel posts={posts} thisPost={thisPost} />
      <Content thisPost={thisPost} />
    </PageWrapper>
  );
}
