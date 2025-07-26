import React from "react";
import gfgImg from "./assets/gfg.jpg";
import leetcodeImg from "./assets/leetcode.jpg";

const skills = [
    {
        title: "Programming Languages",
        icon: "💻",
        content: "Python, Java",
    },
    {
        title: "Frameworks & Libraries",
        icon: "📚",
        content: "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js",
    },
    {
        title: "Database Management",
        icon: "🗄️",
        content: "MySQL, MongoDB, SQL Plus",
    },
    {
        title: "Version Control",
        icon: "🔗",
        content: "Git, GitHub",
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
    {
        title: "GeeksforGeeks",
        image: gfgImg,
        link: "https://auth.geeksforgeeks.org/user/YOUR_USERNAME",
        btnClass: "bg-green-600 hover:bg-green-400",
        btnText: "View Profile",
        ring: "ring-green-400",
        shadow: "shadow-green-300/40",
    },
];

const Skills = () => (
    <section id="skills" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-br dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[40vh] flex flex-col items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl font-extrabold tracking-widest mb-8 dark:text-indigo-200">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {skills.map((skill, idx) => (
                <div
                    key={skill.title}
                    className="bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-lg p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 animate-fade-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                >
                    <span className="text-4xl mb-2">{skill.icon}</span>
                    <h3 className="text-2xl font-semibold mb-2 text-center">{skill.title}</h3>
                    <p className="mb-4 text-center">{skill.content}</p>
                </div>
            ))}
            {profileCards.map((profile, idx) => (
                <div
                    key={profile.title}
                    className="bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-lg p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60 animate-fade-in"
                    style={{ animationDelay: `${(skills.length + idx) * 80}ms` }}
                >
                    <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                        <img
                            src={profile.image}
                            alt={profile.title}
                            className={`rounded-full w-24 h-24 object-cover mb-4 ring-4 ${profile.ring} ${profile.shadow} transition-transform duration-300 group-hover:scale-110 group-hover:ring-8`}
                        />
                        <h3 className="text-2xl font-semibold mb-2 text-center">{profile.title}</h3>
                        <span className={`mt-auto inline-block ${profile.btnClass} text-white font-semibold py-2 px-4 rounded transition-colors`}>{profile.btnText}</span>
                    </a>
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

export default Skills; 