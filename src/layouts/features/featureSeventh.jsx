import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const img1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001764/afta/Upload1.png";
const img2 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001771/afta/Frame01.svg";
const img3 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001785/afta/Frame00.svg";

const FeatureSixth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.section ref={ref}>
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]">
        
        <motion.div className="order-2 lg:order-1 relative">
          {/* Main image */}
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
          
          {/* Left floating image */}
          <motion.img 
            src={img2} 
            className="absolute lg:left-[-220px] top-[26rem] lg:top-[18rem]" 
            alt="" 
            initial={{ opacity: 0, scale: 0.8, rotate: -10, x: -100 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: 0,
              y: [0, -12, 0]
            } : { 
              opacity: 0, 
              scale: 0.8, 
              rotate: -10, 
              x: -100 
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              scale: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              rotate: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              x: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              y: { 
                duration: 2, 
                delay: 1.1,
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          />
          
          {/* Right floating image */}
          <motion.img 
            src={img3} 
            className="absolute lg:right-[-240px] top-[30rem] lg:top-[10rem]" 
            alt="" 
            initial={{ opacity: 0, scale: 0.8, rotate: 10, x: 100 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: 0,
              y: [0, -15, 0]
            } : { 
              opacity: 0, 
              scale: 0.8, 
              rotate: 10, 
              x: 100 
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.5, ease: "easeOut" },
              scale: { duration: 0.8, delay: 0.5, ease: "easeOut" },
              rotate: { duration: 0.8, delay: 0.5, ease: "easeOut" },
              x: { duration: 0.8, delay: 0.5, ease: "easeOut" },
              y: { 
                duration: 2.5, 
                delay: 1.3,
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          />
        </motion.div>

        {/* Text content */}
        <motion.div 
          className="lg:w-[368px] order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h1 className="text-[32px] md:text-[64px] leading-[35px] md:leading-[80px] font-normal mb-4">
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