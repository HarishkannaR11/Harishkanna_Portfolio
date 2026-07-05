import { useState, useEffect } from "react"
import { Menu, Sun, Moon, Download, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import resumePdf from "../assets/Harishkanna_Resume.pdf"
import siteLogo from "../assets/logo.png"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },

  { label: "Contact", href: "#contact" },
]

interface NavbarProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll spy & navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section tracking
      const sections = navItems.map((item) => document.querySelector(item.href))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const top = (section as HTMLElement).offsetTop
          if (scrollPosition >= top) {
            const id = navItems[i].href.slice(1)
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full",
        {
          "py-4 bg-transparent": !scrolled,
          "py-3 glassmorphism border-b bg-white/70 dark:bg-zinc-950/70 border-zinc-200/50 dark:border-zinc-800/50": scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="h-9 w-9 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 group-hover:border-cyan-500 transition-colors">
            <img src={siteLogo} alt="HR Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-zinc-900 dark:text-zinc-50 tracking-tight hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors text-base">
            Harishkanna R
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            const isActive = activeSection === id
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(id)}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors relative hover:text-zinc-950 dark:hover:text-zinc-50 focus:outline-none",
                  isActive
                    ? "text-zinc-950 dark:text-zinc-50"
                    : "text-zinc-500 dark:text-zinc-400"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-[15%] right-[15%] h-[2px] bg-cyan-500 rounded-full" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Right buttons (Resume, Theme, Mobile Toggle) */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>

          {/* Resume Download */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex gap-1.5 text-xs h-8 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            <a href={resumePdf} download="Harishkanna_Resume.pdf">
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md text-zinc-900 dark:text-zinc-100 border-l border-zinc-200 dark:border-zinc-800">
                <SheetHeader className="text-left mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                  <SheetTitle className="text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                    <img src={siteLogo} alt="HR" className="w-6 h-6 rounded-md" />
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const id = item.href.slice(1)
                    const isActive = activeSection === id
                    return (
                      <button
                        key={item.href}
                        onClick={() => scrollTo(id)}
                        className={cn(
                          "w-full text-left py-2 px-3 rounded-lg text-base font-semibold transition-all duration-200",
                          isActive
                            ? "bg-zinc-100 dark:bg-zinc-900 text-cyan-550 dark:text-cyan-400 border-l-2 border-cyan-500 pl-4"
                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50"
                        )}
                      >
                        {item.label}
                      </button>
                    )
                  })}
                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 mt-4 flex flex-col gap-4">
                    <Button
                      asChild
                      variant="accent"
                      className="w-full justify-center gap-2"
                    >
                      <a href={resumePdf} download="Harishkanna_Resume.pdf">
                        <Download className="h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                    <div className="flex justify-center gap-4 text-zinc-500 dark:text-zinc-400 mt-4">
                      <a href="https://github.com/HarishkannaR11" target="_blank" rel="noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/harishkannar11" target="_blank" rel="noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="mailto:krisharish11@gmail.com" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
