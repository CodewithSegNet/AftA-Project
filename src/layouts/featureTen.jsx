import { motion, useInView } from "framer-motion";
import img1 from "../assets/Profile1.png";



const FeatureNine = () => {
  return (
    <motion.section>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">


    

      {/* Text content */}
      <motion.div className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4">
Built-In Privacy for You
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Total control over who sees what. From story views to chat access, tweak your privacy settings to feel secure.  </motion.p>
      </motion.div>



        <motion.div className="relative">
        <motion.img src={img1} className="h-[740px] relative" alt="" />
      </motion.div>



        </div>

    </motion.section>
  );
};

export default FeatureNine;
