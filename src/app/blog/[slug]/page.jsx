import Panel from "@comp/[blog]panel";
import Content from "@comp/[blog]content";
import { getPostDetails, getOtherPosts } from "@src/lib";
import { redirect } from "next/navigation";

export default async function Blog({ params }) {
  const thisPost = (await getPostDetails(params.slug));
  const posts = (await getOtherPosts(params.slug)) || [];

  if (!thisPost) {
    redirect("/not-found");
  } 

  return (
    <>
      <Panel posts={posts} thisPost={thisPost} />
      <Content thisPost={thisPost}  />
    </>
  );
}
