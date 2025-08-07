import { motion, useInView } from "framer-motion";
import img1 from "../assets/Upload1.png";
import img2 from "../assets/Frame3.png";
import img3 from "../assets/Frame2.png";


const FeatureSixth = () => {
  return (
    <motion.section>

        <div className="flex items-center justify-center max-w-screen-2xl mx-auto my-[96px] gap-[4rem]">

    <motion.div className="relative">
        <motion.img src={img1} className="h-[740px] relative" alt="" />
        <motion.img src={img2} className="absolute left-[-220px] top-[18rem]" alt="" />
        <motion.img src={img3} className="absolute right-[-240px] top-[10rem]" alt="" />


      </motion.div>

    

      {/* Text content */}
      <motion.div className="w-[368px]">
        <motion.h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[80px] font-normal mb-4">
Tag and Bring People In
        </motion.h1>

        <motion.p className="text-base font-normal text-gray-700">
Mention friends to loop them in. Tagging keeps your posts interactive and your people connected. 
 </motion.p>
      </motion.div>



    


        </div>

    </motion.section>
  );
};

export default FeatureSixth;
