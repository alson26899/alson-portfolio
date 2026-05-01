import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaMicrosoft,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiGrafana,
  SiMysql,
  SiFastapi,
  SiLangchain,
  SiDocker,
  SiPostman,
  SiPostgresql,
  SiGithubactions,
} from 'react-icons/si'

import {
  Cpu,
  Workflow,
  BrainCircuit,
  ChevronDown,
} from 'lucide-react'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: <FaReact />,
        color: 'text-cyan-400',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript />,
        color: 'text-blue-500',
      },
      {
        name: 'Redux',
        icon: <SiRedux />,
        color: 'text-purple-500',
      },
      {
        name: 'Tailwind',
        icon: <SiTailwindcss />,
        color: 'text-sky-400',
      },
    ],
  },

  {
    title: 'Backend & APIs',
    skills: [
      {
        name: '.NET',
        icon: <FaMicrosoft />,
        color: 'text-violet-500',
      },
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
        color: 'text-green-500',
      },
      {
        name: 'Python',
        icon: <FaPython />,
        color: 'text-yellow-500',
      },
      {
        name: 'FastAPI',
        icon: <SiFastapi />,
        color: 'text-emerald-500',
      },
    ],
  },

  {
    title: 'Generative AI',
    skills: [
      {
        name: 'LangChain',
        icon: <SiLangchain />,
        color: 'text-violet-500',
      },
      {
        name: 'LangGraph',
        icon: <Workflow />,
        color: 'text-pink-500',
      },
      {
        name: 'DSPy',
        icon: <BrainCircuit />,
        color: 'text-fuchsia-500',
      },
      {
        name: 'RAG Pipelines',
        icon: <Cpu />,
        color: 'text-orange-500',
      },
    ],
  },

  {
    title: 'Database & Cloud',
    skills: [
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        color: 'text-blue-500',
      },
      {
        name: 'MS SQL',
        icon: <SiMysql />,
        color: 'text-orange-500',
      },
      {
        name: 'Azure',
        icon: <FaMicrosoft />,
        color: 'text-sky-500',
      },
      {
        name: 'Docker',
        icon: <SiDocker />,
        color: 'text-blue-500',
      },
    ],
  },

  {
    title: 'DevOps & Tools',
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt />,
        color: 'text-orange-500',
      },
      {
        name: 'GitHub',
        icon: <FaGithub />,
        color: 'text-slate-900 dark:text-white',
      },
      {
        name: 'GitHub Actions',
        icon: <SiGithubactions />,
        color: 'text-blue-500',
      },
      {
        name: 'Grafana',
        icon: <SiGrafana />,
        color: 'text-orange-500',
      },
      {
        name: 'Postman',
        icon: <SiPostman />,
        color: 'text-orange-500',
      },
    ],
  },
]

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-sm sm:text-base">
            Tech Stack
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Technologies I use
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4 sm:space-y-5">

          {skillGroups.map((group, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  rounded-3xl
                  border border-slate-300 dark:border-white/10
                  bg-slate-100/90 dark:bg-white/5
                  backdrop-blur-xl
                  overflow-hidden
                  shadow-xl dark:shadow-none
                "
              >

                {/* Accordion Header */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    px-5 sm:px-8
                    py-5 sm:py-6
                    flex items-center justify-between
                    gap-4
                    text-left
                  "
                >

                  <div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                      {group.skills.length} technologies
                    </p>

                  </div>

                  <ChevronDown
                    className={`
                      shrink-0
                      text-slate-700 dark:text-white
                      transition-transform duration-300
                      ${isOpen ? 'rotate-180' : ''}
                    `}
                  />

                </button>

                {/* Accordion Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >

                  <div className="px-5 sm:px-8 pb-6 sm:pb-8">

                    <div className="flex flex-wrap gap-3 sm:gap-4">

                      {group.skills.map((skill) => (
                        <motion.div
                          whileHover={{
                            y: -5,
                            scale: 1.04,
                          }}
                          key={skill.name}
                          className="
                            bg-white dark:bg-[#081121]
                            border border-slate-300 dark:border-white/10
                            rounded-2xl
                            px-4 py-3
                            flex items-center gap-3
                            shadow-md
                            hover:border-cyan-400/40
                            transition-all duration-300
                          "
                        >

                          {/* Icon */}
                          <div className={`text-xl sm:text-2xl ${skill.color}`}>
                            {skill.icon}
                          </div>

                          {/* Text */}
                          <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>

                        </motion.div>
                      ))}
                    </div>

                  </div>
                </motion.div>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}