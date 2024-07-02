import Content from "@comp/[about]content";
import { getLatest3Work, getProjects } from "@src/lib/index";

export default async function Home() {
  const [works, projects] = await Promise.all([
    getLatest3Work(),
    getProjects(),
  ]);
  return <Content writings={works} projects={projects} />;
}
