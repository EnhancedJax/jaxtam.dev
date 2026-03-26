"use client";

import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import Link from "next/link";
import ExpandingA from "../../../components/ExpandingA";
import { useT } from "../../../i18n/I18nProvider";
import { slideLeft, slideRight, slideUp } from "../../../utils/animations";

const ActionButtons = () => {
  const t = useT();
  return (
    <motion.div
      className="flex flex-col gap-3 justify-center items-center w-full px-8 md:w-[640px]"
      variants={slideUp}
    >
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <motion.a
          variants={slideLeft}
          initial="hidden"
          animate={"visible"}
          className="flex min-w-0 flex-1 self-stretch h-[38px] py-2 cursor-pointer bg-pg rounded-full justify-center items-center gap-2.5 border border-border "
          whileHover={{ scale: 1.05, translateY: -4 }}
          whileTap={{ scale: 0.95, translateY: -2 }}
          href="mailto:jax.lytam@gmail.com"
        >
          <HandshakeIcon size={20} className="text-bg" weight="fill" />
          <p className="font-light text-bg">{t("hireMe")}</p>
        </motion.a>
        {/* <div className="hidden font-light text-gray md:block">or</div> */}
        <ExpandingA
          variants={slideRight}
          initial="hidden"
          animate={"visible"}
          whileHover={{ scale: 1.05, translateY: -5 }}
          whileTap={{ scale: 0.95, translateY: -2 }}
          href="/applications/Resume.pdf"
          expandClassName="bg-fg rounded-none"
          className="flex min-w-0 flex-1 self-stretch h-[38px] py-2 cursor-pointer bg-fg rounded-full border border-border justify-center items-center gap-2.5"
        >
          <p className="font-light text-pg" variants={slideUp}>
            {t("getResume")}
          </p>
        </ExpandingA>
      </div>
      <div className="flex flex-row items-center justify-center gap-3 text-sm font-light text-gray">
        <Link href="/" className="transition-colors hover:text-pg">
          EN
        </Link>
        <span className="text-border" aria-hidden>
          |
        </span>
        <Link href="/hk" className="transition-colors hover:text-pg">
          廣東話
        </Link>
      </div>
    </motion.div>
  );
};

export default ActionButtons;
