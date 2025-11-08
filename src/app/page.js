"use client"
import Image from "next/image";
import Link from "next/link"

// React Icons
import { IoDiamond } from "react-icons/io5";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";




import { motion, AnimatePresence, useMotionValue } from 'motion/react'
import { useRef, useState, useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";


import HeroSection from '../app/slices/HeroSection.js'
import AboutUsSection from "./slices/AboutUsSection.js";
import HowWeCreateSection from "./slices/HowWeCreateSection.js";
import FooterSection from "./slices/FooterSection.js";
import { ExpandableCard } from "./components/ui/ExpandableCard.js";
import BeforeAfterSlider from './slices/BeforeAfterSlider.js'
import { useInView } from 'react-intersection-observer';
import SimpleMenu from "./components/custom/SimpleMenu.js";
import EnterScreen from "./slices/EnterScreen";
import TemplateSite from "./slices/TemplateSite.js";



const Slider = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [label, setLabel] = useState("Before");

  // Recalculate width on mount + resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setContainerWidth(width);
        x.set(width / 2); // start centered
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [x]);

  // Watch motion value and trigger video/label
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      const threshold = 50; // px tolerance
      if (latest <= threshold) {
        setLabel("After");
        if (videoRef.current) videoRef.current.play();
      } else {
        setLabel("Before");
        if (videoRef.current) videoRef.current.pause();
      }
    });
    return () => unsubscribe();
  }, [x]);

  return (
    <section className="mt-8 text-center p-4 flex flex-col gap-4 place-items-center w-full">
      <h3>
        <a href="https://luckyliquid.org">Lucky Tea</a>
      </h3>

      <div
        ref={containerRef}
        className="relative w-full rounded-md max-w-[600px] aspect-[4/3] sm:aspect-video overflow-hidden"
      >
        {/* Background video */}
        <video
          ref={videoRef}
          src="/videos/lucky-demo.mp4"
          muted
          playsInline
          loop
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Overlay image */}
        <motion.div
          style={{ width: x }}
          className="absolute top-0 left-0 h-full overflow-hidden"
        >
          <Image
            src="/picture/lucky-screen.PNG"
            width={600}
            height={338}
            alt="Lucky homepage demo"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Draggable divider */}
        {containerRef.current && (
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            style={{ x }}
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          >
            <div className="slider-handle w-6 h-10 sm:w-4 sm:h-8 bg-black rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        )}
      </div>

      {/* Label */}
      <span className="mb-2 font-bold text-base sm:text-lg">{label}</span>

      <p className="text-sm sm:text-base max-w-[600px] leading-relaxed">
        For Lucky, the goal was to move beyond an “under construction” page and
        give the brand a digital home that matched its personality. We created a
        minimal yet engaging homepage that makes it easy for visitors to order
        delivery, follow along on social media, or join the newsletter. We kept
        the design subtle so the brand itself remains the focus, while carefully
        chosen animations and transitions powered by Framer Motion add a sense
        of polish and energy. The result is a webfront that feels alive,
        approachable, and distinctive — helping Lucky stand out in the crowded
        tea market.
      </p>
    </section>
  );
};

const Slider2 = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Recalculate width on mount + resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setContainerWidth(width);
        x.set(width / 2); // start centered
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
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
    <section className="text-center mt-12 flex flex-col gap-6 place-items-center w-full px-4">
      <h3 className="text-lg sm:text-xl font-semibold">Loop Studios</h3>

      <div
        ref={containerRef}
        className="relative w-full rounded-md max-w-[600px] aspect-[4/3] sm:aspect-video overflow-hidden"
      >
        {/* Background video */}
        <video
          ref={videoRef}
          src="/videos/loop-demo.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Overlay image */}
        <motion.div
          style={{ width: x }}
          className="absolute top-0 left-0 h-full overflow-hidden"
        >
          <Image
            src="/picture/loop-studio.png"
            width={600}
            height={338}
            alt="Loop Studio homepage demo"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Draggable divider */}
        {containerRef.current && (
          <motion.div
            drag="x"
            dragConstraints={containerRef}
            style={{ x }}
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          >
            <div className="slider-handle w-6 h-10 sm:w-4 sm:h-8 bg-black rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        )}
      </div>

      <p className="text-sm sm:text-base max-w-[600px] leading-relaxed">
        We applied subtle design enhancements (3–10%) to the VR Headset
        Experiences brand, using Framer Motion to add smooth transitions and
        animations that bring the site to life while keeping the experience
        intuitive and focused.
      </p>
    </section>
  );
};



