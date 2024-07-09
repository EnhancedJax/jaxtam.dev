import MarkdownFormatted from "../components/MarkdownFormatted";
import RegularLayout from "../components/RegularLayout";
import SectionPointer from "../components/SectionPointer";
import StaggerElement from "../components/StaggerElement";
import StaggerWrapper from "../components/StaggerWrapper";
import { getLatest3Work, getProjects } from "../lib/index";
import { slideSpring } from "../utils/animations";
import { ABOUT_MD, FOOTER_MD } from "../utils/constants";
import Head from "./root/containers/Head";
import Project from "./root/containers/Project";
import Writing from "./root/containers/Writing";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [writings, projects] = await Promise.all([
    getLatest3Work(),
    getProjects(),
  ]);
  return (
    <RegularLayout>
      <StaggerWrapper className="flex flex-col items-center justify-start w-full gap-10">
        <Head />
        <div>
          <SectionPointer showWhenSmall={false}>About</SectionPointer>
          <MarkdownFormatted>{ABOUT_MD}</MarkdownFormatted>
        </div>
        <StaggerElement className="w-full" variants={slideSpring["up"]}>
          <SectionPointer>Projects</SectionPointer>
          {projects.map((proj, index) => (
            <Project key={index} proj={proj.node} />
          ))}
        </StaggerElement>
        <StaggerElement className="w-full" variants={slideSpring["up"]}>
          <SectionPointer>Writings</SectionPointer>
          {writings.map((writing, index) => (
            <Writing key={index} writing={writing.node} />
          ))}
        </StaggerElement>
        <MarkdownFormatted className="mt-20 text-sm text-cgray">
          {FOOTER_MD}
        </MarkdownFormatted>
      </StaggerWrapper>
    </RegularLayout>
  );
}
