'use client'

import { useState } from 'react'
import data from "./listdata.json"
import { AnimatePresence, motion } from "framer-motion";
import LucideIcon from './LucideIcon';

const NotesList = (props) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.course_code.toLowerCase().includes(props.input)
        }
    })

    const handleItemClick = (course_code) => {
        const url = `./notes/${course_code}.pdf`;
        if (window.innerWidth <= 1024) {
            window.open(url);
        } else {
            props.onItemClick(url);
        }
        handleItemSelect(course_code);
    }

    const handleItemSelect = (course_code) => {
        setSelectedItem(course_code);
    }

    return (
        <AnimatePresence mode='popLayout' className="flex flex-col gap-4">
            {filteredData.map((item) => (
                <motion.button
                    key={item.course_code}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    alt={item.course_code}

                    whileHover={{ scale: 1.02, translateX: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleItemClick(item.course_code)}
                    className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex  ${selectedItem === item.course_code ? 'bg-cfg' : 'hover:bg-cfg'}`}>
                    <div className={`w-10 h-10 ${item.WIP ? 'bg-red-500 opacity-70' : 'bg-cborder'} rounded-xl flex items-center justify-center ${selectedItem === item.course_code ? 'border-2 border-cgray' : ''}`}>
                        <LucideIcon name={item.icon} size="1rem" color="#FFF" />
                    </div>
                    <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
                        <div className="text-base font-light text-gray-200">{item.course_code} {item.WIP ? '(WIP)' : ''}</div>
                        <div className="self-stretch text-base font-light text-left text-cdarkgray">{item.name}<br />{item.year} {item.season}</div>
                    </div>
                </motion.button>
            ))}
        </AnimatePresence>
    )
}

export default NotesList;