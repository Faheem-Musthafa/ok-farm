"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  speed?: number;
  className?: string;
  scale?: boolean;
};

export default function Parallax({
  children,
  speed = 0.3,
  className = "",
  scale = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const s = useTransform(scrollYProgress, [0, 1], [1, scale ? 1.18 : 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale: s }} className="will-change-transform h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
