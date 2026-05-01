import { motion } from 'framer-motion'
import {
  Award,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'

const certificates = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',

    issuer: 'Microsoft',

    description:
      'Validated foundational knowledge of Artificial Intelligence, Machine Learning concepts and Azure AI services including NLP, Computer Vision and Generative AI basics.',

    year: '2026',

    link: 'https://learn.microsoft.com/en-us/users/alsona-3777/credentials/8abb8926a881bdaf?ref=https%3A%2F%2Fstatics.teams.cdn.office.net%2F',
  },

  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',

    issuer: 'Microsoft',

    description:
      'Demonstrates foundational understanding of cloud computing, Azure services, pricing, governance, networking and security concepts.',

    year: '2025',

    link: 'https://learn.microsoft.com/en-in/users/alsona-8163/credentials/41f4a949d49fd39c',
  },
]

export default function Certificates() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >

          <p className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-sm sm:text-base">
            Certifications
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Certifications & Achievements
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                relative overflow-hidden
                rounded-[30px] sm:rounded-[36px]
                border border-slate-300 dark:border-white/10
                bg-slate-100/90 dark:bg-[#07101f]
                backdrop-blur-xl
                shadow-2xl
                p-6 sm:p-8 md:p-10
              "
            >

              {/* Top Glow */}
              <div
                className="
                  absolute top-0 left-0 right-0 h-[2px]
                  bg-gradient-to-r from-cyan-400 via-violet-500 to-transparent
                "
              />

              {/* Content */}
              <div className="relative z-10">

                {/* Icon + Year */}
                <div className="flex items-center justify-between gap-4">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-white dark:bg-white/5
                      border border-slate-300 dark:border-white/10
                      flex items-center justify-center
                      text-cyan-500 dark:text-cyan-400
                    "
                  >
                    <Award size={26} />
                  </div>

                  <span
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white dark:bg-white/5
                      border border-slate-300 dark:border-white/10
                      text-sm
                      font-semibold
                      text-slate-700 dark:text-slate-300
                    "
                  >
                    {certificate.year}
                  </span>

                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    text-2xl sm:text-3xl
                    font-black
                    leading-tight
                    text-slate-900 dark:text-white
                  "
                >
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mt-4 text-cyan-600 dark:text-cyan-400 font-semibold">

                  <ShieldCheck size={18} />

                  <span>{certificate.issuer}</span>

                </div>

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-base sm:text-lg
                    leading-8
                    text-slate-700 dark:text-slate-300
                  "
                >
                  {certificate.description}
                </p>

                {/* Button */}
                <a
                  href={certificate.link}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2
                    mt-8
                    px-5 py-3
                    rounded-2xl
                    bg-white dark:bg-white/5
                    border border-slate-300 dark:border-white/10
                    text-slate-900 dark:text-white
                    hover:border-cyan-400/40
                    transition-all duration-300
                  "
                >
                  View Certificate

                  <ExternalLink size={16} />
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}