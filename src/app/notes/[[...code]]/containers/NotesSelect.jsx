"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import DateString from "../../../../components/DateString";
import LucideIcon from "../../../../components/LucideIcon";
import { slideUp } from "../../../../utils/animations";
import { Context } from "../viewModel";

export default function NotesSelect({ setIsPanelOpen }) {
  const { inputHandler, handleItemClick, filteredData, selectedNoteCode } =
    useContext(Context);

  return (
    <div className="flex flex-col gap-3 grow">
      <motion.input
        variants={slideUp}
        id="outlined-basic"
        onChange={inputHandler}
        placeholder="Type to search by course code"
        type="text"
        className="w-full p-4  bg-border rounded-lg border  border-border flex-col justify-start items-start gap-2.5 flex  text-pg text-base font-light  placeholder-darkgray  focus:outline-none"
      />
      <motion.div variants={slideUp}>
        <ul className="flex flex-col w-full gap-4">
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <li key={item.node.code}>
                <motion.a
                  key={`link-${item.node.code}`}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  alt={item.node.code}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPanelOpen(false);
                    handleItemClick(item.node.code, item.node.pdf.url);
                  }}
                  href={`/notes/${item.node.code}`}
                  className={`group grow p-3 rounded-lg flex  ${
                    selectedNoteCode === item.node.code
                      ? " bg-fg "
                      : "hover:bg-fg hover:"
                  }`}
                >
                  <div
                    className={`w-10 h-10 mr-4 ${
                      item.node.isWorkInProgress
                        ? "opacity-70 bg-red-500"
                        : " bg-border "
                    }  rounded-xl flex items-center justify-center ${
                      selectedNoteCode === item.node.code
                        ? "border-2  border-gray "
                        : ""
                    }`}
                  >
                    <LucideIcon
                      name={item.node.icon}
                      size="1rem"
                      className="text-pg "
                    />
                  </div>
                  <div className="text-base font-light text-left grow">
                    <div className=" text-pg">
                      {item.node.code}{" "}
                      {item.node.isWorkInProgress ? "(WIP)" : ""}
                    </div>
                    <div className="w-48 h-auto text-darkgray text-ellipsis">
                      <p>{item.node.title}</p>
                    </div>
                    <div className="group-hover:hidden text-darkgray ">
                      {item.node.semester}
                    </div>
                    <div className="hidden group-hover:block text-darkgray ">
                      Last updated:{" "}
                      <DateString
                        dateString={item.node.pdf.updatedAt}
                        dateFormat="MMM dd"
                      />
                    </div>
                  </div>
                </motion.a>
              </li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
    </div>
  );
}
