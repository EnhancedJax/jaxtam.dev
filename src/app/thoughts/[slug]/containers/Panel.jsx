"use client";

import { motion } from "framer-motion";
import Date from "../../../../components/DateString";
import SidebarPanel from "../../../../components/SidebarPanel";
import { slideSpring, slideUp } from "../../../../utils/animations";
import { useAppContext } from "../../../provider";

const Panel = ({ thisPost, posts }) => {
  const { togglePageAnimate, handleSetHRef } = useAppContext();

  return (
    <SidebarPanel title="Thoughts">
      <motion.h1
        variants={slideUp}
        className="pl-3 mb-1 text-base font-light text-clpg dark:text-cdpg"
      >
        Thoughts
      </motion.h1>
      <div className="flex flex-col gap-2 mb-2">
        <motion.div
          variants={slideUp}
          className="pl-3 text-base font-light text-clgray dark:text-cdgray"
        >
          You're reading
        </motion.div>

        <motion.div
          variants={slideSpring["left"]}
          className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex  bg-clfg dark:bg-cdfg`}
        >
          <div className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
            <div className="text-clgray dark:text-cdgray ">
              {thisPost.title}
            </div>
            <div className="mt-1 text-cldarkgray dark:text-cddarkgray">
              <Date dateString={thisPost.createdAt} dateFormat="dd/MM/yyyy" /> ⋅{" "}
              {thisPost.categories[0].type}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2">
        <motion.div
          variants={slideUp}
          className="pl-3 text-base font-light text-clgray dark:text-cdgray"
        >
          Up next
        </motion.div>
        {posts.map((post, index) => (
          <motion.button
            key={index}
            variants={slideSpring["left"]}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              handleSetHRef(`/thoughts/${post.node.slug}`);
              togglePageAnimate();
            }}
            className={`w-full p-3 rounded-lg gap-4 inline-flex hover:bg-clfg hover:dark:bg-cdfg`}
          >
            <div className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
              <div className="text-clgray dark:text-cdgray ">
                {post.node.title}
              </div>
              <div className="mt-1 text-cldarkgray dark:text-cddarkgray">
                <Date
                  dateString={post.node.createdAt}
                  dateFormat="dd/MM/yyyy"
                />{" "}
                ⋅ {post.node.categories[0].type}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </SidebarPanel>
  );
};

export default Panel;
