"use client";

import SidebarPanel from "./SidebarPanel";
import { fadeIn, fadeInStagger, slideLeftSpring } from "./variants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Panel = ({ thisPost, posts }) => {
  const router = useRouter();

  return (
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

            <motion.div
              variants={slideLeftSpring}
              className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex bg-cfg`}
            >
              <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
                <div className="text-base font-light text-gray-200">
                  {thisPost.title}
                </div>
                <div className="self-stretch text-base font-light text-left text-cdarkgray">
                  {thisPost.excerpt}
                </div>
              </div>
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/work/${post.node.slug}`)}
                // ${selectedItem === item.course_code ? 'bg-cfg' : 'hover:bg-cfg'}
                className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex hover:bg-cfg`}
              >
                <div className="inline-flex flex-col items-start justify-start grow shrink basis-0">
                  <div className="text-base font-light text-gray-200">
                    {post.node.title}
                  </div>
                  <div className="self-stretch text-base font-light text-left text-cdarkgray">
                    {post.node.excerpt}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </SidebarPanel>
  );
};

export default Panel;
