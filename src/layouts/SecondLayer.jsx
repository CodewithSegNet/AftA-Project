import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Img2 from "../assets/btnfirst.png";
import Img3 from "../assets/btnsecond.png";


const Img1 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1759496443/new_atdovn.png";
const Img4 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754645447/map_tsvzve.png";




const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
};

const rotateIn = {
  hidden: { rotate: -10, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.8 } }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const SecondLayer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const lastImageRef = useRef(null);
  const isLastImageInView = useInView(lastImageRef, { once: true, margin: "-100px" });

  return (
    <motion.section ref={sectionRef} className="overflow-hidden md:px-8">
      <motion.div
        className="mt-[55px] mb-[30px] lg:mt-[90px] lg:mb-[76px]"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="font-normal text-center mx-auto text-lg sm:text-xl md:text-3xl max-w-screen-lg">
          AftA is where African voices unite, stories thrive, and connections turn into community.
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-screen-xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="flex-1"
          variants={zoomIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img
            src={Img1}
            alt="Main App"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 w-full max-w-md"
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="mb-6">
            <h1 className="text-[32px] md:text-[64px] leading-tight font-normal mb-3">
              Get The App Now
            </h1>
            <p className="text-base leading-6 text-gray-700">
              Join the millions of Africans already sharing stories, building friendships, and creating a digital movement
            </p>
          </div>

          <div className="flex gap-4">
            <motion.div
              className="flex-1"
              variants={rotateIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src={Img2}
                alt="Download on Apple"
                className="w-[170px] md:w-full md:h-auto object-contain hover:scale-105 duration-200"
              />
            </motion.div>

            <motion.div
              className="flex-1"
              variants={slideInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src={Img3}
                alt="Download on Play"
                className="w-[170px] md:w-full md:h-auto object-contain hover:scale-105 duration-200"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Map Image */}
      <motion.div
        ref={lastImageRef}
        className="my-[76px]"
        variants={zoomIn}
        initial="hidden"
        animate={isLastImageInView ? "visible" : "hidden"}
      >
        <img
          src={Img4}
          alt="Map"
          className="w-full max-w-screen-lg mx-auto h-auto lg:object-contain hover:scale-110 duration-200"
        />
      </motion.div>
    </motion.section>
  );
};

export default SecondLayer;
