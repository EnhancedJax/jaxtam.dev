"use client";

import React, { useState } from "react";
import NotesList from "./NotesList";
import OptViewPanel from "./OptViewPanel";
import OptViewLayout from "./OptViewLayout";
import { fadeIn, fadeInStagger } from "./variants.jsx";
import { motion } from "framer-motion";

import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

export default function Content({ notes }) {
  const [inputText, setInputText] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleItemClick = (url) => {
    setIframeUrl(url);
  };

return (
    <>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <OptViewPanel>
                <motion.div
                    className="flex flex-col w-full gap-10"
                    variants={fadeInStagger}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div className="flex flex-col justify-center gap-2 pl-3">
                        <motion.h1
                            variants={fadeIn}
                            className="text-xl font-light text-white lg:text-base"
                        >
                            My University Notes
                        </motion.h1>
                        <motion.div
                            variants={fadeIn}
                            className="text-lg font-light text-cgray lg:text-base"
                        >
                            Typed with LaTeX.
                        </motion.div>
                    </div>
                    <div className="self-stretch h-[466px] flex-col justify-start items-start gap-3 flex">
                        <motion.input
                            variants={fadeIn}
                            id="outlined-basic"
                            onChange={inputHandler}
                            placeholder="Type to search by course code"
                            type="text"
                            className="w-full p-4 bg-cborder rounded-lg border border-cborder flex-col justify-start items-start gap-2.5 flex text-cpg text-base font-light placeholder-cgray"
                        />
                        <motion.div variants={fadeIn}>
                            <NotesList
                                notes={notes}
                                input={inputText}
                                onItemClick={handleItemClick}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </OptViewPanel>
            <OptViewLayout>
                <div className="relative w-full h-full">
                    <div className=" left-[50%] w-[70%] mt-4 rounded-full bg-cpg shadow-lg px-4 py-2 absolute translate-x-[-50%] z-30">
                        <Toolbar/>
                    </div>
                    <Viewer fileUrl={iframeUrl} plugins={[toolbarPluginInstance]} initialPage={1} />
                </div>
            </OptViewLayout>
        </Worker>
    </>
);
}
