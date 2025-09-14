import React, { useState } from 'react';

interface ContentInputProps {
  onGenerate: (url: string) => void;
  isLoading: boolean;
}

export const ContentInput: React.FC<ContentInputProps> = ({ onGenerate, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(url);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-green-50"></div>
      <div className="container relative z-10 mx-auto flex min-h-[calc(80vh-160px)] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Your AI-powered SEO Content Strategist
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Generate a comprehensive content strategy for your website in minutes. Drive organic traffic and establish your authority in your niche.
        </p>
        <form className="mt-10 w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className="w-full rounded-full border-gray-300 bg-white px-6 py-4 pr-40 text-base shadow-lg transition focus:border-[#135bec] focus:ring-2 focus:ring-[#135bec]/50 disabled:opacity-70"
              placeholder="Enter your website URL"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              required
            />
            <button
              className="absolute inset-y-0 right-0 m-2 flex items-center justify-center rounded-full bg-[#135bec] px-6 text-sm font-bold text-white transition-all hover:bg-opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:bg-opacity-70"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Strategy'}
            </button>
          </div>
        </form>
        <p className="mt-4 text-xs text-gray-500">Get started for free. No credit card required.</p>
      </div>
    </section>
  );
};
