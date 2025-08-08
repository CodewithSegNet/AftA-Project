import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import img3 from "../assets/fill.png";
import img1 from "../assets/profile.png";
import img4 from "../assets/remove.png";
import img5 from "../assets/Community01.png";
import img6 from "../assets/Community2.png";
import img7 from "../assets/Community3.png";
import img8 from "../assets/Community4.png";
import img9 from "../assets/Community001.png";
import img10 from "../assets/Community002.png";
import img11 from "../assets/Community004.png";
import img12 from "../assets/Community006.png";


const Img2 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754645067/community1_z8zcqf.png";



const CommunityFirst = () => {
      const [activeTab, setActiveTab] = useState("Create Community");
    
      // Create refs for each section
      const heroRef = useRef(null);
      const tabSwitcherRef = useRef(null);
      const section1Ref = useRef(null);
      const section2Ref = useRef(null);
      const section3Ref = useRef(null);
      const section4Ref = useRef(null);
      const section5Ref = useRef(null);
      const section6Ref = useRef(null);
      const joinSection1Ref = useRef(null);
      const joinSection2Ref = useRef(null);
      const joinSection3Ref = useRef(null);
      const joinSection4Ref = useRef(null);

      // useInView hooks for each section
      const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });
      const tabSwitcherInView = useInView(tabSwitcherRef, { once: true, threshold: 0.3 });
      const section1InView = useInView(section1Ref, { once: true, threshold: 0.2 });
      const section2InView = useInView(section2Ref, { once: true, threshold: 0.2 });
      const section3InView = useInView(section3Ref, { once: true, threshold: 0.2 });
      const section4InView = useInView(section4Ref, { once: true, threshold: 0.2 });
      const section5InView = useInView(section5Ref, { once: true, threshold: 0.2 });
      const section6InView = useInView(section6Ref, { once: true, threshold: 0.2 });
      const joinSection1InView = useInView(joinSection1Ref, { once: true, threshold: 0.2 });
      const joinSection2InView = useInView(joinSection2Ref, { once: true, threshold: 0.2 });
      const joinSection3InView = useInView(joinSection3Ref, { once: true, threshold: 0.2 });
      const joinSection4InView = useInView(joinSection4Ref, { once: true, threshold: 0.2 });

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
    <img src={Img2} className="relative" alt="" />
</div>




<motion.div 
  ref={tabSwitcherRef}
  variants={staggerContainer}
  initial="hidden"
  animate={tabSwitcherInView ? "visible" : "hidden"}
  className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center"
>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center mb-[96px]"
            >

                <h1 className="text-3xl text-black mb-3">Let's Show You How</h1>
                <p className="text-sm text-black">Follow the steps below to join or create your own community on AftA.</p>
            </motion.div>


<motion.div 
  variants={fadeInUp}
  className="flex gap-5 items-center bg-[rgba(0,17,23,1)] rounded-full p-2 w-fit mb-10"
>

    <img src={img3} alt="" />

