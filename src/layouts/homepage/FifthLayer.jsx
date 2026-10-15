import { useState } from "react";
import { getCloudinaryUrl } from "../../utils/cloudinary";

const OpenIcon = getCloudinaryUrl("https://res.cloudinary.com/wruetqvx/image/upload/v1792001692/afta/add.png", "q_auto:best");

const faqs = [
  {
    question: "What is AftA?",
    answer: "AftA is an all-in-one learning and community platform built to bring people together from everywhere. It's a dynamic space to acquire in-demand skills, connect with expert tutors and passionate peers, share ideas, and grow together."
  },
  {
    question: "How can I enroll in a course?",
    answer: "Once you're logged in, simply browse our catalog of courses and select one that matches your interest. Click on enroll, complete the payment, and the course will immediately be added to your dashboard."
  },
  {
    question: "How do tutors earn on AftA?",
    answer: "Tutors earn through course subscriptions, live session bookings, and virtual gifts from learners. You can easily withdraw your earnings directly to your preferred payout method or bank account."
  },
  {
    question: "Can learners and tutors share resources?",
    answer: "Yes! AftA is built for collaborative learning. Learners can share resources, ask questions, and discuss insights through posts and comments, while tutors can upload helpful materials to support their courses."
  },
  {
    question: "Can I still connect and share stories?",
    answer: "Absolutely. AftA includes an interactive social feed where anyone can share updates, post thoughts, join discussions, and interact with the wider community."
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