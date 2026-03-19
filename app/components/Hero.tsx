export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#0B0B0B', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
      className="flex items-center justify-center text-center px-8 pt-24"
    >
      {/* Large background GJ laurel watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(circle at center, rgba(212,175,55,0.10) 0%, transparent 70%)',
          borderRadius: '50%',
          width: '860px',
          height: '860px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="860"
          height="860"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            opacity: 0.14,
            filter: 'drop-shadow(0 0 60px rgba(212,175,55,0.25))',
            color: '#D4AF37',
          }}
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

      {/* Hero content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            color: '#D4AF37',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.15rem',
            fontStyle: 'italic',
            fontWeight: 300,
            letterSpacing: '0.04em',
            lineHeight: '1.7',
            maxWidth: '560px',
          }}
          className="hero-fade-1 mx-auto mb-10"
        >
          Where your story becomes something you can hold.
        </p>
        <h1
          style={{ color: '#F8F8F8', letterSpacing: '0.12em', lineHeight: '1.05' }}
          className="hero-fade-2 text-6xl md:text-7xl font-light mb-10"
        >
          GANO JEWELERS
        </h1>
        <div className="hero-fade-3">
          <div
            style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }}
            className="mx-auto mb-10"
          />
          <p
            style={{
              color: 'rgba(248,248,248,0.65)',
              maxWidth: '500px',
              lineHeight: '2',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.15rem',
              fontWeight: 300,
            }}
            className="mx-auto"
          >
            Fine jewelry, designed with intention — and made to carry the moments that matter most.
          </p>
          <div
            style={{ width: '1px', height: '64px', backgroundColor: 'rgba(212,175,55,0.3)' }}
            className="mx-auto mt-20"
          />
        </div>
      </div>
    </section>
  );
}
