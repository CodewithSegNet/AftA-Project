import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import img1 from "../assets/Discover.png";

const FeatureFourth = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { 
      once: true, 
      threshold: 0.3,
      margin: "-100px"
    });
  
  return (
    <motion.section ref={ref}>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]">

      {/* Text content */}
      <motion.div 
        className="lg:w-[368px]"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 className="text-[32px] md:text-[64px] leading-[35px] md:leading-[80px] font-normal mb-4">
          Follow Who You Vibe With
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
          Smart suggestions to build your tribe. Get personalized follow
          recommendations based on your interests and mutual connections.
        </motion.p>
      </motion.div>

      <motion.div 
        className="relative"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img src={img1} className="h-[600px] lg:h-[740px]" alt="" />
      </motion.div>

        </div>

    </motion.section>
  );
};

export default FeatureFourth;