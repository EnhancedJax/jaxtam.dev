"use client";

import { motion } from "framer-motion";
import SectionPointer from "@comp/SectionPointer";
import RegularLayout from "@comp/RegularLayout";
import { fadeInStagger, fadeIn } from "@comp/variants";
import MarkdownFormatted from "@comp/MarkdownFormatted";
import ActionButtons from "@comp/[about]actionbuttons";
import Socials from "@comp/[about]socials";

import { DM_Mono } from "next/font/google";
const dmmono = DM_Mono({ weight: "300", subsets: ["latin"] });

const about = `Back in 2020, I decided to try my hand at creating [Rainmeter](https://rainmeter.net) themes and went down the rabbit hole of coding and front-end development. Fast-forward to today, I'm now pursuing my degree in **Computer Science at The University of Hong Kong**. 


My main focus these days is to design and practice building user interfaces and web-apps, apart from my studies. I most enjoy building software that revolves around the user experience, built and designed with the users in mind. I also work on [LaTeX uni course notes](https://jaxtam.dev/notes), which aims to organize materials in a stripped-down yet cohesive way. 


When I'm not at the computer, I'm usually at the gym, photographing, hanging out with my girlfriend and two dogs, or eating Sam Gor mixian.
`

const footer = `Built with [Next.js](https://nextjs.org/), [Framer.Motion](https://www.framer.com/motion/) and [Tailwind CSS](https://tailwindcss.com/), deployed with [Vercel](https://vercel.com/). Dynamic content stored on [Hygraph](https://hygraph.com) and fetched with [GraphQL](https://graphql.org/). Loosely designed in [Figma](https://www.figma.com/file/jweQFqBujsTKhL6Zw44MON/Design?type=design&node-id=4%3A2&mode=design&t=O2Vfu63nmrOhawVX-1) and coded in [Visual Studio Code](https://code.visualstudio.com/).  Using the [Inter](https://rsms.me/inter/) typeface for sans and [DM Mono](https://fonts.google.com/specimen/DM+Mono) for monospace. Source code available on [GitHub](https://github.com/EnhancedJax/enhanced-jax.dev).`

export default function Home() {
  return (
    <RegularLayout>
      <motion.div
        className="flex flex-col items-center justify-start w-full gap-10"
        variants={fadeInStagger}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="flex flex-col items-center self-stretch justify-start gap-4">
          <motion.div
            className={`${dmmono.className} text-sm h-7 text-cdarkgray`}
            variants={fadeIn}
          >
            12 / 30 / 2005
          </motion.div>
          <motion.img
            className="w-[72px] h-[72px] rounded-full"
            src="/images/headericon.jpg"
            variants={fadeIn}
          />
          <div
            className="flex flex-col items-center self-stretch justify-start gap-5"
          >
            <motion.div
              className="flex flex-col items-center self-stretch justify-center gap-2"
              variants={fadeIn}
            >
              <motion.div
                className="text-xl font-light text-white "
                variants={fadeIn}
              >
                Jax Tam
              </motion.div>
              <motion.div
                className="text-lg font-light text-cgray "
                variants={fadeIn}
              >
                Year 1 student at HKU
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-start gap-4"
              variants={fadeIn}
            >
              <div
                className="w-2 h-2 rounded-full bg-cgreen animate-ping"
              ></div>
              <div
                className="absolute w-2 h-2 rounded-full bg-cgreen"
              ></div>
              <div
                className="text-base font-light text-cgray"
              >
                Available for new opportunities
              </div>
            </motion.div>
          </div>
          <Socials/>
          <ActionButtons/>
          {/* <div className="self-stretch h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex">
            <motion.div
              className={`${dmmono.className} text-sm text-center text-cdarkgray`}
              variants={fadeIn}
            >
              NT, HK ⋅ 22.2849° N, 114.1376° W
            </motion.div>
          </div> */}
        </div>
        <div>
          <SectionPointer showWhenSmall={false}>About</SectionPointer>
          <MarkdownFormatted>{about}</MarkdownFormatted>
        </div>
        <MarkdownFormatted className="mt-20 text-sm text-cgray">{footer}</MarkdownFormatted>
      </motion.div>
    </RegularLayout>
  );
}