export default function Home() {



  //Keeps track if user has entered the homepage
  const [hasEntered, setHasEntered] = useState(false);



  // Intersection Observer Inialization 
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8
  })

  // Scroll to "Who We Are" Section
  const contactRef = useRef(null);


  // Handles whether a user has chosen to enter into the home screen of the page
  const [isLoaded, setIsLoaded] = useState(false);


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

  //Scroll to "How We Create Section"
  const workRef = useRef(null);


  const scrollToWork = () => {
    workRef.current?.scrollIntoView({behavior: 'smooth'})
    setIsOpen(false)
  }


  // // Menu Button Show logic
  // const [showButton, setShowButton] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY < lastScrollY) {
  //       setShowButton(true); // Scrolling up
  //     } else {
  //       setShowButton(false); // Scrolling down
  //     }

  //     setLastScrollY(currentScrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [lastScrollY]);


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

   {/* AnimatePresence allows smooth exit
      <AnimatePresence>
        {!hasEntered && (

        
          <RemoveScroll>
            <EnterScreen key="enter" onFinish={() => setHasEntered(true)} />
          </RemoveScroll>
        )}
      </AnimatePresence> */}
     
     <div className="relative w-screen h-screen">

      <AnimatePresence>
      {isOpen && ( 

          <motion.header id="nav" initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} className="rounded-tr-md z-[60] rounded-br-md  flex flex-col justify-center fixed w-[100%] lg:w-[15%] h-screen">

                <FaCircleChevronLeft onClick={handleOpen} className="absolute right-3 cursor-pointer text-xl top-3" />

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
                <Link href="/solutions/freeaudit">
                
                
                <motion.li whileHover={{x:30, y:-10}}
                   transition={{type: 'tween', stiffness: 100,
                    damping: 20,
                    mass: 0.5,
                    bounce: 0.4}} 
                  className="flex gap-2 bg-[black] cursor-pointer items-center p-2 rounded-sm">
                  <span className="text-md">Solutions</span>
                  <IoDiamond />
                 

                </motion.li>
                </Link>

                <motion.li whileHover={{x:30, y:-10}}
                
                  transition={{type: 'tween', stiffness: 100,
                  damping: 20,
                  mass: 0.5,
                  bounce: 0.4}} 
                  onClick={scrollToWork}
                className="flex gap-2 bg-[black] cursor-pointer items-center p-2 rounded-sm">
                  <span className="text-md">Work</span>
                  <IoDiamond />

                </motion.li>



                </ul>

          </motion.header>


      )}
      </AnimatePresence>
      
      <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/picture/logo.png"
            width={150}
            height={200}
            alt="Humann Design Logo"
            className="w-32 sm:w-40 lg:w-48 h-auto"
          />
        </div>

        {/* Right section (tagline + menu) */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Tagline — hidden on small screens */}
          <span className="hidden md:block text-black font-semibold text-sm lg:text-lg whitespace-nowrap">
            Need a Site? Call <span className="text-[black] font-bold">731.882.2974</span>
          </span>

          {/* Mobile menu icon */}
          <motion.button
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={handleOpen}
            className="text-[#72d0c8] text-4xl lg:text-5xl cursor-pointer z-50"
          >
            <FiMenu />
          </motion.button>
        </div>
      </div>
    </header>
      <HeroSection />
      <AboutUsSection ref={contactRef} />
      <SimpleMenu />
      <HowWeCreateSection ref={howRef} />
      <TemplateSite />

      {/* <section className="flex flex-col items-center">
        <h2>Blog</h2>

       <ExpandableCard />

      </section> */}




      

      

    
      <section ref={workRef} className="text-center mt-[10rem] mb-[5rem] justify-center flex items-center flex-col">
        <h1>Work</h1>
          {sliderSection}
          {sliderSectionTwo}

          
      </section>
      <FooterSection workHandle={scrollToWork} whoHandle={scrollToContact} />

    
     </div>
   </>
  );
}
