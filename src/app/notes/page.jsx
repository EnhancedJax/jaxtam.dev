'use client';

import React, { useEffect, useState } from 'react';
import NotesList from "../../components/NotesList";
import SidebarLayout from "../../components/SidebarLayout";
import SidebarPanel from "../../components/SidebarPanel";
import { fadeIn, fadeInStagger } from "../../components/variants";
import { motion } from "framer-motion";

export default function Notes() {

    const [inputText, setInputText] = useState("");
    const [iframeUrl, setIframeUrl] = useState("");

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
            <SidebarLayout>
                <motion.div className="flex flex-col w-full gap-10"
                    variants={fadeInStagger}
                    initial="hidden"
                    animate="visible"
                    exit="hidden">
                    <div className="flex flex-col justify-center gap-2 pl-3">
                        <motion.div variants={fadeIn} className="text-xl font-light text-white lg:text-base">My University Notes</motion.div>
                        <motion.div variants={fadeIn} className="text-lg font-light text-cgray lg:text-base">Typed with LaTeX.</motion.div>
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
                            <NotesList input={inputText} onItemClick={handleItemClick} />
                        </motion.div>
                    </div>
                </motion.div>
            </SidebarLayout>
            <SidebarPanel>
                <motion.iframe variants={fadeIn} src={iframeUrl} width="100%" height="100%" />
            </SidebarPanel>
        </>
    )
}