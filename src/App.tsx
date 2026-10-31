import { useEffect } from "react"
import { motion, MotionConfig, useMotionValue, useSpring } from "motion/react"
import { useTheme } from "@/hooks/useTheme"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/sections/Navbar"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { TechStack } from "@/sections/TechStack"
import { Projects } from "@/sections/Projects"
import { Achievements } from "@/sections/Achievements"
import { Contact } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"

export default function App() {
  const { theme, toggleTheme } = useTheme()

  // Pointer position lives in motion values, so mouse movement never re-renders React.
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.2 })
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.2 })
  const glowX = useSpring(mouseX, { damping: 50, stiffness: 200, mass: 0.5 })
  const glowY = useSpring(mouseY, { damping: 50, stiffness: 200, mass: 0.5 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <div className="min-h-screen w-full relative bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-500 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300">

          {/* Mouse-follow glow (desktop only, hidden for reduced-motion users) */}
          <div aria-hidden="true" className="hidden lg:block motion-reduce:hidden pointer-events-none fixed inset-0 z-30 select-none">
            <motion.div
              style={{ x: dotX, y: dotY, translateX: -12, translateY: -12 }}
              className="absolute top-0 left-0 w-6 h-6 rounded-full bg-cyan-500/30 blur-[1px] border border-cyan-500/40"
            />
            <motion.div
              style={{ x: glowX, y: glowY, translateX: -200, translateY: -200 }}
              className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 blur-[90px]"
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
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      </TooltipProvider>
    </MotionConfig>
  )
}
