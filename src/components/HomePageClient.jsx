"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Experience from "../app/root/containers/Experience";
import Main from "../app/root/containers/Main";
import Project from "../app/root/containers/Project";
import { homeContent } from "../data/home-content";
import { slideSpring } from "../utils/animations";
import { ABOUT_MD } from "../utils/constants";
import MarkdownFormatted from "./MarkdownFormatted";
import RegularLayout from "./RegularLayout";
import SectionPointer from "./SectionPointer";
import StaggerElement from "./StaggerElement";

const MD_UP_MQ = "(min-width: 1400px)";

const HireMeScroll = dynamic(() => import("./HireMeScroll"), { ssr: false });

export default function HomePageClient() {
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
      <div className="flex flex-col gap-10 justify-start items-center w-full">
        <div ref={heroRef} className="relative z-10 w-full">
          <Main />
        </div>
        <RegularLayout>
          <div className="flex relative z-10 flex-col gap-10 items-center w-full">
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
                {homeContent.experiences.map((exp, index) => (
                  <Experience key={index} exp={exp.node} />
                ))}
                <SectionPointer>Projects</SectionPointer>
                {homeContent.projects.map((proj, index) => (
                  <Project key={index} proj={proj.node} />
                ))}
              </StaggerElement>
            </section>
            {/* <footer>
              <MarkdownFormatted className="mt-20 text-sm text-gray">
                {FOOTER_MD}
              </MarkdownFormatted>
            </footer> */}
          </div>
          {showHireMeScroll ? <HireMeScroll heroRef={heroRef} /> : null}
        </RegularLayout>
      </div>
    </div>
  );
}
