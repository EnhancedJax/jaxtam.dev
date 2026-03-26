"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Experience from "../app/root/containers/Experience";
import Main from "../app/root/containers/Main";
import Project from "../app/root/containers/Project";
import { homeContent } from "../data/home-content";
import { useT } from "../i18n/I18nProvider";
import { slideSpring } from "../utils/animations";
import MarkdownFormatted from "./MarkdownFormatted";
import RegularLayout from "./RegularLayout";
import SectionPointer from "./SectionPointer";
import StaggerElement from "./StaggerElement";

const MD_UP_MQ = "(min-width: 1400px)";

const HireMeScroll = dynamic(() => import("./HireMeScroll"), { ssr: false });

export default function HomePageClient() {
  const t = useT();
  const heroRef = useRef(null);
  const [showHireMeScroll, setShowHireMeScroll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MD_UP_MQ);
    const sync = () => setShowHireMeScroll(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-start w-full gap-10">
        <div ref={heroRef} className="relative z-10 w-full">
          <Main />
        </div>
        <RegularLayout>
          <div className="relative z-10 flex flex-col items-center w-full gap-10">
            <section>
              <div>
                <SectionPointer>{t("aboutSection")}</SectionPointer>
                <StaggerElement variants={slideSpring["up"]}>
                  <MarkdownFormatted>{t("aboutMd")}</MarkdownFormatted>
                </StaggerElement>
              </div>
            </section>
            <section>
              <StaggerElement
                className="w-full h-full"
                variants={slideSpring["up"]}
              >
                <SectionPointer>{t("experiencesSection")}</SectionPointer>
                {homeContent.experiences.map((exp, index) => (
                  <Experience key={index} exp={exp.node} />
                ))}
                <SectionPointer>{t("projectsSection")}</SectionPointer>
                {homeContent.projects.map((proj, index) => (
                  <Project key={index} proj={proj.node} />
                ))}
              </StaggerElement>
            </section>
          </div>
          {showHireMeScroll ? <HireMeScroll heroRef={heroRef} /> : null}
        </RegularLayout>
      </div>
    </div>
  );
}
