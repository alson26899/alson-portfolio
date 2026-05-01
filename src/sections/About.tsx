import { motion } from 'framer-motion'

import {
  Code2,
  Database,
  Cloud,
  Cpu,
} from 'lucide-react'

const highlights = [
  {
    icon: <Code2 size={28} />,
    title: 'Frontend Engineering',
    desc: 'Building scalable modern web applications and user experiences',
  },

  {
    icon: <Database size={28} />,
    title: 'Backend Systems',
    desc: 'Designing APIs, scalable systems and optimized data pipelines',
  },

  {
    icon: <Cloud size={28} />,
    title: 'Cloud & DevOps',
    desc: 'Cloud-native infrastructure, deployments and CI/CD workflows',
  },

  {
    icon: <Cpu size={28} />,
    title: 'Generative AI',
    desc: 'Building RAG pipelines, AI agents and intelligent business automation systems',
  },
]

export default function About() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-sky-400/10 dark:bg-sky-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-blue-600 dark:text-sky-400 font-semibold mb-3 tracking-widest uppercase text-sm sm:text-base">
            ABOUT ME
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Building modern

            <span className="text-violet-600 dark:text-violet-400">
              {' '}digital experiences
            </span>

          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mt-10 sm:mt-14
            bg-slate-100/80 dark:bg-slate-900/80
            backdrop-blur-xl
            border border-slate-300 dark:border-slate-800
            rounded-[28px] sm:rounded-[32px]
            p-5 sm:p-8 md:p-14
            shadow-2xl
          "
        >

          {/* Paragraph 1 */}
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300">

            Seasoned Software Engineer with

            <span className="font-bold text-slate-900 dark:text-white">
              {' '}5 years of experience
            </span>

            {' '}building scalable enterprise applications,
            cloud-native systems and modern digital platforms
            focused on performance, scalability and exceptional
            user experiences.

          </p>

          {/* Paragraph 2 */}
          <p className="text-base sm:text-lg leading-8 sm:leading-9 text-slate-600 dark:text-slate-400 mt-6 sm:mt-8">

            Passionate about system architecture,
            modern frontend engineering, backend scalability
            and intelligent automation.

            Currently exploring

            <span className="font-semibold text-violet-600 dark:text-violet-400">
              {' '}Generative AI technologies including
              RAG architectures, AI agents and
              custom AI-powered business solutions
            </span>

            {' '}for real-world enterprise use cases.

          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-14">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  bg-slate-200 dark:bg-slate-800/60
                  border border-slate-300 dark:border-slate-700
                  rounded-2xl
                  p-5 sm:p-6
                  flex items-start gap-4 sm:gap-5
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all duration-300
                "
              >

                {/* Icon */}
                <div className="text-blue-600 dark:text-sky-400 mt-1 shrink-0">
                  {item.icon}
                </div>

                {/* Content */}
                <div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-7">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}