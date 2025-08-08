import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import img1 from "../assets/Community.png";
import img2 from "../assets/Groups.png";
import img3 from "../assets/fill.png";


const FeatureSixth = () => {
  const [activeTab, setActiveTab] = useState("communities");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section ref={ref}>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">

      {/* Text content */}
      <motion.div 
        className="w-[368px]"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
<motion.div 
  className="flex gap-5 items-center bg-[rgba(0,17,23,1)] rounded-full p-2 w-fit mb-10"
  initial={{ opacity: 0, y: -20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
    <img src={img3} alt="" />

<div className="flex gap-2 items-center w-fit">
    <button 
      className={`${activeTab === "communities" 
        ? "bg-[rgba(255,180,27,0.1)] text-[rgba(255,180,27,1)] font-semibold w-fit" 
        : "text-[rgba(255,255,255,1)]"} px-4 py-2 rounded-full transition-all duration-300 font-semibold w-fit`}
      onClick={() => setActiveTab("communities")}
    >
      Communities
    </button>
    <button 
      className={`${activeTab === "groups" 
        ? "bg-[rgba(255,180,27,0.1)] text-[rgba(255,180,27,1)] w-fit font-semibold" 
        : "text-[rgba(255,255,255,1)]"} px-4 py-2 rounded-full transition-all font-semibold duration-300 w-fit`}
      onClick={() => setActiveTab("groups")}
    >
      Groups
    </button>
</div>


</motion.div>


        <motion.h1 
          className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
Communities that Get You
        </motion.h1>

        <motion.p 
          className="text-base font-normal text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
Find your people. Join the conversation. Whether you're about fashion, tech, activism, or Afrobeat—there's a space here for you. Or create your own. </motion.p>
      </motion.div>


    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
        <motion.img 
          src={activeTab === "communities" ? img1 : img2}
          className="h-[740px] w-[350px] relative" 
          alt="" 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          key={activeTab}
        />


      </motion.div>

    


        </div>

    </motion.section>
  );
};

export default FeatureSixth;