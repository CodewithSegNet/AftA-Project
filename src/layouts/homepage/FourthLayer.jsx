import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LeftArrow from "../../assets/arrowleft.png";
import RightArrow from "../../assets/arrowright.png";
import { getCloudinaryUrl } from "../../utils/cloudinary";
import { useDownloadModal } from "../../utils/DownloadModalContext.jsx";


const Img1 = "https://res.cloudinary.com/wruetqvx/image/upload/q_auto,f_auto/v1791980871/Frame_37082.avif";
const Img2 = "https://res.cloudinary.com/wruetqvx/image/upload/q_auto,f_auto/v1791980872/Frame_37081.avif";
const Img3 = "https://res.cloudinary.com/wruetqvx/image/upload/q_auto,f_auto/v1791980872/Frame_37083.avif";

// Cloudinary placeholder images
const TUTOR_COURSE_IMG = "https://res.cloudinary.com/wruetqvx/image/upload/q_auto,f_auto/v1791980863/00eff07d1c9b62569fba39dddf8752d8cc4672f7.avif";
const TEACH_COURSE_IMG = "https://res.cloudinary.com/wruetqvx/image/upload/q_auto,f_auto/v1791980863/016d002252c753c45ef871090ce2ab59794c9098.avif";
const RESOURCES_IMG = "https://res.cloudinary.com/wruetqvx/image/upload/q_auto,f_auto/v1791980865/426d4c1bbe0f7288c6cd702cb089941615fa6428.avif";



const images = [Img1, Img2, Img3];

