import useTypingEffect from '../hooks/useTypingEffect'
import { roles } from '../data'
import AIAvatar from './AIAvatar'
import SocialIcons from './SocialIcons'

export default function Hero({ scrollTo }) {
  const typed = useTypingEffect(roles)

  return (
    <section
      id="section-home"
      className="relative min-h-[calc(100vh-58px)] flex items-center px-10 py-20 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Teal glow orb */}
      <div
        className="absolute top-[10%] right-[8%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.13) 0%, transparent 70%)' }}
      />

      {/* Lavender glow orb */}
      <div
        className="absolute bottom-[15%] left-[5%] w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,143,212,0.08) 0%, transparent 70%)' }}
      />

      {/* Content row: text + avatar */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-between gap-12 flex-wrap-reverse animate-fadeUp">

        {/* Text column */}
        <div className="max-w-xl">
          {/* Headline */}
          <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[1.08] tracking-tight mb-5">
            Hi,I'm <br />
            <span className="text-lavender">Ranjan Kumar Mishra</span>
          </h1>

          {/* Typing effect */}
          <div className="font-mono font-semibold text-[clamp(1.05rem,2.2vw,1.6rem)] min-h-[2.4rem] mb-6">
            <span className="text-teal">{typed}</span>
            <span className="text-teal animate-blink">|</span>
          </div>

          {/* Bio */}
          <p className="text-lavender text-[0.95rem] leading-[1.8] max-w-md mb-9">
            I build Attractive digital experiences that combine beautiful design with powerful functionality. I am passionate about creating innovative solutions that make a meaningful difference.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => scrollTo('Projects')}
              className="px-7 py-3 bg-teal text-navy-950 font-bold text-[0.8rem] tracking-[0.1em] uppercase rounded
                         transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,212,180,0.35)]"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3 bg-transparent text-teal border border-teal font-bold text-[0.8rem] tracking-[0.1em] uppercase rounded
                         transition-all duration-200 hover:bg-teal/10"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Icons in Hero */}
          <SocialIcons className="justify-start" />
        </div>

        {/* Avatar column */}
        <AIAvatar />
      </div>
    </section>
  )
}
