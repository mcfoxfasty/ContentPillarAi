import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { ContentInput } from './components/ContentInput';
import { LoadingDisplay } from './components/LoadingDisplay';
import { StrategyAccordion } from './components/StrategyAccordion';
import { generateContentStrategy } from './services/geminiService';
import type { Strategy } from './types';
import { ErrorDisplay } from './components/ErrorDisplay';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FAQs } from './components/FAQs';
import { LoginModal } from './components/LoginModal';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [strategy, setStrategy] = useState<Strategy | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = useCallback(async (url: string) => {
    if (!url.trim()) {
      setError("Please enter a website URL to generate a strategy.");
      return;
    }
     try {
        new URL(url); // Basic validation for URL format
    } catch (_) {
        setError("Please enter a valid URL (e.g., https://www.example.com).");
        return;
    }


    setIsLoading(true);
    setError(null);
    setStrategy(null);

    try {
      const result = await generateContentStrategy(url);
      setStrategy(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please check the console and ensure your API key is configured.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Auto-scroll to results when they appear
    if (isLoading || error || strategy) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isLoading, error, strategy]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header onLoginClick={() => setIsLoginModalOpen(true)} />
        <main className="flex-grow">
          <ContentInput onGenerate={handleGenerate} isLoading={isLoading} />
          
          <div ref={resultsRef} className="scroll-mt-20">
            {(isLoading || error || strategy) && (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
                {isLoading && <LoadingDisplay />}
                {error && <ErrorDisplay message={error} />}
                {strategy && <StrategyAccordion strategy={strategy} />}
              </div>
            )}
          </div>

          <Features />
          <FAQs />
          <Testimonials />

        </main>
        <Footer />
        {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
    </div>
  );
};

export default App;