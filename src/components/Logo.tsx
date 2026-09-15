interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="Legal Literacy India logo"
      >
        {/* Open book base */}
        <path
          d="M6 10 C6 9 7 8 8 8 L16 8 L16 26 L8 26 C7 26 6 25 6 24 Z"
          fill="#13233A"
          opacity="0.9"
        />
        <path
          d="M30 10 C30 9 29 8 28 8 L20 8 L20 26 L28 26 C29 26 30 25 30 24 Z"
          fill="#176B73"
          opacity="0.9"
        />
        {/* Speech bubble / L shape */}
        <path
          d="M12 13 L12 21 L22 21 L22 19 L14 19 L14 13 Z"
          fill="#C79A3B"
        />
        {/* Small scale beam accent */}
        <circle cx="18" cy="10" r="1.5" fill="#C79A3B" />
        <line x1="14" y1="12" x2="22" y2="12" stroke="#C79A3B" stroke-width="0.8" opacity="0.6" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-heading font-bold text-navy text-[15px] tracking-tight">
            Legal Literacy
          </span>
          <span className="font-body text-[11px] text-teal font-medium tracking-wide">
            India
          </span>
        </div>
      )}
    </div>
  );
}
