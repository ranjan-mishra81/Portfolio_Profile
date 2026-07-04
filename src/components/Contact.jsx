import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../emailConfig'
import SocialIcons from './SocialIcons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section
      id="section-contact"
      className="bg-navy-900 border-t border-teal/10 py-20 px-10"
    >
      <div className="max-w-lg mx-auto text-center">
        <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-2">
          // get in touch
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight leading-tight mb-4">
          Let's Build<br />
          <span className="text-lavender">Something Together.</span>
        </h2>
        <p className="text-lavender-muted text-[0.9rem] leading-relaxed mb-9">
          Whether you're working on a creative project, technical challenge, or just
          exploring ideas — send a message and it'll land straight in my inbox.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div>
            <label className="block font-mono text-[0.68rem] tracking-widest text-lavender-light uppercase mb-1.5">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-navy-950 border border-lavender/15 rounded-md px-4 py-2.5
                         text-sm text-snow placeholder:text-lavender-faint
                         focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30
                         transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block font-mono text-[0.68rem] tracking-widest text-lavender-light uppercase mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-navy-950 border border-lavender/15 rounded-md px-4 py-2.5
                         text-sm text-snow placeholder:text-lavender-faint
                         focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30
                         transition-colors duration-200"
            />
          </div>

          <div>
            <label className="block font-mono text-[0.68rem] tracking-widest text-lavender-light uppercase mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="w-full bg-navy-950 border border-lavender/15 rounded-md px-4 py-2.5
                         text-sm text-snow placeholder:text-lavender-faint resize-none
                         focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30
                         transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-teal text-navy-950 font-black text-[0.82rem] tracking-[0.1em] uppercase
                       px-9 py-3.5 rounded transition-all duration-150
                       hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,180,0.4)]
                       disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <p className="text-teal text-[0.82rem] text-center pt-1">
              ✓ Message sent — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-[0.82rem] text-center pt-1">
              ✗ Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Social icons */}
        <SocialIcons className="mt-16" />

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-lavender/10 font-mono text-[0.65rem] tracking-[0.1em] text-lavender-faint">
          PORTFOLIO· BUILT BY RANJAN MISHRA · © 2026
        </div>
      </div>
    </section>
  )
}
