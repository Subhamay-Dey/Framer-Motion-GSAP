"use client"

import React, { useEffect, useRef } from 'react';
import styles from "./text.module.scss";
import {gsap} from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function useArrayRef<T>() {
    const refs = useRef<T[]>([]);

    const setRef = (ref: T | null) => {
        if (ref && !refs.current.includes(ref)) {
            refs.current.push(ref);
        }
    };

    return [refs, setRef] as const;
}

function Textsplit() {

    const [lettersRef, setLettersRef] = useArrayRef();

    const triggerRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        if (lettersRef.current.length === 0) return;
        const reveal = gsap.to(lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top 80%",
                    end: "bottom center",
                },
                color: "white",
                duration: 8,
                stagger: 1,
            }
        )

        return () => {
            reveal.kill();
        }
    }, [lettersRef])
    

    const text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout that a reader will be distracted by the readable content."

  return (
    <>
        <div className='h-[100vh]'></div>
            <div className={styles.reveal}>
                <div ref={triggerRef}>
                    {text.split("").map((letter, index) => (
                        <span className={styles.reveal_text} key={index} ref={setLettersRef}>{letter}</span>
                    ))}
                </div>
            </div>
        <div className='h-[100vh]'></div>
    </>
  )
}

export default Textsplit