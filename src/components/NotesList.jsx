'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import LucideIcon from './LucideIcon';

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
        <AnimatePresence mode='popLayout' className="flex flex-col gap-4">
            {filteredData.map((item) => (
                <motion.button
                    key={item.node.code}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    alt={item.node.code}

                    whileHover={{ scale: 1.02, translateX: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleItemClick(item.node.code, item.node.pdf.url)}
                    className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex  ${selectedItem === item.node.code ? 'bg-cfg' : 'hover:bg-cfg'}`}>
                    <div className={`w-10 h-10 ${item.node.isWorkInProgress ? 'bg-red-500 opacity-70' : 'bg-cborder'} rounded-xl flex items-center justify-center ${selectedItem === item.node.code ? 'border-2 border-cgray' : ''}`}>
                        <LucideIcon name={item.node.icon} size="1rem" color="#FFF" />
                    </div>
                    <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
                        <div className="text-base font-light text-gray-200">{item.node.code} {item.node.isWorkInProgress ? '(WIP)' : ''}</div>
                        <div className="self-stretch text-base font-light text-left text-cdarkgray">{item.node.title}<br />{item.node.semester}</div>
                    </div>
                </motion.button>
            ))}
        </AnimatePresence>
    )
}

export default NotesList;