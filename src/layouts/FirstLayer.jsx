import { motion } from "framer-motion";
import Img4 from "../assets/Fram1.png";
import Img5 from "../assets/Fram2.png";


const Img1 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754645296/Maskgroup_rukmqw.png";
const Img6 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754645325/markgroup2_j69e7n.webp";
const Img3 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754645470/countries_xnlcji.png";
const Img2 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1759494539/newTrayStory_hixkak.png"



const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
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

const FirstLayer = () => {
  return (
    <motion.section
      className="max-w-[1025.34px] mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Text Content */}
        <motion.div className="flex-1 max-w-[368px]" variants={childVariants}>
          <h1 className="text-[42px] md:text-[64px] leading-[50px] md:leading-[70px] font-normal mb-4">
            Africa’s New Social Pulse
          </h1>
          <p className="text-base font-normal text-gray-700">
            From Lagos to Nairobi, connect with real people, real vibes, and real stories. AftA is the heartbeat of Africa’s online generation.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div className="flex-1 relative" variants={childVariants}>
          {/* Main Static App Image */}

                    {/* Img2 - Float effect */}
          <motion.img
            src={Img2}
            alt="Story Tray"
            className="w-[600px] h-auto object-contain lg:absolute top-[17px] lg:left-[-380px]"
            variants={childVariants}
            animate={float}
          />

          <motion.img
            src={Img1}
            alt="Main App"
            className="w-full hidden lg:block h-auto object-contain relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

           <motion.img
            src={Img6}
            alt="Main App"
            className="w-full block md:hidden h-auto object-contain relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />



          {/* Img3 - Pulse */}
       <motion.img
            src={Img3}
            alt="Countries"
            className="w-[180px] md:w-[240px] lg:w-[290px] h-auto object-contain absolute bottom-[140px] lg:bottom-[-30px] left-[-10px] md:left-[-140px] lg:left-[-190px]"
            initial={{ scale: 1 }}
            animate={pulse}
          />

          {/* Img4 - Float + slight rotate */}
          <motion.img
            src={Img4}
            alt="Emoji"
            className="w-[290px] h-auto object-contain absolute bottom-[62px] lg:bottom-[100px] right-[-14px] lg:right-[-130px]"
            variants={childVariants}
            animate={rotate}
          />

          {/* Img5 - Float */}
          <motion.img
            src={Img5}
            alt="YouTube"
            className="w-[290px] h-auto object-contain absolute bottom-[-30px] right-[-7px] lg:right-[-110px]"
            variants={childVariants}
            animate={float}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FirstLayer;
