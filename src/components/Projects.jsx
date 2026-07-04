import { projects } from '../data'

export default function Projects() {
  return (
    <section id="section-Projects" className="py-20 px-10 max-w-5xl mx-auto">
      <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-2">
        // projects
      </p>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight mb-10">
        What I Build
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map(({ tag, title, desc, accent,link }) => (
          <div
            key={title}
            className="relative bg-navy-900 border border-lavender/10 rounded-lg p-7 overflow-hidden
                       transition-all duration-200 hover:-translate-y-1 group"
            style={{ '--accent': accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accent + '55'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = ''
            }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 w-full h-[2px]"
              style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
            />

            <span
              className="font-mono text-[0.62rem] font-bold tracking-[0.15em]"
              style={{ color: accent }}
            >
              {tag}
            </span>
            <h3 className="text-card-text font-bold text-[0.95rem] mt-2.5 mb-1.5">
              {title}
            </h3>
            <p className="text-lavender-dark text-[0.8rem] leading-relaxed">{desc}</p>

            {/* View Project Button */}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded
                         font-mono text-[0.7rem] font-bold tracking-widest uppercase
                         border transition-all duration-200
                         hover:-translate-y-0.5"
              style={{
                color: accent,
                borderColor: accent + '55',
                background: accent + '12',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = accent + '25'
                e.currentTarget.style.borderColor = accent
                e.currentTarget.style.boxShadow = `0 4px 14px ${accent}33`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = accent + '12'
                e.currentTarget.style.borderColor = accent + '55'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
