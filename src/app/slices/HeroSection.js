"use client";

import React from "react";
import styles from '../css/HeroSection.module.css';

const HeroSection = () => { 
    return (
        <>
        <section className="relative flex bg-black w-full lg:w-screen text-white min-h-[80%] overflow-hidden">

            {/* Video Background */}
            <video 
                className="absolute inset-0 w-full h-full opacity-50 object-cover"
                autoPlay 
                muted 
                loop 
                playsInline 
                src="/videos/stock_video-3.mp4" 
                preload="auto"
            />

            {/* Overlay Content */}
            <div className="relative z-10 flex w-full flex-col items-center justify-center text-center px-4 lg:px-16 py-10 lg:py-20 gap-6">

                {/* Main Hero Box */}
                <div className="relative bg-[#30ffffaf] rounded-lg p-6 flex flex-col gap-4 items-center justify-center max-w-2xl">
                    <h1 id="tag-line" className="text-2xl lg:text-5xl font-semibold uppercase">
                        HumannDesign
                    </h1>

                    <p className="text-white/90 mt-2 lg:text-lg">
                    Breathe life into your brand with a touch of creativity from the human mind.
                    </p>

                    <div className="flex gap-6 mt-6">
                        <a href="https://calendly.com/hunter-mann2433/30min">
                            <button className="border rounded-2xl border-white bg-[#30ffffaf]/60 active:bg-white hover:bg-black p-3 px-6 transition-all duration-300">
                                Book Discovery Call
                            </button>
                        </a>
                        
                        <button className="border rounded-2xl border-white bg-transparent hover:bg-white hover:text-black p-3 px-6 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>

        </section>
        </>
    );
};

export default HeroSection;
