import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                        <a className="text-sm text-gray-500 transition-colors hover:text-[#135bec]" href="#">Terms of Service</a>
                        <a className="text-sm text-gray-500 transition-colors hover:text-[#135bec]" href="#">Privacy Policy</a>
                        <a className="text-sm text-gray-500 transition-colors hover:text-[#135bec]" href="#">Contact Us</a>
                    </div>
                    <p className="text-sm text-gray-500">© 2025 ContentPillar AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}