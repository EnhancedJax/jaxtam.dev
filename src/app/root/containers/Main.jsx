"use client";

import TypingHeading from "../../../components/TypingHeading";
import { useT } from "../../../i18n/I18nProvider";
import ActionButtons from "./ActionButtons";
import SocialIcons from "./SocialIcons";

export default function Main() {
  const t = useT();
  return (
    <main className="relative flex flex-col items-center self-stretch justify-center gap-4 pt-32 transition-all">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 -z-10"
        style={{
          backgroundColor: "var(--bg)",
          backgroundImage: [
            "linear-gradient(to right, var(--border) 1px, transparent 1px)",
            "linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "4em 4em",
          WebkitMaskImage:
            "linear-gradient(to bottom, white 0%, white 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, white 0%, white 70%, transparent 100%)",
        }}
      ></div>
      <div className="object-cover relative w-full h-full aspect-[4032/3024] lg:aspect-[6803/3024]">
        <picture className="block w-full h-full">
          <source
            media="(min-width: 1024px)"
            srcSet="/background-dark-expanded.webp"
          />
          <img
            src="/background-dark.webp"
            alt=""
            className="object-cover w-full h-full hero-main-bg-mask"
          />
        </picture>
        <picture className="absolute top-0 left-0 z-10 block w-full h-full">
          <source media="(min-width: 1024px)" srcSet="/subject-expanded.webp" />
          <img
            src="/subject.webp"
            alt=""
            className="object-cover w-full h-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, white 0%, white 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, white 0%, white 90%, transparent 100%)",
            }}
          />
        </picture>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col pointer-events-none">
        <div className="flex flex-col items-center self-center mt-20 w-full lg:max-w-[1000px]">
          <span className="mb-2 text-gray">Jax Tam</span>
          <TypingHeading
            text={t("heroTitle")}
            className="text-center font-medium uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(3rem,15vw,18rem)] lg:text-[clamp(3rem,150px,18rem)]"
          />
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-start w-full gap-5 lg:absolute">
        <SocialIcons />
        <ActionButtons />
      </div>
      {/* {theme === "tailwind" && (
        <div className="absolute flex justify-center flex-none w-screen overflow-hidden -top-10 h-max -z-10">
          <img
            src="/tailwindbg.png"
            alt="bg"
            className="w-[90rem] flex-none max-w-none"
          />
        </div>
      )}
      <motion.div
        className="flex flex-col items-center self-stretch gap-4"
        variants={slideUp}
      >
        <span
          className={`${DM_MONO_FAMILY.className} text-sm h-7  text-darkgray `}
        >
          12 / 30 / 2005
        </span>
        <Image
          className="w-[72px] h-[72px] rounded-full"
          src="/headericon.jpg"
          priority
          width="72"
          height="72"
          alt="Avatar"
        />
      </motion.div>
      <div className="flex flex-col items-center self-stretch justify-start gap-5">
        <motion.div
          className="flex flex-col items-center self-stretch justify-center gap-1"
          variants={slideUp}
        >
          <h1 className="text-xl font-light text-cpg">Jax Tam</h1>
          <h2 className="text-lg font-light text-gray">{TITLE_TEXT}</h2>
        </motion.div>
        <motion.div
          className="flex items-center justify-start gap-4"
          variants={slideUp}
        >
          <div className="w-2 h-2 rounded-full animate-ping bg-green"></div>
          <div className="absolute w-2 h-2 rounded-full bg-green"></div>
          <h3 className="font-light text-gray">{STATUS_TEXT}</h3>
        </motion.div>
      </div>
      <SocialIcons />
      <ActionButtons />
      <motion.div
        className={`${DM_MONO_FAMILY.className} text-sm text-center  text-darkgray `}
        variants={slideUp}
      >
        NT, HK ⋅ 22.2849° N, 114.1376° W
      </motion.div> */}
    </main>
  );
}
