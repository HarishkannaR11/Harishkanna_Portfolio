import React from "react";
import dsaImg from "./assets/certification/DSA C&C++.jpg";
import mlImg from "./assets/certification/ML Workshop IISc.jpg";
import digitalImg from "./assets/certification/digital.jpg";
import githubImg from "./assets/certification/github.jpg";

const certifications = [
    {
        title: "DSA",
        source: "Udemy",
        image: dsaImg,
        link: "https://www.udemy.com/certificate/UC-6b3e6b6a-2b7c-4e2e-8e2e-123456789abc/", // Replace with the actual URL from your certificate
        btnClass: "bg-indigo-600 hover:bg-indigo-400",
        btnText: "View Certificate",
        ring: "ring-indigo-400",
    },
    {
        title: "GitHub",
        source: "Credly",
        image: githubImg,
        link: "https://www.credly.com/badges/543b9faf-d647-4000-bb0c-855f336c23e1/public_url",
        btnClass: "bg-green-600 hover:bg-green-400",
        btnText: "View Certificate",
        ring: "ring-green-400",
    },
    {
        title: "Foundation of Digital Marketing",
        source: "Coursera",
        image: digitalImg,
        link: "https://coursera.org/share/0669af0ed252dec6e5da194d37948a2a",
        btnClass: "bg-yellow-500 hover:bg-yellow-300",
        btnText: "View Certificate",
        ring: "ring-yellow-400",
    },
    {
        title: "ML Workshop IISc",
        source: "IISc Bangalore",
        image: mlImg,
        link: "#",
        btnClass: "bg-purple-600 hover:bg-purple-400",
        btnText: "View Certificate",
        ring: "ring-purple-400",
    },
];

const Certifications = () => (
    <section id="certifications" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[40vh] flex flex-col items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl font-extrabold tracking-widest mb-8 dark:text-indigo-200">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {certifications.map((cert, idx) => (
                <div
                    key={cert.title}
                    className="group bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-lg p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 animate-fade-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                >
                    <div className="relative flex flex-col items-center group w-full">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className={`rounded-lg mb-4 w-full h-40 object-contain bg-black ring-4 ${cert.ring} transition-transform duration-300 group-hover:scale-105 group-hover:ring-8`}
                        />
                        {/* Overlay button on hover */}
                        {cert.link && cert.link !== '#' && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-0 left-0 w-full h-40 flex items-center justify-center bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <span className={`inline-block ${cert.btnClass} text-white font-semibold py-2 px-4 rounded transition-colors`}>{cert.btnText || 'View Certificate'}</span>
                            </a>
                        )}
                        <h3 className="text-2xl font-semibold mb-2 text-center">{cert.title}</h3>
                        <p className="mb-2 text-center text-indigo-200">{cert.source}</p>
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