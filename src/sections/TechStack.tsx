import { motion } from "motion/react"
import { Layout, Server, Database, Cpu, Wrench, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillsData } from "@/data/portfolioData"

const iconMap: Record<string, any> = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  Wrench: Wrench,
  Zap: Zap,
}

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  }

  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative">
      {/* Subtle background highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vh] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium"
          >
            A curated list of technologies, libraries, and tools I use to build robust software.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category) => {
            const IconComponent = iconMap[category.icon] || Cpu
            return (
              <motion.div key={category.name} variants={cardVariants}>
                <Card className="glow-card h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-zinc-850 dark:text-zinc-100 text-lg font-bold">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:text-zinc-300 dark:hover:bg-zinc-800 text-zinc-700 border-zinc-200 dark:border-zinc-800/80 transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
