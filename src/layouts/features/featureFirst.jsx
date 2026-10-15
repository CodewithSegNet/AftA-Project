import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const calling1 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001721/afta/Calling.png";
const calling2 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001728/afta/Calling1.png";
const calling3 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001736/afta/Calling2.png";
const images = [calling2, calling1, calling3];

const FeatureFirst = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getImageStyle = (index) => {
    const totalImages = images.length;
    const relativeIndex = (index - currentIndex + totalImages) % totalImages;
    
    if (relativeIndex === 0) {
      // Center image - bigger and in front
      return {
        transform: 'translateX(0%) scale(1.15)',
        zIndex: 3,
        opacity: 1,
      };
    } else if (relativeIndex === 1) {
      // Right image
      return {
        transform: 'translateX(60%) scale(1)',
        zIndex: 1,
        opacity: 0.7,
      };
    } else {
      // Left image
      return {
        transform: 'translateX(-60%) scale(1)',
        zIndex: 1,
        opacity: 0.7,
      };
    }
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section className="overflow-x-clip overflow-hidden w-full max-w-screen-2xl mx-auto lg:my-12" ref={ref}>
      <div className="flex flex-col lg:flex-row items-center justify-center"> 
        <motion.div 
          className="flex w-[350px] lg:w-[742.17px] items-center justify-center relative h-[700px] overflow-hidden"
          initial={{ x: isMobile ? 0 : -100, y: isMobile ? 30 : 0, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : -100, y: isMobile ? 30 : 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-in-out"
              style={getImageStyle(index)}
            >
              <picture>
                <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(image, "q_auto:low")} type="image/avif" />
                <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(image, "q_auto:good")} type="image/avif" />
                <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(image, "q_auto:best")} type="image/avif" />
                <img 
                  src={getCloudinaryUrl(image, "q_auto:best")} 
                  alt={`calling-${index + 1}`}
                  className="h-auto w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          ))}
        </motion.div>


        <motion.div 
          className="lg:w-[368px]"
          initial={{ x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, opacity: 0 }}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: isMobile ? 0 : 100, y: isMobile ? 30 : 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        > 
          <motion.h1 
            className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4"
          >
Crystal-Clear Audio & Video Calls
          </motion.h1>

          <motion.p 
            className="text-base font-normal text-gray-700"
          > 
Connect face-to-face with the people who matter.Make secure, high-quality video calls to your contacts—wherever they are in the world.
          </motion.p>
        </motion.div>

      </div>

    </section>
  );
};

export default FeatureFirst;