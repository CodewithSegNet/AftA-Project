import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const AboutFirst = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Store video URL as a string constant
  const videoUrl = "https://res.cloudinary.com/wruetqvx/video/upload/v1792015150/7677015-sd_540_960_25fps.mp4.mp4";
  const FirstImg = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1759494297/newGroup2_mwmboj.png";

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

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const videoVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : -100,
      y: isMobile ? 30 : 0, 
      scale: isMobile ? 0.95 : 0.8 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : 100, 
      y: isMobile ? 30 : 50 
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

  const headingVariants = {
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

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
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

  return (
    <>
      <section className="overflow-x-clip overflow-hidden w-full">
        <motion.div 
          ref={ref}
          className="flex lg:flex-row flex-col max-w-screen-2xl mx-auto items-center justify-center gap-[2rem] lg:gap-[4rem]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Video container with overlay */}
          <motion.div
            className="relative h-[520px] w-[400px] max-w-full md:h-[850px] md:w-[580px] lg:h-[600px] lg:w-[400px]"
            variants={videoVariants}
          >
            <motion.div
              className="relative w-full h-full rounded-lg overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <video 
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source
                  media="(max-width: 640px)"
                  src={getCloudinaryUrl(videoUrl, "q_auto:low")}
                  type="video/mp4"
                />
                <source
                  media="(max-width: 1024px)"
                  src={getCloudinaryUrl(videoUrl, "q_auto:good")}
                  type="video/mp4"
                />
                <source
                  media="(max-width: 1920px)"
                  src={getCloudinaryUrl(videoUrl, "q_auto:best")}
                  type="video/mp4"
                />
                <source src={getCloudinaryUrl(videoUrl, "q_auto:best")} type="video/mp4" />
              </video>
              <picture className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <source
                  media="(max-width: 640px)"
                  srcSet={getCloudinaryUrl(FirstImg, "q_auto:low")}
                  type="image/avif"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet={getCloudinaryUrl(FirstImg, "q_auto:good")}
                  type="image/avif"
                />
                <source
                  media="(max-width: 1920px)"
                  srcSet={getCloudinaryUrl(FirstImg, "q_auto:best")}
                  type="image/avif"
                />
                <motion.img 
                  src={getCloudinaryUrl(FirstImg, "q_auto:best")} 
                  className="w-full h-full object-cover rounded-lg" 
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div 
            className="lg:w-[368px] mb-12 lg:mb-0"
            variants={textVariants}
          > 
            <motion.h1 
              className="text-[32px] md:text-[64px] leading-[50px] md:leading-[70px] font-normal mb-2 lg:mb-4"
              variants={headingVariants}
            >
              Our Mission
            </motion.h1>

            <motion.p 
              className="text-base  md:pt-0 lg:pt-0 font-normal text-gray-700"
              variants={paragraphVariants}
            > 
Empower Africans to learn, create, and connect—blending education and entertainment so learners grow, tutors earn, and communities thrive.    </motion.p>
          </motion.div>

        </motion.div>
      </section>
    </>
  );
};

export default AboutFirst;