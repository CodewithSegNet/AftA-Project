import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/profile1.png";



const FeatureNine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section ref={ref}>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[2rem] lg:gap-[4rem]">


    

      {/* Text content */}
      <motion.div 
        className="lg:w-[368px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
Built-In Privacy for You
        </motion.h1>

        <motion.p 
          className="text-base font-normal text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
Total control over who sees what. From story views to chat access, tweak your privacy settings to feel secure.  </motion.p>
      </motion.div>



        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
        <motion.img 
          src={img1} 
          className="h-[740px] relative" 
          alt="" 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>



        </div>

    </motion.section>
  );
};

export default FeatureNine;