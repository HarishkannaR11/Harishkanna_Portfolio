import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() =>
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [dark]);

    // Optional: Listen to system theme changes
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e) => setDark(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    return (
        <button
            onClick={() => setDark((d) => !d)}
            className="ml-2 p-2 rounded-full bg-indigo-800/80 text-white hover:bg-indigo-600/80 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Toggle dark mode"
        >
            {dark ? (
                // Glowing moon/star/planet for dark mode
                <span className="inline-block animate-spin-slow">
                    <i className="bx bxs-moon text-2xl text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,160,0.7)]" />
                </span>
            ) : (
                // Sun for light mode
                <span className="inline-block">
                    <i className="bx bxs-sun text-2xl text-yellow-400" />
                </span>
            )}
        </button>
    );
};

export default ThemeToggle;

// Add this to your global CSS or index.css:
// @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
// .animate-spin-slow { animation: spin-slow 3s linear infinite; } 