<div className="flex gap-2 items-center w-fit relative">
    {/* Active tab indicator */}
    <motion.div
      className="absolute inset-0 bg-[rgba(255,180,27,0.1)] rounded-full"
      initial={false}
      animate={{
        x: activeTab === "Create Community" ? 0 : "100%",
        width: activeTab === "Create Community" ? "calc(50% - 4px)" : "calc(50% - 4px)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      style={{ zIndex: 0 }}
    />
    
    <button 
      className={`${activeTab === "Create Community" 
        ? "text-[rgba(255,180,27,1)] font-semibold" 
        : "text-[rgba(255,255,255,1)]"} px-4 py-2 rounded-full transition-all duration-300 font-semibold w-fit relative z-10`}
      onClick={() => setActiveTab("Create Community")}
    >
Create Community
    </button>
    <button 
      className={`${activeTab === "Join Community" 
        ? "text-[rgba(255,180,27,1)] font-semibold" 
        : "text-[rgba(255,255,255,1)]"} px-4 py-2 rounded-full transition-all font-semibold duration-300 w-fit relative z-10`}
      onClick={() => setActiveTab("Join Community")}
    >
Join Community
    </button>
</div>


</motion.div>
</motion.div>


<div className="absolute top-[13rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <motion.div 
        initial="hidden"
        className="w-[378px]"
      >
        <motion.h1 
          className="text-[32px] md:text-[50px] leading-[50px] md:leading-[55px] font-normal mb-4"
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
            {activeTab === "Create Community" && (
              <motion.section 
                key="create-community"
                id="Create Community"
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
          className="flex items-center justify-center max-w-screen-2xl mx-auto my-[130px] gap-[4rem]"
        >


    

      {/* Text content */}
      <motion.div variants={fadeInLeft} className="w-[398px]">
        <motion.h1 className="text-[42px] md:text-[60px] leading-[50px] md:leading-[80px] font-normal mb-4">
            <span className="flex text-left items-end">
<span className="flex items-end w-fit"> Tap "Create a  Community"<span><img src={img4} className="h-[4rem] w-[7rem]" alt="" /></span> </span>


            </span>
        </motion.h1>

        <motion.p className="text-left text-base font-normal text-gray-700">
Manage your account, bio, and more. You're always in full control of how you show up on AftA.
 </motion.p>
      </motion.div>


    <motion.div variants={fadeInRight} className="relative">
        <motion.img src={img5} className="h-[740px] relative" alt="" />
      </motion.div>

    


        </motion.div>






        <motion.div 
          ref={section2Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]"
        >

    <motion.div variants={fadeInLeft} className="relative">
        <motion.img src={img6} className="h-[740px] relative" alt="" />
      </motion.div>

    

      {/* Text content */}
      <motion.div variants={fadeInRight} className="w-[368px]">
        <motion.h1 className=" text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
            Give It a Name
        </motion.h1>

        <motion.p className="text-base font-normal text-left  text-gray-700">
            Pick a unique name that captures the essence of your community. This is how others will discover you.
 </motion.p>
      </motion.div>



    


        </motion.div>





        <motion.div 
          ref={section3Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]"
        >



    

      {/* Text content */}
      <motion.div variants={fadeInLeft} className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Choose a Niche
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Select a niche that defines your community's focus. This helps like-minded people find your community faster.
 </motion.p>
      </motion.div>



        <motion.div variants={fadeInRight} className="relative">
        <motion.img src={img6} className="h-[740px] relative" alt="" />
      </motion.div>


        </motion.div>





        <motion.div 
          ref={section4Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section4InView ? "visible" : "hidden"}
          className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]"
        >

    <motion.div variants={fadeInLeft} className="relative">
        <motion.img src={img6} className="h-[740px] relative" alt="" />
      </motion.div>

    

      {/* Text content */}
      <motion.div variants={fadeInRight} className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Add a Description
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Manage your account, bio, and more. You're always in full control of how you show up on AftA.
 </motion.p>
      </motion.div>



    


        </motion.div>





        <motion.div 
          ref={section5Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section5InView ? "visible" : "hidden"}
          className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]"
        >

   

    

      {/* Text content */}
      <motion.div variants={fadeInLeft} className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Set Your Permissions
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Decide how your community will function — choose who can post, approve members, or moderate.
 </motion.p>
      </motion.div>


 <motion.div variants={fadeInRight} className="relative">
        <motion.img src={img7} className="h-[740px] relative" alt="" />
      </motion.div>
    


        </motion.div>





        <motion.div 
          ref={section6Ref}
          variants={staggerContainer}
          initial="hidden"
          animate={section6InView ? "visible" : "hidden"}
          className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]"
        >

    <motion.div variants={fadeInLeft} className="relative">
        <motion.img src={img8} className="h-[740px] relative" alt="" />
      </motion.div>

    

      {/* Text content */}
      <motion.div variants={fadeInRight} className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Submit for Approval
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700 text-left">
Once you're done, submit your community for admin approval. You'll be notified once it's live!
 </motion.p>
      </motion.div>



    


        </motion.div>


              </motion.section>
            )}

            {activeTab === "Join Community" && (
              <motion.section 
                key="join-community"
                id="Join Community"
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

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[130px] gap-[4rem]">
          {/* Text content */}
          <motion.div className="w-[368px]">
            <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Explore the Space
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Browse through AftA's community hub to discover spaces that align with your interests. </motion.p>
          </motion.div>

          <motion.div className="relative">
            <motion.img src={img9} className="h-[740px] relative" alt="" />
          </motion.div>
        </div>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">
          <motion.div className="relative">
            <motion.img src={img10} className="h-[740px] relative" alt="" />
          </motion.div>

          {/* Text content */}
          <motion.div className="w-[368px]">
            <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Search or Discover
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Use the search bar to find a specific community or check out personalized recommendations just for you.
            </motion.p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">
          {/* Text content */}
          <motion.div className="w-[368px]">
            <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
Tap to Learn More
            </motion.h1>

            <motion.p className="text-base font-normal text-gray-700 text-left">
Found one that catches your eye? Tap Join to view its details. If it feels right, hit Join Community.
            </motion.p>
          </motion.div>

          <motion.div className="relative">
            <motion.img src={img11} className="h-[740px] relative" alt="" />
          </motion.div>
        </div>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">
          <motion.div className="relative">
            <motion.img src={img12} className="h-[740px] relative" alt="" />
          </motion.div>

          {/* Text content */}
          <motion.div className="w-[368px]">
            <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4 text-left">
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

export default CommunityFirst;