import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import call1 from "../assets/featThird.png"
import call2 from "../assets/Memojis.png"
import call3 from "../assets/Memojis1.png"
import call4 from "../assets/Memojis2.png"
import call5 from "../assets/Memojis6.png"
import call6 from "../assets/Memojis4.png"
import call7 from "../assets/Memojis8.png"

const FeatureThird = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: 0.3,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="max-w-screen-2xl mx-auto mt-[127px] mb-[96px]">
      <div className="flex items-center justify-center gap-[5rem]"> 

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="relative">
            <img src={call1} className="relative h-[700px]" alt="Mobile device" />

            {/* Floating emoji animations - positioned outside call1 device at edges */}
            {/* Top edge emoji */}
            <motion.img 
              src={call2} 
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
              src={call3} 
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
              src={call4}
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
              src={call5} 
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
              src={call6} 
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
              src={call7} 
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
          className="w-[368px]"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
        > 
          <motion.h1 
            className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.4
            }}
          >
            Express Yourself with Memojis
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