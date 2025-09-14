import React, { useState, useEffect } from 'react';

interface LoginModalProps {
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Simulating login with:', { email, password });
        // In a real app, you would handle authentication here.
        // For this demo, we'll just close the modal.
        onClose();
    };
    
    // Add event listener for Escape key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative w-full max-w-md p-8 m-4 bg-white rounded-2xl shadow-xl transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close login modal"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-500">Sign in to your ContentPillar AI account.</p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm transition focus:border-[#135bec] focus:ring-2 focus:ring-[#135bec]/50"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm transition focus:border-[#135bec] focus:ring-2 focus:ring-[#135bec]/50"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#135bec] focus:ring-[#135bec]"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#135bec] hover:text-blue-700">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#135bec] hover:bg-opacity-90 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#135bec]"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
