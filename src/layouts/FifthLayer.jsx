import { useState } from "react";
import OpenIcon from "../assets/add.png";

const faqs = [
  {
    question: "What is this platform about?",
    answer: "Our app is a social media platform built to connect Africans across the continent and the diaspora. It's a space to share stories, culture, ideas, and build meaningful connections."
  },
  {
    question: "How do I create an account?",
    answer: "To create an account, simply enter your email address, receive an OTP (One-Time Password) for verification, and complete your profile. "
  },
  {
    question: "I forgot my login method. How can I recover access?",
    answer: "No worries just enter your registered email on the login screen. We'll send a new OTP to help you log back in. If you're still having trouble, you can contact support for help."
  },
    {
    question: "How do I contact customer support?",
    answer: 'You can reach our support team through the "Support" section in the app. Alternatively, you can use the live chat for on the website faster assistance. '
  },
    {
    question: "Can I delete my account if I no longer want to use the platform?",
    answer: "No you cannot delete your account once created."
    }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-2xl mx-auto my-12">
      <div className="max-w-[669px] md:pl-[27px] pb-[46px]">
        <h2 className="text-[42px] text-primary md:text-[64px] pb-[8px] leading-[50px] md:leading-[70px] font-normal">
          Frequently Asked Questions
        </h2>
        <p className="text-base font-normal text-primary ">
          Find quick answers to common questions about our services, features, and how to get started.
        </p>
      </div>

      <div className="divide-y border-t border-b border-gray-300">
        {faqs.map(({ question, answer }, i) => (
          <div key={i} className="border-t lg:px-[7rem] border-gray-300">
            <button
              onClick={() => toggle(i)}
              className="group w-full flex justify-between items-center py-8 text-left text-lg font-medium text-gray-900 transition-colors"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className={`transition-all duration-300 group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent ${
                openIndex === i ? "bg-text-gradient bg-clip-text text-transparent" : ""
              }`}>
                {question}
              </span>
              <img
                src={OpenIcon}
                alt="Open"
                className={`ml-4 w-6 h-6 select-none transition-transform duration-300 ${
                  openIndex === i ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={`faq-answer-${i}`}
              className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-700 max-w-full ${
                openIndex === i ? "max-h-96 mt-0" : "max-h-0 mt-0"
              }`}
              style={{ transitionProperty: "max-height, margin-top" }}
            >
              <p className="pb-5">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;