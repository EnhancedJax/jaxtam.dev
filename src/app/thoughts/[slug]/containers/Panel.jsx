"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Date from "../../../../components/DateString";
import SidebarPanel from "../../../../components/SidebarPanel";
import { slideSpring, slideUp } from "../../../../utils/animations";
import { useAppContext } from "../../../provider";

const Panel = ({ thisPost, posts }) => {
  const { togglePageAnimate, handleSetHRef } = useAppContext();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <SidebarPanel
      title="Thoughts"
      isOpen={isPanelOpen}
      setIsOpen={setIsPanelOpen}
    >
      <nav aria-label="Blog posts navigation">
        <motion.h2
          variants={slideUp}
          className="pl-3 mb-1 text-base font-light text-pg"
        >
          Thoughts
        </motion.h2>
        <section aria-label="Current post">
          <motion.h3
            variants={slideUp}
            className="pl-3 mb-4 text-base font-light text-gray"
          >
            You're reading
          </motion.h3>

          <motion.article
            variants={slideSpring["left"]}
            className="inline-flex items-start justify-start w-full gap-4 p-3 mb-4 rounded-lg bg-fg"
          >
            <div className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
              <h4 className="text-gray">{thisPost.title}</h4>
              <div className="mt-1 text-darkgray">
                <time dateTime={thisPost.createdAt}>
                  <Date
                    dateString={thisPost.createdAt}
                    dateFormat="dd/MM/yyyy"
                  />
                </time>
                {" ⋅ "}
                <span>{thisPost.categories[0].type}</span>
              </div>
            </div>
          </motion.article>
        </section>
        <section aria-label="Suggested posts">
          <motion.h3
            variants={slideUp}
            className="pl-3 text-base font-light text-gray"
          >
            Up next
          </motion.h3>
          <ul className="flex flex-col gap-2 p-0 list-none">
            {posts.map((post, index) => (
              <li key={index}>
                <motion.a
                  href={`/thoughts/${post.node.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetHRef(`/thoughts/${post.node.slug}`);
                    togglePageAnimate();
                  }}
                  variants={slideSpring["left"]}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full gap-4 p-3 rounded-lg hover:bg-fg"
                >
                  <article className="inline-flex flex-col items-start justify-start text-base font-light text-left grow">
                    <h4 className="text-pg">{post.node.title}</h4>
                    <div className="mt-1 text-darkgray">
                      <time dateTime={post.node.createdAt}>
                        <Date
                          dateString={post.node.createdAt}
                          dateFormat="dd/MM/yyyy"
                        />
                      </time>
                      {" ⋅ "}
                      <span>{post.node.categories[0].type}</span>
                    </div>
                  </article>
                </motion.a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </SidebarPanel>
  );
};

export default Panel;
