import { redirect } from "next/navigation";
import PageWrapper from "../../../components/PageWrapper";
import { getOtherPosts, getPostDetails } from "../../../lib";
import Content from "./containers/Display";
import Panel from "./containers/Panel";

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
