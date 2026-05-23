import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, Calendar, Layers, Info } from "lucide-react"
import { Github } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { projectsData, Project } from "@/data/portfolioData"

const categories = ["All", "Web Development", "AI/ML", "IoT & Embedded"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true
    return project.category === activeCategory
  })

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      {/* Background ambient glow */}
      <div className="absolute top-[10%] left-[5%] w-[45vw] h-[25vh] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none select-none" />

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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium"
          >
            A showcase of application development, embedded hardware, and AI research models.
          </motion.p>
        </div>

        {/* Filters / Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800/80">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  activeCategory === category
                    ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                    : "hover:text-zinc-950 dark:hover:text-zinc-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden border-zinc-200 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Image container with zoom hover effect */}
                  <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-500 ease-out bg-zinc-100 dark:bg-zinc-950"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-zinc-900/80 backdrop-blur-md text-zinc-100 border border-zinc-700/60 uppercase tracking-wider text-[10px] py-0.5 px-2"
                      >
                        {project.category}
                      </Badge>
                      <Badge
                        variant={project.status === "Live" ? "success" : "accent"}
                        className="bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-400 text-[10px] py-0.5 px-2 font-bold"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-zinc-900 dark:text-zinc-100 font-extrabold group-hover:text-cyan-500 transition-colors">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                        {project.year}
                      </span>
                    </div>
                    <CardDescription className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-2 pb-4 flex-grow">
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 text-[11px] font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="bg-transparent text-zinc-400 dark:text-zinc-500 border-zinc-200 dark:border-zinc-800 text-[11px] font-medium"
                        >
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 border-t border-zinc-100 dark:border-zinc-900/50 flex items-center justify-between bg-zinc-50/20 dark:bg-zinc-950/20">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="ghost"
                      size="sm"
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 gap-1.5"
                    >
                      <Info className="h-3.5 w-3.5" />
                      Details
                    </Button>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 border-zinc-200 dark:border-zinc-850"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 border-zinc-200 dark:border-zinc-850"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project detail modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-xl w-[92vw] border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 rounded-xl shadow-2xl">
              <DialogHeader className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="border-cyan-500/20 text-cyan-500 dark:text-cyan-400 uppercase tracking-wide text-[10px]">
                    {selectedProject.category}
                  </Badge>
                  <Badge variant="outline" className="border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px]">
                    {selectedProject.status}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Project screenshot */}
              <div className="relative w-full h-48 sm:h-60 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border border-zinc-200 dark:border-zinc-800/80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain p-2 bg-zinc-100 dark:bg-zinc-950"
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <DialogDescription className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-medium">
                  {selectedProject.longDescription || selectedProject.description}
                </DialogDescription>

                {/* Tech stack badge details */}
                <div className="space-y-2 border-t border-zinc-100 dark:border-zinc-900/60 pt-4">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                    Technologies Used
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/80 text-xs font-semibold"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Info parameters */}
                <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 dark:border-zinc-900/60 pt-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <span>Project Year: {selectedProject.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-zinc-400" />
                    <span>Scope: {selectedProject.status}</span>
                  </div>
                </div>
              </div>

              {/* Modal action buttons */}
              <div className="flex justify-end gap-3 border-t border-zinc-100 dark:border-zinc-900/60 pt-4 mt-2">
                {selectedProject.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2 border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                  >
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button
                    asChild
                    variant="accent"
                    className="gap-2"
                  >
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Link
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
