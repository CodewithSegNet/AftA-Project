import React, { useState, useEffect } from "react";
import Logo from "../assets/logolight.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiInstagramFill, RiTwitterFill, RiFacebookFill, RiTiktokFill, RiYoutubeFill } from "react-icons/ri";
import { X } from "lucide-react";
import Download from "../assets/download.svg";
import { useDownloadModal } from "../layouts/DownloadModalContext.jsx";

// Download Modal Component
const DownloadModal = ({ isOpen, onClose, platform }) => {
  // Function to load Tawk.to script
  const loadTawkScript = () => {
    // Check if Tawk script is already loaded
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
      return;
    }

    // Create and load the Tawk.to script
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/68b0d52848813419264be616/1j3pc1981';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  };

  // Handle support click
  const handleSupportClick = () => {
    loadTawkScript();
    onClose();
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const platformInfo = {
    Android: {
      icon: "📱",
      description: "Download AftA for Android devices",
      requirements: "Android 7.0 or later"
    },
    Iphone: {
      icon: "📲",
      description: "Download AftA for iOS devices",
      requirements: "iOS 12.0 or later"
    },
    Windows: {
      icon: "💻",
      description: "Download AftA for Windows PC",
      requirements: "Windows 10 or later"
    },
    Mac: {
      icon: "🖥️",
      description: "Download AftA for macOS",
      requirements: "macOS 10.14 or later"
    }
  };

  const currentPlatform = platformInfo[platform];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[rgba(255,247,230,1)] rounded-2xl p-8 max-w-md w-full shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Download AftA</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Platform Info */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{currentPlatform?.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {platform}
          </h3>
          <p className="text-gray-600 mb-2">{currentPlatform?.description}</p>
          <p className="text-sm text-gray-500">{currentPlatform?.requirements}</p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-primary rounded-xl p-6 mb-6">
          <h4 className="font-semibold text-gray-100 mb-2">🚀 Coming Soon!</h4>
          <p className="text-gray-100 text-sm leading-relaxed">
            We're putting the finishing touches on the AftA app for {platform}. 
            Our development team is working hard to bring you the best experience possible.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-gray-200 text-gray-100 hover:text-primary font-medium py-3 px-6 rounded-xl transition-all duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  // Use the download modal context
  const { downloadModal, openModal, closeModal } = useDownloadModal();

  // Function to load Tawk.to script
  const loadTawkScript = () => {
    // Check if Tawk script is already loaded
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
      return;
    }

    // Create and load the Tawk.to script
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/68b0d52848813419264be616/1j3pc1981';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  };

  // Handle support click
  const handleSupportClick = (e) => {
    e.preventDefault();
    loadTawkScript();
  };

  // Handle platform download click
  const handlePlatformClick = (platform) => {
    openModal(platform);
  };

  // Handle footer download button click
  const handleFooterDownloadClick = () => {
    openModal('Android'); // Default to Android
  };

  return (
    <section className="bg-[rgba(0,42,40,1)]">
      <div className="max-w-screen-2xl mx-auto pt-[70px] px-6 lg:px-[44px] pb-[44px]">
        {/* Logo & Description */}
        <div className="flex flex-col items-center lg:flex-row w-full lg:justify-between lg:pb-[70px] lg:items-start">
          
          <div className="flex flex-col justify-center md:items-start items-center md:items-left mb-[40px] lg:mb-[0]">
            <Link to="/" className="text-2xl font-bold flex items-center mb-[25px] lg:mb-[44px]">
              <img
                src={Logo}
                alt="AftA"
                className="h-[40px]"
              />
            </Link>
            <button
              onClick={handleFooterDownloadClick}
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
                  <Link to="/about" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">About</Link>
                </li>
                <li className="group">
                  <Link to="/features" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Features</Link>
                </li>
                <li className="group">
                  <Link to="/community" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Community</Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <ul className="text-sm font-medium">
                <li className="group">
                  <Link to="/privacy" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Terms of use</Link>
                </li>
                <li className="group">
                  <Link to="/privacy" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Privacy</Link>
                </li>
              </ul>
            </div>

            {/* Download Links */}
            <div>
              <ul className="text-sm font-medium">
                <li className="group">
                  <span className="block mb-4 lg:mb-2 text-white font-semibold">Get AftA</span>
                </li>
                <li className="group">
                  <button 
                    onClick={() => handlePlatformClick('Android')}
                    className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all cursor-pointer"
                  >
                    Android
                  </button>
                </li>
                <li className="group">
                  <button 
                    onClick={() => handlePlatformClick('Iphone')}
                    className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all cursor-pointer"
                  >
                    iPhone
                  </button>
                </li>
                <li className="group">
                  <button 
                    onClick={() => handlePlatformClick('Windows')}
                    className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all cursor-pointer"
                  >
                    Windows
                  </button>
                </li>
                <li className="group">
                  <button 
                    onClick={() => handlePlatformClick('Mac')}
                    className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all cursor-pointer"
                  >
                    Mac
                  </button>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <ul className="text-sm font-medium">
                <li className="group">
                  <button 
                    onClick={handleSupportClick}
                    className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all cursor-pointer"
                  >
                    Support
                  </button>
                </li>
                <li className="group">
                  <Link to="/faq" className="block mb-4 lg:mb-2 group-hover:bg-text-gradient2 group-hover:bg-clip-text group-hover:text-transparent transition-all">Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-500"/>

        <div className="mt-2 lg:mt-8 flex justify-between items-center text-white flex-col lg:flex-row pt-1 text-center text-sm font-light max-w-screen-2xl mx-auto">
          <div className="flex items-center flex-col mx-auto lg:mx-[0] lg:flex-row order-2 lg:order-1">
            <p className="text-xs md:text-base font-normal leading-[50px] lg:leading-none lg:pr-4">Copyright &copy; {new Date().getFullYear()}. AftA. All Rights Reserved</p>
          </div>
         
          {/* Social Icons Section */}
          <div className="flex order-1 lg:order-2 my-3 items-center justify-center space-x-6 lg:space-x-4 mt-6 lg:mt-0">
            {/* Instagram Icon */}
            {/* <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors duration-300"
            >
              <RiInstagramFill />
            </a> */}

            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors duration-300"
            >
              <RiFacebookFill />
            </a>

            {/* Twitter Icon */}
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors duration-300"
            >
              <RiTwitterFill />
            </a> */}
            
            {/* YouTube Icon */}
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

      {/* Download Modal */}
      <DownloadModal 
        isOpen={downloadModal.isOpen}
        onClose={closeModal}
        platform={downloadModal.platform}
      />
    </section>
  );
};

export default Footer;