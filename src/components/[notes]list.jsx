'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import LucideIcon from './LucideIcon';
import DateString from './DateString';

const NotesList = ({notes, onItemClick, input}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const filteredData = notes.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the items which contains the user input
        else {
            return el.node.code.toLowerCase().includes(input)
        }
    })

    const handleItemClick = (code, url) => {
        if (window.innerWidth <= 1024) {
            window.open(url);
        } else {
            onItemClick(url);
        }
        setSelectedItem(code);
    }

    useEffect(() => {
        setSelectedItem(notes[0].node.code);
        onItemClick(notes[0].node.pdf.url);
    } , [notes])

    return (
        <AnimatePresence mode='popLayout'>
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
                    onClick={() => handleItemClick(item.node.code, item.node.pdf.url)}
                    className={`group grow p-3 rounded-lg flex  ${selectedItem === item.node.code ? 'bg-cfg' : 'hover:bg-cfg'}`}>
                    <div className={`w-10 h-10 mr-4 ${item.node.isWorkInProgress ? 'opacity-70 bg-red-500' : 'bg-cborder'}  rounded-xl flex items-center justify-center ${selectedItem === item.node.code ? 'border-2 border-cgray' : ''}`}>
                        <LucideIcon name={item.node.icon} size="1rem" color="#FFF" />
                    </div>
                    <div className="text-base font-light text-left grow">
                        <div className="text-cpg">{item.node.code} {item.node.isWorkInProgress ? '(WIP)' : ''}</div>
                        <div className="w-48 h-auto text-cdarkgray text-ellipsis"><p>{item.node.title}</p></div>
                        <div className="group-hover:hidden text-cdarkgray">{item.node.semester}</div>
                        <div className="hidden group-hover:block text-cdarkgray">Last updated: <DateString dateString={item.node.pdf.updatedAt} dateFormat="MMM dd"/></div>
                    </div>
                </motion.button>
            ))}
            </div>
        </AnimatePresence>
    )
}

export default NotesList;