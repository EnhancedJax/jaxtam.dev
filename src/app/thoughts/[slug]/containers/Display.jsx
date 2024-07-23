"use client";

import { motion } from "framer-motion";
import Date from "../../../../components/DateString";
import SidebarLayout from "../../../../components/SidebarLayout";
import { slideUp, staggerParent } from "../../../../utils/animations";

import MarkdownFormatted from "../../../../components/MarkdownFormatted";

const Content = ({ thisPost }) => {
  return (
    <SidebarLayout>
      <motion.div
        className="w-full text-base font-light"
        variants={staggerParent()}
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
            <motion.p variants={slideUp} className=" text-gray ">
              <Date dateString={thisPost.createdAt} dateFormat="dd/MM/yyyy" />
            </motion.p>
            <motion.h1 variants={slideUp} className="text-xl">
              {thisPost.title}
            </motion.h1>
            <motion.div variants={slideUp}>
              {thisPost.categories.map((category, index) => (
                <p
                  className="py-1 px-2 w-min  text-gray border-[1px]  border-border rounded-md text-sm"
                  key={index}
                >
                  {category.type.toUpperCase()}
                </p>
              ))}
              {thisPost.propTimeline && (
                <div className="my-6">
                  <div className="flex mt-2">
                    <p className="w-20 text-gray ">Timeline</p>
                    <span className="w-fill">{thisPost.propTimeline}</span>
                  </div>
                  <div className="flex mt-2">
                    <p className="w-20 text-gray ">Role</p>
                    <span className="w-fill">{thisPost.propRole}</span>
                  </div>
                  <div className="flex mt-2">
                    <p className="min-w-20 text-gray ">Outcome</p>
                    <div className="grow">
                      <p className="text-wrap ">{thisPost.propOutcome}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
            <motion.div variants={slideUp}>
              <MarkdownFormatted>{thisPost.content}</MarkdownFormatted>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SidebarLayout>
  );
};

export default Content;
