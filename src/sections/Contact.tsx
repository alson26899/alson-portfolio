import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { motion } from 'framer-motion'

import {
  Mail,
  Send,
  CheckCircle2,
} from 'lucide-react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setLoading(true)

      await emailjs.sendForm(
        'service_lxxco1u',
        'template_dgfsbhc',
        formRef.current,
        '-bIe1TMWt4ETnHRyZ'
      )

      setSuccess(true)

      formRef.current.reset()
    } catch (error) {
      console.error(error)

      alert('Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cyan-500 dark:text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
            Let’s Build Something Great
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Interested in collaborating, discussing opportunities
            or building innovative digital products together?
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mt-16
            rounded-[36px]
            border border-slate-300 dark:border-white/10
            bg-slate-100/90 dark:bg-[#07101f]
            backdrop-blur-xl
            shadow-2xl
            overflow-hidden
          "
        >

          {/* Top Border Glow */}
          <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-transparent" />

          <div className="p-8 md:p-12">

            {/* Success Message */}
            {success && (
              <div
                className="
                  mb-8
                  flex items-center gap-3
                  rounded-2xl
                  bg-emerald-500/10
                  border border-emerald-500/20
                  px-5 py-4
                  text-emerald-600 dark:text-emerald-400
                "
              >
                <CheckCircle2 size={20} />

                <span className="font-medium">
                  Message sent successfully.
                </span>
              </div>
            )}

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label className="block mb-3 font-semibold text-slate-800 dark:text-white">
                  Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="
                    w-full
                    rounded-2xl
                    border border-slate-300 dark:border-white/10
                    bg-white dark:bg-[#081121]
                    px-5 py-4
                    text-slate-900 dark:text-white
                    outline-none
                    focus:border-cyan-400
                    transition-all
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-3 font-semibold text-slate-800 dark:text-white">
                  Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-2xl
                    border border-slate-300 dark:border-white/10
                    bg-white dark:bg-[#081121]
                    px-5 py-4
                    text-slate-900 dark:text-white
                    outline-none
                    focus:border-cyan-400
                    transition-all
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-3 font-semibold text-slate-800 dark:text-white">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="
                    w-full
                    rounded-2xl
                    border border-slate-300 dark:border-white/10
                    bg-white dark:bg-[#081121]
                    px-5 py-4
                    text-slate-900 dark:text-white
                    outline-none
                    focus:border-cyan-400
                    transition-all
                    resize-none
                  "
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex items-center gap-3
                  rounded-2xl
                  bg-gradient-to-r from-cyan-500 to-violet-500
                  px-8 py-4
                  font-semibold
                  text-white
                  shadow-xl
                  hover:scale-105
                  transition-all duration-300
                "
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

            </form>

            {/* Email */}
            <div className="mt-10 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Mail size={18} />

              <span>
                alson26899@gmail.com
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}