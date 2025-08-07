import { motion, useInView } from "framer-motion";
import img1 from "../assets/Profile.png";



const FeatureNine = () => {
  return (
    <motion.section>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">

    <motion.div className="relative">
        <motion.img src={img1} className="h-[740px] relative" alt="" />
      </motion.div>

    

      {/* Text content */}
      <motion.div className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4">
Keep your info updated
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Manage your account, bio, and more. You’re always in full control of how you show up on AftA.
 </motion.p>
      </motion.div>



    


        </div>

    </motion.section>
  );
};

export default FeatureNine;
