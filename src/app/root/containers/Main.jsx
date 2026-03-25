"use client";

import TypingHeading from "../../../components/TypingHeading";
import ActionButtons from "./ActionButtons";

export default function Main() {
  return (
    <main
      className="flex relative flex-col gap-4 justify-center items-center self-stretch pt-32"
      style={{
        backgroundColor: "var(--bg)",
        backgroundImage: [
          "linear-gradient(to right, var(--border) 1px, transparent 1px)",
          "linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "4em",
      }}
    >
      <div className="object-cover relative w-full h-full">
        <img
          src="/background.JPG"
          alt="bg"
          className="object-cover w-full h-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, white 50%, white 75%, transparent 90%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, white 50%, white 75%, transparent 90%)",
          }}
        />
        <img
          src="/subject.png"
          alt="fg"
          className="object-cover absolute top-0 left-0 z-10 w-full h-full"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, white 0%, white 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, white 0%, white 90%, transparent 100%)",
          }}
        />
      </div>
      <div className="flex absolute top-0 right-0 bottom-0 left-0 flex-col items-center self-stretch mt-20 pointer-events-none">
        <span className="mb-2 text-base text-gray">Jax Tam</span>
        <TypingHeading
          text="FULL STACK ENGINEER_"
          className="text-center font-medium uppercase leading-[0.85] tracking-tight text-foreground text-[clamp(3rem,15vw,18rem)]"
        />
      </div>
      <ActionButtons />
      {/* {theme === "tailwind" && (
        <div className="flex overflow-hidden absolute -top-10 flex-none justify-center w-screen h-max -z-10">
          <img
            src="/tailwindbg.png"
            alt="bg"
            className="w-[90rem] flex-none max-w-none"
          />
        </div>
      )}
      <motion.div
        className="flex flex-col gap-4 items-center self-stretch"
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
      <div className="flex flex-col gap-5 justify-start items-center self-stretch">
        <motion.div
          className="flex flex-col gap-1 justify-center items-center self-stretch"
          variants={slideUp}
        >
          <h1 className="text-xl font-light text-cpg">Jax Tam</h1>
          <h2 className="text-lg font-light text-gray">{TITLE_TEXT}</h2>
        </motion.div>
        <motion.div
          className="flex gap-4 justify-start items-center"
          variants={slideUp}
        >
          <div className="w-2 h-2 rounded-full animate-ping bg-green"></div>
          <div className="absolute w-2 h-2 rounded-full bg-green"></div>
          <h3 className="text-base font-light text-gray">{STATUS_TEXT}</h3>
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
