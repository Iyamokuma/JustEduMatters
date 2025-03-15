import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    category: "Special Educational Needs (SEN)",
    questions: [
      {
        question: "What you can do to support your child?",
        answer: `If you are worried that your child may have difficulties with their learning, speak to them about your concerns. 
        Listen to what your child has to say about their difficulties. Speak to their teacher and SEN Co-ordinator (SENCo) for support.`
      },
      {
        question: "What happens if my child is not making expected progress?",
        answer: `If your child is not making expected progress despite school support, you or the school can apply to your local authority for an Education, Health, and Care assessment.`
      }
    ]
  },
  {
    category: "Education, Health and Care Assessment",
    questions: [
      {
        question: "What is an Education, Health and Care Assessment?",
        answer: "An EHC needs assessment is an assessment of your child’s education, health, and care needs."
      },
      {
        question: "How do I get an Education, Health and Care Assessment?",
        answer: "You or the school can apply to the local council if your child requires education beyond the general provisions."
      },
      {
        question: "What if the council refuses to carry out an EHC assessment?",
        answer: "You can request a review, try mediation, or challenge the decision in the SEND tribunal."
      }
    ]
  },
  {
    category: "Education, Health and Care Plan (EHC Plan)",
    questions: [
      {
        question: "What is an Education, Health and Care Plan?",
        answer: "The EHCP provides special education support beyond what schools can offer."
      },
      {
        question: "Why is it important to have an EHC Plan?",
        answer: "An EHCP ensures the council provides required support and allows you to challenge decisions in the SEND tribunal."
      }
    ]
  }
];

const FAQPage = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryIndex, questionIndex) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [`${categoryIndex}-${questionIndex}`]: !prev[`${categoryIndex}-${questionIndex}`]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category.category}</h2>
          {category.questions.map((item, questionIndex) => (
            <div key={questionIndex} className="mb-4 border-b pb-2">
              <button
                className="w-full flex justify-between items-center py-3 text-left focus:outline-none"
                onClick={() => toggleQuestion(categoryIndex, questionIndex)}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {openQuestions[`${categoryIndex}-${questionIndex}`] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openQuestions[`${categoryIndex}-${questionIndex}`] ? "auto" : 0,
                  opacity: openQuestions[`${categoryIndex}-${questionIndex}`] ? 1 : 0
                }}
                className="overflow-hidden text-gray-700"
              >
                <p className="py-2 px-4 bg-gray-100 rounded-md">{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
