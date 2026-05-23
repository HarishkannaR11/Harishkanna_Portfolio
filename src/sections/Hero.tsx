import { motion } from "motion/react"
import { ArrowRight, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const glowVariants = {
    animate: {
      scale: [1, 1.08, 0.95, 1.02, 1],
      x: [0, 15, -10, 8, 0],
      y: [0, -12, 18, -10, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute -top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/10 blur-[80px] dark:blur-[120px]"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute top-[40%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/10 blur-[100px] dark:blur-[140px]"
        />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-6 sm:space-y-8"
        >
          {/* Tagline */}
          <motion.div
            variants={childVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-cyan-500/5"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for Internships & Projects
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={childVariants} className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Harishkanna R
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-400 dark:from-zinc-300 dark:to-zinc-500 tracking-tight">
              Computer Science Engineering Student
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Building scalable web applications, AI-powered systems, and modern digital experiences.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Button
              onClick={() => scrollTo("projects")}
              variant="accent"
              size="lg"
              className="w-full sm:w-auto gap-2 group hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social connections */}
          <motion.div
            variants={childVariants}
            className="flex items-center gap-6 pt-4 text-zinc-500 dark:text-zinc-400"
          >
            <a
              href="https://github.com/HarishkannaR11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-110 transition-all duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/harishkannar11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:krisharish11@gmail.com"
              aria-label="Email Address"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-110 transition-all duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
