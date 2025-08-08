import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/Discover.png";

const FeatureFifth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.3,
    margin: "-100px"
  });

  return (
    <motion.section ref={ref}>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">



      <motion.div 
        className="relative"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img src={img1} className="h-[740px]" alt="" />
      </motion.div>

      {/* Text content */}
      <motion.div 
        className="w-[368px]"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4">
Private Chats, Your Space
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Send secure, end-to-end encrypted messages in a dedicated space made just for private connections.
        </motion.p>
      </motion.div>


        </div>

    </motion.section>
  );
};

export default FeatureFifth;