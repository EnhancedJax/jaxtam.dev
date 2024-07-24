"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Date from "../../../../components/DateString";
import MarkdownFormatted from "../../../../components/MarkdownFormatted";
import SidebarLayout from "../../../../components/SidebarLayout";
import { slideUp, staggerParent } from "../../../../utils/animations";

const Content = ({ thisPost }) => {
  return (
    <SidebarLayout>
      <motion.article
        className="w-full text-base font-light"
        variants={staggerParent()}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="mx-auto mt-8 px-4 max-w-[540px] w-full">
          <div className="relative w-full h-[300px] mb-8">
            <Image
              src={thisPost.heroImage.url}
              alt={`Hero image of "${thisPost.title}"`}
              className="object-cover rounded-xl "
              fill={true}
            />
          </div>
          <div className="flex flex-col gap-4">
            <motion.time
              variants={slideUp}
              className="text-gray"
              dateTime={thisPost.createdAt}
            >
              <Date dateString={thisPost.createdAt} dateFormat="dd/MM/yyyy" />
            </motion.time>
            <motion.h1 variants={slideUp} className="text-xl">
              {thisPost.title}
            </motion.h1>
            <motion.div variants={slideUp}>
              {thisPost.categories.map((category, index) => (
                <span
                  className="py-1 px-2 w-min text-gray border-[1px] border-border rounded-md text-sm inline-block mr-2"
                  key={index}
                >
                  {category.type.toUpperCase()}
                </span>
              ))}
              {thisPost.props && (
                <dl className="my-6">
                  {Object.entries(thisPost.props).map(([key, value], index) => (
                    <div className="flex mt-2" key={`Props-${key}`}>
                      <dt className="min-w-20 text-gray">{key}</dt>
                      <dd className="w-fill">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </motion.div>
            <motion.div variants={slideUp}>
              <MarkdownFormatted>{thisPost.content}</MarkdownFormatted>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </SidebarLayout>
  );
};

export default Content;
