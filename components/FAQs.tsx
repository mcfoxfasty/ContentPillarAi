import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is ContentPillar AI?',
    answer: 'ContentPillar AI is an AI-powered tool that generates a comprehensive SEO content strategy from a single website URL. It identifies key pillar topics and suggests relevant blog post ideas to boost your organic traffic and establish authority.',
  },
  {
    question: 'How does the content generation process work?',
    answer: "Simply enter your website's URL. Our AI analyzes its content to understand your core business, products, and target audience. Based on this analysis, it crafts a tailored content strategy with foundational pillar pages and specific blog topics.",
  },
  {
    question: 'Is this tool free to use?',
    answer: 'Yes, you can generate your first content strategy completely free with no credit card required. This allows you to experience the full power of ContentPillar AI firsthand before any commitment.',
  },
  {
    question: 'What kind of websites can I use this for?',
    answer: 'ContentPillar AI is versatile and works well for a wide range of websites, including B2B & B2C businesses, SaaS companies, e-commerce stores, blogs, and corporate sites. If your website has content for our AI to analyze, it can generate a relevant strategy.',
  },
];

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 text-left font-semibold text-gray-800 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{question}</span>
        <svg
          className={`h-6 w-6 transform text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};


export const FAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="bg-gray-50 py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-3xl space-y-4">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};