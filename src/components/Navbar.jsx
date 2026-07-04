const NAV_LINKS = ['home', 'about', 'skills', 'experience', 'education', 'Projects', 'contact']

export default function Navbar({ activeSection, scrollTo }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 sm:px-10 h-[58px] bg-navy-950/90 backdrop-blur-md border-b border-teal/10">
      {/* Logo */}
      <span className="font-mono font-bold text-[0.95rem] text-teal tracking-[0.15em] flex-shrink-0">
        {'<RANJAN />'}
      </span>

      {/* Links */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`
              flex-shrink-0 text-[0.66rem] sm:text-[0.7rem] font-semibold tracking-[0.1em] uppercase border-b pb-0.5 transition-colors duration-200 whitespace-nowrap
              ${activeSection === link
                ? 'text-teal border-teal'
                : 'text-lavender border-transparent hover:text-teal'}
            `}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  )
}
