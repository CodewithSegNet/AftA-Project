import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from 'react';
import { getCloudinaryUrl } from "../../utils/cloudinary";
const img3 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001693/afta/fill.png";
const img4 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792001695/afta/plus.svg";
const img5 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021042/Screen-CreateCircle.avif";
const img6 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021041/Screen-CreateCircle_2.avif";
const img7 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021042/Screen-CreateCircle.avif";
const img8 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021042/Screen-CreateCircle_5.avif";
const img9 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021041/Circle_1.avif";
const img10 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021041/Circle_Discover.avif";
const img11 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021041/Circle_Join_modal-open.avif";
const img12 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021042/Circle_Join_modal.avif";
const img14 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021042/Screen-CreateCircle_3.avif";
const img15 = "https://res.cloudinary.com/wruetqvx/image/upload/v1792021041/Screen-CreateCircle_1.avif";


const Img2 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754645067/community1_z8zcqf.png";



const CircleFirst = () => {
      const [activeTab, setActiveTab] = useState("Create Circle");
    
      // Create refs for each section
      const tabSwitcherRef = useRef(null);
      const section1Ref = useRef(null);
      const section2Ref = useRef(null);
      const section3Ref = useRef(null);
      const section4Ref = useRef(null);
      const section5Ref = useRef(null);
      const section6Ref = useRef(null);

      // useInView hooks for each section
      const tabSwitcherInView = useInView(tabSwitcherRef, { once: true, threshold: 0.3 });
      const section1InView = useInView(section1Ref, { once: true, threshold: 0.2 });
      const section2InView = useInView(section2Ref, { once: true, threshold: 0.2 });
      const section3InView = useInView(section3Ref, { once: true, threshold: 0.2 });
      const section4InView = useInView(section4Ref, { once: true, threshold: 0.2 });
      const section5InView = useInView(section5Ref, { once: true, threshold: 0.2 });
      const section6InView = useInView(section6Ref, { once: true, threshold: 0.2 });

      // Animation variants
      const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }
        }
      };

      const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }
        }
      };

      const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }
        }
      };

      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
          }
        }
      };
  
  return (
    <motion.section>





        <div className="mb-[100px]">




<div className="relative">
  <picture>
    <source
      media="(max-width: 640px)"
      srcSet={getCloudinaryUrl(Img2, "q_auto:low")}
      type="image/avif"
    />
    <source
      media="(max-width: 1024px)"
      srcSet={getCloudinaryUrl(Img2, "q_auto:good")}
      type="image/avif"
    />
    <source
      media="(max-width: 1920px)"
      srcSet={getCloudinaryUrl(Img2, "q_auto:best")}
      type="image/avif"
    />
    <img 
      src={getCloudinaryUrl(Img2, "q_auto:best")} 
      className="relative mt-[7rem] lg:mt-0" 
      alt="" 
      loading="lazy"
      decoding="async"
    />
  </picture>
</div>




<motion.div 
  ref={tabSwitcherRef}
  variants={staggerContainer}
  initial="hidden"
  animate={tabSwitcherInView ? "visible" : "hidden"}
  className="absolute top-[30rem] lg:top-[50rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center"
>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center mb-[50px] lg:mb-[76px]"
            >

                <h1 className="text-[32px] md:text-3xl text-black mb-3">Let's Show You How</h1>
                <p className="text-sm text-black">Follow the steps below to join or create your own Circle on AftA.</p>
            </motion.div>

<motion.div 
  variants={fadeInUp}
  className="flex lg:p-4 items-center bg-[rgba(0,17,23,1)] rounded-full px-8 py-2 w-fit"
>
    <img src={getCloudinaryUrl(img3, "q_auto:best")} className="h-8 w-8 lg:h-11 lg:w-11 mr-4" alt="" loading="lazy" />

    <div className="flex  gap-3 items-center w-fit relative">
        {/* Active tab indicator */}
        <motion.div
          className="absolute bg-[rgba(255,180,27,0.2)] rounded-full"
          initial={false}
          animate={{
            x: activeTab === "Create Circle" 
              ? 0 
              : (document.querySelector('.tab-btn-1')?.offsetWidth || 0) + 8,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          style={{ 
            zIndex: 0,
            top: 0,
            bottom: 0,
            left: 0,
            width: activeTab === "Create Circle" 
              ? document.querySelector('.tab-btn-1')?.offsetWidth + 'px'
              : document.querySelector('.tab-btn-2')?.offsetWidth + 'px'
          }}
        />
        
        <button 
          className={`tab-btn-1 ${activeTab === "Create Circle" 
            ? "text-[rgba(255,180,27,1)] font-semibold" 
            : "text-[rgba(255,255,255,1)]"} px-4 py-2 rounded-full transition-all whitespace-nowrap text-xs lg:text-base duration-300 font-semibold w-fit relative z-10 hover:text-[rgba(255,180,27,1)]`}
          onClick={() => setActiveTab("Create Circle")}
        >
          Create Circle
        </button>
        <button 
          className={`tab-btn-2 ${activeTab === "Join Circle" 
            ? "text-[rgba(255,180,27,1)] font-semibold" 
            : "text-[rgba(255,255,255,1)]"} px-4 py-2 rounded-full transition-all whitespace-nowrap text-xs pl-[6px] lg:text-base font-semibold duration-300 w-fit relative z-10 hover:text-[rgba(255,180,27,1)]`}
          onClick={() => setActiveTab("Join Circle")}
        >
          Join Circle
        </button>
    </div>
</motion.div>
</motion.div>


<div className="absolute  top-[11rem] lg:top-[13rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <motion.div 
        initial="hidden"
        className="w-[240px] lg:w-[378px] text-center lg:text-left"
      >
        <motion.h1 
          className="text-[32px] md:text-[50px] leading-[35px] lg:leading-[55px] font-normal mb-2 lg:mb-4"
        >
Build Your Tribe <br /> Find Your Voice
        </motion.h1>

        <motion.p 
          className="text-sm font-normal text-gray-700"
        >
Discover and build communities that speak your vibe. Connect, share, and grow with your people—right on AftA. </motion.p>
      </motion.div>
</div>
        </div>

        {/* Content sections with animations */}
        <div className="">
          <AnimatePresence mode="wait">
            {activeTab === "Create Circle" && (
              <motion.section 
                key="create-Circle"
                id="Create Circle"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 }
                }}
                className="inset-0 flex flex-col items-center justify-center text-center p-8"
              >
          

        <motion.div 
          ref={section1Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto mt-[170px] mb-[30px] lg:mt-[300px] lg:mb-[130px] gap-[2rem] lg:gap-[4rem]"
        >


    

      {/* Text content */}
      <motion.div variants={fadeInLeft} className="lg:w-[398px]">
        <motion.h1 className="text-[32px] md:text-[60px] leading-[100%] tracking-0 font-normal mb-4">
            <span className="flex  text-left items-end">
<span className="flex items-end w-fit"> Tap "Create a  Circle"<span><img src={img4} className="h-[3.5rem] w-[7rem]" alt="" /></span> </span>


            </span>
        </motion.h1>

        <motion.p className="text-left text-base font-normal text-gray-700">
Get started by tapping the plus button to start creating a circle.  </motion.p>
      </motion.div>


    <motion.div variants={fadeInRight} className="relative">
      <picture>
        <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img5, "q_auto:low")} type="image/avif" />
        <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img5, "q_auto:good")} type="image/avif" />
        <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img5, "q_auto:best")} type="image/avif" />
        <motion.img src={getCloudinaryUrl(img5, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
      </picture>
    </motion.div>

    


        </motion.div>






        <motion.div 
          ref={section2Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2em] lg:gap-[4rem]"
        >

    <motion.div variants={fadeInLeft} className="relative order-2 lg:order-1">
      <picture>
        <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img15, "q_auto:low")} type="image/avif" />
        <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img15, "q_auto:good")} type="image/avif" />
        <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img15, "q_auto:best")} type="image/avif" />
        <motion.img src={getCloudinaryUrl(img15, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
      </picture>
    </motion.div>

    

      {/* Text content */}
      <motion.div variants={fadeInRight} className="lg:w-[368px] order-1 lg:order-2">
        <motion.h1 className=" text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
            Give It a Name
        </motion.h1>

        <motion.p className="text-base font-normal text-left  text-gray-700">
Pick a unique name that captures the essence of your community. This is how others will discover you. </motion.p>
      </motion.div>



    


        </motion.div>





        <motion.div 
          ref={section3Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]"
        >



    

      {/* Text content */}
      <motion.div variants={fadeInLeft} className="lg:w-[368px]">
        <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Choose a Niche
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Select a niche that defines your Circle's focus. This helps like-minded people find your Circle faster.
 </motion.p>
      </motion.div>



        <motion.div variants={fadeInRight} className="relative">
          <picture>
            <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img6, "q_auto:low")} type="image/avif" />
            <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img6, "q_auto:good")} type="image/avif" />
            <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img6, "q_auto:best")} type="image/avif" />
            <motion.img src={getCloudinaryUrl(img6, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
          </picture>
        </motion.div>

        </motion.div>

        <motion.div 
          ref={section4Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section4InView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]"
        >

    <motion.div variants={fadeInLeft} className="relative order-2 lg:order-2">
      <picture>
        <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img14, "q_auto:low")} type="image/avif" />
        <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img14, "q_auto:good")} type="image/avif" />
        <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img14, "q_auto:best")} type="image/avif" />
        <motion.img src={getCloudinaryUrl(img14, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
      </picture>
    </motion.div>

    

      {/* Text content */}
      <motion.div variants={fadeInRight} className="lg:w-[368px] order-1 lg:order-2">
        <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Add a Description
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Tell potential members what your community is all about. Share your purpose, vibe, and what to expect. </motion.p>
      </motion.div>



    


        </motion.div>





        <motion.div 
          ref={section5Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section5InView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]"
        >

   

    

      {/* Text content */}
      <motion.div variants={fadeInLeft} className="lg:w-[368px]">
        <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Set Your Permissions
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Decide how your community will function — choose who can post, approve members, or moderate.
 </motion.p>
      </motion.div>


 <motion.div variants={fadeInRight} className="relative">
      <picture>
        <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img7, "q_auto:low")} type="image/avif" />
        <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img7, "q_auto:good")} type="image/avif" />
        <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img7, "q_auto:best")} type="image/avif" />
        <motion.img src={getCloudinaryUrl(img7, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
      </picture>
  </motion.div>

        </motion.div>

        <motion.div 
          ref={section6Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section6InView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto  my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]"
        >

    <motion.div variants={fadeInLeft} className="relative order-2 lg:order-1">
      <picture>
        <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img8, "q_auto:low")} type="image/avif" />
        <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img8, "q_auto:good")} type="image/avif" />
        <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img8, "q_auto:best")} type="image/avif" />
        <motion.img src={getCloudinaryUrl(img8, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
      </picture>
    </motion.div>

    

      {/* Text content */}
      <motion.div variants={fadeInRight} className="lg:w-[368px] order-1 lg:order-2">
        <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Submit for Approval
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Once you're done, submit your Circle for admin approval. You'll be notified once it's live!
 </motion.p>
      </motion.div>



    


        </motion.div>


              </motion.section>
            )}

            {activeTab === "Join Circle" && (
              <motion.section 
                key="join-Circle"
                id="Join Circle"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 }
                }}
                className="inset-0 flex flex-col items-center justify-center text-center p-8"
              >

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto mt-[170px] mb-[30px] lg:mt-[300px] lg:mb-[130px] gap-[2rem] lg:gap-[4rem]">
          {/* Text content */}
          <motion.div className="lg:w-[368px]">
            <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Explore the Space
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Browse through AftA's Circle hub to discover spaces that align with your interests. </motion.p>
          </motion.div>

          <motion.div className="relative">
            <picture>
              <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img9, "q_auto:low")} type="image/avif" />
              <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img9, "q_auto:good")} type="image/avif" />
              <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img9, "q_auto:best")} type="image/avif" />
              <motion.img src={getCloudinaryUrl(img9, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
            </picture>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto my-[40px] lg:my-[96px] gap-[4rem]">
          <motion.div className="relative order-2 lg:order-1">
            <picture>
              <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img10, "q_auto:low")} type="image/avif" />
              <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img10, "q_auto:good")} type="image/avif" />
              <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img10, "q_auto:best")} type="image/avif" />
              <motion.img src={getCloudinaryUrl(img10, "q_auto:best")} className="h-[600px] lg:h-[740px] order-2 lg-order-1 relative" alt="" loading="lazy" decoding="async" />
            </picture>
          </motion.div>

          {/* Text content */}
          <motion.div className="lg:w-[368px] order-1 lg:order-2">
            <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Search or Discover
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Use the search bar to find a specific Circle or check out personalized recommendations just for you.
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]">
          {/* Text content */}
          <motion.div className="lg:w-[368px]">
            <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Tap to Learn More
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Found one that catches your eye? Tap Join to view its details. If it feels right, hit Join Community.
            </motion.p>
          </motion.div>

          <motion.div className="relative">
            <picture>
              <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img11, "q_auto:low")} type="image/avif" />
              <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img11, "q_auto:good")} type="image/avif" />
              <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img11, "q_auto:best")} type="image/avif" />
              <motion.img src={getCloudinaryUrl(img11, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
            </picture>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto my-[40px] lg:my-[96px] gap-[2rem] lg:gap-[4rem]">
          <motion.div className="relative order-2 lg:order-1">
            <picture>
              <source media="(max-width: 640px)" srcSet={getCloudinaryUrl(img12, "q_auto:low")} type="image/avif" />
              <source media="(max-width: 1024px)" srcSet={getCloudinaryUrl(img12, "q_auto:good")} type="image/avif" />
              <source media="(max-width: 1920px)" srcSet={getCloudinaryUrl(img12, "q_auto:best")} type="image/avif" />
              <motion.img src={getCloudinaryUrl(img12, "q_auto:best")} className="h-[600px] lg:h-[740px] relative" alt="" loading="lazy" decoding="async" />
            </picture>
          </motion.div>

          {/* Text content */}
          <motion.div className="lg:w-[368px] order-1 lg:order-2">
            <motion.h1 className="text-[32px] md:text-[64px] leading-[100%] tracking-0 font-normal mb-4 text-left">
Wait for Approval
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Once you request to join, hold tight — you'll be notified when your membership is approved.
            </motion.p>
          </motion.div>
        </div>
           
              </motion.section>
            )}
          </AnimatePresence>
        </div>

    </motion.section>
  );
};

export default CircleFirst;