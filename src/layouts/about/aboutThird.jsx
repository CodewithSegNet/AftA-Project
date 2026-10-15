import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const Img2 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001690/afta/btnfirst.png";
const Img3 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001691/afta/btnsecond.png";

const img1 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1759669368/uju1_oisqyj.png";

const AboutThird = () => {
  const storyRef = useRef(null);
  const leadershipRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isStoryInView = useInView(storyRef, { once: true, threshold: 0.2 });
  const isLeadershipInView = useInView(leadershipRef, { once: true, threshold: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, threshold: 0.2 });

  const container = {
hidden: { opacity: 0, y: 8 },
show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};


const item = {
hidden: { opacity: 0, y: 6 },
show: { opacity: 1, y: 0 },
};

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



  // ─── Store button icons (inline SVG — no image dependency) ───────────────────
const AppleIcon = () => (
  <svg width="33" height="33" viewBox="0 0 814 1000" fill="#FFF7E6" aria-hidden="true">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.5-127.5C46.7 790.7 0 663 0 541.8c0-207.1 135.4-316.6 268.1-316.6 71 0 130.1 46.7 174.4 46.7 42.7 0 109.2-49.3 188.6-49.3zm-183.8-78.4c33.6-39.5 57.4-94.3 57.4-149.1 0-7.7-.6-15.4-1.9-21.7-54.1 2-117.8 36.2-157.6 81.9-30.8 35.6-60.2 90.4-60.2 145.9 0 8.3 1.3 16.6 1.9 19.1 3.2.6 8.4 1.3 13.6 1.3 48.7 0 109.3-32.8 146.8-77.4z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="33" height="33" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.18 23.76a2 2 0 0 1-.96-.86l10-10 3.38 3.38-12.42 7.48z" fill="#EA4335"/>
    <path d="M1.07 1.63A2 2 0 0 0 .75 2.77v18.46c0 .4.1.78.32 1.11L12 12 1.07 1.63z" fill="#4285F4"/>
    <path d="M20.3 10.33l-2.93-1.77L13.97 12l3.4 3.4 2.94-1.77A2 2 0 0 0 20.3 10.33z" fill="#FBBC05"/>
    <path d="M3.18.24l12.42 7.48L12.2 11.1 2.22 1.1A2 2 0 0 1 3.18.24z" fill="#34A853"/>
  </svg>
);

// ─── Download buttons ─────────────────────────────────────────────────────────
const StoreButton = ({ icon, label, sub }) => (
  <button
    type="button"
    className="inline-flex items-center gap-[0.55rem] bg-[#111] text-white border-none rounded-[0.625rem] px-[1.1rem] py-[0.55rem] cursor-pointer text-left transition-all duration-[180ms] min-w-[8.5rem] hover:bg-[#2a2a2a] hover:-translate-y-[1px] active:translate-y-0"
  >
    <span className="flex items-center shrink-0 text-white">{icon}</span>
    <span className="flex flex-col gap-[0.05rem] text-[#FFF7E6]">
      <span className="text-[0.5625rem] font-normal text-[#FFF7E6] leading-none tracking-[0.01em]">{sub}</span>
      <span className="text-[0.9rem] font-semibold text-[#FFF7E6] leading-[1.2] tracking-[-0.01em]">{label}</span>
    </span>
  </button>
);

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
            className="text-[32px] md:text-[64px] leading-[35px] md:leading-[70px] font-normal mb-4"
            variants={storyTitleVariants}
          >
            AftA's Story
          </motion.h1>

    <motion.section
className=""
initial="hidden"
animate="show"
variants={container}
>
<motion.div className="prose prose-lg dark:prose-invert text-gray-800 sm:text-base" variants={item}>
<p className="mb-6 text-base sm:text-lg leading-relaxed">
AftA was born from a visionary commitment to redefine how Africans experience and engage with social media. It is a platform built with purpose, a safe empowering digital space where African people can authentically connect, express themselves, and showcase their talents without compromise.
</p>


<p className="mb-6 text-base sm:text-lg leading-relaxed">
For generations, African voices have been underrepresented, our stories overlooked, and our creative contributions undervalued within global digital ecosystems. AftA was founded to change this reality. It exists to amplify the voices of those who have too often been silenced and to provide a platform where African culture, innovation, and identity can thrive.
</p>


<p className="mb-6 text-base sm:text-lg leading-relaxed">

As the founder of AftA, my inspiration stems from personal experience. Growing up, I observed a significant void in the digital space, an absence of platforms that genuinely reflect the richness, diversity, and brilliance of African people. Despite being a continent bursting with creativity, heritage, and ingenuity, Africa does not have a globally recognized social media platform to call its own. Instead, we have engaged in online communities that were never designed with us in mind.
</p>

<p className="mb-6 text-base sm:text-lg leading-relaxed">
AftA is a bold step toward reclaiming digital ownership. It represents our collective stake in the global conversation and our right to be seen, heard, and celebrated on our terms.
</p>

<p className="mb-6 text-base sm:text-lg leading-relaxed">
This platform was created not just as a tool for communication, but as a digital sanctuary grounded in safety, inclusion, and authenticity. 
</p>

<p className="mb-0 text-base sm:text-lg leading-relaxed">
AftA is more than an app, it is a movement. It is where your voice matters, your talent is recognized, and your dreams have a place to grow. This is our time. This is our space. This is AftA.
</p>
</motion.div>
</motion.section>
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
              className="text-[32px] md:text-[64px] leading-[35px] md:leading-[70px] font-normal mb-4"
              variants={leadershipTitleVariants}
            >
              Our Leadership
            </motion.h1>

            <motion.p 
              className="text-base font-normal text-gray-700"
              variants={leadershipParagraphVariants}
            > 
              At AftA, I envision a platform where every African no matter where they are can feel seen, heard, and connected. 
              Our goal is to build a digital home for Africa's voice, culture, and future a space where unity thrives,
              stories matter, and connection knows no borders.                      
            </motion.p>
          </motion.div>

          {/* Image container */}
          <motion.div 
            className="relative lg:h-[600px] lg:w-[604px]"
            variants={leadershipImageVariants}
          >
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={getCloudinaryUrl(img1, "q_auto:low")}
                type="image/avif"
              />
              <source
                media="(max-width: 1024px)"
                srcSet={getCloudinaryUrl(img1, "q_auto:good")}
                type="image/avif"
              />
              <source
                media="(max-width: 1920px)"
                srcSet={getCloudinaryUrl(img1, "q_auto:best")}
                type="image/avif"
              />
              <motion.img 
                src={getCloudinaryUrl(img1, "q_auto:best")} 
                className="lg:h-[600px] pt-3 lg:w-[604px] z-10 pointer-events-none rounded-lg" 
                alt=""
          
                loading="lazy"
                decoding="async"
              />
            </picture>
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
              className="text-[32px] md:text-[64px] leading-[35px] md:leading-[70px] font-normal mb-4"
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
          
                  <StoreButton
        icon={<AppleIcon />}
        sub="Download on the"
        label="App Store"
      />
      <StoreButton
        icon={<GooglePlayIcon />}
        sub="Download on the"
        label="Google Play"
      />

        
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutThird;