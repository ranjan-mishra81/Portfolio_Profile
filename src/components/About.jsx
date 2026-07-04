import { aboutCards } from '../data'

export default function About() {
  return (
    <section id="section-about" className="bg-navy-900 border-t border-teal/10 py-20 px-10">
      <div className="max-w-5xl mx-auto">
      <p className="font-mono text-[0.7rem] text-teal tracking-[0.2em] uppercase mb-2">
       // The Developer’s Space 
      </p>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight leading-tight mb-10">
        About<br />
        <span className="text-lavender">Me </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {aboutCards.map(({ icon, title, body }) => (
          <div
            key={title}
            className="bg-navy-950 border border-lavender/10 rounded-lg p-6
                       transition-all duration-200 hover:-translate-y-1 hover:border-teal/30 group"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="text-card-text font-bold text-[0.9rem] mb-2">{title}</h3>
            <p className="text-lavender-muted text-[0.82rem] leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
