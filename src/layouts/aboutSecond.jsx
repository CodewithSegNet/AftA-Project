import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AboutFaq from "../layouts/aboutFaq"



const secondImg = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754643743/secImg_njremc.png"


const AboutSecond = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.6,
        staggerChildren: 0.4
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const faqVariants = {
    hidden: { 
      opacity: 0, 
      x: 80,
      y: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const float = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const rotate = {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <section>
        <motion.div 
          ref={ref}
          className="max-w-screen-2xl mx-auto lg:mt-[96px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

         <motion.div 
           className="w-[953px]" 
           variants={headerVariants}
         >
          <motion.h1 
            className="text-[42px] md:text-[64px] leading-[50px] md:leading-[70px] font-normal mb-4"
            variants={titleVariants}
          >
            Our Principles
          </motion.h1>
          <motion.p 
            className="text-base font-normal text-gray-700"
            variants={paragraphVariants}
          >
AftA is built on the foundation of truth, freedom, and cultural pride. We believe in the power of unfiltered African voices,
 the preservation of ancestral knowledge, and the right to connect without censorship. Rooted in authenticity and driven by purpose, 
 our principles guide every line of code, every conversation, and every connection—because to build for Africa, we must stand by Africa.    
       </motion.p>
        </motion.div>

        <motion.div 
          className="flex items-center gap-[70px]"
          variants={contentContainerVariants}
        >

          <motion.div
            variants={imageVariants}
          >
            <motion.img 
              src={secondImg} 
              className="h-[600px] pt-5 w-[400px]" 
              alt=""
              animate={isInView ? float : {}}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

          <motion.div
            variants={faqVariants}
          >
            <AboutFaq />
          </motion.div>

        </motion.div>

        </motion.div>
  
      </section>
    </>
  );
};

export default AboutSecond;