const FourthLayer = () => {
  const { openModal } = useDownloadModal();
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
  const showcaseBlockVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const showcaseItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <div className="font-sans">
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
        {/* Left Thumbnail and Arrows (Desktop) */}
        <div className="hidden lg:flex flex-col h-auto justify-between items-center">
          <div className="mb-4">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={getCloudinaryUrl(images[getPrevIndex()], "q_auto:low")}
                type="image/avif"
              />
              <source
                media="(max-width: 1024px)"
                srcSet={getCloudinaryUrl(images[getPrevIndex()], "q_auto:good")}
                type="image/avif"
              />
              <source
                media="(max-width: 1920px)"
                srcSet={getCloudinaryUrl(images[getPrevIndex()], "q_auto:best")}
                type="image/avif"
              />
              <img
                src={getCloudinaryUrl(images[getPrevIndex()], "q_auto:best")}
                alt="Previous Thumbnail"
                loading="eager"
                className="w-[201px] max-h-[230px] object-cover rounded"
              />
            </picture>
          </div>
          <div className="flex items-center justify-end w-full gap-2">
            <button onClick={prevImage} type="button" aria-label="Previous">
              <img src={LeftArrow} loading="eager" alt="Previous" className="w-9 h-9 hover:scale-105 duration-200" />
            </button>
            <button onClick={nextImage} type="button" aria-label="Next">
              <img src={RightArrow} loading="eager" alt="Next" className="w-9 h-9 hover:scale-105 duration-200" />
            </button>
          </div>
        </div>

        {/* Main Slide */}
        <div className="bg-[#d7e2c4] w-full max-w-[802px] h-auto md:h-[382px] flex flex-col md:flex-row items-center md:items-end justify-between rounded-[12.41px] overflow-hidden relative">
          <div className="flex-1 max-w-[669px] pl-[15px] md:pl-[27px] pb-[46px]">
            <h2 className="text-[42px] pt-[58px] md:pt-0 text-primary md:text-[54px] pb-[8px] leading-[50px] md:leading-[70px] font-normal">
              Download The AftA App
            </h2>
          </div>

          <div className="flex-1 flex justify-center items-center relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.picture
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-[401px] h-[382px] object-cover rounded-[12.41px] block overflow-hidden"
              >
                <source
                  media="(max-width: 640px)"
                  srcSet={getCloudinaryUrl(images[current], "q_auto:low")}
                  type="image/avif"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet={getCloudinaryUrl(images[current], "q_auto:good")}
                  type="image/avif"
                />
                <source
                  media="(max-width: 1920px)"
                  srcSet={getCloudinaryUrl(images[current], "q_auto:best")}
                  type="image/avif"
                />
                <img
                  src={getCloudinaryUrl(images[current], "q_auto:best")}
                  alt={`Slide ${current}`}
                  loading="eager"
                  className="w-[401px] h-[382px] object-cover rounded-[12.41px]"
                />
              </motion.picture>
            </AnimatePresence>
          </div>

          {/* Dots — displayed on top-left of the main slide on ALL screen sizes */}
          <div className="absolute flex top-6 left-6 md:top-10 md:left-10 gap-2 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-6 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary scale-110" : "bg-gray-100/70"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Mobile & Tab Controls (< lg) */}
        <div className="flex lg:hidden items-center justify-between w-full max-w-[802px] mt-1 px-2">

          <div className="flex items-center gap-3">
            <button onClick={prevImage} type="button" aria-label="Previous">
              <img src={LeftArrow} loading="eager" alt="Previous" className="w-9 h-9 hover:scale-105 duration-200" />
            </button>
            <button onClick={nextImage} type="button" aria-label="Next">
              <img src={RightArrow} loading="eager" alt="Next" className="w-9 h-9 hover:scale-105 duration-200" />
            </button>
          </div>
          
          <button
            onClick={openModal}
            type="button"
            className="
              group
              flex items-center py-[12px] px-[32px] leading-[24px]
              rounded-[90px]
              text-white text-sm font-normal
              bg-[rgba(20,80,72,1)]
              hover:bg-black
              transition-all duration-300
              shadow-sm
            "
          >
            <span className="relative flex items-center z-10">
              Join AftA
            </span>
          </button>

        </div>

        {/* Right Thumbnail (Desktop) */}
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
              onClick={openModal}
              type="button"
              className="
                group
                flex items-center py-[12px] px-[40px] leading-[24px]
                rounded-[90px]
                text-white text-sm font-normal
                bg-[rgba(20,80,72,1)]
                hover:bg-black
                transition-all duration-300
                overflow-hidden
              "
            >
              <span className="relative flex items-center z-10">
                Join AftA
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>

      {/* ── Courses, Tutors & Resources Showcase ── */}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-6 my-16 md:my-28 flex flex-col gap-16 md:gap-[120px] font-sans">
        {/* Block 1: Choose a tutor and enroll in their course */}
        <motion.div
          variants={showcaseBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:gap-24 md:gap-16 gap-8 md:flex-col lg:flex-row items-center justify-between"
        >
          <motion.div variants={showcaseItemVariants} className="flex-1 w-full max-w-[540px] flex flex-col gap-4 md:gap-6 items-start">
            <h2 className="text-primary text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-normal leading-[1.1] tracking-tight">
              Choose a tutor and enroll in their course
            </h2>
            <p className="text-primary/75 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-[440px]">
              Browse courses taught by tutors you choose. Enroll in the courses that interest you and learn from people who share their knowledge on AftA.
            </p>
            <button
              onClick={openModal}
              type="button"
              className="mt-2 w-full md:w-auto self-center lg:self-start inline-flex items-center justify-center bg-[#0f4738] hover:bg-black text-white text-[15px] font-medium py-3.5 md:px-24 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              Browse Courses
            </button>
          </motion.div>

          <motion.div variants={showcaseItemVariants} className="w-full lg:flex-1 max-w-[928px] h-[320px] md:h-[440px] relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden shadow-md shrink-0">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={getCloudinaryUrl(TUTOR_COURSE_IMG, "q_auto:low")}
                type="image/avif"
              />
              <source
                media="(max-width: 1024px)"
                srcSet={getCloudinaryUrl(TUTOR_COURSE_IMG, "q_auto:good")}
                type="image/avif"
              />
              <source
                media="(max-width: 1920px)"
                srcSet={getCloudinaryUrl(TUTOR_COURSE_IMG, "q_auto:best")}
                type="image/avif"
              />
              <img
                src={getCloudinaryUrl(TUTOR_COURSE_IMG, "q_auto:best")}
                alt="Social Media Strategy"
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <h3 className="text-white font-bold text-[18px] md:text-[22px] leading-snug">
                Social Media Strategy
              </h3>
              <p className="text-white/85 text-[13px] md:text-[14px] leading-normal mt-1">
                Build your brand and grow your audience.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Block 2: Share your knowledge and earn from your courses */}
        <motion.div
          variants={showcaseBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-col lg:flex-row-reverse items-center justify-between gap-8 md:gap-16 lg:gap-16"
        >
          <motion.div variants={showcaseItemVariants} className="flex-1 w-full max-w-[580px] flex flex-col gap-4 md:gap-6 items-start">
            <h2 className="text-primary text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-normal leading-[1.1] tracking-tight">
              Share your knowledge and earn from your courses
            </h2>
            <p className="text-primary/75 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-[440px]">
              Create and publish courses on subjects you know well. Set your course price and earn from enrollments. Share your knowledge with learners on AftA.
            </p>
            <button
              onClick={openModal}
              type="button"
              className="mt-2 w-full md:w-auto self-center lg:self-start inline-flex items-center justify-center bg-[#0f4738] hover:bg-black text-white text-[15px] font-medium py-3.5 md:px-24 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              Become a Tutor
            </button>
          </motion.div>

          <motion.div variants={showcaseItemVariants} className="w-full lg:flex-1 max-w-[928px] h-[320px] md:h-[440px] relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden shadow-md shrink-0">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={getCloudinaryUrl(TEACH_COURSE_IMG, "q_auto:low")}
                type="image/avif"
              />
              <source
                media="(max-width: 1024px)"
                srcSet={getCloudinaryUrl(TEACH_COURSE_IMG, "q_auto:good")}
                type="image/avif"
              />
              <source
                media="(max-width: 1920px)"
                srcSet={getCloudinaryUrl(TEACH_COURSE_IMG, "q_auto:best")}
                type="image/avif"
              />
              <img
                src={getCloudinaryUrl(TEACH_COURSE_IMG, "q_auto:best")}
                alt="Set your price. Teach your way."
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <span className="inline-flex items-center gap-1.5s text-white text-[12px] font-semibold px-2.5 py-1 rounded-full mb-2.5">
                AftA Verified
          <img src="https://res.cloudinary.com/wruetqvx/image/upload/v1791987131/Vector.svg" className="ml-2 h-5 w-5" alt="" />
              </span>
              <h3 className="text-white font-bold text-[18px] md:text-[22px] leading-snug">
                Set your price. Teach your way.
              </h3>
              <p className="text-white/85 text-[13px] md:text-[14px] leading-normal mt-1">
                Create courses, set your prices, and share your knowledge with learners on AftA.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Block 3: Learners and tutors share resources */}
        <motion.div
          variants={showcaseBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={showcaseItemVariants} className="text-center max-w-[680px] mx-auto mb-8 md:mb-12 flex flex-col items-center gap-3">
            <h2 className="text-primary text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-normal leading-[1.1] tracking-tight">
              Learners and tutors share resources
            </h2>
            <p className="text-primary/75 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]">
              Learners and tutors can share resources, ask questions, and learn from one another in the community.
            </p>
          </motion.div>

          <motion.div variants={showcaseItemVariants} className="w-full h-[320px] md:h-[360px] relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden shadow-md shrink-0">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={getCloudinaryUrl(RESOURCES_IMG, "q_auto:low")}
                type="image/avif"
              />
              <source
                media="(max-width: 1024px)"
                srcSet={getCloudinaryUrl(RESOURCES_IMG, "q_auto:good")}
                type="image/avif"
              />
              <source
                media="(max-width: 1920px)"
                srcSet={getCloudinaryUrl(RESOURCES_IMG, "q_auto:best")}
                type="image/avif"
              />
              <img
                src={getCloudinaryUrl(RESOURCES_IMG, "q_auto:best")}
                alt="Share what you know. Learn from each other."
                className="w-full h-full object-cover block"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 max-w-[650px]">
              <h3 className="text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-snug">
                Share what you know. Learn from each other.
              </h3>
              <p className="text-white/85 text-[13px] sm:text-[14px] md:text-[15px] leading-normal mt-1.5">
                Exchange useful resources with learners and tutors on AftA.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default FourthLayer;