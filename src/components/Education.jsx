import { education } from '../data'

export default function Education() {
  return (
    <section
      id="section-education"
      className="bg-navy-900 border-t border-teal/10 py-20 px-10"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-2">
          // education
        </p>
        <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight leading-tight mb-12">
          How I Was<br />
          <span className="text-lavender">Trained.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {education.map(({ degree, institute, period, desc, accent }) => (
            <div
              key={degree}
              className="relative bg-navy-950 border border-lavender/10 rounded-lg p-6 overflow-hidden
                         transition-all duration-200 hover:-translate-y-1"
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent + '55' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '' }}
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
              />
              <span className="font-mono text-[0.65rem] tracking-widest" style={{ color: accent }}>
                {period}
              </span>
              <h3 className="text-card-text font-bold text-[0.92rem] mt-2 mb-1 leading-snug">
                {degree}
              </h3>
              <p className="text-lavender text-[0.78rem] font-semibold mb-2.5">{institute}</p>
              <p className="text-lavender-muted text-[0.78rem] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
