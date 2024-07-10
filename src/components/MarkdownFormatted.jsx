import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
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
            <h1
              className="mt-2 mb-5 text-lg font-light  text-gray "
              {...rest}
            />
          );
        },
        h2(props) {
          const { node, ...rest } = props;
          return (
            <h2
              className="mt-2 mb-5 font-light text-md  text-gray "
              {...rest}
            />
          );
        },
        h3(props) {
          const { node, ...rest } = props;
          return (
            <h3
              className="mt-2 mb-5 text-base font-light  text-gray "
              {...rest}
            />
          );
        },
        p(props) {
          const { node, ...rest } = props;
          return <p className="mb-5 " {...rest} />;
        },
        a(props) {
          const { node, ...rest } = props;
          return (
            <span className="inline-block md-link-animation">
              <a className="font-normal" {...rest} />
            </span>
          );
        },
        hr(props) {
          const { node, ...rest } = props;
          return <hr className="mb-5  border-darkgray " {...rest} />;
        },
        ol(props) {
          const { node, ...rest } = props;
          return <ol className="pl-5 mb-5 list-decimal" {...rest} />;
        },
        ul(props) {
          const { node, ...rest } = props;
          return <ul className="pl-5 mb-5 list-disc" {...rest} />;
        },
        li(props) {
          const { node, ...rest } = props;
          return <li className="mb-2" {...rest} />;
        },
        img(props) {
          const { node, ...rest } = props;
          return (
            <div className="flex justify-center w-full">
              <img className="rounded-lg" {...rest} />
            </div>
          );
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <div className="rounded-lg overflow-ip">
              <SyntaxHighlighter
                {...rest}
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            </div>
          ) : (
            <code
              className={`border-[1px] text-sm p-1  border-border rounded-lg ${DM_MONO_FAMILY.className}`}
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
