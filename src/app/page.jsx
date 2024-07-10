import MarkdownFormatted from "../components/MarkdownFormatted";
import PageWrapper from "../components/PageWrapper";
import RegularLayout from "../components/RegularLayout";
import SectionPointer from "../components/SectionPointer";
import StaggerElement from "../components/StaggerElement";
import { getLatest3Work, getProjects } from "../lib/index";
import { slideSpring } from "../utils/animations";
import { ABOUT_MD, FOOTER_MD } from "../utils/constants";
import Head from "./root/containers/Head";
import Project from "./root/containers/Project";
import Writing from "./root/containers/Writing";

export default async function Home() {
  const [writings, projects] = await Promise.all([
    getLatest3Work(),
    getProjects(),
  ]);
  return (
    <PageWrapper>
      <RegularLayout>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <Head />
          <div>
            <SectionPointer showWhenSmall={false}>About</SectionPointer>
            <StaggerElement variants={slideSpring["up"]}>
              <MarkdownFormatted>{ABOUT_MD}</MarkdownFormatted>
            </StaggerElement>
          </div>
          <StaggerElement className="w-full" variants={slideSpring["up"]}>
            <SectionPointer>Projects</SectionPointer>
            {projects.map((proj, index) => (
              <Project key={index} proj={proj.node} />
            ))}
            <SectionPointer>Writings</SectionPointer>
            {writings.map((writing, index) => (
              <Writing key={index} writing={writing.node} />
            ))}
          </StaggerElement>
          <MarkdownFormatted className="mt-20 text-sm text-gray ">
            {FOOTER_MD}
          </MarkdownFormatted>
        </div>
      </RegularLayout>
    </PageWrapper>
  );
}
