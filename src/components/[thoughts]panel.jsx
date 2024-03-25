"use client";

import Date from "./DateString";
import SidebarPanel from "./SidebarPanel";
import { fadeIn, fadeInStagger, slideSpring } from "./variants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Panel = ({ thisPost, posts }) => {
  const router = useRouter();

  return (
    <SidebarPanel title="Thoughts">
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
          Thoughts
        </motion.h1>
        <div className="flex flex-col gap-2">
          <motion.div
            variants={fadeIn}
            className="pl-3 text-base font-light text-cgray"
          >
            You're reading
          </motion.div>

          <motion.div
            variants={slideSpring['left']}
            className={`w-full p-3 rounded-lg justify-start items-start gap-4 inline-flex bg-cfg`}
          >
            <div className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
              <div className="text-gray-200 ">{thisPost.title}</div>
              <div className="mt-1 text-cdarkgray">
                <Date dateString={thisPost.createdAt} dateFormat="dd/MM/yyyy" />{" "}
                ⋅ {thisPost.categories[0].type}
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
              variants={slideSpring['left']}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push(`/thoughts/${post.node.slug}`)}
              // ${selectedItem === item.course_code ? 'bg-cfg' : 'hover:bg-cfg'}
              className={`w-full p-3 rounded-lg gap-4 inline-flex hover:bg-cfg`}
            >
              <div className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
                <div className="text-gray-200 ">{post.node.title}</div>
                <div className="mt-1 text-cdarkgray">
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
      </motion.div>
    </SidebarPanel>
  );
};

export default Panel;
