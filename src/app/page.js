"use client"
import Image from "next/image";

// React Icons
import { IoDiamond } from "react-icons/io5";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";



import { motion, AnimatePresence, useMotionValue } from 'motion/react'
import { useRef, useState, useEffect } from "react";


import HeroSection from '../app/slices/HeroSection.js'
import AboutUsSection from "./slices/AboutUsSection.js";
import HowWeCreateSection from "./slices/HowWeCreateSection.js";
import { ExpandableCard } from "./components/ui/ExpandableCard.js";
import BeforeAfterSlider from './slices/BeforeAfterSlider.js'
import { useInView } from 'react-intersection-observer';


const Slider = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [label, setLabel] = useState("Before"); // Label state


  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const { width } = container.getBoundingClientRect();
      setContainerWidth(width);
      x.set(width / 2); // start in middle
    }
  }, [x]);

  // Watch motion value and trigger video
  // Watch motion value and trigger video / label update
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const threshold = 50; // px tolerance for detecting “fully left”
      
      if (latest <= threshold) {
        setLabel("After"); // overlay scrolled to left
        if (videoRef.current) videoRef.current.play();
      } else {
        setLabel("Before");
        if (videoRef.current) videoRef.current.pause();
      }
    });
    return () => unsubscribe();
  }, [x]);

  return (
    <section className=" mt-8 text-center flex flex-col gap-4 place-items-center h-full w-screen">
      <h3>
        <a href="https://luckyliquid.org">
        
        
        Lucky Tea
        </a>
        </h3>

      <div
        id="slider-container"
        ref={containerRef}
        className="relative w-full rounded-md max-w-[600px] aspect-video overflow-hidden"
      >
        {/* Background image */}
      
        <video
            ref={videoRef}
            src="/videos/lucky-demo.mp4"
            muted
            playsInline
            loop
            preload="auto"
            className="w-full h-full object-cover"
          />

        {/* Overlay video instead of image */}
        <motion.div
          id="image-overlay"
          style={{ width: x }}
          className="absolute top-0 left-0 h-full overflow-hidden"
        >
       <Image
          id="image"
          src="/picture/lucky-screen.PNG"
          width={600}
          height={338}
          alt="top"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        </motion.div>

        {/* Draggable divider */}
        {containerRef.current && (
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            style={{ x }}
            id="divider"
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          >
            <div className="slider-handle w-4 h-8 bg-black rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        )}
      </div>
       {/* Label */}
       <span className="mb-4 font-bold text-lg">{label}</span>
       <p>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vero, iste, at aut dignissimos, eligendi ex hic quidem deleniti sit eos cupiditate vel dolore corporis voluptas ad harum veniam autem!
        Corrupti in amet quaerat? Unde iusto sint eveniet atque similique doloribus praesentium ab iste, cupiditate id quaerat facilis laboriosam quibusdam accusantium tempora autem pariatur repellat vitae itaque recusandae odit non.
</p>

    </section>
  );
};
const Slider2 = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const { width } = container.getBoundingClientRect();
      setContainerWidth(width);
      x.set(width / 2); // start in middle
    }
  }, [x]);

  // Watch motion value and trigger video
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (latest <= 0 && videoRef.current) {
        videoRef.current.play();
      }
    });
    return () => unsubscribe();
  }, [x]);

  return (
    <section className="text-center mt-12 flex flex-col gap-6 place-items-center h-screen w-screen">
      <h3>Loop Studios</h3>

      <div
        id="slider-container"
        ref={containerRef}
        className="relative w-full max-w-[600px] aspect-video overflow-hidden"
      >
        {/* Background image */}
      
        <video
            ref={videoRef}
            src="/videos/loop-demo.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

        {/* Overlay video instead of image */}
        <motion.div
          id="image-overlay"
          style={{ width: x }}
          className="absolute top-0 left-0 h-full overflow-hidden"
        >
       <Image
          id="image"
          src="/picture/loop-studio.png"
          width={600}
          height={338}
          alt="top"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        </motion.div>

        {/* Draggable divider */}
        {containerRef.current && (
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            style={{ x }}
            id="divider"
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          >
            <div className="slider-handle w-4 h-8 bg-black rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        )}
      </div>
      <p>


        We applied subtle design enhancements (3–10%) to the VR Headset Experiences brand, using Framer Motion to add smooth transitions and animations that bring the site to life while keeping the experience intuitive and focused.
      </p>
    </section>
  );
};



export default function Home() {


  // Intersection Observer Inialization 
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8
  })

  // Scroll to "Who We Are" Section
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false)

  };

  //Scroll to "How We Create Section"
  const howRef = useRef(null);


  const scrollToHow = () => {
    howRef.current?.scrollIntoView({behavior: 'smooth'})
    setIsOpen(false)
  }


  // Menu Button Show logic
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowButton(true); // Scrolling up
      } else {
        setShowButton(false); // Scrolling down
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  const sliderSection = Slider()
  const sliderSectionTwo = Slider2()
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }
  useEffect(() => {
    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
   <>
     
     <div className="relative w-screen h-screen">

      <AnimatePresence>
      {isOpen && ( 

          <motion.header id="nav" initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} className="rounded-tr-md z-[60] rounded-br-md  flex flex-col justify-center fixed w-[100%] lg:w-[15%] h-screen">

                <FaCircleChevronLeft onClick={handleOpen} className="absolute  top-3" />

                <ul className="  flex flex-col gap-6 justify-center lg:items-end items-center ">


                <motion.li whileHover={{x:30, y:-10}} 
                  transition={{type: 'tween', stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  bounce: 0.4}}
                  onClick={scrollToContact} 
                  className="flex gap-2 bg-[black] text-white cursor-pointer items-center p-2 rounded-sm">
                    <span className="text-md">Who We Are</span>
                  <IoDiamond />

                </motion.li>
                <motion.li whileHover={{x:30, y:-10}} 
                  transition={{type: 'tween', stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  bounce: 0.4}}
                  onClick={scrollToHow} 
                  className="flex gap-2 bg-[black] cursor-pointer items-center p-2 rounded-sm">
                      <span className="text-md">How We Create</span>
                  <IoDiamond />

                </motion.li>
                <motion.li whileHover={{x:30, y:-10}}
                   transition={{type: 'tween', stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                    bounce: 0.4}} 
                  className="flex gap-2 bg-[black] cursor-pointer items-center p-2 rounded-sm">
                  <span className="text-md">Solutions</span>
                  <IoDiamond />

                </motion.li>
                <motion.li whileHover={{x:30, y:-10}}
                
                  transition={{type: 'tween', stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  bounce: 0.4}} 
                className="flex gap-2 bg-[black] cursor-pointer items-center p-2 rounded-sm">
                  <span className="text-md">Work</span>
                  <IoDiamond />

                </motion.li>



                </ul>

          </motion.header>


      )}
      </AnimatePresence>
      
      <div className=" w-full relative">
        <motion.button animate={{opacity: showButton ? 1 : 0}} className="fixed text-4xl right-3 top-3 cursor-pointer z-50" onClick={handleOpen}>
          <FiMenu  />
        </motion.button>
      </div>
      <HeroSection />
      <AboutUsSection ref={contactRef} />
      <HowWeCreateSection ref={howRef} />

      {/* <section className="flex flex-col items-center">
        <h2>Blog</h2>

       <ExpandableCard />

      </section> */}




      

      

    
      <section className="text-center mt-[10rem] justify-center flex items-center flex-col">
        <h1>Work</h1>
          {sliderSection}
          {sliderSectionTwo}

          
      </section>
    
    
     </div>
   </>
  );
}
