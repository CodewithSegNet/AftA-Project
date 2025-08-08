import React from "react";
import Logo from "../assets/logolight.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiInstagramFill, RiTwitterFill, RiFacebookFill, RiTiktokFill, RiYoutubeFill } from "react-icons/ri";
import Download from "../assets/download.svg";



const Footer = () => {
  return (
    <section className="bg-[rgba(0,42,40,1)]">

<div className="max-w-screen-2xl mx-auto pt-[70px] px-6 lg:px-[44px] pb-[44px]">
   {/* Logo & Description */}
        <div className="flex flex-col items-center lg:flex-row w-full lg:justify-between lg:pb-[70px] lg:items-start">
      
      <div className="flex flex-col justify-center md:items-start items-center md:items-left  mb-[40px] lg:mb-[0]">
          <Link to="/" className="text-2xl font-bold flex items-center mb-[25px] lg:mb-[44px]">
            <img
              src={Logo}
              alt="AftA"
              className="h-[40px]"
            />
          </Link>
<button
  className="
    group
    flex items-center py-[12px] px-[40px] leading-[24px]
    rounded-[90px]
    text-white text-sm font-normal
    bg-[rgba(20,80,72,1)]
    hover:bg-black
    transition-all duration-300
    overflow-hidden
    relative
  "
>

  
  {/* Content on top */}
  <span className="relative flex items-center z-10">
    <img
      src={Download}
      className="h-5 w-6 pr-2 transition-all duration-300 group-hover:brightness-110"
      alt="Download"
    />
    Get The App Now
  </span>
</button>

        </div>


<div className="lg:mx-auto max-w-screen-xl lg:px-0 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] lg:gap-[64px] mb-5 lg:mb-[0px] !pr-[0] lg:!pr-[10rem] text-white">


        {/* Foundation Links */}
        <div>
          <ul className="text-sm font-medium">
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">About</Link>
            </li>
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Features</Link>
            </li>
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Community</Link>
            </li>
    
          </ul>
        </div>

        {/* Foundation Links */}
        <div>
          <ul className="text-sm font-medium">
       
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Terms of use</Link>
            </li>

            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Privacy</Link>
            </li>
          </ul>
        </div>



               <div>
          <ul className="text-sm font-medium">
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Get AftA</Link>
            </li>
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Android</Link>
            </li>
            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Iphone</Link>
            </li>

            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Windows</Link>
            </li>


            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Mac</Link>
            </li>

          </ul>
        </div>

        <div>
          <ul className="text-sm font-medium">
          <li className="group">
            <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">
            Support

            </Link>
</li>

            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Contact Us</Link>
            </li>

            <li className="group">
              <Link to="#" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Help Center</Link>
            </li>

         
          </ul>
        </div>
      </div>






    

      </div>


<hr className="border-gray-500"/>

        <div className="mt-2 lg:mt-8 flex justify-between items-center text-white flex-col lg:flex-row pt-1 text-center text-sm font-light max-w-screen-2xl mx-auto">
  <div className="flex items-center flex-col mx-auto lg:mx-[0] lg:flex-row order-2 lg:order-1">
    <p className="text-xs md:text-base font-normal leading-[50px] lg:leading-none lg:pr-4">Copyright &copy; {new Date().getFullYear()} 2025. AftA. All Rights Reserved</p>
  </div>
 
  {/* Social Icons Section */}
  <div className="flex order-1 lg:order-2  my-3  items-center justify-center space-x-6 lg:space-x-4 mt-6 lg:mt-0">
    {/* Instagram Icon */}
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-secondary transition-colors duration-300"
    >
      <RiInstagramFill />
    </a>

    {/* Twitter Icon */}
  

    {/* Facebook Icon */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-secondary transition-colors duration-300"
    >
      <RiFacebookFill />
    </a>

           {/* TikTok Icon */}
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-secondary transition-colors duration-300"
    >
      <RiTwitterFill />
    </a>
    
       {/* Mail Icon */}
    <a
      href=""
      className="text-2xl hover:text-secondary transition-colors duration-300"
    >
      <RiYoutubeFill />
    </a>

    {/* TikTok Icon */}
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl hover:text-secondary transition-colors duration-300"
    >
      <RiTiktokFill />
    </a>

 
    

 
  </div>
</div>

</div>


       

      
    </section>
  );
};

export default Footer;
