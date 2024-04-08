import { useState } from "react";

const QuestionSection = () => {
  const faqs = [
    {
      question: "What are Calendly apps ?",
      answer:
        "This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "What are Calendly integrations ? ",
      answer:
        "This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "How do i install and use integrations ?",
      answer:
        "This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "How can i request a new integrations ? ",
        answer :
        "This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
    },
    {
        question: "Want to build a Calendly integrations? Learn about our API." ,
        answer:
        "This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-questionSectionTheme relative  w-full  flex items-center flex-col p-6 pt-10 justify-center">
      <h2 className="text-4xl font-bold text-center mt-8 max-sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="text-sm mt-4 shrink-0 max-sm:text-xs">
        Not seeing what you are looking for?
      </p>
      <p className="text-sm mt-1.5 max-sm:text-xs">
        Go to Our{" "}
        <span className="font-semibold text-blue-700">help center</span>
      </p>

      <div className="flex flex-col justify-around w-1/2 mt-8 max-lg:w-3/4 max-sm:w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 bg-white cursor-pointer select-none p-4 rounded">
            <div className="flex justify-between items-center">
              <button
                onClick={() => toggleFAQ(index)}
                className="font-medium text-left w-full flex items-center focus:outline-none "
              >
                <span className="text-lg font-medium max-sm:text-base ">{faq.question}</span>
                <span className="ml-auto text-blue-700 ">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
            </div>
            {openIndex === index && <div className="mt-4 font-normal max-sm:text-sm">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
