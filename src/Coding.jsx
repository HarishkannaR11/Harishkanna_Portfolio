import React from "react";

const codingProfiles = [
    {
        title: "LeetCode",
        image: "/leetcode.jpg",
        link: "https://leetcode.com/u/krisharish11",
        btnClass: "bg-indigo-600 hover:bg-indigo-400",
        btnText: "View Profile",
    },
    {
        title: "GeeksforGeeks",
        image: "/gfg.jpg",
        link: "https://www.geeksforgeeks.org/user/krishar4wsb/",
        btnClass: "bg-green-600 hover:bg-green-400",
        btnText: "View Profile",
    },
];

const Coding = () => (
    <section id="coding" className="py-20 bg-gradient-to-b from-black via-indigo-900 to-purple-900 text-white min-h-[40vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8">💻 Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {codingProfiles.map((profile) => (
                <div
                    key={profile.title}
                    className="bg-indigo-800 bg-opacity-80 rounded-lg p-6 shadow-2xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60"
                >
                    <img src={profile.image} alt={profile.title} className="rounded-lg mb-4 w-full h-40 object-contain bg-black" />
                    <h3 className="text-2xl font-semibold mb-2 text-center">{profile.title}</h3>
                    <a href={profile.link} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-block ${profile.btnClass} text-white font-semibold py-2 px-4 rounded transition-colors`}>{profile.btnText}</a>
                </div>
            ))}
        </div>
    </section>
);

export default Coding; 