import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is ShaktiSpace free to join?",
      answer: "Yes, basic access is free for all women entrepreneurs."
    },
    {
      question: "How can I connect with mentors?",
      answer: "After registering, you can book sessions through the mentor dashboard."
    },
    {
      question: "Do you provide financial guidance?",
      answer: "Yes, we offer financial literacy and funding guidance programs."
    },
    {
      question: "Can I showcase my business on ShaktiSpace?",
      answer: "Yes, entrepreneurs can create profiles and showcase their products or services to reach a wider audience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h4 className="text-pink-600 font-semibold text-center mb-2 text-2xl tracking-widest">
          FAQ
        </h4>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <span className="text-2xl font-bold text-pink-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="text-gray-600 mt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
