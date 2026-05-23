import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("theme") as Theme
        if (stored) return stored
      }
    } catch (e) {
      console.warn("localStorage not accessible:", e)
    }
    return "dark"
  })

  useEffect(() => {
    try {
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(theme)
      localStorage.setItem("theme", theme)
    } catch (e) {
      console.warn("localStorage setItem failed:", e)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return { theme, setTheme, toggleTheme, isDark: theme === "dark" }
}
