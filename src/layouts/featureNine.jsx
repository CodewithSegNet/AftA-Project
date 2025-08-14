import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/profile.png";



const FeatureNine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section ref={ref}>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[2rem] lg:gap-[4rem]">

    <motion.div 
      className="relative order-2 lg:order-1"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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

    

      {/* Text content */}
      <motion.div 
        className="lg:w-[368px] order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
Keep your info updated
        </motion.h1>

        <motion.p 
          className="text-base font-normal text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
Manage your account, bio, and more. You're always in full control of how you show up on AftA.
 </motion.p>
      </motion.div>



    


        </div>

    </motion.section>
  );
};

export default FeatureNine;