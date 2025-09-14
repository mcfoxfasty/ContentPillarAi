import React from 'react';

export const Welcome: React.FC = () => {
    return (
        <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-dashed border-slate-700">
            <svg className="mx-auto h-12 w-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-xl font-medium text-slate-200">Ready to build your content strategy?</h3>
            <p className="mt-1 text-slate-400">
                Enter your website's URL in the box above and click "Generate Strategy" to begin.
            </p>
        </div>
    );
};
