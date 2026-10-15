import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const feat1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001738/afta/feat1.png";
const feat2 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001739/afta/feat2.png";
const feat3 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001740/afta/feat3.png";

const FeatureSecond = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section ref={ref} className="overflow-x-clip overflow-hidden w-full">
      <div className=" my-[40px] lg:my-[96px]">
        <div className="flex flex-col lg:flex-row items-center gap-[2rem] lg:gap-[6rem] justify-center"> 
          <motion.div 
            className="lg:w-[368px]"
            initial={{ opacity: 0, x: isMobile ? 0 : -60, y: isMobile ? 30 : 0 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : -60, y: isMobile ? 30 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          > 
            <motion.h1 
              className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Seamless Voice Messaging
            </motion.h1>

            <motion.p 
              className="text-base font-normal text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            > 
              Send voice notes when text isn't enough. Hold down the mic and speak your mind—easily share thoughts, updates, or laughter in real time.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 30 : 0 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 30 : 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className=" relative">
              <picture>
                <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(feat1, "q_auto:low")} type="image/avif" />
                <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(feat1, "q_auto:good")} type="image/avif" />
                <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(feat1, "q_auto:best")} type="image/avif" />
                <motion.img 
                  src={getCloudinaryUrl(feat1, "q_auto:best")} 
                  className="h-[600px] lg:h-[740px] relative"  
                  alt=""
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <motion.img 
                src={getCloudinaryUrl(feat2, "q_auto:best")} 
                className="absolute lg:top-[100px] lg:right-[-40px] top-[100px] right-[-10px] w-[55px] lg:w-[85px]" 
                alt=""
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
                loading="lazy"
              />
              <motion.img 
                src={getCloudinaryUrl(feat3, "q_auto:best")} 
                className="absolute lg:top-[440px] lg:left-[-90px] top-[450px] left-[-10px] w-[145px] lg:w-[245px]" 
                alt=""
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -8, 0]
                } : { opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                  rotate: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                  y: { 
                    duration: 2.5, 
                    delay: 1.6,
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSecond;