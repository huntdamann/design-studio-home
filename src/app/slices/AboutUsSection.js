"use client"

import React, { useState, forwardRef } from "react"
import { motion } from "motion/react"
import styles from '../css/HeroSection.module.css'
import { useInView } from 'react-intersection-observer';

import { AuroraBackground } from "../components/ui/aurora-background";


const AboutUsSection = forwardRef( (props, ref) =>  { 

AboutUsSection.displayName = "Who We Are"
    const [isClicked, setIsClicked] = useState(false)
    const aboutBullets = ['Human-centered creativity', 'Intentional Design', 'Results-driven'] 


    const handleClick = () => {
        setIsClicked(prev => !prev)
    }
    return (
        <>
        <AuroraBackground className="flex relative items-center overflow-hidden min-h-screen w-full justify-center" >



        <section ref={ref} className="w-[40%] h-full z-50 flex flex-col bg-transparent rounded-sm lg:bg-white text-white lg:text-black items-center text-center">


        



            

            <h2>Who we are.</h2>


            <div className="mt-[2rem] text-center w-[15rem] md:w-[33rem]">

            <p>
                The human mind is arguably the most remarkable creation known to man. At HumannDesign, we believe that with imagination 
                and a spark of creativity, anything is possible.
            </p>
            <p>
                Our team is made up of professional developers, freelance experts, and passionate hobbyists, all collaborating to craft exceptional web experiences and 
                more that are tailored to meet the unique needs of our clients.
                Let us bring your creative experience to life.
            </p>

            </div>

            <ul className="gap-3 flex mt-[5rem] flex-col justify-around">

            {aboutBullets.map((n, index) => (
                 <motion.li id="offerings" onClick={handleClick} initial={{y: 50, opacity: 0}} whileInView={{opacity: 1, y: 0}} className="p-9 w-[20rem]" key={index}>{n}</motion.li>
            ))}
            </ul>
           
        </section>

        </AuroraBackground>

       



        </>
    )
}
)

export default AboutUsSection;