import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

// ─── Store button icons (inline SVG — no image dependency) ───────────────────
const AppleIcon = () => (
  <svg width="33" height="33" viewBox="0 0 814 1000" fill="#FFF7E6" aria-hidden="true">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.5-127.5C46.7 790.7 0 663 0 541.8c0-207.1 135.4-316.6 268.1-316.6 71 0 130.1 46.7 174.4 46.7 42.7 0 109.2-49.3 188.6-49.3zm-183.8-78.4c33.6-39.5 57.4-94.3 57.4-149.1 0-7.7-.6-15.4-1.9-21.7-54.1 2-117.8 36.2-157.6 81.9-30.8 35.6-60.2 90.4-60.2 145.9 0 8.3 1.3 16.6 1.9 19.1 3.2.6 8.4 1.3 13.6 1.3 48.7 0 109.3-32.8 146.8-77.4z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="33" height="33" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.18 23.76a2 2 0 0 1-.96-.86l10-10 3.38 3.38-12.42 7.48z" fill="#EA4335"/>
    <path d="M1.07 1.63A2 2 0 0 0 .75 2.77v18.46c0 .4.1.78.32 1.11L12 12 1.07 1.63z" fill="#4285F4"/>
    <path d="M20.3 10.33l-2.93-1.77L13.97 12l3.4 3.4 2.94-1.77A2 2 0 0 0 20.3 10.33z" fill="#FBBC05"/>
    <path d="M3.18.24l12.42 7.48L12.2 11.1 2.22 1.1A2 2 0 0 1 3.18.24z" fill="#34A853"/>
  </svg>
);

// ─── Download buttons ─────────────────────────────────────────────────────────
const StoreButton = ({ icon, label, sub }) => (
  <button
    type="button"
    className="inline-flex items-center gap-[0.55rem] bg-[#111] text-white border-none rounded-[0.625rem] px-[1.1rem] py-[0.55rem] cursor-pointer text-left transition-all duration-[180ms] min-w-[8.5rem] hover:bg-[#2a2a2a] hover:-translate-y-[1px] active:translate-y-0"
  >
    <span className="flex items-center shrink-0 text-white">{icon}</span>
    <span className="flex flex-col gap-[0.05rem] text-[#FFF7E6]">
      <span className="text-[0.5625rem] font-normal text-[#FFF7E6] leading-none tracking-[0.01em]">{sub}</span>
      <span className="text-[0.9rem] font-semibold text-[#FFF7E6] leading-[1.2] tracking-[-0.01em]">{label}</span>
    </span>
  </button>
);

// ─── Cloudinary placeholders ──────────────────────────────────────────────────
// Replace the public IDs (e.g. "sl-community") with your real Cloudinary assets.
// Transformations: q_auto (adaptive quality), f_auto (best format per browser).
// ─────────────────────────────────────────────────────────────────────────────
const CLD = "https://res.cloudinary.com/wruetqvx/image/upload";

const IMG = {
  community   : `${CLD}/q_auto,f_auto,w_600/v1791969310/dc89b86ef6b4e12d14359db2f0b8915a68302c4a-1-1.avif`,
  learn       : `${CLD}/q_auto,f_auto,w_600/v1791969865/99c0b4dbe50fbc85ca97cf16eac48776f8e61f5e.avif`,
  live        : `${CLD}/q_auto,f_auto,w_800/v1791969865/01fe50e66c518c480f69a4bf9dcd1f205835bd6b.avif`,
  liveInset   : `${CLD}/q_auto,f_auto,w_200/v1791969868/Group_36994.avif`,
  avatar      : `${CLD}/q_auto,f_auto,w_80/v1791970365/34d8c0c4ccdc7c59fc51d14f299cfc2ed9167cfe.avif`,
  avatar1     : `${CLD}/q_auto,f_auto,w_80/v1791969867/e7cb45e6bb1a0b89cd73624f2acaa97705feb9bb.avif`,
  avatar2     : `${CLD}/q_auto,f_auto,w_80/v1791969866/90740093eac87c1b4769665af589dd54207b6318.avif`,
  avatar3     : `${CLD}/q_auto,f_auto,w_80/v1791969866/473d0e86fbecba21c28751f9d4986031e3d312ec.avif`,
  emoji       : `${CLD}/q_auto,f_auto,w_50/v1791973735/Effects_Illustration_2.avif`,
  desktopChat : "https://res.cloudinary.com/wruetqvx/image/upload/v1791978071/Group_36995_2.avif",
  chatAv1     : `${CLD}/q_auto,f_auto,w_100,h_100,c_fill,g_face/v1791989950/c1d7d2c08bbca81c567e2191db84a0384f556154.avif`,
  chatAv2     : `${CLD}/q_auto,f_auto,w_100,h_100,c_fill,g_face/v1791989950/952f98f79cf976d8734b0405d047e20f635a113e.avif`,
  chatAv3     : `${CLD}/q_auto,f_auto,w_100,h_100,c_fill,g_face/v1791989950/21b95665ee64f857683f106c18fe8dfa6f2b7d34.avif`,
  chatAv4     : `${CLD}/q_auto,f_auto,w_100,h_100,c_fill,g_face/v1791989949/40d3e37e73b1f1a206d0754634917dc8fc8cebd0.avif`,
};

