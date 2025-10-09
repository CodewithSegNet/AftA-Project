import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Img1 from "../assets/bell.png";
import Img12 from "../assets/bellicons.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Img2 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754646171/one_eiz0bx.png";
const Img3 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754646254/group12_oyyrct.png";
const Img4 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754646314/three_hfqqtm.png";
const Img5 = "https://res.cloudinary.com/di0r5v8hw/image/upload/v1754646372/four_qyyfsp.png";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const ThirdLayer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,    
    slidesToScroll: 1,     
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  };


const headshots = [Img2, Img3, Img4, Img5, Img2, Img3, Img4, Img5];

// Create enough duplicates for seamless scrolling
const duplicated = [...headshots, ...headshots, ...headshots, ...headshots, ...headshots, ...headshots, ...headshots, ...headshots, ...headshots];

  return (
    <motion.section 
      ref={ref}
      className="overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="my-[76px]">
        <div className="flex px-4 md:px-6">
          <div className="max-w-[669px] md:pl-[27px] pb-[46px]">
            <h2 className="text-[42px] text-white md:text-[64px] pb-[8px] leading-[50px] md:leading-[70px] font-normal">
              Never <span className="text-secondary "> Miss a Moment </span> That Matters
            </h2>
            <p className="text-base font-normal text-white ">
              Get real-time notifications that keep you effortlessly connected to your friends, conversations, and community wherever you are.
            </p>
          </div>
          <div>
            <img src={Img1} className="hidden lg:flex md:h-[69px] h-[40px] w-[86px] md:w-[64px] " alt="" />
                        <img src={Img12} className="h-[50px] w-[200px]" alt="" />

          </div>
        </div>

        {/* Carousel */}
        <div className="block md:hidden mt-2 mx-4">
          <Slider {...settings}>
            {[Img2, Img3, Img4, Img5].map((img, i) => (
              <div key={i} className="px-2">
                <img src={img} alt={`Slide ${i + 1}`} className="w-full h-auto object-contain " />
              </div>
            ))}
          </Slider>
        </div>


          <div className="hidden md:block overflow-hidden w-full py-6">
      <div className="flex w-fit animate-scroll">
        {duplicated.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden shrink-0  mx-[10px] md:mx-[10px]"
          >
            <img
              src={img}
              alt={`Headshot ${index}`}
              className="w-[393px] h-[798px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </motion.section>
  );
};

export default ThirdLayer;