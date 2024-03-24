import Panel from "../../../components/[work]panel";
import Content from "../../../components/[work]content";
import { getPostDetails, getOtherPosts } from "../../../lib";

export default async function Work({ params }) {
  const thisPost = (await getPostDetails(params.slug)) || [];
  const posts = (await getOtherPosts(params.slug)) || [];

  if (!thisPost) {
    return {
      notFound: true,
    };
  }

  return (
    <>
      <Panel posts={posts} thisPost={thisPost} />
      <Content thisPost={thisPost} nextPost={posts[0].node} />
    </>
  );
}
