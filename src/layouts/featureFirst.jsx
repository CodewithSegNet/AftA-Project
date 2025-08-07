import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import calling1 from "../assets/Calling.png"
import calling2 from "../assets/Calling1.png"
import calling3 from "../assets/Calling2.png"

const FeatureFirst = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [calling2, calling1, calling3];
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

  return (
    <section className="max-w-screen-2xl mx-auto my-12" ref={ref}>
      <div className="flex items-center justify-center"> 
        <motion.div 
          className="flex w-[742.17px] items-center justify-center relative h-[700px] overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-in-out"
              style={getImageStyle(index)}
            >
              <img 
                src={image} 
                alt={`calling-${index + 1}`}
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>


        <motion.div 
          className=" w-[368px]"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        > 
          <motion.h1 
            className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4"
          >
Crystal-clear Audio & Video Calls
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