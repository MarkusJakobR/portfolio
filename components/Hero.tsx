"use client";
import React from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { TextGenerateEffect } from './ui/text-generate-effect';
import { motion } from "motion/react";

const text_1 = "Hi! I'm ";
const highlt = "Markus";
const text_2 = "— a student passionate about UI/UX design and front-end development.";

const Hero = () => {
  return (
    <div className=''>
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-serif text-center">
                    <TextGenerateEffect 
                        words={[
                            { text: text_1, highlight: false },
                            { text: highlt, highlight: true },
                            { text: text_2, highlight: false }
                        ]}
                    />
                </div>
                <div className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-2">
                Turning ideas into reality.
                </div>
                <button className="bg-primary dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Debug now
                </button>
            </motion.div>
        </AuroraBackground>
    </div>
  )
}

export default Hero

