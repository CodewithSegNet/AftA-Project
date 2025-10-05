import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Shield, Lock, Eye, Users, Database, FileText, Globe, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });
  const contentInView = useInView(contentRef, { once: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const iconFloat = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, we collect your email address, profile information, and any content you choose to share on AftA. This helps us provide you with a personalized experience."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you interact with our platform, including your activity patterns, feature usage, and device information to improve our services."
        },
        {
          subtitle: "Community Data",
          text: "When you join or create communities, we collect data about your participation to help maintain safe and relevant spaces for all users."
        }
      ]
    },
    {
      id: "data-usage",
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: "Platform Enhancement",
          text: "We use your data to personalize your feed, suggest relevant communities, and improve the overall AftA experience for all users."
        },
        {
          subtitle: "Communication",
          text: "We may send you important updates about our services, community guidelines, and features that we believe will interest you."
        },
        {
          subtitle: "Safety & Security",
          text: "Your information helps us detect and prevent fraudulent activity, spam, and violations of our community standards."
        }
      ]
    },
    {
      id: "data-protection",
      title: "Data Protection & Security",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "End-to-End Encryption",
          text: "All private messages and personal communications are protected with end-to-end encryption, ensuring only you and your intended recipient can read them."
        },
        {
          subtitle: "Secure Infrastructure",
          text: "We use industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your data."
        },
        {
          subtitle: "Data Minimization",
          text: "We collect only the information necessary to provide our services and delete data that is no longer needed."
        }
      ]
    },
    {
      id: "data-sharing",
      title: "Information Sharing",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "With Your Consent",
          text: "We only share your personal information with third parties when you explicitly give us permission to do so."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information if required by law, regulation, or valid legal process, always ensuring we protect your privacy to the fullest extent possible."
        },
        {
          subtitle: "Service Providers",
          text: "We work with trusted partners who help us operate AftA, all of whom are bound by strict confidentiality agreements."
        }
      ]
    },
    {
      id: "user-rights",
      title: "Your Rights & Choices",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Access & Control",
          text: "You can access, modify, or delete your personal information at any time through your account settings."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to export your data in a commonly used format if you choose to leave AftA."
        },
        {
          subtitle: "Privacy Settings",
          text: "Control who can see your content, send you messages, and invite you to communities through granular privacy controls."
        }
      ]
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use cookies necessary for the basic functionality of AftA, including keeping you logged in and remembering your preferences."
        },
        {
          subtitle: "Analytics",
          text: "We use analytics tools to understand how users interact with our platform, helping us improve the experience for everyone."
        },
        {
          subtitle: "Your Control",
          text: "You can manage cookie preferences through your browser settings, though some features may not work properly without essential cookies."
        }
      ]
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Privacy Policy — AftA | Your Data, Your Rights</title>
        <meta
          name="description"
          content="Learn how AftA protects your privacy, handles your data, and ensures your security on Africa's premier social media platform."
        />
        <meta
          name="keywords"
          content="AftA privacy policy, data protection, user privacy, African social media privacy, personal data security"
        />
        <meta
          property="og:title"
          content="Privacy Policy — AftA | Protecting African Digital Privacy"
        />
        <meta
          property="og:description"
          content="Discover how AftA safeguards your personal information and respects your privacy rights on our platform built for Africans worldwide."
        />
        <link rel="canonical" href="https://www.afta.com/privacy" />
      </Helmet>

      <div className="min-h-screen ">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          className="pt-[3.6rem] lg:pt-[6rem] pb-16 px-4 md:px-6"
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="max-w-screen-xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[rgba(255,180,27,0.1)] to-[rgba(20,80,72,0.1)] rounded-full mb-8"
              variants={fadeInUp}
              animate={iconFloat}
            >
              <Shield className="w-10 h-10 text-[rgba(20,80,72,1)]" />
            </motion.div>
            
            <motion.h1 
              className="text-[42px] md:text-[72px] leading-[50px] md:leading-[80px] font-normal mb-6 text-primary"
              variants={fadeInUp}
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Your privacy is fundamental to our mission. Learn how AftA protects your personal information while connecting Africans worldwide.
            </motion.p>
            
            <motion.div 
              className="text-sm text-gray-600"
              variants={fadeInUp}
            >
              Last updated: January 15, 2025
            </motion.div>
          </div>
        </motion.section>

        {/* Quick Navigation */}
        <motion.section 
          className="px-4 md:px-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Quick Navigation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center p-4 bg-gradient-to-r from-[rgba(255,180,27,0.05)] to-[rgba(20,80,72,0.05)] rounded-xl hover:from-[rgba(255,180,27,0.1)] hover:to-[rgba(20,80,72,0.1)] transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-[rgba(20,80,72,1)] mr-3 group-hover:scale-110 transition-transform duration-300">
                      {section.icon}
                    </div>
                    <span className="text-primary group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {section.title}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          ref={contentRef}
          className="px-4 md:px-6 pb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <div className="max-w-screen-xl mx-auto">
            {/* Introduction */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-[rgba(20,80,72,1)] mr-4" />
                <h2 className="text-3xl md:text-4xl font-normal text-primary">Our Commitment to Your Privacy</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  At AftA, we believe privacy is a fundamental right. As Africa's premier social media platform, 
                  we're committed to protecting your personal information while fostering authentic connections 
                  across the African diaspora.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  This Privacy Policy explains how we collect, use, protect, and share your information when you 
                  use AftA. By using our services, you agree to the practices described in this policy.
                </p>
                
                <div className="bg-gradient-to-r from-[rgba(255,180,27,0.1)] to-[rgba(20,80,72,0.1)] rounded-xl p-6 border-l-4 border-[rgba(255,180,27,1)]">
                  <p className="text-base font-medium text-primary mb-2">Your Control Matters</p>
                  <p className="text-base text-gray-700">
                    You have complete control over your data. This policy empowers you to make informed 
                    decisions about how your information is used on our platform.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, sectionIndex) => (
              <motion.div 
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 mb-12"
                variants={fadeInUp}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="text-[rgba(20,80,72,1)] mr-4"
                    animate={iconFloat}
                    transition={{ delay: sectionIndex * 0.2 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-normal text-primary">{section.title}</h2>
                </div>
                
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex}
                      className="border-l-4 border-[rgba(255,180,27,0.3)] pl-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    >
                      <h3 className="text-xl font-semibold text-primary mb-3">{item.subtitle}</h3>
                      <p className="text-base leading-relaxed text-gray-700">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div 
              className="bg-gradient-to-r from-[rgba(20,80,72,1)] to-[rgba(0,42,40,1)] rounded-2xl shadow-lg p-8 md:p-12 text-white"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 mr-4" />
                <h2 className="text-3xl md:text-4xl font-normal">Questions About Your Privacy?</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    We're here to help you understand how your data is protected on AftA. 
                    If you have any questions about this Privacy Policy or your data rights, 
                    don't hesitate to reach out.
                  </p>
                  
                  <div className="space-y-3">
                <div className="flex items-center">
  <Mail className="w-5 h-5 mr-3 text-[rgba(255,180,27,1)]" />



  <a
    href="mailto:support@afta.com"
    className="ml-1 cursor-pointer hover:text-[rgba(255,180,27,1)] hover:underline transition-all duration-200"
  >
    support@afta.com
  </a>
</div>

                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-3 text-[rgba(255,180,27,1)]" />
                      <span>Support Center: www.afta.com/support</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Your Data Rights Include:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[rgba(255,180,27,1)] rounded-full mr-3"></div>
                      Access to all your personal data
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[rgba(255,180,27,1)] rounded-full mr-3"></div>
                      Ability to correct inaccurate information
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[rgba(255,180,27,1)] rounded-full mr-3"></div>
                      Right to delete your account and data
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[rgba(255,180,27,1)] rounded-full mr-3"></div>
                      Data portability options
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Updates Notice */}
            <motion.div 
              className="bg-gradient-to-br from-[rgba(255,180,27,0.06)] via-[rgba(20,80,72,0.04)] to-[rgba(255,180,27,0.02)] rounded-2xl shadow-lg p-6 md:p-8 border border-[rgba(255,180,27,0.15)] mt-8 md:mt-12 text-center backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Policy Updates</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We'll notify you of any significant 
                  changes through the app or via email.
                </p>
                <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[rgba(255,180,27,0.12)] to-[rgba(20,80,72,0.08)] rounded-full border border-[rgba(255,180,27,0.2)]">
                  <FileText className="w-4 h-4 md:w-5 md:h-5 text-[rgba(20,80,72,1)] mr-2" />
                  <span className="text-[rgba(20,80,72,1)] font-medium text-sm md:text-base">Effective Date: September 11, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </HelmetProvider>
  );
};

export default PrivacyPolicy;