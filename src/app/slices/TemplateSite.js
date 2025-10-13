import Image from "next/image";
import Head from "next/head";

import { motion } from "motion/react";
import { siteDescriptions } from "@/data/reviewData";
export default function TemplateSite() {


    const descriptions = ['Yearz in the GAME', 'Wingz of the Year'];


  return (
    <>
    
        <section className="bg-black text-white mt-[5rem] items-center p-6 gap-8 flex text-center flex-col min-h-[100dvh]">


          
           <h2> Template Sites</h2>

            <div className="flex flex-col gap-2">
               <a href="https://wingland-revitalized.vercel.app">
                
                 <h3>{siteDescriptions[0].name}</h3>

              </a>
                <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} className="relative min-h-[15rem]">
                    <Image src={siteDescriptions[0].thumbnail}  alt="flex" fill className="object-cover" />
                </motion.div>


            </div>

           <p className="w-[30rem]">{siteDescriptions[0].description}</p>

            <a href="https://wingland-revitalized.vercel.app">
                
            <button className="border w-[10rem] bg-[#30ffffaf] hover:bg-black p-2 rounded-md">View</button>

            </a>
           

           <div className=" flex flex-col mt-[5rem]">
            <span>Our templates are intentionally minimal — serving as a clean foundation and a glimpse into the possibilities of what we can create together.</span>
            <span>Inspired by one of our templates? Let’s bring your vision to life — schedule a FREE consultation today. </span>
           </div>

           <a href="https://calendly.com/hunter-mann2433/30min">
                
            <button className="border w-[10rem] bg-[#30ffffaf] hover:bg-black p-2 rounded-md">Free Consultation</button>

            </a>


           

        </section>
      
    </>
  );
}
