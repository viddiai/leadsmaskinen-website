"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const directionOffset = {
  up: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
};

export function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.1, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
