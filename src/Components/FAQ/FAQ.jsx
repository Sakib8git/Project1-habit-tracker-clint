import React, { useState } from "react";
import { Link } from "react-router"; // ✅ Import Link for routing

const faqs = [
  {
    question: "What is Habit Tracker?",
    answer:
      "Habit Tracker is a web app that helps you build and maintain positive habits by tracking your daily progress.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your data is protected with authentication and stored securely. Only you can access your habits.",
  },
  {
    question: "Can I edit or delete habits?",
    answer:
      "Absolutely! You can update habit details or delete them anytime from your dashboard.",
  },
  {
    question: "Is Habit Tracker free to use?",
    answer:
      "Yes, it’s completely free. You can create unlimited habits and track your progress without any cost.",
  },
  {
    question: "How do streaks work?",
    answer:
      "Streaks increase when you mark a habit as complete daily. Missing a day resets the streak.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-base-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ✅ CTA Button */}
      <div className="text-center mt-10 -mb-10">
        <Link
          to="/contact"
          className="btn primary-col font-semibold px-6 py-3 rounded-lg shadow"
        >
          More Questions?
        </Link>
      </div>
    </section>
  );
};

export default FAQ;