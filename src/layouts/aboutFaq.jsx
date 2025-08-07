import { useState } from "react";
import OpenIcon from "../assets/add.png";

const faqs = [
  {
    question: "Unapologetic African Identity",
    answer: "Our app is a social media platform built to connect Africans across the continent and the diaspora. It's a space to share stories, culture, ideas, and build meaningful connections."
  },
  {
    question: "Freedom of Expression",
    answer: "To create an account, simply enter your email address, receive an OTP (One-Time Password) for verification, and complete your profile. "
  },
  {
    question: "Digital Sovereignty",
    answer: "No worries just enter your registered email on the login screen. We'll send a new OTP to help you log back in. If you're still having trouble, you can contact support for help."
  },
    {
    question: "Cultural Preservation & Innovation",
    answer: 'You can reach our support team through the "Support" section in the app. Alternatively, you can use the live chat for on the website faster assistance. '
  },
    {
    question: "Security & Trust",
    answer: "No you cannot delete your account once created."
    }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (


      <div className="divide-y border-t border-b border-gray-300">
        {faqs.map(({ question, answer }, i) => (
          <div key={i} className="border-t lg:px-[1rem] border-gray-300">
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
              className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-700 w-[800px] ${
                openIndex === i ? "max-h-96 mt-0" : "max-h-0 mt-0"
              }`}
              style={{ transitionProperty: "max-height, margin-top" }}
            >
              <p className="pb-5">{answer}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default FAQ;