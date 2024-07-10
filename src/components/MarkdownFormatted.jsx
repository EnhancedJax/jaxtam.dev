"use client";

import { motion } from "framer-motion";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { slideUp } from "../utils/animations";
import { DM_MONO_FAMILY } from "../utils/constants";

const MarkdownFormatted = ({ children, className }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className={`text-base font-light leading-relaxed ${className}`}
      components={{
        h1(props) {
          const { node, ...rest } = props;
          return (
            <motion.h1
              variants={slideUp}
              className="mt-2 mb-5 text-lg font-light text-cgray"
              {...rest}
            />
          );
        },
        h2(props) {
          const { node, ...rest } = props;
          return (
            <motion.h2
              variants={slideUp}
              className="mt-2 mb-5 font-light text-md text-cgray"
              {...rest}
            />
          );
        },
        h3(props) {
          const { node, ...rest } = props;
          return (
            <motion.h3
              variants={slideUp}
              className="mt-2 mb-5 text-base font-light text-cgray"
              {...rest}
            />
          );
        },
        p(props) {
          const { node, ...rest } = props;
          return <motion.p variants={slideUp} className="mb-5 " {...rest} />;
        },
        a(props) {
          const { node, ...rest } = props;
          return (
            <motion.span
              className="inline-block"
              initial={{ scale: 1, translateY: 0, color: "#93c5fd" }}
              whileHover={{ scale: 1.05, translateY: -2, color: "#3b82f6" }}
              whileTap={{ scale: 0.95, translateY: 0 }}
            >
              <a className="font-normal" {...rest} />
            </motion.span>
          );
        },
        hr(props) {
          const { node, ...rest } = props;
          return (
            <motion.hr
              variants={slideUp}
              className="mb-5 border-cdarkgray"
              {...rest}
            />
          );
        },
        ol(props) {
          const { node, ...rest } = props;
          return (
            <motion.ol
              variants={slideUp}
              className="pl-5 mb-5 list-decimal"
              {...rest}
            />
          );
        },
        ul(props) {
          const { node, ...rest } = props;
          return (
            <motion.ul
              variants={slideUp}
              className="pl-5 mb-5 list-disc"
              {...rest}
            />
          );
        },
        li(props) {
          const { node, ...rest } = props;
          return <li className="mb-2" {...rest} />;
        },
        img(props) {
          const { node, ...rest } = props;
          return (
            <div className="flex justify-center w-full">
              <motion.img variants={slideUp} className="rounded-lg" {...rest} />
            </div>
          );
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div className="rounded-lg overflow-clip">
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            </div>
          ) : (
            <code
              className={`border-[1px] text-sm p-1 border-cborder rounded-lg ${DM_MONO_FAMILY.className}`}
              {...rest}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default MarkdownFormatted;
