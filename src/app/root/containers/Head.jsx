import Image from "next/image";
import {
  DM_MONO_FAMILY,
  STATUS_TEXT,
  TITLE_TEXT,
} from "../../../utils/constants";
import ActionButtons from "./ActionButtons";
import SocialIcons from "./SocialIcons";

export default function Head() {
  return (
    <div className="flex flex-col items-center self-stretch justify-start gap-4">
      <div className={`${DM_MONO_FAMILY.className} text-sm h-7 text-cdarkgray`}>
        12 / 30 / 2005
      </div>
      <Image
        className="w-[72px] h-[72px] rounded-full"
        src="/images/headericon.jpg"
        width="72"
        height="72"
        alt="Avatar"
      />
      <div className="flex flex-col items-center self-stretch justify-start gap-5">
        <div className="flex flex-col items-center self-stretch justify-center gap-2">
          <div className="text-xl font-light text-white ">Jax Tam</div>
          <div className="text-lg font-light text-cgray ">{TITLE_TEXT}</div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="w-2 h-2 rounded-full bg-cgreen animate-ping"></div>
          <div className="absolute w-2 h-2 rounded-full bg-cgreen"></div>
          <div className="text-base font-light text-cgray">{STATUS_TEXT}</div>
        </div>
      </div>
      <SocialIcons />
      <ActionButtons />
      <div className="self-stretch h-10 p-2.5 flex-col justify-center items-center gap-2.5 flex">
        <div
          className={`${DM_MONO_FAMILY.className} text-sm text-center text-cdarkgray`}
        >
          NT, HK ⋅ 22.2849° N, 114.1376° W
        </div>
      </div>
    </div>
  );
}
