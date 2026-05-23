import { motion } from "motion/react"
import { Trophy, Award, Briefcase, GraduationCap, Megaphone, Zap, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { timelineData, certificationsData, TimelineItem, Certification } from "@/data/portfolioData"

const iconMap: Record<string, any> = {
  Trophy: Trophy,
  Megaphone: Megaphone,
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Zap: Zap,
}

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 14,
      },
    },
  }

  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vh] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none select-none" />

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
            Achievements & Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium"
          >
            A timeline of my academic milestones, leadership roles, and technical credentials.
          </motion.p>
        </div>

        {/* Tabs Control */}
        <Tabs defaultValue="timeline" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-205 dark:border-zinc-800/80 p-1 rounded-lg">
              <TabsTrigger value="timeline" className="text-xs sm:text-sm font-semibold">
                Interactive Journey
              </TabsTrigger>
              <TabsTrigger value="certifications" className="text-xs sm:text-sm font-semibold">
                Certifications ({certificationsData.length})
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Timeline Panel */}
          <TabsContent value="timeline" className="outline-none focus:outline-none">
            <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
              {/* Vertical Center Line */}
              <div className="absolute left-[26px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-[1px] sm:-translate-x-1/2" />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-12"
              >
                {timelineData.map((item: TimelineItem, idx: number) => {
                  const Icon = iconMap[item.icon] || Trophy
                  const isLeft = idx % 2 === 0

                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="relative flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full"
                    >
                      {/* Timeline Dot with Icon */}
                      <div className="absolute left-[-26px] sm:left-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 border-2 border-cyan-500/80 dark:border-cyan-500/80 -translate-x-[20px] sm:-translate-x-1/2 z-10 shadow-md">
                        <Icon className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
                      </div>

                      {/* Content Card (Left alignment or Right alignment) */}
                      <div className={`w-full sm:w-[45%] ${isLeft ? "sm:text-right" : "sm:order-last sm:text-left"}`}>
                        <Card className="border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 shadow-sm p-5 hover:border-zinc-350 dark:hover:border-zinc-700 transition-all duration-300">
                          <span className="text-xs font-bold text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                            {item.year}
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-100">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 block font-semibold mt-0.5">
                              {item.subtitle}
                            </span>
                          )}
                          <p className="text-sm text-zinc-650 dark:text-zinc-450 mt-2.5 leading-relaxed">
                            {item.description}
                          </p>
                        </Card>
                      </div>

                      {/* Spacer for structural offset in desktop */}
                      <div className="hidden sm:block w-[45%]" />
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </TabsContent>

          {/* Certifications Panel */}
          <TabsContent value="certifications" className="outline-none focus:outline-none">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificationsData.map((cert: Certification) => (
                <motion.div key={cert.title} variants={itemVariants}>
                  <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md group">
                    <CardHeader className="p-5 pb-3">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                            {cert.source}
                          </span>
                          <CardTitle className="text-base sm:text-lg font-extrabold leading-tight text-zinc-850 dark:text-zinc-100 group-hover:text-cyan-500 transition-colors">
                            {cert.title}
                          </CardTitle>
                        </div>
                        <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                          <Award className="h-4.5 w-4.5" />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="px-5 py-0 flex-grow">
                      <div className="relative w-full h-32 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-950 mb-4 border border-zinc-105 dark:border-zinc-850 flex items-center justify-center">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain p-2 bg-zinc-100 dark:bg-zinc-950 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:text-zinc-400 text-zinc-600 text-[10px] py-0.5 px-2 font-medium"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardContent className="p-5 pt-4 flex flex-col gap-2 border-t border-zinc-100 dark:border-zinc-900/50 mt-4 bg-zinc-50/20 dark:bg-zinc-950/20">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold flex items-center gap-1">
                          Issued {cert.issuedDate}
                        </span>
                        {cert.credentialUrl ? (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-xs h-7 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 gap-1"
                          >
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Show credential
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        ) : (
                          <span className="text-xs text-zinc-500 dark:text-zinc-650 italic">
                            Workshop
                          </span>
                        )}
                      </div>
                      {cert.credentialId && (
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-600 font-mono tracking-wide">
                          Credential ID: {cert.credentialId}
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
