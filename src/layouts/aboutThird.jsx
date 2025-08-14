import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Img2 from "../assets/btnfirst.png";
import Img3 from "../assets/btnsecond.png";




const img1 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754643911/founder1_h6zidn.png"

const AboutThird = () => {
  const storyRef = useRef(null);
  const leadershipRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isStoryInView = useInView(storyRef, { once: true, threshold: 0.2 });
  const isLeadershipInView = useInView(leadershipRef, { once: true, threshold: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.2 });

  // Story Section Variants
  const storyContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const storyTitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const storyTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Leadership Section Variants
  const leadershipContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.4
      }
    }
  };

  const leadershipTextVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      y: 50
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const leadershipImageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8,
      rotate: 3
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const leadershipTitleVariants = {
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

  const leadershipParagraphVariants = {
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

  // CTA Section Variants
  const ctaContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const ctaTitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const ctaTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const ctaButtonsVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Continuous animations
  const float = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulse = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <section className="max-w-screen-2xl mx-auto mt-[56px] lg:mt-[96px]">
        {/* Story Section */}
        <motion.div 
          ref={storyRef}
          className="w-full"
          variants={storyContainerVariants}
          initial="hidden"
          animate={isStoryInView ? "visible" : "hidden"}
        > 
          <motion.h1 
            className="text-[42px] md:text-[64px] leading-[50px] md:leading-[70px] font-normal mb-4"
            variants={storyTitleVariants}
          >
            AftA's Story
          </motion.h1>

          <motion.p 
            className="text-base font-normal text-gray-700"
            variants={storyTextVariants}
          > 
            AftA was born from a visionary commitment to redefine how Africans experience and engage with social media. It is a platform built with purpose, a safe empowering digital space where African people can authentically connect, express themselves, and showcase their talents without compromise.
            For generations, African voices have been underrepresented, our stories overlooked, and our creative contributions undervalued within global digital ecosystems. AftA was founded to change this reality. It exists to amplify the voices of those who have too often been silenced and to provide a platform where African culture, innovation, and identity can thrive.
            As the founder of AftA, my inspiration stems from personal experience. Growing up, I observed a significant void in the digital space, an absence of platforms that genuinely reflect the richness, diversity, and brilliance of African people. Despite being a continent bursting with creativity, heritage, and ingenuity, Africa does not have a globally recognized social media platform to call its own. Instead, we have engaged in online communities that were never designed with us in mind.
            AftA is a bold step toward reclaiming digital ownership. It represents our collective stake in the global conversation and our right to be seen, heard, and celebrated on our terms.
            This platform was created not just as a tool for communication, but as a digital sanctuary grounded in safety, inclusion, and authenticity. 
            AftA is more than an app, it is a movement. It is where your voice matters, your talent is recognized, and your dreams have a place to grow. This is our time. This is our space. This is AftA.            
          </motion.p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div 
          ref={leadershipRef}
          className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto items-center justify-center gap-[2rem] lg:gap-[4rem] mt-[56px] lg:mt-[96px]"
          variants={leadershipContainerVariants}
          initial="hidden"
          animate={isLeadershipInView ? "visible" : "hidden"}
        >
          {/* Text content */}
          <motion.div 
            className="lg:w-[368px]"
            variants={leadershipTextVariants}
          > 
            <motion.h1 
              className="text-[42px] md:text-[64px] leading-[50px] md:leading-[70px] font-normal mb-4"
              variants={leadershipTitleVariants}
            >
              Our Leadership
            </motion.h1>

            <motion.p 
              className="text-base font-normal text-gray-700"
              variants={leadershipParagraphVariants}
            > 
              At AftA, I envision a continent where every African no matter where they are can feel seen, heard, and connected. 
              Our goal is to build a digital home for Africa's voice, culture, and future a space where unity thrives,
              stories matter, and connection knows no borders.                      
            </motion.p>
          </motion.div>

          {/* Image container */}
          <motion.div 
            className="relative lg:h-[600px] lg:w-[604px]"
            variants={leadershipImageVariants}
          >
            <motion.img 
              src={img1} 
              className="lg:h-[600px] pt-3 lg:w-[604px] z-10 pointer-events-none rounded-lg" 
              alt=""
              animate={isLeadershipInView ? float : {}}
              whileHover={{ 
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="flex flex-col max-w-screen-2xl mx-auto items-center text-center justify-center gap-[1rem] my-[56px] lg:my-[96px]"
          variants={ctaContainerVariants}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
        >
          {/* Text content */}
          <div className=""> 
            <motion.h1 
              className="text-[42px] md:text-[64px] leading-[50px] md:leading-[70px] font-normal mb-4"
              variants={ctaTitleVariants}
            >
              Get The AftA App Now
            </motion.h1>

            <motion.p 
              className="text-base font-normal text-gray-700"
              variants={ctaTextVariants}
            > 
              Join the millions of Africans already sharing stories, building friendships, and creating a digital movement
            </motion.p>
          </div>

          <motion.div
            variants={ctaButtonsVariants}
          >
            <div className="flex  gap-4">
              <motion.div
                className="flex-1"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isCtaInView ? pulse : {}}
              >
                <img
                  src={Img2}
                  alt="Download on Apple"
                  className="w-[195px] h-[60px] object-contain hover:scale-105 duration-200"
                />
              </motion.div>

              <motion.div
                className="flex-1"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isCtaInView ? pulse : {}}
              >
                <img
                  src={Img3}
                  alt="Download on Play"
                  className="w-[195px] h-[60px] object-contain hover:scale-105 duration-200"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutThird;