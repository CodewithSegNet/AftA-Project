import { motion } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

// ─── Video sources ────────────────────────────────────────────────────────────
// Each box has a unique video. Replace placeholder public IDs with your own.
// Cloudinary transformations: q_auto (adaptive quality), f_auto (best format).
// ──────────────────────────────────────────────────────────────────────────────
const CLOUD = "https://res.cloudinary.com/wruetqvx/video/upload";
const videos = [
  { id: 1,  src: `${CLOUD}/q_auto/v1791965353/0_Man_Black_1280x720.mp4` },
  { id: 2,  src: `${CLOUD}/q_auto/v1791966011/0_Man_Working_1280x720.mp4.mp4` },
  { id: 3,  src: `${CLOUD}/q_auto/v1791966153/0_Woman_Microphone_1280x720.mp4.mp4` },
  { id: 4,  src: `${CLOUD}/q_auto/v1791966413/1103558_1080p_Blogger_1280x720.mp4.mp4` },
  { id: 5,  src: `${CLOUD}/q_auto/v1791966555/1103561_1080p_Blogger_1280x720.mp4.mp4` },
  { id: 6,  src: `${CLOUD}/q_auto/v1791967600/1108148_1080p_4k_1280x720.mp4.mp4` },
  { id: 7,  src: `${CLOUD}/q_auto/v1791967707/1108087_1080p_4k_1280x720.mp4.mp4` },
  { id: 8,  src: `${CLOUD}/q_auto/v1791968203/1115097_Broadcast_Woman_1280x720.mp4.mp4` },
  { id: 9,  src: `${CLOUD}/q_auto/v1791968204/5948042_Gen_Z_Generation_Z_1280x720.mp4.mp4` },
  { id: 10, src: `${CLOUD}/q_auto/v1791968704/6308738_Celebrating_Celebration_720x1280.mp4.mp4` },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

const glassVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── VideoBox ─────────────────────────────────────────────────────────────────
const VideoBox = ({ src, className = "" }) => {
  const ref = useRef(null);
  return (
    <motion.div
      variants={itemVariants}
      className={`relative rounded-[0.625rem] overflow-hidden ${className}`}
    >
      {/* preload="auto" + fetchpriority="high" → highest browser priority */}
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        fetchpriority="high"
        className="w-full h-full object-cover block"
      >
        <source
          media="(max-width: 640px)"
          src={getCloudinaryUrl(src, "q_auto:low")}
          type="video/mp4"
        />
        <source
          media="(max-width: 1024px)"
          src={getCloudinaryUrl(src, "q_auto:good")}
          type="video/mp4"
        />
        <source
          media="(max-width: 1920px)"
          src={getCloudinaryUrl(src, "q_auto:best")}
          type="video/mp4"
        />
        <source src={getCloudinaryUrl(src, "q_auto:best")} type="video/mp4" />
      </video>
    </motion.div>
  );
};

// ─── TextCard ─────────────────────────────────────────────────────────────────
const TextCard = ({ mobile = false }) => (
  <div
    className={`flex flex-col ${
      mobile ? "gap-[0.875rem]" : "gap-[1.125rem]"
    }`}
  >
    <h1
      className={`text-white m-0 tracking-[-0.02em] ${
        mobile
          ? "font-normal text-[32px] leading-[112%]"
          : "font-bold text-[clamp(1.75rem,2.4vw,2.625rem)] leading-[1.15]"
      }`}
    >
      Learn something new.
      <br />
      Share your story.
    </h1>

    <p
      className={`text-white/[0.83] m-0 font-normal text-[16px] tracking-normal ${
        mobile ? "leading-[25px] pb-3" : "leading-[28px]"
      }`}
    >
      Discover courses from tutors you choose, share your creativity, and
      connect through feeds and live moments. AftA brings learning and
      entertainment into one community
    </p>

    <div
      className={`flex gap-[0.625rem] mt-1 ${
        mobile ? "flex-col" : "flex-row"
      }`}
    >
      {/* Primary */}
      <button
        type="button"
        className={`bg-[#1a5c47] hover:bg-black text-white border-0 rounded-[3.125rem] text-[0.875rem] font-semibold cursor-pointer tracking-[0.01em] transition-colors duration-200 ${
          mobile ? "w-full py-5 px-0" : "w-auto py-4 px-6"
        }`}
      >
        Explore Courses
      </button>

      {/* Secondary */}
      <button
        type="button"
        className={`bg-transparent hover:border-white text-white border-[1.5px] border-white/65 rounded-[3.125rem] text-[0.875rem] font-semibold cursor-pointer tracking-[0.01em] transition-colors duration-200 ${
          mobile ? "w-full py-5 px-0" : "w-auto py-4 px-6"
        }`}
      >
        Become a Tutor
      </button>
    </div>
  </div>
);

// ─── Component ────────────────────────────────────────────────────────────────
const FirstLayer = () => (
  <>
    {/* ════════════════ DESKTOP (≥ 768px) ════════════════ */}
    <motion.div
      className="hidden md:block max-w-[75rem] mx-auto py-6 px-6 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        {/* All 10 video boxes — 5 × 2 grid */}
        <motion.div
          className="grid grid-cols-5 grid-rows-2 gap-[0.625rem]"
          variants={containerVariants}
        >
          {videos.map((v) => (
            <VideoBox key={v.id} src={v.src} className="aspect-[312/320]" />
          ))}
        </motion.div>

        {/* Glass card — absolute, overlays left 4 boxes */}
        <motion.div
          className="absolute top-0 left-0 w-[calc((200%-1.875rem)/5)] h-full z-10 backdrop-blur-[6px] bg-white/10 rounded-[0.625rem] border border-white/[0.18] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] flex items-center py-8 px-9 lg:py-10 lg:px-12 box-border"
          variants={glassVariants}
        >
          <TextCard mobile={false} />
        </motion.div>
      </div>
    </motion.div>

    {/* ════════════════ MOBILE (< 768px) ════════════════ */}
    <motion.div
      className="flex flex-col gap-4 max-w-[75rem] mx-auto md:hidden font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero card — Cloudinary image + rgba(0,42,40,0.8) overlay */}
      <motion.div
        className="relative rounded-2xl overflow-hidden py-7 px-5 min-h-[17rem]"
        variants={mobileCardVariants}
      >
        {/*
          Responsive Cloudinary image:
          - mobile  ≤ 640px   → q_auto:low
          - tablet  ≤ 1024px  → q_auto:good
          - default           → q_auto:best
        */}
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="https://res.cloudinary.com/wruetqvx/image/upload/q_auto:low,f_auto,w_480/v1791989351/d8f57effcf97de4dfe740553fbd0ca618300e771.avif"
            type="image/avif"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="https://res.cloudinary.com/wruetqvx/image/upload/v1791989351/d8f57effcf97de4dfe740553fbd0ca618300e771.avif"
            type="image/avif"
          />
          <source
            media="(max-width: 1920px)"
            srcSet="https://res.cloudinary.com/wruetqvx/image/upload/v1791989351/d8f57effcf97de4dfe740553fbd0ca618300e771.avif"
            type="image/avif"
          />
          <img
            src="https://res.cloudinary.com/wruetqvx/image/upload/q_auto:best,f_auto,w_1200/v1/samples/landscapes/nature-mountains"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="lazy"
            fetchpriority="low"
          />
        </picture>
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-[#002a28]/80 z-[1]" />
        <div className="relative z-[2]">
          <TextCard mobile={true} />
        </div>
      </motion.div>

      {/* 3-col video grid — 9 items (3x3) on mobile */}
      <motion.div
        className="grid grid-cols-3 gap-[0.625rem]"
        variants={containerVariants}
      >
        {videos.slice(0, 9).map((v) => (
          <VideoBox
            key={v.id}
            src={v.src}
            className="aspect-[108.667/112]"
          />
        ))}
      </motion.div>
    </motion.div>
  </>
);

export default FirstLayer;
