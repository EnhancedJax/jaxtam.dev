import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import LucideIcon from "../../../components/LucideIcon";

export const LangItem = ({ name, prog, level }) => {
  const progType = ["Proficient", "Fluent", "Advanced"];
  const progColor = ["#FFC657", "#35CEFF", "#34D399"];
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-base font-light text-clpg dark:text-cdpg">{name}</p>
      <div className="inline-flex items-center gap-3 sm:gap-4">
        <div className="justify-end hidden w-32 h-2 rounded-lg sm:inline-flex bg-clborder dark:bg-cdborder">
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

export const SkillItem = ({ icon, name, description }) => {
  return (
    <div className="basis-[264px] grow h-[111px] p-4  bg-clfg dark:bg-cdfg rounded-lg justify-center items-center inline-flex gap-3">
      <div className="flex items-center justify-center w-[32px] px-2">
        <LucideIcon name={icon} size={32} color="#FFF" />
      </div>
      <div className="inline-flex flex-col items-start justify-center grow shrink basis-0">
        <div className="text-base font-light text-white">{name}</div>
        <div className="text-sm font-light text-clgray dark:text-cdgray">
          {description}
        </div>
      </div>
    </div>
  );
};

export const SoftwareItem = ({ name, type, icon }) => {
  return (
    <div className="basis-[140px] grow h-[230px] p-3  bg-clfg dark:bg-cdfg rounded-lg flex-col gap-2.5 flex">
      <div className="justify-center items-center gap-2.5 flex w-full h-full">
        <img className="w-[72px]" src={`./images/${icon}.webp`} />
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="p-1.5 rounded-md border  border-clborder dark:border-cdborder justify-center items-start inline-flex">
          <div className="text-xs font-light text-clgray dark:text-cdgray">
            {type}
          </div>
        </div>
        <div className="text-base font-light text-clpg dark:text-cdpg">
          {name}
        </div>
      </div>
    </div>
  );
};
