"use client"

import React, { useState, forwardRef } from "react"
import { motion } from "motion/react"
import styles from '../css/HeroSection.module.css'
import { useInView } from 'react-intersection-observer';

import { AuroraBackground } from "../components/ui/aurora-background";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";

const EnterScreen = forwardRef( ({ onFinish }, ref) =>  { 




    const handleEnter = () => {
        onFinish(); // tells parent that preloader is done
      };

    return (

        <>
        
        <section ref={ref} id="prescreen" className="w-screen h-screen fixed z-[1000]">


            <CardContainer className="inter-var">
            <CardBody className="bg-transparent flex flex-col items-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-green-50/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 ">
                <CardItem
                translateZ="50"
                className="text-xl text-center font-bold text-neutral-600 dark:text-white"
                >
                    WELCOME
                </CardItem>
                
                <CardItem
                translateZ="100"
                rotateX={10}
                rotateZ={10}
                className="w-full mt-4"
                >
                <img
                    src="/picture/HD_logo_nobg.png"
                    height="500"
                    width="500"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                </CardItem>
                <div onClick={handleEnter} className="flex justify-between items-center mt-20">
                
                <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 cursor-pointer rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                    Enter
                </CardItem>
                </div>
            </CardBody>
            </CardContainer>        
    
    </section>
        </>
    )

}
)

export default EnterScreen;