"use client";

import SidebarLayout from "./SidebarLayout";
import { slideUp, fadeInStagger } from "./variants";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Date from "./DateString";
import { CodeBlock, CopyBlock, codepen } from 'react-code-blocks';

const Content = ({ thisPost }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    // console.log(obj, text, type);
    
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.code) {
        modifiedText = <code className="border-[1px] p-1 border-cborder rounded-sm" key={index}>{text}</code>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <motion.h2 variants={slideUp} key={index} className="mt-8 text-lg text-cgray">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </motion.h2>
        );
      case "paragraph":
        return (
          <motion.p variants={slideUp} key={index} className="mt-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </motion.p>
        );
      case "image":
        return (
          <motion.img
          variants={slideUp}
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className="mt-8 rounded-xl"
          />
        );
        case "code-block":
          console.log(modifiedText);
          return (
            <motion.div
              variants={slideUp}
              key={index}
              className="mt-4 border-[1px] p-4 border-cborder rounded-xl overflow-hidden"
            >
              <CopyBlock
                text={modifiedText[0].replace(/^.*?\n/, '')}
                language={modifiedText[0].split('\n')[0]}
                showLineNumbers={true}
                theme={codepen}
                wrapLongLines={true}
              />
            </motion.div>
          );
      default:
        return modifiedText;
    }
  };

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
          </div>
          {thisPost.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </motion.div>
    </SidebarLayout>
  );
};

export default Content;
