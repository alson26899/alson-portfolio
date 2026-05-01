import { motion } from 'framer-motion'
import { useState } from 'react'

import {
  Calendar,
  Sparkles,
  Building2,
  ChevronDown,
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
  },
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >

          <p className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-sm sm:text-base">
            Experience
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Professional Journey
          </h2>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-slate-300 dark:to-transparent" />

          <div className="space-y-10 sm:space-y-12">

            {experiences.map((exp, index) => {
              const isOpen = openIndex === index

              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative pl-8 sm:pl-16"
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
                      rounded-[28px] sm:rounded-[32px]
                      border border-slate-300 dark:border-white/10
                      bg-slate-100/90 dark:bg-white/5
                      backdrop-blur-xl
                      p-5 sm:p-8 md:p-10
                      hover:-translate-y-1
                      transition-all duration-300
                      shadow-xl
                    "
                  >

                    {/* Card Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03]" />

                    <div className="relative z-10">

                      {/* Accordion Header */}
                      <button
                        onClick={() =>
                          setOpenIndex(
                            isOpen ? null : index
                          )
                        }
                        className="
                          w-full
                          flex flex-col lg:flex-row
                          lg:items-center lg:justify-between
                          gap-5
                          text-left
                        "
                      >

                        {/* Left */}
                        <div>

                          <div className="flex items-start sm:items-center gap-3 sm:gap-4">

                            {/* Icon Box */}
                            <div
                              className="
                                shrink-0
                                w-11 h-11 sm:w-12 sm:h-12
                                rounded-2xl
                                bg-white dark:bg-white/5
                                border border-slate-300 dark:border-white/10
                                flex items-center justify-center
                              "
                            >
                              <Building2 className="text-cyan-500 dark:text-cyan-400" />
                            </div>

                            <div>

                              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                                {exp.company}
                              </h3>

                              <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-1 text-sm sm:text-base">
                                {exp.role}
                              </p>

                            </div>
                          </div>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">

                          {/* Duration */}
                          <div
                            className="
                              inline-flex items-center gap-2
                              bg-white dark:bg-white/5
                              border border-slate-300 dark:border-white/10
                              rounded-full
                              px-4 sm:px-5
                              py-2 sm:py-3
                              text-slate-700 dark:text-slate-300
                              w-fit
                              text-sm sm:text-base
                            "
                          >
                            <Calendar size={18} />

                            <span className="font-medium">
                              {exp.duration}
                            </span>
                          </div>

                          {/* Chevron */}
                          <ChevronDown
                            className={`
                              text-slate-700 dark:text-white
                              transition-transform duration-300
                              ${isOpen ? 'rotate-180' : ''}
                            `}
                          />

                        </div>
                      </button>

                      {/* Expandable Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >

                        {/* Description */}
                        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-8">
                          {exp.description}
                        </p>

                        {/* Points */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 sm:mt-10">

                          {exp.points.map((point) => (
                            <div
                              key={point}
                              className="
                                bg-white dark:bg-[#081121]
                                border border-slate-300 dark:border-white/10
                                rounded-2xl
                                px-4 py-3 sm:px-5 sm:py-4
                                text-slate-700 dark:text-slate-300
                                hover:border-cyan-400/30
                                transition-all duration-300
                                flex items-start gap-3
                                shadow-md
                              "
                            >

                              <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 shrink-0" />

                              <span className="leading-7 text-sm sm:text-base">
                                {point}
                              </span>

                            </div>
                          ))}
                        </div>

                      </motion.div>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}