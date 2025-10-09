'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'motion/react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";


export default function SimpleMenu() {
   
    const [webPlus, webPlusClicked] = useState(false)
    const [brandPlus, brandPlusClicked] = useState(false)
    const [leadPlus, leadPlusClicked] = useState(false)


    const webOptions = ['UI Design', 'UX Design', 'SEO Management', 'Domain Management', 'Website Development']
    const leadOptions = ['B2B Leads', 'Web-scraped Leads', 'Business Research']
    const brandOptions = ['Brand Development', 'Logo Development', 'Typography', 'Color Palette + Brand Colors']


    const handleWebClick = () => {

        webPlusClicked(prev => !prev)

    }
    const handleBrandClick = () => {

        brandPlusClicked(prev => !prev)

    }
    const handleLeadClick = () => {

        leadPlusClicked(prev => !prev)

    }
   
  
    return (
      
        <>

            <section className='w-full h-3/4 flex flex-col items-center justify-center'>
                <h2>What We Offer </h2>
                <ul className='flex flex-col w-1/4'>
                    <motion.li animate={{ x: brandPlus || leadPlus? 200 : 0, opacity: brandPlus || leadPlus? 0 : 1}} className='w-full relative'>

                        <div className='flex w-full justify-between items-center border-b'>
                            <span>UI/UX Design</span>
                            <div className='flex'>
                                {webPlus ? (
                                    <IoRemoveCircleOutline onClick={handleWebClick} className="cursor-pointer" />
                                ) : (
                                    <IoAddCircleOutline onClick={handleWebClick} className="cursor-pointer" />
                                )}
                                </div>
                            

                        </div>
                        
                        {webPlus && (


                            <motion.ul initial={{opacity: 0}} animate={{opacity:  webPlus? 1 : 0}} transition={{delay: 0.2}} className='absolute'>
                                {webOptions.map((n, index) => (

                                    <li key={index}>{n} </li>

                                ))}
                                
                            </motion.ul>



                        )}
                        
                       

                    </motion.li>
                    <motion.li animate={{ x: webPlus || leadPlus? 200 : 0, opacity: webPlus || leadPlus? 0 : 1}} className='w-full relative'>

                            <div className='flex w-full justify-between items-center border-b'>
                                <span>Branding</span>
                                <div className='flex'>
                                {brandPlus ? (
                                    <IoRemoveCircleOutline onClick={handleBrandClick} className="cursor-pointer" />
                                ) : (
                                    <IoAddCircleOutline onClick={handleBrandClick} className="cursor-pointer" />
                                )}
                                </div>
                                

                            </div>

                            {brandPlus && (


                                <motion.ul initial={{opacity: 0}} animate={{opacity:  brandPlus? 1 : 0}} transition={{delay: 0.2}} className='absolute'>
                                    {brandOptions.map((n, index) => (

                                        <li key={index}>{n} </li>

                                    ))}
                                    
                                </motion.ul>



                            )}



                    </motion.li>
                    <motion.li animate={{ x: webPlus || brandPlus? 200 : 0, opacity: webPlus || brandPlus? 0 : 1}} className='w-full relative'>

                            <div className='flex w-full justify-between items-center border-b'>
                                <span>Lead Generation</span>
                                <div className='flex'>
                                {leadPlus ? (
                                    <IoRemoveCircleOutline onClick={handleLeadClick} className="cursor-pointer" />
                                ) : (
                                    <IoAddCircleOutline onClick={handleLeadClick} className="cursor-pointer" />
                                )}
                                </div>
                                

                            </div>

                            {leadPlus && (


                                <motion.ul initial={{opacity: 0}} animate={{opacity:  leadPlus? 1 : 0}} transition={{delay: 0.2}} className='absolute'>
                                    {leadOptions.map((n, index) => (

                                        <li key={index}>{n} </li>

                                    ))}
                                    
                                </motion.ul>



                            )}



                    </motion.li>
                   
                                        
                  
                </ul>
            </section>
        </>
    );
  }
