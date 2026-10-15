import { useState } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const OpenIcon = getCloudinaryUrl("https://res.cloudinary.com/wruetqvx/image/upload/v1792001692/afta/add.png", "q_auto:best");

const faqs = [
  {
    question: "What is this platform about?",
    answer: "AftA is a Pan-African platform built to connect Africans across the continent and diaspora. It's a dynamic space to share stories, showcase creativity, and foster genuine connections through shared culture and ideas."
  },
  {
    question: "How do I create an account?",
    answer: "Creating an account on AftA is simple. Just head to the sign-up page, enter your email, create a secure password, and complete your profile. You can also sign up using your Google or Apple account."
  },
  {
    question: "I forgot my login method. How can I recover access?",
    answer: "Tutors earn through course subscriptions, live session bookings, and virtual gifts from viewers. You can withdraw your earnings directly to your mobile money or bank account."
  },
    {
    question: "How do I contact customer support?",
    answer: "Yes, AftA is designed for connection. Learners can share resources through posts and comments, while tutors can upload materials to support their courses. “"
  },
     {
    question: "Can I delete my account if I no longer want to use the platform?",
    answer: "Yes, you can still connect and share your stories. AftA has a dedicated social feed for general posts, comments, and live updates.  "
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
        <h2 className="text-[32px] text-primary md:text-[64px] pb-[8px] leading-[35px] md:leading-[70px] font-normal">
          Frequently Asked Questions
        </h2>
        <p className="text-sm lg:text-base font-normal text-primary ">
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
              <span className={`text-sm lg:text-base transition-all duration-300 group-hover:bg-text-gradient group-hover:bg-clip-text group-hover:text-transparent ${
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
              className={`text-xs lg:text-sm overflow-hidden transition-all duration-500 ease-in-out text-gray-700 max-w-full ${
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