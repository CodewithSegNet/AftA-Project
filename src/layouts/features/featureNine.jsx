import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const img1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001791/afta/pro.png";



const FeatureNine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section ref={ref}>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]">

    <motion.div 
      className="relative order-2 lg:order-1"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
        <picture>
          <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img1, "q_auto:low")} type="image/avif" />
          <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img1, "q_auto:good")} type="image/avif" />
          <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img1, "q_auto:best")} type="image/avif" />
          <motion.img 
            src={getCloudinaryUrl(img1, "q_auto:best")} 
            className="h-[600px] lg:h-[740px] relative" 
            alt="" 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </motion.div>

    

      {/* Text content */}
      <motion.div 
        className="lg:w-[368px] order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
Keep Your Info Updated
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