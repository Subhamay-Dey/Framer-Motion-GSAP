"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styles from "./word.module.scss";

export function WordAnimaion({ content }: { content: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = content.split(" ");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        lineHeight: "1",
      }}
    >
      <p className={styles.words} ref={element}>
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          // console.log([start, end]);

          return (
            <Wordd key={index} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Wordd>
          );
        })}
      </p>
    </div>
  );
}

const Wordd = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: number[];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
        <span className={styles.shadow}>{children}</span>
        <motion.span 
            style={{ opacity: opacity }} 
            className={styles.word}
        >
        {children}
        </motion.span>
    </span>
  );
};
