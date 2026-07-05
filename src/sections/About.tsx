import { motion, Variants } from "motion/react"
import { GraduationCap, Award, Briefcase, ExternalLink, Code2, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import harishImg from "../assets/Harishkanna.jpg"
import leetcodeLogo from "../assets/leetcode.jpg"
import gfgLogo from "../assets/gfg.jpg"

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
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
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] left-[5%] w-[40vw] h-[30vh] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[30vh] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none select-none" />

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
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium"
          >
            My background, key milestones, and competitive programming achievements.
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Styled Profile Picture & Floating Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 70, damping: 15 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 group"
            >
              <img
                src={harishImg}
                alt="Harishkanna R"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Floating Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
              className="absolute -bottom-6 -right-2 sm:right-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-lg flex items-center gap-3 max-w-[240px] hover:scale-105 transition-transform"
            >
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-400 dark:text-zinc-500">
                  Education
                </p>
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  SSN College of Engineering
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio, Academic highlights & Coding profiles */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-150">
                Hi, I’m Harishkanna.
              </h3>
              <p>
                I am a final-year Computer Science Engineering student at SSN College of Engineering.
              </p>
              <p>
                I am passionate about building scalable end-to-end software systems, combining full-stack development with AI-driven solutions. My interests include system design, backend engineering, and applied machine learning, with a focus on building production-ready, real-world applications.
              </p>
              <p>
                I have hands-on experience in developing SaaS platforms, AI-powered CRM systems, and multi-agent intelligence systems using technologies like Next.js, Node.js, FastAPI, MongoDB, and cloud services.
              </p>
              <p>
                I enjoy solving complex engineering problems, designing scalable architectures, and continuously improving my skills in system design and algorithms.
              </p>
              <p>
                Currently, I am seeking opportunities in Software Engineering, Backend Development, and AI Engineering roles.
              </p>
            </motion.div>

            {/* Quick Highlights Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Highlight 1 */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-4">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20 mb-3">
                    <GraduationCap className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    B.E. Computer Science
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                    SSN College of Engineering
                  </p>
                </Card>
              </motion.div>

              {/* Highlight 2 */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-4">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/5 dark:text-emerald-400 border border-emerald-500/20 mb-3">
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Neurofinance Paper
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                    First Author (Springer LNNS)
                  </p>
                </Card>
              </motion.div>

              {/* Highlight 3 */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-4">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-violet-500/10 text-violet-500 dark:bg-violet-500/5 dark:text-violet-400 border border-violet-500/20 mb-3">
                    <Briefcase className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    Club Leadership
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                    SSN IEEE PELS & Lakshya Officer
                  </p>
                </Card>
              </motion.div>
            </motion.div>

            {/* Coding Profiles Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-150 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-cyan-500" />
                Coding Profiles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LeetCode Profile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 p-4 flex flex-col justify-between group">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
                        <img
                          src={leetcodeLogo}
                          alt="LeetCode"
                          className="w-full h-full object-cover p-1 bg-zinc-50 dark:bg-zinc-950"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-cyan-500 transition-colors">
                          LeetCode
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          <Badge variant="secondary" className="text-[10px] bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-1.5 py-0">
                            Python
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-1.5 py-0">
                            JavaScript
                          </Badge>
                          <Badge variant="secondary" className="text-[10px] bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-1.5 py-0">
                            Java
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-900/50 flex justify-end">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-xs h-7 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 gap-1"
                      >
                        <a
                          href="https://leetcode.com/u/krisharish11/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Profile
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>

                {/* GeeksforGeeks Profile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Card className="h-full border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 p-4 flex flex-col justify-between group">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
                        <img
                          src={gfgLogo}
                          alt="GeeksforGeeks"
                          className="w-full h-full object-cover p-1 bg-zinc-50 dark:bg-zinc-950"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-cyan-500 transition-colors">
                          GeeksforGeeks
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          <Badge variant="secondary" className="text-[10px] bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-1.5 py-0">
                            Problem Solving
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-900/50 flex justify-end">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-xs h-7 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 gap-1"
                      >
                        <a
                          href="https://www.geeksforgeeks.org/user/krisharish11/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Profile
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
