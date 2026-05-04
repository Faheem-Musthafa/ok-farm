"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = ImageProps & {
  parallaxSpeed?: number;
  zoom?: boolean;
};

export default function ParallaxImage({
  parallaxSpeed = 0.25,
  zoom = false,
  className = "",
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${parallaxSpeed * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, zoom ? 1.15 : 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className="absolute inset-0 -z-10 will-change-transform"
    >
      <Image {...rest} className={`${className}`} />
    </motion.div>
  );
}
