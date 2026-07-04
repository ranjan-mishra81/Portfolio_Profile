import { experience } from '../data'

export default function Experience() {
  return (
    <section id="section-experience" className="py-20 px-10 max-w-4xl mx-auto">
      <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-2">
        // experience
      </p>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight leading-tight mb-12">
        Where I've<br />
        <span className="text-lavender">Been Deployed.</span>
      </h2>

      <div className="relative pl-8">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-teal/40 via-lavender/20 to-transparent" />

        <div className="space-y-10">
          {experience.map(({ role, org, period, desc, accent }) => (
            <div key={role} className="relative">
              {/* dot */}
              <span
                className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                style={{ background: '#0A0F1E', borderColor: accent }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h3 className="text-card-text font-bold text-[1rem]">{role}</h3>
                <span className="font-mono text-[0.68rem] tracking-wider text-lavender-faint uppercase">
                  {period}
                </span>
              </div>
              <p className="text-[0.82rem] font-semibold mb-2" style={{ color: accent }}>
                {org}
              </p>
              <p className="text-lavender-muted text-[0.84rem] leading-relaxed max-w-xl">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
