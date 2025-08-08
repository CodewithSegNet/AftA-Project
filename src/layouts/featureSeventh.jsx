import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/Upload1.png";
import img2 from "../assets/Frame3.png";
import img3 from "../assets/Frame2.png";


const FeatureSixth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section ref={ref}>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">

    <motion.div className="relative">
        <motion.img 
          src={img1} 
          className="h-[740px] relative" 
          alt="" 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img 
          src={img2} 
          className="absolute left-[-220px] top-[18rem]" 
          alt="" 
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
        <motion.img 
          src={img3} 
          className="absolute right-[-240px] top-[10rem]" 
          alt="" 
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        />


      </motion.div>

    

      {/* Text content */}
      <motion.div 
        className="w-[368px]"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4">
Tag and Bring People In
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Mention friends to loop them in. Tagging keeps your posts interactive and your people connected. 
 </motion.p>
      </motion.div>



    


        </div>

    </motion.section>
  );
};

export default FeatureSixth;