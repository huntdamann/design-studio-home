'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'motion/react'

export default function AnimatedCounter({ finalValue  }) {
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState('up'); // 'up' or 'down'
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.6 }); 

  
    useEffect(() => {
      let interval;
  
      if (isInView) {

      
      interval = setInterval(() => {
        setCount((prev) => {
          if (direction === 'up') {
            if (prev >= 100) {
              setDirection('down');
              return 100;
            }
            return prev + 5; // increase speed
          } else {
            if (prev <= finalValue) {
              clearInterval(interval);
              return finalValue;
            }
            return prev - 2; // decrease speed (slower for a smoother stop)
          }
        });
      }, 30);
    }
  
      return () => clearInterval(interval);
    }, [direction, finalValue, isInView]);
  
    return (
      <motion.div ref={ref} initial={{opacity: 0}} whileInView={{opacity: 1}} className="lg:text-7xl text-5xl opacity-50 font-bold font-mono text-[#40e0d0]">
        {count}%
      </motion.div>
    );
  }
