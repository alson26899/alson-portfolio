import { motion } from 'framer-motion'
import {
  Calendar,
  Sparkles,
  Building2,
} from 'lucide-react'

const experiences = [
  {
    company: 'Disprz',
    role: 'Associate Software Engineer',
    duration: 'Jun 2021 - Jul 2022',
    description:
      'Started professional journey by contributing to enterprise applications, customer requests and platform improvements across frontend and backend systems.',
    points: [
      'Worked on bug fixes and customer feature requests',
      'Improved React and .NET application modules',
      'Implemented responsive UI and cross-browser support',
      'Participated in debugging and performance optimization',
      'Collaborated with senior engineers and QA teams',
      'Maintained platform reliability and production stability',
    ],
  },

  {
    company: 'Disprz',
    role: 'Software Engineer',
    duration: 'Jul 2022 - Sep 2024',
    description:
      'Worked on scalable LMS and learning experience platforms used by enterprise clients globally while contributing to frontend, backend and AI-powered learning systems.',
    points: [
      'Developed Subjective assessment modules for LMS platform',
      'Built scalable React + .NET enterprise modules',
      'Implemented micro-frontend architecture',
      'Worked with Jest, RTL, xUnit and Moq for TDD',
      'Built assessment and evaluation frameworks',
      'Collaborated with product, design and engineering teams',
    ],
  },

  {
    company: 'NielsenIQ',
    role: 'Software Engineer',
    duration: 'Oct 2024 - Present',
    description:
      'Working on enterprise-scale retail analytics platforms processing millions of global retailer and store records with a strong focus on scalability, performance and intelligent automation.',

    points: [
      'Built scalable full-stack enterprise applications',

      'Optimized SQL queries, indexing and backend services',

      'Developed GenAI-powered solutions using RAG pipelines and AI agents',

      'Worked on intelligent automation systems for enterprise business use cases',

      'Integrated modern AI workflows and backend orchestration services',
    ],
  }
]

export default function Experience() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-slate-300 dark:to-transparent" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative pl-16"
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-0 top-8
                    w-8 h-8 rounded-full
                    bg-gradient-to-r from-cyan-400 to-violet-500
                    shadow-[0_0_30px_rgba(139,92,246,0.5)]
                    flex items-center justify-center
                  "
                >
                  <Sparkles size={14} className="text-white" />
                </div>

                {/* Card */}
                <div
                  className="
                    relative overflow-hidden
                    rounded-[32px]
                    border border-slate-300 dark:border-white/10
                    bg-slate-100/90 dark:bg-white/5
                    backdrop-blur-xl
                    p-8 md:p-10
                    hover:-translate-y-1
                    transition-all duration-300
                    shadow-xl
                  "
                >

                  {/* Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03]" />

                  <div className="relative z-10">

                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                      <div>

                        <div className="flex items-center gap-3">

                          {/* Icon Box */}
                          <div
                            className="
                              w-12 h-12 rounded-2xl
                              bg-white dark:bg-white/5
                              border border-slate-300 dark:border-white/10
                              flex items-center justify-center
                            "
                          >
                            <Building2 className="text-cyan-500 dark:text-cyan-400" />
                          </div>

                          <div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                              {exp.company}
                            </h3>

                            <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                              {exp.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Duration */}
                      <div
                        className="
                          inline-flex items-center gap-2
                          bg-white dark:bg-white/5
                          border border-slate-300 dark:border-white/10
                          rounded-full
                          px-5 py-3
                          text-slate-700 dark:text-slate-300
                          w-fit
                        "
                      >
                        <Calendar size={18} />

                        <span className="font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-8 text-slate-700 dark:text-slate-300 leading-8 text-lg">
                      {exp.description}
                    </p>

                    {/* Points */}
                    <div className="grid md:grid-cols-2 gap-4 mt-10">

                      {exp.points.map((point) => (
                        <div
                          key={point}
                          className="
                            bg-white dark:bg-[#081121]
                            border border-slate-300 dark:border-white/10
                            rounded-2xl
                            px-5 py-4
                            text-slate-700 dark:text-slate-300
                            hover:border-cyan-400/30
                            transition-all duration-300
                            flex items-start gap-3
                            shadow-md
                          "
                        >
                          <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2" />

                          <span className="leading-7">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}