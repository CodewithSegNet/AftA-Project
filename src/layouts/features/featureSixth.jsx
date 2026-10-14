import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const img1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001760/afta/Story.png";
const img2 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001761/afta/story1.png";


const FeatureSixth = () => {
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
Stories That Speak For You
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Share your moments before they disappear. Post photos, memojis, and clips that vanish after 24 hours—let your personality shine daily.      
  </motion.p>
      </motion.div>



        <motion.div 
          className="relative"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <picture>
          <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img1, "q_auto:low")} type="image/avif" />
          <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img1, "q_auto:good")} type="image/avif" />
          <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img1, "q_auto:best")} type="image/avif" />
          <motion.img 
            src={getCloudinaryUrl(img1, "q_auto:best")} 
            className="h-[600px] lg:h-[740px] relative" 
            alt="" 
            loading="lazy"
            decoding="async"
          />
        </picture>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            y: [0, -12, 0]
          } : { opacity: 0, scale: 0.8, rotate: -10 }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.6, ease: "easeOut" },
            scale: { duration: 0.8, delay: 0.6, ease: "easeOut" },
            rotate: { duration: 0.8, delay: 0.6, ease: "easeOut" },
            y: { 
              duration: 2, 
              delay: 1.4,
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          src={getCloudinaryUrl(img2, "q_auto:best")} 
          className="absolute lg:left-[-320px] top-[7rem] lg:top-[5rem] w-[150px] lg:w-full" 
          alt="" 
          loading="lazy"
        />

      </motion.div>


        </div>

    </motion.section>
  );
};

export default FeatureSixth;