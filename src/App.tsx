import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { useTheme } from "@/hooks/useTheme"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/sections/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { TechStack } from "@/sections/TechStack"
import { Projects } from "@/sections/Projects"
import { Achievements } from "@/sections/Achievements"
import { CurrentlyBuilding } from "@/sections/CurrentlyBuilding"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <TooltipProvider>
      <div className="min-h-screen w-full relative bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-500 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300">
        
        {/* Modern mouse background glow (Desktop only) */}
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-30 select-none">
          <motion.div
            animate={{
              x: mousePosition.x - 12,
              y: mousePosition.y - 12,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
              mass: 0.2,
            }}
            className="w-6 h-6 rounded-full bg-cyan-500/30 blur-[1px] border border-cyan-500/40"
          />
          <motion.div
            animate={{
              x: mousePosition.x - 200,
              y: mousePosition.y - 200,
            }}
            transition={{
              type: "spring",
              damping: 50,
              stiffness: 200,
              mass: 0.5,
            }}
            className="w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 blur-[90px]"
          />
        </div>

        {/* Global Page Layout */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="w-full flex flex-col relative z-10">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-zinc-200/50 dark:border-zinc-900/50">
            <About />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-zinc-200/50 dark:border-zinc-900/50">
            <TechStack />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-zinc-200/50 dark:border-zinc-900/50">
            <Projects />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-zinc-200/50 dark:border-zinc-900/50">
            <Achievements />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-zinc-200/50 dark:border-zinc-900/50">
            <CurrentlyBuilding />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-zinc-200/50 dark:border-zinc-900/50">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
