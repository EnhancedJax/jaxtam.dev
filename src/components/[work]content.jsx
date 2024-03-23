"use client";

import { useEffect } from "react";
import SidebarPanel from "./SidebarPanel";
import SidebarLayout from "./SidebarLayout";
import { fadeIn, fadeInStagger, slideLeftSpring, slideUp } from "./variants";
import { AnimatePresence, motion } from "framer-motion";

const Content = ({posts}) => {

  return (
    <>
      <SidebarPanel title="Work">
        <motion.div
          className="flex flex-col w-full gap-5"
          variants={fadeInStagger}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.h1
            variants={fadeIn}
            className="pl-3 text-base font-light text-white"
          >
            My work
          </motion.h1>
            <div className="flex flex-col gap-2">
              <motion.div
                variants={fadeIn}
                className="pl-3 text-base font-light text-cgray"
              >
                You're reading
              </motion.div>
          </div>
            <div className="flex flex-col gap-2">
              <motion.div
                variants={fadeIn}
                className="pl-3 text-base font-light text-cgray"
              >
                Up next
              </motion.div>
                {posts.map((post, index) => (
                    <motion.button
                        key={index}
                        variants={slideLeftSpring}

                        whileHover={{ scale: 1.02, translateX: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {}}
                        // ${selectedItem === item.course_code ? 'bg-cfg' : 'hover:bg-cfg'}
                        className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex hover:bg-cfg`}>
                        <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
                            <div className="text-base font-light text-gray-200">{post.node.title}</div>
                            <div className="self-stretch text-base font-light text-left text-cdarkgray">{post.node.excerpt}</div>
                        </div>
                    </motion.button>
                ))}
          </div>
      </motion.div>

      </SidebarPanel>
      <SidebarLayout>
        
      <motion.div
          className="flex flex-col items-center justify-start w-full gap-10"
          variants={fadeInStagger}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.div variants={fadeIn}>
            <div
              className="self-stretch text-base font-light text-cpg">I'm Jax, a year 1 student studying at The University of Hong Kong.<br /><br />My passion is to deliver clean designs and user-oriented experiences that exceed expectations.<br /><br />I believe my attention to detail and dedication to excellence will allow me to thrive in the future.
            </div>
          </motion.div>
        </motion.div>
      </SidebarLayout>
    </>
  );
};

export default Content;
