"use client"

import React from "react"
import styles from '../css/HeroSection.module.css'


const HeroSection = () =>  { 


    return (
        <>
        <section id="hero-container" className="flex items-center md:flex-col sm:flex-col justify-between gap-[2rem] w-full min-h-screen p-2 lg:flex-row flex-wrap">

            


            <div className={styles.heroContent}>


                <h1>HUMANN DESIGN</h1>
                <p>Breathe life into your brand with a touch of creativity from the human mind.</p>
                <a href="https://calendly.com/hunter-mann2433/30min">
                
                    <button>Free Consultation</button>

                </a>
               



            </div>
            <div className={styles.videoWrapper}>
            
                <video src="/videos/brainspin.mp4" className={styles.video} autoPlay muted loop playsInline />

            </div>

        </section>
        



        </>
    )
}

export default HeroSection;