import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { getCloudinaryUrl } from "../../utils/cloudinary";

const img1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001752/afta/Discover.png";

const FeatureFourth = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { 
      once: true, 
      threshold: 0.3,
      margin: "-100px"
    });
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  
  return (
    <motion.section ref={ref} className="overflow-x-clip overflow-hidden w-full">

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]">

      {/* Text content */}
      <motion.div 
        className="lg:w-[368px]"
        initial={{ x: isMobile ? 0 : -100, y: isMobile ? 30 : 0, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : -100, y: isMobile ? 30 : 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4">
          Follow Who You Vibe With
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
          Smart suggestions to build your tribe. Get personalized follow
          recommendations based on your interests and mutual connections.
        </motion.p>
      </motion.div>

      <motion.div 
        className="relative"
        initial={{ x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <picture>
          <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img1, "q_auto:low")} type="image/avif" />
          <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img1, "q_auto:good")} type="image/avif" />
          <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img1, "q_auto:best")} type="image/avif" />
          <motion.img src={getCloudinaryUrl(img1, "q_auto:best")} className="h-[600px] lg:h-[740px]" alt="" loading="lazy" decoding="async" />
        </picture>
      </motion.div>

        </div>

    </motion.section>
  );
};

export default FeatureFourth;