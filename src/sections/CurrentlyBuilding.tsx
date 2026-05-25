import { motion } from "motion/react"
import { Sparkles, Hammer, BookOpen, Orbit, Database } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { currentlyBuildingData, CurrentlyBuildingItem } from "@/data/portfolioData"

const iconMap: Record<string, any> = {
  "Jewelry CRM SaaS": Hammer,
  "AI Resume Ranking System": Sparkles,
  "Cloud Computing Skills": BookOpen,
  "Full Stack Development": Orbit,
  "Financial RAG Intelligence": Database,
}

export function CurrentlyBuilding() {
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
    <section id="currently-building" className="py-20 sm:py-28 relative">
      {/* Background ambient glow */}
      <div className="absolute top-[30%] left-[20%] w-[50vw] h-[25vh] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none select-none" />

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
            Currently Building & Learning
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium"
          >
            What I'm currently hacking on, shipping, or exploring.
          </motion.p>
        </div>

        {/* Glowing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {currentlyBuildingData.map((item: CurrentlyBuildingItem) => {
            const Icon = iconMap[item.title] || Hammer

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="relative group"
              >
                {/* Glowing Background Overlay */}
                <div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.glowColor}, transparent)`,
                  }}
                />

                <Card className="relative h-full border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-zinc-900 dark:text-zinc-100 text-lg font-bold leading-tight">
                          {item.title}
                        </CardTitle>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-zinc-100 dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <CardDescription className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                      {item.description}
                    </CardDescription>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-2 mt-6">
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-bold">
                      <span>Status Progress</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200/40 dark:border-zinc-850">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
