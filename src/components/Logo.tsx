export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label="VERRA Properties home">
      <span className="flex h-9 w-9 items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 32 32" className="h-9 w-9">
          <g fill="currentColor">
            <rect x="6" y="15" width="4" height="11" rx="2" className="opacity-80 transition-all duration-300 group-hover:opacity-100" />
            <rect x="14" y="8" width="4" height="18" rx="2" className="opacity-100" />
            <rect x="22" y="18" width="4" height="8" rx="2" className="opacity-60 transition-all duration-300 group-hover:opacity-100" />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-[0.18em] text-white">VERRA</span>
        <span className="text-[10px] font-medium tracking-[0.32em] text-white/70">PROPERTIES</span>
      </span>
    </a>
  )
}
