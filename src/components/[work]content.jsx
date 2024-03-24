"use client";

import SidebarLayout from "./SidebarLayout";
import { fadeIn, fadeInStagger, slideLeftSpring } from "./variants";
import { motion } from "framer-motion";
import React from 'react';
import Date from "./DateString";

const Content = ({ thisPost, nextPost }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

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
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="mb-4 font-semibold text-md">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <SidebarLayout>
      <motion.div
        className="flex flex-col items-center justify-start w-full gap-10"
        variants={fadeInStagger}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >

        <div className='mx-auto mt-8 px-4 max-w-[540px] w-full'>
          <img src={thisPost.heroImage.url} className="rounded-xl" />
          <h1 className="text-2xl font-bold">{thisPost.title}</h1>
          <p>{thisPost.excerpt}</p>
          {thisPost.categories.map((category, index) => (
              <div key={index}>
                  <p>{category.type}</p>
              </div>
          ))}
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
