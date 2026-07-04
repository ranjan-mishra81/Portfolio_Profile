import { useRef, useState, useEffect } from 'react'
import SkillBar from './SkillBar'
import { skills, techStack } from '../data'

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="section-skills"
      ref={ref}
      className="bg-navy-950 border-t border-teal/10 py-20 px-10"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-2">
          // capabilities
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight mb-10">
          Core Skills
        </h2>

        <div className="max-w-xl mb-14">
          {skills.map((s) => (
            <SkillBar key={s.name} {...s} animate={animate} />
          ))}
        </div>

        {/* Tech Stack */}
        <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-6">
          // tech stack
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {techStack.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 bg-navy-950 border border-lavender/10 rounded-lg py-4
                         transition-all duration-200 hover:-translate-y-1 hover:border-teal/30"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-[0.65rem] text-lavender-muted font-medium tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
