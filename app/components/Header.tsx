'use client';

function GJLogo() {
  return (
    <div className="gj-logo-wrap">
      <svg
        viewBox="0 0 64 64"
        width="44"
        height="44"
        xmlns="http://www.w3.org/2000/svg"
        className="gj-logo-svg"
        aria-label="GANO JEWELERS"
      >
        {/* Outer laurel ring */}
        <circle cx="32" cy="32" r="29" fill="none" stroke="#D4AF37" strokeWidth="0.6" opacity="0.5" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />

        {/* Left laurel leaves */}
        <ellipse cx="6" cy="20" rx="4" ry="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" transform="rotate(-30 6 20)" opacity="0.6" />
        <ellipse cx="5" cy="32" rx="4" ry="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" transform="rotate(-5 5 32)" opacity="0.6" />
        <ellipse cx="6" cy="44" rx="4" ry="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" transform="rotate(30 6 44)" opacity="0.6" />

        {/* Right laurel leaves */}
        <ellipse cx="58" cy="20" rx="4" ry="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" transform="rotate(30 58 20)" opacity="0.6" />
        <ellipse cx="59" cy="32" rx="4" ry="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" transform="rotate(5 59 32)" opacity="0.6" />
        <ellipse cx="58" cy="44" rx="4" ry="7" fill="none" stroke="#D4AF37" strokeWidth="0.7" transform="rotate(-30 58 44)" opacity="0.6" />

        {/* GJ lettermark */}
        <text
          x="32"
          y="39"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="22"
          fontWeight="300"
          fill="#D4AF37"
          letterSpacing="1"
        >
          GJ
        </text>
      </svg>
    </div>
  );
}

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header-bar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <GJLogo />
          <span className="gano-logo text-sm font-light tracking-widest">GANO JEWELERS</span>
        </div>
        <button onClick={scrollToContact} className="contact-nav-btn text-sm px-6 py-2">
          CONTACT
        </button>
      </div>
    </header>
  );
}
