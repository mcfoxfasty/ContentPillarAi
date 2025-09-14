import React, { useState } from 'react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');

        if (!href) return;

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                <a href="#" className="flex items-center gap-3" aria-label="ContentPillar AI Home" onClick={handleNavClick}>
                    <svg className="h-8 w-8 text-[#135bec]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                        <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">ContentPillar AI</h2>
                </a>
                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#135bec]" href="#features" onClick={handleNavClick}>Features</a>
                    <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#135bec]" href="#faqs" onClick={handleNavClick}>FAQs</a>
                    <a className="text-sm font-medium text-gray-600 transition-colors hover:text-[#135bec]" href="#testimonials" onClick={handleNavClick}>Testimonials</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden rounded-lg px-4 py-2 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100 sm:block">Log In</button>
                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
                        {isMenuOpen ? (
                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
                    <nav className="flex flex-col items-center gap-4 p-4">
                        <a className="text-base font-medium text-gray-700 transition-colors hover:text-[#135bec]" href="#features" onClick={handleNavClick}>Features</a>
                        <a className="text-base font-medium text-gray-700 transition-colors hover:text-[#135bec]" href="#faqs" onClick={handleNavClick}>FAQs</a>
                        <a className="text-base font-medium text-gray-700 transition-colors hover:text-[#135bec]" href="#testimonials" onClick={handleNavClick}>Testimonials</a>
                        <button className="w-full rounded-lg px-4 py-2 text-sm font-bold text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 mt-2">Log In</button>
                    </nav>
                </div>
            )}
        </header>
    );
}