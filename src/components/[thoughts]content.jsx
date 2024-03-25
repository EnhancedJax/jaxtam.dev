"use client";

import SidebarLayout from "./SidebarLayout";
import { slideUp, fadeInStagger } from "./variants";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Date from "./DateString";

import MarkdownFormatted from './MarkdownFormatted'

const Content = ({ thisPost }) => {

  return (
    <SidebarLayout>
      <motion.div
        className="w-full text-base font-light"
        variants={fadeInStagger}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="mx-auto mt-8 px-4 max-w-[540px] w-full">
          <img
            src={thisPost.heroImage.url}
            className="w-full mb-8 rounded-xl"
          />
          <div className="flex flex-col gap-4">
            <motion.p variants={slideUp} className="text-cgray">
              <Date dateString={thisPost.createdAt} dateFormat="dd/MM/yyyy" />
            </motion.p>
            <motion.h1 variants={slideUp} className="text-xl">
              {thisPost.title}
            </motion.h1>
            {thisPost.categories.map((category, index) => (
              <motion.p
                variants={slideUp}
                className="py-1 px-2 w-min text-cgray border-[1px] border-cborder rounded-md text-sm"
                key={index}
              >
                {category.type.toUpperCase()}
              </motion.p>
            ))}
            <MarkdownFormatted>{thisPost.content}</MarkdownFormatted>
          </div>
        </div>
      </motion.div>
    </SidebarLayout>
  );
};

export default Content;
