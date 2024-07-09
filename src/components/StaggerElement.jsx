"use client";

import { motion } from "framer-motion";

export default function StaggerElement({ children, ...props }) {
  return <motion.div {...props}>{children}</motion.div>;
}
