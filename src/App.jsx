import React from "react";
import About from "./About";
import Certifications from "./Certifications";
import CometCursor from "./CometCursor";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => (
  <div className="bg-black dark:bg-gradient-to-b dark:from-indigo-950 dark:via-black dark:to-indigo-900 min-h-screen w-full transition-colors duration-500">
    <CometCursor />
    <Navbar />
    <main className="pt-24 flex flex-col gap-0">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  </div>
);

export default App;
