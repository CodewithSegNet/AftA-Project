import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LeftArrow from "../assets/arrowleft.png";
import RightArrow from "../assets/arrowright.png";


const Img1 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1759669739/first_yzp23j.png";
const Img2 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754646547/second_xid8ct.png";
const Img3 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754646643/third_vo7uwt.png";



const images = [Img1, Img2, Img3];

const FourthLayer = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); 

  const prevImage = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getPrevIndex = () => (current === 0 ? images.length - 1 : current - 1);
  const getNextIndex = () => (current === images.length - 1 ? 0 : current + 1);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <motion.section className="max-w-screen-2xl mx-auto my-[40px] md:my-[76px]">
      <div className="px-4 md:px-6">
      <div className="max-w-[669px] md:pl-[27px] pb-[46px]">
        <h2 className="text-[42px] text-primary md:text-[64px] pb-[8px] leading-[50px] md:leading-[70px] font-normal">
          How The AftA App Works
        </h2>
        <p className="text-base font-normal text-primary">
          We've made it simple. explore how AftA helps you meet new people, join
          trending conversations, and stay in the loop effortlessly.
        </p>
      </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center gap-8 overflow-hidden px-4 md:px-0 relative">
        {/* Left Thumbnail and Arrows */}
        <div className="flex flex-col h-auto justify-between items-center">
          <div className="hidden lg:flex mb-4">
            <img
              src={images[getPrevIndex()]}
              alt="Previous Thumbnail"
                loading="eager"
              className="w-[201px] max-h-[230px]  object-cover rounded"
            />
          </div>
          <div className="flex items-center justify-end w-full gap-2">
                     {/* Dots */}
          <div className="absolute md:hidden flex items-center left-9 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-6 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary scale-110" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

            <button onClick={prevImage}>
              <img src={LeftArrow} loading="eager" alt="Previous" className="w-9 h-9 hover:scale-105 duration-200" />
            </button>
            <button onClick={nextImage}>
              <img src={RightArrow} loading="eager"  alt="Next" className="w-9 h-9 hover:scale-105 duration-200" />
            </button>
          </div>
        </div>

        {/* Main Slide */}
        <div className="bg-[#d7e2c4] w-full max-w-[802px] h-auto md:h-[382px] flex flex-col md:flex-row items-center md:items-end justify-between rounded-[12.41px] overflow-hidden relative">
          <div className="flex-1 max-w-[669px] pl-[15px] md:pl-[27px] pb-[46px]">
            <h2 className="text-[42px] pt-[20px] md:pt-0 text-primary md:text-[54px] pb-[8px] leading-[50px] md:leading-[70px] font-normal">
              Download The AftA App
            </h2>
          </div>

          <div className="flex-1 flex justify-center items-center relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`Slide ${current}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                loading="eager"
                transition={{ duration: 0.5 }}
                className="w-[401px] h-[382px] object-cover rounded-[12.41px]"
              />
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="absolute hidden md:flex top-10 left-10 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-6 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary scale-110" : "bg-gray-100"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Thumbnail */}
        <div className="hidden lg:flex flex-col h-auto justify-between items-center">
            <div className="mb-4 list-none">
            <img
              src={images[getNextIndex()]}
              alt="Next Thumbnail"
                loading="eager"
              className="w-[201px] max-h-[250px] object-cover rounded"
            />
          </div>
          <div>
          
          <button
            className="
              group
              hidden lg:flex items-center py-[12px] px-[40px] leading-[24px]
              rounded-[90px]
              text-white text-sm font-normal
              bg-[rgba(20,80,72,1)]
              hover:bg-black
              transition-all duration-300
              overflow-hidden
            "
          >
          
            
            {/* Content on top */}
            <span className="relative hidden lg:flex items-center z-10">

Try It Now
            </span>
          </button>
          
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FourthLayer;