import MarkdownFormatted from "../components/MarkdownFormatted";
import PageWrapper from "../components/PageWrapper";
import RegularLayout from "../components/RegularLayout";
import SectionPointer from "../components/SectionPointer";
import StaggerElement from "../components/StaggerElement";
import { getHomePage } from "../lib/index";
import { slideSpring } from "../utils/animations";
import { ABOUT_MD, FOOTER_MD } from "../utils/constants";
import Experience from "./root/containers/Experience";
import Flair from "./root/containers/Flair";
import Main from "./root/containers/Main";
import Project from "./root/containers/Project";
import Writing from "./root/containers/Writing";

export const metadata = {
  description:
    "Jax Tam is a web developer who builds digital products with the users in mind. Based in Hong Kong.",
};

export default async function Home() {
  const { latestWorks, projects, experiences } = await getHomePage();
  return (
    <PageWrapper>
      <RegularLayout>
        <div className="flex flex-col items-center justify-start w-full gap-10">
          <Main />
          <section>
            <div>
              <SectionPointer>About</SectionPointer>
              <StaggerElement variants={slideSpring["up"]}>
                <MarkdownFormatted>{ABOUT_MD}</MarkdownFormatted>
              </StaggerElement>
            </div>
          </section>
          <section>
            <StaggerElement
              className="w-full h-full"
              variants={slideSpring["up"]}
            >
              <SectionPointer>Experiences</SectionPointer>
              {experiences.map((exp, index) => (
                <Experience key={index} exp={exp.node} />
              ))}
              <Flair style={{ top: "40%" }} />
              <SectionPointer>Projects</SectionPointer>
              {projects.map((proj, index) => (
                <Project key={index} proj={proj.node} />
              ))}
              <SectionPointer>Writings</SectionPointer>
              {latestWorks.map((writing, index) => (
                <Writing key={index} writing={writing.node} />
              ))}
            </StaggerElement>
          </section>
          <footer>
            <MarkdownFormatted className="mt-20 text-sm text-gray ">
              {FOOTER_MD}
            </MarkdownFormatted>
          </footer>
        </div>
      </RegularLayout>
    </PageWrapper>
  );
}
