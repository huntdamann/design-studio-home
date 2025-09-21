'use client';

import { useEffect, useState } from 'react';

import { motion } from 'motion/react'

export default function AnimatedCounter({ finalValue  }) {
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState('up'); // 'up' or 'down'
  
    useEffect(() => {
      let interval;
  
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
  
      return () => clearInterval(interval);
    }, [direction, finalValue]);
  
    return (
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={0.6} className="lg:text-7xl text-5xl opacity-50 font-bold font-mono text-[#40e0d0]">
        {count}%
      </motion.div>
    );
  }
