import React from "react";

const aboutPoints = [


    "🎓 3rd year Computer Science Engineering student passionate about growth and excellence in tech.  ",
    "💡 Problem solver active on LeetCode and GeeksForGeeks, with a strong foundation in Data Structures & Algorithms.  ",
    "🌐 Exploring Full-Stack Web Development with practical frontend and backend experience.  ",
    "🚀 Quick learner who embraces new technologies and thrives in fast - paced environments."
];
const timeline = [
    {
        year: "2021",
        icon: "🎓",
        index: 0,
        title: "Completed 10th Grade",
        desc: "Began academic path with a deep curiosity in applied sciences and system thinking.",
    },
    {
        year: "2021–2024",
        icon: "⚡",
        index: 1,
        title: "Diploma in Electrical and Electronics Engineering (EEE)",
        desc: "Developed core knowledge in power systems, circuits, and embedded electronics. Sparked interest in automation and IoT.",
    },
    {
        year: "2023",
        icon: "🤖",
        index: 2,
        title: "IoT Fire-Fighting Robot (EEE Mini Project)",
        desc: "Created a microcontroller-based robot to detect and respond to fire incidents — fusing hardware logic and environmental sensing.",
    },
    {
        year: "2024",
        icon: "🌦️",
        index: 3,
        title: "IoT Weather Station (EEE Final Year Project)",
        desc: "Designed a smart weather station with Blynk integration and ESP8266 — introducing real-time data transmission to the cloud.",
    },
    {
        year: "2024–Present",
        icon: "🎓",
        index: 4,
        title: "Pursuing B.E. in Computer Science and Engineering",
        desc: "Currently focused on software systems, cloud infrastructure, and full-stack application development.",
    },
    {
        year: "2024",
        icon: "💻",
        index: 5,
        title: "Java Inventory Management System (3rd Sem Mini Project)",
        desc: "Collaboratively developed a desktop-based application using Java, Swing, and MySQL. Implemented role-based login and CRUD features.",
    },
    {
        year: "2024",
        icon: "🍽️",
        index: 6,
        title: "Food Delivery Management System (4th Sem DBMS Project)",
        desc: "Built a backend-driven system using Java + JDBC to handle orders, menus, and delivery workflows. Strengthened understanding of relational database design and connectivity layers.",
    },
    {
        year: "2025",
        icon: "🏆",
        index: 7,
        title: "SAP Hackfest 2025 - Reached Round-2",
        desc: "Participated in SAP Hackfest 2025 with theme 'Sustainable Business', developing innovative solutions using SAP technologies. Successfully advanced to Round-2, demonstrating enterprise-level development skills and sustainable business solutions.",
    },
    {
        year: "2025",
        icon: "📢",
        index: 8,
        title: "Marketing and Social Media Executive, SSN IEEE PELS Club",
        desc: "Leading digital outreach initiatives and campaign strategies as a Marketing and Social Media Executive at SSN IEEE PELS Club.",
    },
    {
        year: "2025",
        icon: "🧑‍💼",
        index: 9,
        title: "Deputy Head of Sponsorship, SSN Lakshya Entrepreneurship Club",
        desc: "Serving as Deputy Head of Sponsorship at Lakshya Entrepreneurship Club, SSN.",
    },
    {
        year: "2025",
        icon: "🚀",
        index: 10,
        title: "Personal Portfolio Website",
        desc: "Developed a modern, responsive portfolio website using React 19, Tailwind CSS, and EmailJS. Features dark/light theme toggle, animated components, contact form integration, and professional project showcase.",
    },
];

const Timeline = () => (
    <div className="mt-12 w-full max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
        <div className="relative">
            {/* Vertical line */}
            <div className="hidden sm:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-300 to-indigo-200 dark:from-indigo-400 dark:via-indigo-600 dark:to-purple-600 rounded-full -translate-x-1/2 z-0" />
            <ol className="relative z-10">
                {timeline.map((item, idx) => {
                    const isLeft = item.index % 2 === 0;
                    return (
                        <li key={idx} className="mb-16 flex w-full items-center justify-start relative">
                            {/* Left side card */}
                            {isLeft && (
                                <div className="w-full sm:w-2/3 flex justify-end pr-0 sm:pr-8">
                                    <div className="bg-white/90 text-gray-900 border-indigo-100 shadow-lg dark:bg-indigo-950/80 dark:text-indigo-100 dark:border-indigo-500 dark:shadow-indigo-900/60 rounded-xl p-6 max-w-3xl text-right animate-fade-in-timeline border-r-4 border-indigo-400">
                                        <h4 className="text-lg font-bold mb-1 flex items-center justify-end gap-2">{item.title} <span className="text-2xl">{item.icon}</span></h4>
                                        <p className="text-gray-700 dark:text-gray-200 text-base">{item.desc}</p>
                                    </div>
                                </div>
                            )}
                            {/* Timeline dot, year, and horizontal branch */}
                            <div className="hidden sm:flex flex-col items-center w-1/3 relative">
                                {/* Year and icon on the line */}
                                <div className="flex flex-col items-center">
                                    <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 dark:bg-indigo-600 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-800 text-2xl relative z-10 mb-2">
                                        {item.icon}
                                    </span>
                                    <span className="text-indigo-500 dark:text-indigo-200 font-semibold text-sm whitespace-nowrap mb-2">{item.year}</span>
                                </div>
                                {/* Horizontal branch line */}
                                <div className={`absolute top-1/2 ${isLeft ? 'right-1/2' : 'left-1/2'} w-12 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 dark:from-indigo-400 dark:via-indigo-600 dark:to-purple-600 -translate-y-1/2`} style={{ minWidth: '3rem' }} />
                            </div>
                            {/* Right side card */}
                            {!isLeft && (
                                <div className="w-full sm:w-2/3 flex justify-start pl-0 sm:pl-8">
                                    <div className="bg-white/90 text-gray-900 border-indigo-100 shadow-lg dark:bg-indigo-950/80 dark:text-indigo-100 dark:border-indigo-500 dark:shadow-indigo-900/60 rounded-xl p-6 max-w-3xl text-left animate-fade-in-timeline border-l-4 border-indigo-400">
                                        <h4 className="text-lg font-bold mb-1 flex items-center gap-2">{item.icon} {item.title}</h4>
                                        <p className="text-gray-700 dark:text-gray-200 text-base">{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
        <style>{`
            @keyframes fade-in-timeline {
                from { opacity: 0; transform: translateY(32px); }
                to { opacity: 1; transform: none; }
            }
            .animate-fade-in-timeline {
                animation: fade-in-timeline 0.8s cubic-bezier(.4,0,.2,1) both;
            }
        `}</style>
    </div>
);

const About = () => (
    <section id="about" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[60vh] flex flex-col items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl font-extrabold tracking-widest mb-6 dark:text-indigo-200">About Me</h2>
        <ul className="max-w-5xl text-lg space-y-5 bg-white/80 dark:bg-black/80 dark:backdrop-blur-md dark:text-indigo-100 rounded-xl p-10 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 transition-all">
            {aboutPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <div className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 rounded-xl p-4">
                        <span>{point}</span>
                    </div>
                </li>
            ))}
        </ul>
        <Timeline />
    </section>
);

export default About; 