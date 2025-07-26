import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const socialLinks = [
    {
        icon: <i className="bx bxl-linkedin text-2xl md:text-xl text-blue-400"></i>,
        link: "https://www.linkedin.com/in/harishkannar11",
        label: "LinkedIn",
    },
    {
        icon: <i className="bx bxl-github text-2xl md:text-xl text-gray-300"></i>,
        link: "https://github.com/HarishkannaR11",
        label: "GitHub",
    },
    {
        icon: <i className="bx bxl-twitter text-2xl md:text-xl text-sky-400"></i>,
        link: "https://twitter.com/krisharish11",
        label: "Twitter",
    },
    {
        icon: <i className="bx bxs-envelope text-2xl md:text-xl text-pink-400"></i>,
        link: "mailto:krisharishcse11@gmail.com",
        label: "Email",
    },
];

const Navbar = ({
    brand = "Portfolio",
    links = [
        { href: "#home", label: "Home", active: true },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#certifications", label: "Certifications" },
        { href: "#contact", label: "Contact" },
    ],
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-7xl z-50 bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-black/60 shadow-lg backdrop-blur-xl border-b border-indigo-800 rounded-xl">
            <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Brand/Logo */}
                <a href="#home" className="flex items-center text-white text-2xl font-extrabold tracking-widest drop-shadow-lg">
                    <span className="inline-block align-middle mr-2"></span>{brand}
                </a>
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation"
                >
                    <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
                </button>
                {/* Links, Socials, and Theme Toggle */}
                <div className={`flex-col md:flex-row md:flex md:items-center md:static absolute top-16 left-0 w-full md:w-auto bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-black/80 md:bg-none transition-all duration-300 ease-in-out rounded-b-xl md:rounded-none ${menuOpen ? "flex" : "hidden"}`}>
                    <div className="flex flex-col md:flex-row md:items-center">
                        {links.map((link, idx) => (
                            <a
                                key={link.href + idx}
                                href={link.href}
                                className={`block md:inline-block px-6 py-3 md:py-0 text-lg font-medium transition-colors duration-300 hover:text-indigo-300 ${link.active ? "text-indigo-300" : "text-white"}`}
                                aria-current={link.active ? "page" : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center md:justify-end gap-4 md:ml-6 mt-2 md:mt-0 items-center">
                        {socialLinks.map((s) => (
                            <a
                                key={s.label}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="hover:scale-110 transition-transform"
                            >
                                {s.icon}
                            </a>
                        ))}
                        {/* Space-themed Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 