// ─── Animation variants ───────────────────────────────────────────────────────
const stagger = {
  hidden  : {},
  visible : { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden  : { opacity: 0, y: 28 },
  visible : { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const scaleIn = {
  hidden  : { opacity: 0, scale: 0.94 },
  visible : { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const chatStagger = {
  hidden  : {},
  visible : { transition: { staggerChildren: 0.15 } },
};

const chatBubbleLeft = {
  hidden  : { opacity: 0, y: 16, x: -12 },
  visible : { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chatBubbleRight = {
  hidden  : { opacity: 0, y: 16, x: 12 },
  visible : { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── TextContent ──────────────────────────────────────────────────────────────
const TextContent = () => (
  <div className="flex flex-col gap-4 w-[368px]">
    <h2 className="text-[32px] lg:text-[64px] font-normal leading-[100%] tracking-[0] m-0 text-[#111]">
      Connect, Learn and Teach From Anywhere
    </h2>
    <p className="text-[0.9375rem] leading-[1.65] text-[#444] m-0 max-w-[32rem]">
      Download AftA and join a growing community of African learners and tutors.
      Enroll in courses, share resources, and earn from your knowledge — all on mobile.
    </p>
    <div className="flex gap-[0.625rem] flex-wrap">
      <StoreButton
        icon={<AppleIcon />}
        sub="Download on the"
        label="App Store"
      />
      <StoreButton
        icon={<GooglePlayIcon />}
        sub="Download on the"
        label="Google Play"
      />
    </div>
  </div>
);

// ─── CommunityBox ─────────────────────────────────────────────────────────────
const CommunityBox = () => (
  <motion.div
    className="relative rounded-[1rem] overflow-hidden flex-1 min-h-0 aspect-[3/4] md:aspect-auto"
    variants={scaleIn}
  >
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet={getCloudinaryUrl(IMG.community, "q_auto:low")}
        type="image/avif"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={getCloudinaryUrl(IMG.community, "q_auto:good")}
        type="image/avif"
      />
      <source
        media="(max-width: 1920px)"
        srcSet={getCloudinaryUrl(IMG.community, "q_auto:best")}
        type="image/avif"
      />
      <img
        src={getCloudinaryUrl(IMG.community, "q_auto:best")}
        alt="Join Community"
        className="absolute inset-0 w-full h-full object-cover block"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
    </picture>
    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

    {/* Emoji sticker */}
    <img
      src={IMG.emoji}
      alt=""
      className="absolute top-6 left-6 z-[3] flex items-center justify-center object-contain shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
      aria-hidden="true"
    />

    {/* Bottom footer */}
    <div className="absolute bottom-0 left-0 right-0 p-[0.875rem] md:p-[1.125rem] z-[2] flex flex-col gap-[0.3rem]">
      <div className="text-[clamp(0.875rem,3vw,1.25rem)] md:text-[1.125rem] lg:text-[1.375rem] font-bold text-white leading-[1.2] m-0">
        Join Community
      </div>
      <div className="flex items-center gap-[0.35rem] flex-wrap">
        <div className="flex" aria-hidden="true">
          <img src={IMG.avatar3} alt="" className="w-[1.125rem] h-[1.125rem] lg:w-[1.375rem] lg:h-[1.375rem] rounded-full border-[1.5px] border-white object-cover -mr-[0.3rem]" loading="lazy" decoding="async" />
          <img src={IMG.avatar2} alt="" className="w-[1.125rem] h-[1.125rem] lg:w-[1.375rem] lg:h-[1.375rem] rounded-full border-[1.5px] border-white object-cover -mr-[0.3rem]" loading="lazy" decoding="async" />
          <img src={IMG.avatar1} alt="" className="w-[1.125rem] h-[1.125rem] lg:w-[1.375rem] lg:h-[1.375rem] rounded-full border-[1.5px] border-white object-cover -mr-[0.3rem]" loading="lazy" decoding="async" />
        </div>
        <span className="text-[0.625rem] lg:text-[0.6875rem] text-white/90 pl-[0.45rem] leading-none">
          4,000+ Community Members
        </span>
      </div>
    </div>
  </motion.div>
);

// ─── LearnBox ─────────────────────────────────────────────────────────────────
const LearnBox = () => (
  <motion.div
    className="relative rounded-[1rem] overflow-hidden flex-1 min-h-0 aspect-[3/4] md:aspect-auto"
    variants={scaleIn}
  >
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet={getCloudinaryUrl(IMG.learn, "q_auto:low")}
        type="image/avif"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={getCloudinaryUrl(IMG.learn, "q_auto:good")}
        type="image/avif"
      />
      <source
        media="(max-width: 1920px)"
        srcSet={getCloudinaryUrl(IMG.learn, "q_auto:best")}
        type="image/avif"
      />
      <img
        src={getCloudinaryUrl(IMG.learn, "q_auto:best")}
        alt="Learn From Anywhere"
        className="absolute inset-0 w-full h-full object-cover block"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
    </picture>
    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-[0.875rem] md:p-[1.125rem] z-[2] flex flex-col gap-[0.3rem]">
      <div className="text-[clamp(0.875rem,3vw,1.25rem)] md:text-[1.125rem] lg:text-[1.375rem] font-bold text-white leading-[1.2] m-0">
        Learn From Anywhere
      </div>
      <div className="text-[0.75rem] text-white/85 leading-[1.4] m-0">
        Discover courses wherever you are.
      </div>
    </div>
  </motion.div>
);

// ─── LiveBox ──────────────────────────────────────────────────────────────────
const LiveBox = () => (
  <motion.div
    className="relative rounded-[1rem] overflow-hidden flex-1 min-h-0 w-full aspect-[9/16] md:aspect-auto"
    variants={scaleIn}
  >
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet={getCloudinaryUrl(IMG.live, "q_auto:low")}
        type="image/avif"
      />
      <source
        media="(max-width: 1024px)"
        srcSet={getCloudinaryUrl(IMG.live, "q_auto:good")}
        type="image/avif"
      />
      <source
        media="(max-width: 1920px)"
        srcSet={getCloudinaryUrl(IMG.live, "q_auto:best")}
        type="image/avif"
      />
      <img
        src={getCloudinaryUrl(IMG.live, "q_auto:best")}
        alt="Live content"
        className="absolute inset-0 w-full h-full object-cover block"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
    </picture>
    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

    {/* LIVE badge */}
    <div className="absolute top-[0.875rem] left-[0.875rem] z-[3] bg-[#1a6b47] text-white text-[0.625rem] font-extrabold tracking-[0.06em] px-[0.55rem] py-[0.2rem] rounded-[2rem]">
      LIVE
    </div>

    {/* Video-in-video inset */}
    <div className="absolute top-[0.875rem] right-[0.875rem] z-[3] w-[28%] max-w-[5.5rem] lg:max-w-[6.5rem] aspect-[3/4] rounded-[0.625rem] overflow-hidden border-2 border-white shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet={getCloudinaryUrl(IMG.liveInset, "q_auto:low")}
          type="image/avif"
        />
        <source
          media="(max-width: 1024px)"
          srcSet={getCloudinaryUrl(IMG.liveInset, "q_auto:good")}
          type="image/avif"
        />
        <source
          media="(max-width: 1920px)"
          srcSet={getCloudinaryUrl(IMG.liveInset, "q_auto:best")}
          type="image/avif"
        />
        <img src={getCloudinaryUrl(IMG.liveInset, "q_auto:best")} alt="" className="w-full h-full object-cover block" loading="lazy" decoding="async" />
      </picture>
    </div>

    {/* Right engagement bar */}
    <div className="absolute right-[0.625rem] md:right-[0.75rem] bottom-[7.5rem] md:bottom-[9rem] lg:bottom-[10rem] z-[3] flex flex-col items-center gap-[0.875rem] md:gap-4" aria-label="Engagement stats">
      <div className="flex flex-col items-center gap-[0.15rem]">
        <div className="w-[1.875rem] h-[1.875rem] md:w-[2.125rem] md:h-[2.125rem] bg-white/20 backdrop-blur-[6px] rounded-full flex items-center justify-center text-[0.8rem] md:text-[0.875rem] text-white">
          ♡
        </div>
        <span className="text-[0.5625rem] md:text-[0.625rem] text-white font-bold">11k</span>
      </div>
      <div className="flex flex-col items-center gap-[0.15rem]">
        <div className="w-[1.875rem] h-[1.875rem] md:w-[2.125rem] md:h-[2.125rem] bg-white/20 backdrop-blur-[6px] rounded-full flex items-center justify-center text-[0.8rem] md:text-[0.875rem] text-white">
          💬
        </div>
        <span className="text-[0.5625rem] md:text-[0.625rem] text-white font-bold">2.3k</span>
      </div>
      <div className="flex flex-col items-center gap-[0.15rem]">
        <div className="w-[1.875rem] h-[1.875rem] md:w-[2.125rem] md:h-[2.125rem] bg-white/20 backdrop-blur-[6px] rounded-full flex items-center justify-center text-[0.8rem] md:text-[0.875rem] text-white">
          ↗
        </div>
        <span className="text-[0.5625rem] md:text-[0.625rem] text-white font-bold">371</span>
      </div>
      <div className="flex flex-col items-center gap-[0.15rem]">
        <div className="w-[1.875rem] h-[1.875rem] md:w-[2.125rem] md:h-[2.125rem] bg-white/20 backdrop-blur-[6px] rounded-full flex items-center justify-center text-[0.8rem] md:text-[0.875rem] text-white">
          ⬇
        </div>
        <span className="text-[0.5625rem] md:text-[0.625rem] text-white font-bold">3.71k</span>
      </div>
      <div className="flex flex-col items-center gap-[0.15rem]">
        <div className="w-[1.875rem] h-[1.875rem] md:w-[2.125rem] md:h-[2.125rem] bg-white/20 backdrop-blur-[6px] rounded-full flex items-center justify-center text-[0.8rem] md:text-[0.875rem] text-white">
          ···
        </div>
      </div>
    </div>

    {/* Bottom user + caption */}
    <div className="absolute bottom-0 left-0 right-[2.75rem] md:right-[3rem] px-[0.875rem] pb-[0.875rem] md:px-4 md:pb-[1.125rem] z-[3] flex flex-col gap-1">
      <div className="flex items-center gap-2 mb-[0.15rem]">
        <img src={IMG.avatar} alt="Mark Ramos" className="w-[1.875rem] h-[1.875rem] rounded-full object-cover border-[1.5px] border-white shrink-0" loading="lazy" decoding="async" />
        <div>
          <div className="text-[0.75rem] md:text-[0.8125rem] font-bold text-white">Mark Ramos ✓</div>
          <div className="text-[0.625rem] text-white/80">🌐 Public</div>
        </div>
      </div>
      <div className="text-[0.75rem] md:text-[0.8125rem] font-semibold text-white leading-[1.35]">Look what we found down here! 😂🤿</div>
      <div className="text-[0.6875rem] md:text-[0.75rem] text-white/85">
        #adventure #nature #diving{" "}
        <span className="font-bold text-white">... more</span>
      </div>
      <div className="text-[0.625rem] text-white/75">🎵 Audio · Original</div>
    </div>
  </motion.div>
);

// ─── SecondLayer ─────────────────────────────────────────────────────────────
const SecondLayer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="font-sans">
      <motion.div className="flex justify-center items-center pb-[48px] pt-[16px] lg:py-[120px]">
        <p className="max-w-[1120px] leading-[100%] tracking-0 text-primary text-center text-[16px] md:text-[32px] font-[400]">
          AftA is where our voices unite, tutors share expertise, learners grow, and connections become community.
        </p>
      </motion.div>

      <motion.section
        ref={ref}
        className="max-w-[75rem] mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-[40px] lg:gap-[60px]"
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* ── Text block (mobile: top; desktop: right col via flex order) ── */}
        <motion.div className="md:order-3 md:flex-[1.15] md:flex md:items-center" variants={fadeUp}>
          <TextContent />
        </motion.div>

        {/* ── Media group ─────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-[0.625rem] md:order-1 md:flex-[2] md:flex-row md:gap-3 md:min-h-[36rem] lg:gap-4 lg:min-h-[40rem]">
          {/* Left col: Community (top) + Learn (bottom) */}
          <div className="flex flex-row gap-[0.625rem] md:flex-col md:flex-1">
            <CommunityBox />
            <LearnBox />
          </div>

          {/* Live box — full-width on mobile, right col on desktop */}
          <LiveBox />
        </div>
      </motion.section>

      {/* ── Community Discussion Preview (Mobile Chat / Desktop Image) ── */}
      <div className="w-full max-w-[75rem] mx-auto py-8 md:pt-[144px] pb-[48px] md:pb-[120px]">
        {/* Mobile View: Chat Bubbles */}
        <div className="block md:hidden">
          <motion.div
            className="flex flex-col gap-4 max-w-[380px] mx-auto px-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={chatStagger}
          >
            {/* Message 1 */}
            <motion.div variants={chatBubbleLeft} className="flex items-center gap-3">
              <img
                src={IMG.chatAv1}
                alt="Community member"
                className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <div className="bg-[#282C34] text-white px-5 py-3 rounded-full text-[15px] font-normal leading-snug shadow-sm">
                Anyone taking UI/UX?
              </div>
            </motion.div>

            {/* Message 2 */}
            <motion.div variants={chatBubbleRight} className="flex items-center gap-3 pl-8">
              <img
                src={IMG.chatAv2}
                alt="Community member"
                className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <div className="bg-[#0F4738] text-white px-5 py-3 rounded-full text-[15px] font-normal leading-snug shadow-sm">
                Me! Just enrolled 🙌
              </div>
            </motion.div>

            {/* Message 3 */}
            <motion.div variants={chatBubbleLeft} className="flex items-center gap-3">
              <img
                src={IMG.chatAv3}
                alt="Community member"
                className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <div className="bg-[#282C34] text-white px-5 py-3 rounded-full text-[15px] font-normal leading-snug shadow-sm">
                How’s the first lesson?
              </div>
            </motion.div>

            {/* Message 4 */}
            <motion.div variants={chatBubbleRight} className="flex items-center gap-3 pl-8">
              <img
                src={IMG.chatAv4}
                alt="Community member"
                className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <div className="bg-[#0F4738] text-white px-5 py-3 rounded-full text-[15px] font-normal leading-snug shadow-sm">
                Great! Let’s share notes.
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop View: Cloudinary File */}
        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={getCloudinaryUrl(IMG.desktopChat, "q_auto:low")}
              type="image/avif"
            />
            <source
              media="(max-width: 1024px)"
              srcSet={getCloudinaryUrl(IMG.desktopChat, "q_auto:good")}
              type="image/avif"
            />
            <source
              media="(max-width: 1920px)"
              srcSet={getCloudinaryUrl(IMG.desktopChat, "q_auto:best")}
              type="image/avif"
            />
            <img
              src={getCloudinaryUrl(IMG.desktopChat, "q_auto:best")}
              alt="Community Discussion"
              className="w-full max-w-[900px] h-auto rounded-2xl object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondLayer;
