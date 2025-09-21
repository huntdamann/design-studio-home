"use client"

import React, { useState, forwardRef } from "react"
import { motion } from "motion/react"
import styles from '../css/HeroSection.module.css'
import  AnimatedCounter  from '../components/custom/AnimatedCounter'

import { useInView } from 'react-intersection-observer';


function SuperscriptButton({ text, link }) {
    return (
      <motion.sup
      
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 2}}
      viewport={{once: true}}
      >
    
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-0.5 rounded bg-gray-500 text-white text-xs font-bold hover:bg-indigo-700 transition"
        >
          {text}
        </a>
      </motion.sup>
    );
  }

const HowWeCreateSection = forwardRef((props, ref) =>  { 

    const howWeCreateBullets = ["1. Refine, don't reinvent", '2. Precision over excess', '3. Sustainable evolution'] 
    
    
    return (
        <>
        <section ref={ref} className="min-h-[100dvh] text-center flex flex-col justify-center p-2 items-center gap-9">

            <h1>How We Create</h1>

        <div className="flex flex-col text-[1rem] gap-3">

          {
                howWeCreateBullets.map((n, index) => (
                    <motion.span initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{amount: 'all'}} key={index}>
                        {n}
                    </motion.span>
                    
                ))
            }
            
        </div>

        <div className=" text-center flex flex-col items-center px-4 sm:px-8">
  <h2 className=" mb-6 text-lg sm:text-xl">Why?</h2>

  {/* Block 1 */}
  <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-4">
    <AnimatedCounter finalValue={23} />
    <motion.span
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-xs sm:text-sm flex flex-col gap-2 uppercase text-center sm:text-left"
    >
      revenue increase from consistent branding
      <SuperscriptButton
        text="Millennium"
        link="https://mill.agency/creative/why-branding-critical-scaling-business/"
      />
    </motion.span>
  </div>

  {/* Block 2 */}
  <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-4">
    <AnimatedCounter finalValue={31} />
    <motion.span
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="uppercase flex flex-col gap-2 text-center sm:text-left text-sm"
    >
      Market share gain with strong branding
    </motion.span>
  </div>

  {/* Block 3 */}
  <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-4">
    <AnimatedCounter finalValue={77} />
    <motion.span
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="uppercase flex flex-col gap-2 text-center sm:text-left text-sm"
    >
      of customers buy from recognized brands
      <SuperscriptButton
        text="Forbes"
        link="https://www.forbes.com/councils/theyec/2021/04/15/the-power-of-branding-in-2021/"
      />
    </motion.span>
  </div>

  {/* Block 4 */}
  <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4">
    <AnimatedCounter finalValue={94} />
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="uppercase flex flex-col gap-2 text-center sm:text-left text-sm"
    >
      of first impressions are design-related
      <SuperscriptButton
        text="Forbes"
        link="https://www.forbes.com/councils/forbestechcouncil/2024/09/03/mastering-the-art-of-the-first-impression-building-a-lasting-brand-legacy/"
      />
    </motion.span>
  </div>
</div>

        </section>
        



        </>
    )
}
)
export default HowWeCreateSection;