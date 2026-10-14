import { useState } from "react";
import OpenIcon from "../../assets/add.png";

const faqs = [
  {
    question: "Unapologetic African Identity",
    answer: "AftA was built to celebrate African pride without compromise. We create a digital space where Africans and the diaspora can express their culture, languages, heritage, and creativity without pressure to conform to foreign standards. From local content to community voices, everything on AftA reflects the richness and confidence of the African identity."
  },
  {
    question: "Freedom of Expression",
    answer: "We believe every African voice deserves to be heard. AftA allows users to speak, create, and share authentically—without censorship of cultural norms, dialects, or community matters. While we protect against hate speech, abuse, and harm, we encourage open conversation, storytelling, and opinions that move the continent forward."
  },
  {
    question: "Digital Sovereignty",
    answer: "Unlike platforms that don’t prioritize African interests, AftA is built by Africans for Africans. Your data, identity, and digital footprint are governed with respect to African values and laws—not foreign agendas. We’re designing systems that empower communities, protect privacy, and give Africa control over its digital future."
  },
    {
    question: "Cultural Preservation & Innovation",
    answer: 'AftA is a hub where tradition meets technology. Users can share indigenous languages, art, music, fashion, festivals, and history—while also discovering new African trends and innovations. From local creators to global Afro-influencers, we’re building a platform that protects our heritage and fuels modern creativity.'
  },
    {
    question: "Security & Trust",
    answer: "Security is at the heart of our platform. Your conversations, media, and data are protected with high-level encryption and privacy protocols. We use transparent policies and advanced tools to prevent scams, fake accounts, and harassment—so you can connect confidently with real people, safely and securely."
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
              className={`text-xs lg:text-sm overflow-hidden transition-all duration-500 ease-in-out text-gray-700 lg:w-[800px] ${
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