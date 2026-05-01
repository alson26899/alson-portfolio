import { motion } from 'framer-motion'

import {
  BrainCircuit,
  Database,
  LayoutDashboard,
  ClipboardCheck,
} from 'lucide-react'

const projects = [
  {
    title: 'Global Retail Platform',

    icon: <LayoutDashboard size={26} />,

    gradient:
      'from-cyan-500/20 via-blue-500/10 to-transparent',

    description:
      'Enterprise-scale retailer analytics and store management platform handling millions of records globally with scalable architecture and optimized data processing.',

    tech: ['React', '.NET', 'Azure', 'MS SQL'],
  },

  {
    title: 'Subjective Assessment Module',

    icon: <ClipboardCheck size={26} />,

    gradient:
      'from-violet-500/20 via-fuchsia-500/10 to-transparent',

    description:
      'Built an enterprise LMS assessment platform supporting subjective evaluations, grading workflows, reviewer systems and scalable learning experiences.',

    tech: ['React', 'Node.js', '.NET'],
  },

  {
    title: 'Centralized Logging Platform',

    icon: <Database size={26} />,

    gradient:
      'from-orange-500/20 via-amber-500/10 to-transparent',

    description:
      'Enterprise observability platform using SEQ, Grafana Loki and Serilog for centralized logging, monitoring and debugging workflows.',

    tech: ['SEQ', 'Grafana', '.NET'],
  },

  {
    title: 'GenAI Automation Platform',

    icon: <BrainCircuit size={26} />,

    gradient:
      'from-pink-500/20 via-violet-500/10 to-transparent',

    description:
      'Developed intelligent automation systems using RAG pipelines, AI agents and modern GenAI workflows for enterprise business use cases.',

    tech: ['Python', 'FastAPI', 'LangChain', 'LangGraph'],
  },
]

export default function Projects() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >

          <p className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-sm sm:text-base">
            Projects
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Featured Work
          </h2>

        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                group
                relative overflow-hidden
                rounded-[30px] sm:rounded-[36px]
                border border-slate-300 dark:border-white/10
                bg-slate-100/90 dark:bg-[#07101f]
                backdrop-blur-xl
                shadow-2xl
                transition-all duration-500
              "
            >

              {/* Gradient Glow */}
              <div
                className={`
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                  bg-gradient-to-br ${project.gradient}
                `}
              />

              {/* Top Border Glow */}
              <div
                className="
                  absolute top-0 left-0 right-0 h-[2px]
                  bg-gradient-to-r from-cyan-400 via-violet-500 to-transparent
                "
              />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10">

                {/* Icon */}
                <div
                  className="
                    w-12 h-12 sm:w-14 sm:h-14
                    rounded-2xl
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    flex items-center justify-center
                    text-cyan-500 dark:text-cyan-400
                    shadow-lg
                  "
                >
                  {project.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6 sm:mt-8
                    text-2xl sm:text-3xl md:text-4xl
                    font-black
                    leading-tight
                    text-slate-900 dark:text-white
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5 sm:mt-6
                    text-base sm:text-lg
                    leading-8 sm:leading-9
                    text-slate-700 dark:text-slate-300
                  "
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-8 sm:mt-10">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4 py-2
                        rounded-full
                        text-sm font-semibold
                        bg-white dark:bg-[#081121]
                        border border-slate-300 dark:border-white/10
                        text-slate-900 dark:text-white
                        shadow-md
                        hover:scale-105
                        transition-all duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}