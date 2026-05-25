import { Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white/20 dark:bg-zinc-950/20 py-8 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo/Identity */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-sm">
            HR
          </span>
          <span className="text-zinc-550 dark:text-zinc-500 text-xs font-semibold">
            &copy; {currentYear} Harishkanna R. All rights reserved.
          </span>
        </div>


        {/* Social Icons */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/HarishkannaR11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-cyan-500 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/harishkannar11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-cyan-500 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:krisharish11@gmail.com"
            aria-label="Email Address"
            className="hover:text-cyan-500 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
