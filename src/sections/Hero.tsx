import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import profileDark from '../assets/profile.png'
import profileLight from '../assets/profile-lite.png'
import resumeFile from '../assets/resume.pdf'

import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-slate-200 dark:bg-[#020617] transition-colors duration-300">

      {/* Left Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[700px] h-[700px] bg-cyan-500/20 blur-[140px] rounded-full" />

      {/* Right Glow */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[700px] h-[700px] bg-violet-600/20 blur-[140px] rounded-full" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
          maskImage:
            'radial-gradient(circle at center, black, transparent 90%)',
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center"
      >

        {/* Left Side */}
        <div>

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              bg-slate-100/80 dark:bg-white/5
              border border-slate-300 dark:border-white/10
              backdrop-blur-xl
              px-6 py-3 rounded-full
              shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]
              mb-8
            "
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
              Software Engineer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-[110px] font-black tracking-[-4px] leading-none">
            <span className="text-slate-900 dark:text-white">
              ALSON
            </span>

            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              {' '}A
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-8
              text-xl md:text-2xl
              leading-relaxed
              max-w-2xl
              text-slate-700 dark:text-slate-300
              font-medium
            "
          >
            Passionate Software Engineer crafting modern digital experiences,
            scalable platforms and impactful software solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/alsonalbert"
              target="_blank"
              className="
                group
                bg-slate-100 dark:bg-white/5
                border border-slate-300 dark:border-white/10
                backdrop-blur-xl
                text-slate-900 dark:text-white
                shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]
                px-8 py-4 rounded-2xl
                hover:bg-slate-50 dark:hover:bg-white/10
                hover:-translate-y-1
                transition-all duration-300
                flex items-center gap-3
              "
            >
              <FaLinkedin size={22} />

              <span className="font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="
                group
                bg-slate-100 dark:bg-white/5
                border border-slate-300 dark:border-white/10
                backdrop-blur-xl
                text-slate-900 dark:text-white
                shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.3)]
                px-8 py-4 rounded-2xl
                hover:bg-slate-50 dark:hover:bg-white/10
                hover:-translate-y-1
                transition-all duration-300
                flex items-center gap-3
              "
            >
              <FaGithub size={22} />

              <span className="font-medium">GitHub</span>
            </a>

            {/* Resume */}
            <a
              href={resumeFile}
              download="Alson_Resume.pdf"
              className="
                group
                bg-violet-600
                hover:bg-violet-500
                text-white
                shadow-xl
                px-8 py-4 rounded-2xl
                hover:-translate-y-1
                transition-all duration-300
                flex items-center gap-3
              "
            >
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Image Glow */}
          <div className="absolute w-[240px] h-[240px] bg-violet-500/20 blur-3xl rounded-full" />

          {/* Profile Card */}
          <div
            className="
              relative
              bg-slate-100/80 dark:bg-white/5
              border border-slate-300 dark:border-white/10
              backdrop-blur-xl
              rounded-[40px]
              p-3
              shadow-2xl dark:shadow-[0_0_60px_rgba(139,92,246,0.2)]
            "
          >
            <img
              src={theme === 'dark' ? profileDark : profileLight}
              alt="Alson"
              className="
                w-[220px]
                md:w-[260px]
                lg:w-[280px]
                h-auto
                object-contain
                rounded-[28px]
              "
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}