import profileImg from '../assets/profile.png'

export default function AIAvatar() {
  return (
    <div className="relative flex-shrink-0 w-[clamp(180px,22vw,260px)] h-[clamp(180px,22vw,260px)]">
      {/* Outer dashed ring — slow rotation */}
      <div className="absolute -inset-3.5 rounded-full border border-dashed border-teal/35 animate-[spin_18s_linear_infinite]" />

      {/* Second ring — reverse rotation */}
      <div className="absolute -inset-7 rounded-full border border-lavender/20 animate-[spinRev_11s_linear_infinite]" />

      {/* Ambient glow halo */}
      <div
        className="absolute -inset-10 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,180,0.22) 0%, transparent 70%)' }}
      />

      {/* Core orb — profile photo */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden border border-teal/40 animate-[pulseGlow_3.5s_ease-in-out_infinite]"
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Orbiting dot */}
      <div className="absolute -inset-7 animate-[spin_6s_linear_infinite]">
        <div
          className="absolute top-0 left-1/2 w-[7px] h-[7px] rounded-full bg-teal -translate-x-1/2 -translate-y-1/2"
          style={{ boxShadow: '0 0 8px rgba(0,212,180,0.9)' }}
        />
      </div>

      {/* Status chip */}
      <div className="absolute -bottom-1.5 -right-1.5 flex items-center gap-1.5 bg-navy-950 border border-teal rounded-full px-2.5 py-1 font-mono text-[0.62rem] tracking-wide text-teal shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-[blink_1.4s_step-end_infinite]" />
        ONLINE
      </div>
    </div>
  )
}
