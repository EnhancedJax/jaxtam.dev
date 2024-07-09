"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import DateString from "../../../components/DateString";
import LucideIcon from "../../../components/LucideIcon";
import { fadeIn } from "../../../utils/animations";
import { Context } from "../viewModel";

export default function NotesSelect() {
  const {
    inputText,
    inputHandler,
    handleItemClick,
    filteredData,
    selectedItem,
  } = useContext(Context);

  return (
    <div className="flex flex-col gap-3 grow">
      <motion.input
        variants={fadeIn}
        id="outlined-basic"
        onChange={inputHandler}
        placeholder="Type to search by course code"
        type="text"
        className="w-full p-4 bg-cborder rounded-lg border border-cborder flex-col justify-start items-start gap-2.5 flex text-cpg text-base font-light placeholder-cgray"
      />
      <motion.div variants={fadeIn}>
        <AnimatePresence mode="popLayout">
          <div className="flex flex-col w-full gap-4">
            {filteredData.map((item) => (
              <motion.button
                key={item.node.code}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                alt={item.node.code}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  handleItemClick(item.node.code, item.node.pdf.url)
                }
                className={`group grow p-3 rounded-lg flex  ${
                  selectedItem === item.node.code ? "bg-cfg" : "hover:bg-cfg"
                }`}
              >
                <div
                  className={`w-10 h-10 mr-4 ${
                    item.node.isWorkInProgress
                      ? "opacity-70 bg-red-500"
                      : "bg-cborder"
                  }  rounded-xl flex items-center justify-center ${
                    selectedItem === item.node.code
                      ? "border-2 border-cgray"
                      : ""
                  }`}
                >
                  <LucideIcon name={item.node.icon} size="1rem" color="#FFF" />
                </div>
                <div className="text-base font-light text-left grow">
                  <div className="text-cpg">
                    {item.node.code} {item.node.isWorkInProgress ? "(WIP)" : ""}
                  </div>
                  <div className="w-48 h-auto text-cdarkgray text-ellipsis">
                    <p>{item.node.title}</p>
                  </div>
                  <div className="group-hover:hidden text-cdarkgray">
                    {item.node.semester}
                  </div>
                  <div className="hidden group-hover:block text-cdarkgray">
                    Last updated:{" "}
                    <DateString
                      dateString={item.node.pdf.updatedAt}
                      dateFormat="MMM dd"
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
