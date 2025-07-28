import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import profilePic from "./assets/Harishkanna.jpg";
import resumePdf from "./assets/Harishkanna_Resume.pdf";

const socialLinks = [
    {
        icon: <i className="bx bxl-linkedin text-3xl text-blue-400"></i>,
        link: "https://www.linkedin.com/in/harishkannar11",
        label: "LinkedIn",
    },
    {
        icon: <i className="bx bxl-github text-3xl text-gray-300"></i>,
        link: "https://github.com/HarishkannaR11",
        label: "GitHub",
    },
    {
        icon: <i className="bx bxl-twitter text-3xl text-sky-400"></i>,
        link: "https://twitter.com/krisharish11",
        label: "Twitter",
    },
    {
        icon: <i className="bx bxs-envelope text-3xl text-pink-400"></i>,
        link: "mailto:krisharishcse11@gmail.com",
        label: "Email",
    },
];

const Home = () => (
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gradient-to-b from-white via-indigo-50 to-purple-50 text-gray-900 dark:bg-gradient-to-b dark:from-black dark:via-indigo-900 dark:to-purple-900 dark:text-white pt-32 pb-16 px-4 overflow-hidden transition-colors duration-500">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center z-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow text-indigo-700 dark:text-indigo-300">Hello, It's Me</h3>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 drop-shadow-lg text-indigo-900 dark:text-white">Harishkanna Ramamoorthi</h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow text-purple-700 dark:text-indigo-300">
                <span className="animate-pulse">
                    <Typewriter
                        words={['< a Full-Stack Developer />', '< a Coding Enthusiast />', '< a Machine Learning Enthusiast />', '< a Tech Explorer />', '< a Collaborator Builder />']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                    />
                </span>
            </h3>
            <p className="max-w-xl mb-6 text-lg text-gray-700 dark:text-gray-200 drop-shadow">
                <strong className="text-indigo-600 dark:text-indigo-300">Pre-final year Computer Science Engineering student at SSNCE </strong>, Passionate about creating <span className="font-bold text-purple-600 dark:text-indigo-300">impactful solutions</span> through technology . I thrive on <span className="font-bold text-indigo-600 dark:text-indigo-300">exploring new technologies</span> and enjoy <span className="font-bold text-purple-600 dark:text-indigo-300">collaborating on innovative projects</span>.
            </p>
            <div className="flex gap-6 mb-4">
                {socialLinks.map((s) => (
                    <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:scale-110 transition-transform">
                        {s.icon}
                    </a>
                ))}
            </div>
            <a
                href={resumePdf}
                download
                className="inline-block mb-6 px-8 py-4 bg-gradient-to-r from-indigo-200 to-purple-200 hover:from-indigo-400 hover:to-purple-400 text-indigo-800 dark:text-white font-bold rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xl"
            >
                Download Resume
            </a>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex items-center justify-center mt-4 md:mt-[-2rem] z-10">
            <img
                src={profilePic}
                alt="Profile"
                className="rounded-full shadow-2xl border-4 border-indigo-200 dark:border-indigo-700 aspect-square object-cover max-w-xs w-full h-auto ring-4 ring-indigo-200/40 dark:ring-indigo-400/40 transition-transform duration-300 hover:scale-110 bg-white"
            />
        </div>
        {/* Decorative stars overlay - denser starfield (dark mode only) */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden dark:block">
            {/* More stars, different sizes, opacities, and positions */}
            {[...Array(30)].map((_, i) => {
                // Randomize positions, size, and opacity for each star
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = Math.random() * 1.2 + 0.3; // 0.3rem to 1.5rem
                const opacity = Math.random() * 0.6 + 0.3; // 0.3 to 0.9
                const duration = Math.random() * 1.5 + 1; // 1s to 2.5s
                return (
                    <div
                        key={i}
                        className="bg-white rounded-full animate-pulse absolute"
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            width: `${size}rem`,
                            height: `${size}rem`,
                            opacity,
                            animationDuration: `${duration}s`,
                        }}
                    />
                );
            })}
        </div>
        {/* Starfield overlay, only visible in dark mode */}
        <div className="pointer-events-none fixed inset-0 z-0 hidden dark:block">
            {[...Array(60)].map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = Math.random() * 1.2 + 0.3;
                const opacity = Math.random() * 0.5 + 0.3;
                const duration = Math.random() * 2 + 2;
                return (
                    <div
                        key={i}
                        className="bg-white rounded-full absolute animate-twinkle"
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            width: `${size}rem`,
                            height: `${size}rem`,
                            opacity,
                            animationDuration: `${duration}s`,
                        }}
                    />
                );
            })}
        </div>
    </section>
);

export default Home; 