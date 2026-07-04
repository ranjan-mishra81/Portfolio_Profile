export default function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-lavender-light text-[0.78rem] tracking-wide">
          {name}
        </span>
        <span className="font-mono font-bold text-[0.78rem]" style={{ color }}>
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-1 bg-navy-700 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
          }}
        />
      </div>
    </div>
  )
}
