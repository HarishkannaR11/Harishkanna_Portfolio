import React from "react";
import dsaImg from "./assets/certification/DSA C&C++.jpg";
import mlImg from "./assets/certification/ML Workshop IISc.jpg";
import digitalImg from "./assets/certification/digital.jpg";
import githubImg from "./assets/certification/github.jpg";
import postmanImg from "./assets/certification/postman.jpg";

const certifications = [
    {
        title: "DSA",
        source: "Udemy",
        image: dsaImg,
        link: "https://www.udemy.com/certificate/UC-6b3e6b6a-2b7c-4e2e-8e2e-123456789abc/",
        btnClass: "bg-indigo-600 hover:bg-indigo-400",
        btnText: "View Certificate",
        ring: "ring-indigo-400",
        issuedDate: "2024",
        description: "Data Structures and Algorithms certification covering advanced programming concepts and problem-solving techniques.",
        skills: ["Data Structures", "Algorithms", "Problem Solving", "C++ Programming"],
    },
    {
        title: "GitHub",
        source: "Credly",
        image: githubImg,
        link: "https://www.credly.com/badges/543b9faf-d647-4000-bb0c-855f336c23e1/public_url",
        btnClass: "bg-green-600 hover:bg-green-400",
        btnText: "View Certificate",
        ring: "ring-green-400",
        issuedDate: "2024",
        description: "GitHub certification demonstrating proficiency in version control, collaboration, and repository management.",
        skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    },
    {
        title: "Foundation of Digital Marketing",
        source: "Coursera",
        image: digitalImg,
        link: "https://coursera.org/share/0669af0ed252dec6e5da194d37948a2a",
        btnClass: "bg-yellow-500 hover:bg-yellow-300",
        btnText: "View Certificate",
        ring: "ring-yellow-400",
        issuedDate: "2024",
        description: "Comprehensive digital marketing certification covering modern marketing strategies and digital platforms.",
        skills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
    },
    {
        title: "ML Workshop IISc",
        source: "IISc Bangalore",
        image: mlImg,
        link: "#",
        btnClass: "bg-purple-600 hover:bg-purple-400",
        btnText: "View Certificate",
        ring: "ring-purple-400",
        issuedDate: "2024",
        description: "Machine Learning workshop at Indian Institute of Science, Bangalore focusing on advanced ML concepts.",
        skills: ["Machine Learning", "Python", "Data Analysis", "AI Models"],
    },
    {
        title: "Postman API Fundamentals",
        source: "Badgr",
        image: postmanImg,
        link: "https://badgr.com/public/assertions/XgRZUCU3QYOUn8xKNTGAHw?identity__email=krisharish11%40gmail.com",
        btnClass: "bg-orange-600 hover:bg-orange-400",
        btnText: "View Certificate",
        ring: "ring-orange-400",
        issuedDate: "2025",
        description: "API development and testing certification demonstrating proficiency with APIs and Postman tools.",
        skills: ["API Development", "Postman", "REST APIs", "API Testing"],
    },
];

const Certifications = () => (
    <section id="certifications" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[40vh] flex flex-col items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl font-extrabold tracking-widest mb-8 dark:text-indigo-200">Certifications & Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {certifications.map((cert, idx) => (
                <div
                    key={cert.title}
                    className="group bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-xl p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                >
                    <div className="relative flex flex-col items-center group w-full">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className={`rounded-lg mb-4 w-full h-40 object-contain bg-black ring-4 ${cert.ring} transition-transform duration-300 group-hover:scale-105 group-hover:ring-8`}
                        />

                        {/* Certificate Info */}
                        <div className="text-center w-full">
                            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">{cert.source}</span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {cert.description}
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap justify-center gap-1 mb-4">
                                {cert.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Overlay button on hover */}
                        {cert.link && cert.link !== '#' && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-0 left-0 w-full h-40 flex items-center justify-center bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <span className={`inline-block ${cert.btnClass} text-white font-semibold py-2 px-4 rounded transition-colors`}>
                                    {cert.btnText}
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: none; }
      }
      .animate-fade-in {
        animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
      }
    `}</style>
    </section>
);

export default Certifications; 