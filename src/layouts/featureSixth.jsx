import { motion, useInView } from "framer-motion";
import img1 from "../assets/Story.png";
import img2 from "../assets/story1.png";


const FeatureSixth = () => {
  return (
    <motion.section>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">



    

      {/* Text content */}
      <motion.div className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4">
Stories that Speak for You
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Share your moments before they disappear. Post photos, memojis, and clips that vanish after 24 hours—let your personality shine daily.      
  </motion.p>
      </motion.div>



        <motion.div className="relative">
        <motion.img src={img1} className="h-[740px] relative" alt="" />
                            <motion.img src={img2} className="absolute left-[-320px] top-[5rem]" alt="" />

      </motion.div>


        </div>

    </motion.section>
  );
};

export default FeatureSixth;
