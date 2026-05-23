import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  useEffect(() => {
    // Initialize EmailJS with the user's public key
    emailjs.init("m_g30txeYeC09aNvc")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsLoading(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.sendForm(
        "service_e9wtegd",
        "template_ifgjcmc",
        formRef.current,
        "m_g30txeYeC09aNvc"
      )

      if (result.status === 200) {
        setSubmitStatus("success")
        formRef.current.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        stiffness: 80,
        damping: 12,
      },
    },
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[10%] w-[45vw] h-[35vh] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none select-none" />

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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-zinc-500 dark:text-zinc-400 font-medium"
          >
            Have a project in mind, want to collaborate, or just say hello? Drop me a message.
          </motion.p>
        </div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch max-w-5xl mx-auto"
        >
          {/* Contact Details (2 columns on desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <Card className="border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-6 shadow-sm h-full flex flex-col justify-between">
              <div>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-extrabold text-zinc-900 dark:text-zinc-50">
                    Let's connect
                  </CardTitle>
                  <CardDescription className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                    I'm currently looking for new opportunities, workshops, and open source collaborations.
                  </CardDescription>
                </CardHeader>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">
                        Email Me
                      </span>
                      <a
                        href="mailto:krisharish11@gmail.com"
                        className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        krisharish11@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">
                        LinkedIn Profile
                      </span>
                      <a
                        href="https://www.linkedin.com/in/harishkannar11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        harishkannar11
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/5 dark:text-cyan-400 border border-cyan-500/20">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider block">
                        GitHub Projects
                      </span>
                      <a
                        href="https://github.com/HarishkannaR11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        HarishkannaR11
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-200/50 dark:border-zinc-800/80 pt-6 mt-8">
                <span className="text-xs text-zinc-450 dark:text-zinc-500 block leading-relaxed font-semibold">
                  Feel free to reach out via direct email or social messaging as well. I typically respond within 24 hours.
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Form container (3 columns on desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <Card className="border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 p-6 shadow-sm h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-xs font-bold text-zinc-650 dark:text-zinc-300 uppercase tracking-wider block">
                      Name
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white/50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 transition-all text-sm font-medium"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from_email" className="text-xs font-bold text-zinc-650 dark:text-zinc-300 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white/50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 transition-all text-sm font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="title" className="text-xs font-bold text-zinc-650 dark:text-zinc-300 uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Message Subject"
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white/50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 transition-all text-sm font-medium"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-650 dark:text-zinc-300 uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white/50 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 transition-all text-sm font-medium resize-none"
                    required
                  />
                </div>

                {/* Status elements */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                      <div className="text-xs font-semibold leading-relaxed">
                        <p className="font-extrabold text-sm mb-0.5">Message sent successfully!</p>
                        <p>Thank you for reaching out. I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-650 dark:text-red-400 flex items-start gap-3"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <div className="text-xs font-semibold leading-relaxed">
                        <p className="font-extrabold text-sm mb-0.5">Failed to send message</p>
                        <p>An error occurred. Please retry or contact me directly via email.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="accent"
                    className="w-full gap-2 shadow-sm font-extrabold"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
