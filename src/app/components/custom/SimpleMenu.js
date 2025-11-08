'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export default function SimpleMenu() {
    const [webPlus, webPlusClicked] = useState(false);
    const [brandPlus, brandPlusClicked] = useState(false);
    const [leadPlus, leadPlusClicked] = useState(false);

    const webOptions = ['UI Design', 'UX Design', 'SEO Management', 'Domain Management', 'Website Development'];
    const leadOptions = ['B2B Leads', 'Web-scraped Leads', 'Business Research'];
    const brandOptions = ['Brand Development', 'Logo Development', 'Typography', 'Color Palette + Brand Colors'];

    const handleWebClick = () => webPlusClicked(prev => !prev);
    const handleBrandClick = () => brandPlusClicked(prev => !prev);
    const handleLeadClick = () => leadPlusClicked(prev => !prev);

    return (
        <section className='w-full h-3/4 flex flex-col items-center justify-center'>
            <h2>What We Offer </h2>
            <ul className='flex flex-col w-3/4 lg:w-2/4 gap-5 mt-5'>
                
                {/* Web Menu */}
                <motion.li
                    animate={{ x: brandPlus || leadPlus ? 200 : 0, opacity: brandPlus || leadPlus ? 0 : 1 }}
                    className='w-full relative'
                    onClick={handleWebClick}

                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <span>UI/UX Design</span>
                        {webPlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {webPlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {webOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>

                {/* Branding Menu */}
                <motion.li
                    animate={{ x: webPlus || leadPlus ? 200 : 0, opacity: webPlus || leadPlus ? 0 : 1 }}
                    className='w-full relative'
                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={handleBrandClick}
                    >
                        <span>Branding</span>
                        {brandPlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {brandPlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {brandOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>

                {/* Lead Generation Menu */}
                <motion.li
                    animate={{ x: webPlus || brandPlus ? 200 : 0, opacity: webPlus || brandPlus ? 0 : 1 }}
                    className='w-full relative'
                >
                    <motion.div
                        className='flex w-full justify-between items-center border-b p-2'
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={handleLeadClick}
                    >
                        <span>Lead Generation</span>
                        {leadPlus ? <IoRemoveCircleOutline className="cursor-pointer" /> : <IoAddCircleOutline className="cursor-pointer" />}
                    </motion.div>

                    {leadPlus && (
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='absolute top-full left-0 w-full bg-white text-black rounded-md shadow-md p-2 z-10'
                        >
                            {leadOptions.map((option, idx) => (
                                <motion.li
                                    key={idx}
                                    className='p-1 cursor-pointer'
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </motion.li>

            </ul>
        </section>
    );
}
