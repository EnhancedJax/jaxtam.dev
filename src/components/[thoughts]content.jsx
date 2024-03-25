"use client";

import SidebarLayout from "./SidebarLayout";
import { slideUp, fadeInStagger } from "./variants";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Date from "./DateString";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import { DM_Mono } from "next/font/google";
const dmmono = DM_Mono({ weight: "300", subsets: ["latin"] });

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
            <Markdown 
           remarkPlugins={[remarkGfm]}
           className="text-base font-light"  
           components={{
            h1(props) {
              const {node, ...rest} = props
              return <motion.h1 variants={slideUp} className="text-lg font-light mt-7 text-cgray" {...rest} />
            }
            ,
            p(props) {
              const {node, ...rest} = props
              return <motion.p variants={slideUp} className="mt-5 " {...rest} />
            },
            a(props) {
              const {node, ...rest} = props
              return (
                <motion.div
                className="inline-block"
                initial={{ scale: 1, translateY: 0, color: "#93c5fd" }}
                whileHover={{ scale: 1.05, translateY: -2, color: "#3b82f6" }}
                whileTap={{ scale: 0.95, translateY: 0}}
                >
                  <a className="font-normal"  {...rest} />
                </motion.div>
              )
            },
            hr(props) {
              const {node, ...rest} = props
              return <motion.hr variants={slideUp} className="mt-5 border-cdarkgray" {...rest} />
            }
            ,
            ol(props) {
              const {node, ...rest} = props
              return <motion.ol variants={slideUp} className="pl-5 mt-5 list-decimal"  {...rest} />
            },
            ul(props) {
              const {node, ...rest} = props
              return <motion.ul variants={slideUp} className="pl-5 mt-5 list-disc"  {...rest} />
            },
            li(props) {
              const {node, ...rest} = props
              return <li className="mb-2"  {...rest} />
            },
            img(props) {
              const {node, ...rest} = props
              return (
                <div className="flex justify-center w-full">
                  <motion.img variants={slideUp} className="rounded-lg" {...rest} />
                </div>
              )
            },
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <div className="rounded-lg overflow-clip">
                  <SyntaxHighlighter
                    {...rest}
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                  />
                </div>
              ) : (
                <code className={`border-[1px] text-sm p-1 border-cborder rounded-lg ${dmmono.className}`} {...rest}>{children}</code>
              )
            }
          }}>{
           thisPost.content}</Markdown>
          </div>
        </div>
      </motion.div>
    </SidebarLayout>
  );
};

export default Content;
