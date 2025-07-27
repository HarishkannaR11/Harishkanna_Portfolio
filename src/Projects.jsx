import React from "react";
import fireImg from "./assets/project_pic/fire.png";
import invertyImg from "./assets/project_pic/inverty.jpg";
import iotImg from "./assets/project_pic/iot.jpg";
import mlImg from "./assets/project_pic/ml.jpg";
import portfolioImg from "./assets/project_pic/portflio.png";

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with React 19, Tailwind CSS, and EmailJS integration. Features dark/light theme toggle, animated components, contact form with EmailJS, and professional project showcase. Includes smooth scrolling, responsive design, and optimized performance.",
        image: portfolioImg,
        link: "https://github.com/HarishkannaR11/Harishkanna_Portfolio",
    },
    {
        title: "IOT Weather Station with Arduino",
        description: "A weather station built using Arduino and IoT technologies.",
        image: iotImg,
        link: "https://github.com/HarishkannaR11/IOT-WEATHER-STATION-WITH-ARDUINO-",
    },
    {
        title: "Fire Fighting Robot using Arduino",
        description: "A robot designed to detect and extinguish fires using Arduino.",
        image: fireImg,
        link: "https://github.com/HarishkannaR11/FIRE-FIGHTING-ROBOT-USING-ARDUINO",
    },
    {
        title: "Inventory Management System",
        description: "A system to manage inventory efficiently using modern technologies.",
        image: invertyImg,
        link: "https://github.com/HarishkannaR11/Invertery-Management-",
    },
    {
        title: "Federated Client Selection (ML Workshop)",
        description: "A collaborative federated learning project developed as a team of 7 in a workshop. Explores client selection strategies in federated machine learning.",
        image: mlImg,
        link: "https://github.com/HarishkannaR11/Federated-Client-Selection___ML_Workshop-heptogan",
    },
];

const GithubIcon = () => (
    <svg height="48" width="48" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="currentColor" />
    </svg>
);

const Projects = () => (
    <section id="projects" className="py-20 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-black dark:via-indigo-950 dark:to-purple-950 dark:text-indigo-100 min-h-[60vh] flex flex-col items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl font-extrabold tracking-widest mb-8 dark:text-indigo-200">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="group bg-white/90 text-gray-900 dark:bg-indigo-950/80 dark:text-indigo-100 rounded-lg p-6 shadow-xl dark:shadow-[0_0_32px_8px_rgba(80,80,255,0.4)] border border-indigo-100 dark:border-indigo-500 flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(80,80,255,0.4)] hover:ring-4 hover:ring-indigo-400/60"
                >
                    <div className="relative w-full h-40 mb-4">
                        <img src={project.image} alt={project.title} className="rounded-lg w-full h-full object-contain bg-black" />
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        >
                            <GithubIcon />
                        </a>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-center">{project.title}</h3>
                    <p className="mb-4 text-center">{project.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Projects; 