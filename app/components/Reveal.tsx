"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur" | "fade";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
  distance?: number;
  once?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function buildVariants(v: RevealVariant, distance: number): Variants {
  switch (v) {
    case "down":
      return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
    case "left":
      return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
    case "scale":
      return { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } };
    case "blur":
      return {
        hidden: { opacity: 0, filter: "blur(12px)", y: distance / 2 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 },
      };
    case "fade":
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    case "up":
    default:
      return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
  }
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  duration = 0.7,
  distance = 24,
  once = true,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -6% 0px" }}
      variants={buildVariants(variant, distance)}
      transition={{
        duration,
        ease: EASE,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
