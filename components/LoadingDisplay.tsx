import React from 'react';

export const LoadingDisplay: React.FC = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">Crafting Your Strategy...</h3>
    <p className="mt-2 text-gray-600">The AI is analyzing your content and generating pillar topics and blog ideas. This may take a moment.</p>
  </div>
);
