"use client"

import React, {useEffect, useRef} from 'react'
import styles from "./paragraph.module.scss"
import {useScroll, motion, useTransform} from "framer-motion"

function Animation({content}: {content: string}) {

    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start end', "center center", "end start"]
    })

    useEffect(() => {
        scrollYProgress.on("change", e => console.log(e));
    }, []);

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div style={{height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", textAlign: "center", lineHeight: "0.9"}}>
        <motion.p 
            className={styles.paragraph} 
            ref={element}
            style={{opacity}}
        >
            {content}
        </motion.p>
    </div>
  )
}

export default Animation