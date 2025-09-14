import React, { useState } from 'react';
import type { Strategy, StrategyItem } from '../types';

interface StrategyAccordionProps {
  strategy: Strategy;
}

const AccordionItem: React.FC<{ item: StrategyItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <h2 id={`accordion-header-${item.pillar_topic.replace(/\s+/g, '-')}`}>
        <button
          type="button"
          className={`flex w-full items-center justify-between p-6 text-left font-semibold transition duration-300 ease-in-out ${isOpen ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'}`}
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${item.pillar_topic.replace(/\s+/g, '-')}`}
        >
          <span className="flex items-center">
            <svg className="mr-4 h-6 w-6 shrink-0 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            {item.pillar_topic}
          </span>
          <svg
            className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div 
        id={`accordion-body-${item.pillar_topic.replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
        role="region"
        aria-labelledby={`accordion-header-${item.pillar_topic.replace(/\s+/g, '-')}`}
      >
        <div className="bg-white p-6">
          <div className="space-y-4">
            {item.blog_posts.map((post, index) => (
              <div key={index} className="flex items-start">
                <svg className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700">{post}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StrategyAccordion: React.FC<StrategyAccordionProps> = ({ strategy }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
        <div className="border-b border-gray-200 bg-white p-6">
            <h3 className="text-2xl font-bold text-gray-900">Your Generated Content Strategy</h3>
            <p className="mt-2 text-base text-gray-600">Click on a pillar topic to see the related blog post ideas.</p>
        </div>
      <div id="strategy-accordion">
        {strategy.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};