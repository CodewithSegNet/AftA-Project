import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const call1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001741/afta/featThird.png";
const call2 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001744/afta/Memojis.png";
const call3 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001745/afta/Memojis1.png";
const call4 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001746/afta/Memojis2.png";
const call5 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001749/afta/Memojis6.png";
const call6 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001748/afta/Memojis4.png";
const call7 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001750/afta/Memojis8.png";

const FeatureThird = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.3,
    margin: "-100px"
  });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section ref={ref} className="max-w-screen-2xl mx-auto lg:mt-[127px] lg:mb-[96px] my-[40px] overflow-x-clip overflow-hidden w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[2rem] lg:gap-[5rem]"> 

        <motion.div
          className="order-2 lg:order-1"
          initial={{ x: isMobile ? 0 : -100, y: isMobile ? 30 : 0, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : -100, y: isMobile ? 30 : 0, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="relative">
            <picture>
              <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(call1, "q_auto:low")} type="image/avif" />
              <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(call1, "q_auto:good")} type="image/avif" />
              <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(call1, "q_auto:best")} type="image/avif" />
              <img src={getCloudinaryUrl(call1, "q_auto:best")} className="relative h-[600px] lg:h-[700px]" alt="Mobile device" loading="lazy" decoding="async" />
            </picture>

            {/* Floating emoji animations - positioned outside call1 device at edges */}
            {/* Top edge emoji */}
            <motion.img 
              src={getCloudinaryUrl(call2, "q_auto:best")} 
              className="absolute w-15 h-15" 
              alt="Memoji 1"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
              style={{
                top: "2%",
                left: "-20%",
                transform: "translateX(-50%)",
                zIndex: 10
              }}
            />
            
            {/* Right edge emoji */}
            <motion.img 
              src={getCloudinaryUrl(call3, "q_auto:best")} 
              className="absolute w-[8rem] h-13" 
              alt="Memoji 2"
              animate={{
                x: [0, 15, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
              style={{
                top: "60%",
                right: "-15%",
                zIndex: 10
              }}
            />
            
            {/* Bottom edge emoji */}
            <motion.img 
              src={getCloudinaryUrl(call4, "q_auto:best")}
              className="absolute w-[6rem] h-15" 
              alt="Memoji 3"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
              style={{
                bottom: "-5%",
                left: "60%",
                transform: "translateX(-50%)",
                zIndex: 10
              }}
            />
            
            {/* Left edge emoji */}
            <motion.img 
              src={getCloudinaryUrl(call5, "q_auto:best")} 
              className="absolute w-15 h-15" 
              alt="Memoji 4"
              animate={{
                x: [0, -20, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8
              }}
              style={{
                top: "30%",
                left: "-15%",
                zIndex: 10
              }}
            />
            
            {/* Top-right corner emoji */}
            <motion.img 
              src={getCloudinaryUrl(call6, "q_auto:best")} 
              className="absolute w-[6rem] h-15" 
              alt="Memoji 5"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.25, 1]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.3
              }}
              style={{
                top: "20%",
                right: "-10%",
                zIndex: 10
              }}
            />
            
            {/* Bottom-left corner emoji */}
            <motion.img 
              src={getCloudinaryUrl(call7, "q_auto:best")} 
              className="absolute w-[7rem] h-15" 
              alt="Memoji 6"
              animate={{
                x: [0, -12, 0],
                y: [0, 12, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.8
              }}
              style={{
                bottom: "5%",
                left: "-10%",
                zIndex: 10
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-[368px] order-1 lg:order-2"
          initial={{ x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        > 
          <motion.h1 
            className=" text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.4
            }}
          >
            Express Yourself With Memojis
          </motion.h1>

          <motion.p 
            className="text-base font-normal text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.6
            }}
          > 
            Create your vibe, your way. Use custom memojis to personalize how you look and feel in chats and stories—built for rich self-expression.
          </motion.p>
        </motion.div>

      </div>

    </section>
  );
};

export default FeatureThird;