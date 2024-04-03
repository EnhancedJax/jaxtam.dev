import Content from "@comp/[about]content";
import { getLatest3Work, getProjects } from "@src/lib/index";

export default async function Home() {
  const works = (await getLatest3Work()) || [];
  const projects = (await getProjects()) || [];
  return <Content writings={works} projects={projects} />;
}
