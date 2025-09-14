import React from 'react';

export const Features: React.FC = () => {
    return (
        <section id="features" className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unlock Your Content's Full Potential</h2>
                    <p className="mt-4 text-lg text-gray-600">Powerful features to streamline your content creation process.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Feature Card 1 */}
                    <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-[#135bec]">
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">AI-Powered Content Strategy</h3>
                        <p className="mt-2 text-base text-gray-600">Instantly generate a complete content roadmap tailored to your audience and business goals.</p>
                    </div>
                    {/* Feature Card 2 */}
                    <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                             <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">SEO Optimization</h3>
                        <p className="mt-2 text-base text-gray-600">Get data-driven keyword suggestions and on-page optimization tips to rank higher on search engines.</p>
                    </div>
                    {/* Feature Card 3 */}
                    <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Competitor Analysis</h3>
                        <p className="mt-2 text-base text-gray-600">Discover what your competitors are doing right and find opportunities to outperform them.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}