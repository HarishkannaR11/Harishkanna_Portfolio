import React from "react";
import leetcodeImg from "./assets/leetcode.jpg";

const skills = [
    {
        title: "Programming Languages",
        icon: "💻",
        content: "Python, Java",
    },
    {
        title: "Web Development",
        icon: "🌐",
        content: "HTML, CSS, React.js, Bootstrap, Tailwind CSS",
    },
    {
        title: "Database Management",
        icon: "🗄️",
        content: "MySQL, SQL Plus",
    },
    {
        title: "IoT & Embedded Systems",
        icon: "🔌",
        content: "Arduino, Sensors, Microcontrollers, IoT Protocols",
    },
    {
        title: "Version Control",
        icon: "🔗",
        content: "Git, GitHub",
    },
    {
        title: "Tools & Platforms",
        icon: "🛠️",
        content: "Postman, VS Code, Jupyter Notebook",
    },
    {
        title: "Problem Solving",
        icon: "🧩",
        content: "DSA, Algorithms",
    },
];

const profileCards = [
    {
        title: "LeetCode",
        image: leetcodeImg,
        link: "https://leetcode.com/u/krisharish11",
        btnClass: "bg-indigo-600 hover:bg-indigo-400",
        btnText: "View Profile",
        ring: "ring-yellow-400",
        shadow: "shadow-yellow-300/40",
    },
];

const Skills = () => (
    <section id="skills" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[40vh] flex flex-col items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl font-extrabold tracking-widest mb-8 dark:text-indigo-200">Skills & Technologies</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mb-12">
            {skills.map((skill, idx) => (
                <div
                    key={skill.title}
                    className="bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-xl p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col justify-between items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 animate-fade-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                >
                    <span className="text-4xl mb-3">{skill.icon}</span>
                    <h3 className="text-xl font-semibold mb-3 text-center">{skill.title}</h3>
                    <p className="text-sm text-center leading-relaxed">{skill.content}</p>
                </div>
            ))}
        </div>

        {/* Coding Profiles Section */}
        <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-bold text-center mb-8 dark:text-indigo-200">Coding Profiles</h3>
            <div className="flex justify-center">
                {profileCards.map((profile, idx) => (
                    <div
                        key={profile.title}
                        className="bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-xl p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 animate-fade-in"
                        style={{ animationDelay: `${(skills.length + idx) * 80}ms` }}
                    >
                        <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group w-full">
                            <img
                                src={profile.image}
                                alt={profile.title}
                                className={`rounded-full w-24 h-24 object-cover mb-4 ring-4 ${profile.ring} ${profile.shadow} transition-transform duration-300 group-hover:scale-110 group-hover:ring-8`}
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-center">{profile.title}</h3>
                        </a>
                    </div>
                ))}
            </div>
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

export default Skills; 