"use client";

import { useState, useEffect } from "react";
import SectionPointer from "../../components/SectionPointer";
import { motion } from "framer-motion";
import LucideIcon from "../../components/LucideIcon";
import RegularLayout from "../../components/RegularLayout";
import { fadeIn, fadeInStagger } from "../../components/variants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Stack() {

  return (
    <>
      <RegularLayout>
        <motion.div
          className="flex flex-col w-full gap-10"
          variants={fadeInStagger}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex flex-col items-start justify-center gap-2 pl-3">
            <motion.h1
              variants={fadeIn}
              className="text-xl font-light text-white"
            >
              Stack
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="text-lg font-light text-cgray"
            >
              My skills, technologies, tools and apps
            </motion.div>
          </div>
          <motion.div variants={fadeIn}>
            <SectionPointer>Skills</SectionPointer>
            <div className="flex flex-wrap gap-3">
              <SkillItem
                icon="Globe"
                name="Web development"
                description="Front-end focused, user-experience oriented"
              />
              <SkillItem
                icon="Paintbrush"
                name="Flat design"
                description="Graphic design (posters, banner etc.), UI (Figma)"
              />
              <SkillItem
                icon="GitPullRequestCreateArrow"
                name="Git Version Control"
                description="Branching, PRs, collaboration"
              />
              <SkillItem
                icon="Frame"
                name="Photography"
                description="Is simply capturing moments of sound"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <SectionPointer>Technologies</SectionPointer>

            <div className="flex flex-col w-full gap-3 p-3 px-6 py-4 rounded-lg bg-cfg">
              <LangItem name="HTML5" prog="9" level="2" />
              <LangItem name="Tailwind CSS" prog="8" level="2" />
              <LangItem name="Python" prog="7" level="2" />
              <LangItem name="C++" prog="7" level="2" />
              <LangItem name="React.js" prog="7" level="1" />
              <LangItem name="React Native" prog="5" level="0" />
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <SectionPointer>Software</SectionPointer>
            <div className="flex flex-wrap gap-3">
              <SoftwareItem name="Arc" type="BROWSER" icon="arc" />
              <SoftwareItem name="Github Copilot" type="AI" icon="copilot" />
              <SoftwareItem name="Notion" type="MANAGEMENT" icon="notion" />
              <SoftwareItem name="VSCode" type="CODE" icon="vscode" />
              <SoftwareItem name="Raycast" type="PRODUCTIVITY" icon="raycast" />
              <SoftwareItem name="iTerm2" type="TERMINAL" icon="iterm2" />
            </div>
          </motion.div>
        </motion.div>
      </RegularLayout>
    </>
  );
}

const LangItem = ({ name, prog, level }) => {
  const progType = ["Proficient", "Fluent", "Advanced"];
  const progColor = ["#FFC657", "#35CEFF", "#34D399"];
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-base font-light text-cpg">{name}</p>
      <div className="inline-flex items-center gap-3 sm:gap-4">
        <div className="justify-end hidden w-32 h-2 rounded-lg sm:inline-flex bg-cborder">
          <div
            className="h-full rounded-lg"
            style={{
              width: `${prog * 10}%`,
              backgroundColor: progColor[level],
            }}
          />
        </div>
        <div className="w-6 h-6 sm:hidden">
          <CircularProgressbar
            value={prog}
            maxValue={10}
            strokeWidth={14}
            styles={buildStyles({
              pathColor: progColor[level],
              trailColor: progColor[level] + "40",
            })}
          />
        </div>

        <p
          className="w-20 px-2 py-1 text-xs font-medium text-center rounded-3xl"
          style={{
            backgroundColor: progColor[level] + "80",
            color: progColor[level],
          }}
        >
          {progType[level]}
        </p>
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name, description }) => {
  return (
    <div className="basis-[264px] grow h-[111px] p-4 bg-cfg rounded-lg justify-center items-center inline-flex gap-3">
      <div className="flex items-center justify-center w-[32px] px-2">
        <LucideIcon name={icon} size={32} color="#FFF" />
      </div>
      <div className="inline-flex flex-col items-start justify-center grow shrink basis-0">
        <div className="text-base font-normal text-white">{name}</div>
        <div className="text-sm font-light text-cgray">{description}</div>
      </div>
    </div>
  );
};

const SoftwareItem = ({ name, type, icon }) => {
  return (
    <div className="basis-[140px] grow h-[230px] p-3 bg-cfg rounded-lg flex-col gap-2.5 flex">
      <div className="justify-center items-center gap-2.5 flex w-full h-full">
        <img className="w-[72px]" src={`./images/${icon}.webp`} />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="p-1.5 rounded-md border border-cborder justify-center items-start inline-flex">
          <div className="text-xs font-light text-cgray">{type}</div>
        </div>
        <div className="text-base font-light text-white">{name}</div>
      </div>
    </div>
  );
};
