export default function Hero() {
  const sparkles = [
    { top: '12%', left: '8%',  delay: '0s'    },
    { top: '22%', left: '88%', delay: '1.2s'  },
    { top: '68%', left: '6%',  delay: '0.7s'  },
    { top: '78%', left: '91%', delay: '2.1s'  },
    { top: '38%', left: '94%', delay: '1.8s'  },
    { top: '55%', left: '4%',  delay: '0.4s'  },
    { top: '15%', left: '55%', delay: '2.5s'  },
    { top: '85%', left: '42%', delay: '1.5s'  },
  ];

  return (
    <section
      style={{ backgroundColor: '#0B0B0B', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
      className="flex items-center justify-center text-center px-8 pt-24"
    >
      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <span
          key={`${s.top}-${s.left}`}
          className="hero-sparkle"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          aria-hidden="true"
        >
          ✦
        </span>
      ))}

      {/* Background logo watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          pointerEvents: 'none',
          width: '520px',
          height: '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-gold.png"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: 0.07,
            filter: 'blur(6px) drop-shadow(0 0 40px rgba(212,175,55,0.30))',
          }}
        />
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
            textShadow: '0 0 8px rgba(255, 215, 160, 0.15)',
          }}
          className="hero-fade-1 mx-auto mb-10"
        >
          Where your story becomes something you can hold.
        </p>
        <h1
          style={{
            color: '#FFF8F0',
            letterSpacing: '0.12em',
            lineHeight: '1.05',
            textShadow: '0 0 8px rgba(255, 215, 160, 0.15), 0 0 30px rgba(212,175,55,0.12), 0 0 60px rgba(212,175,55,0.06)',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            gap: '0.35em',
          }}
          className="hero-fade-2 font-normal mb-10"
          aria-label="GANO JEWELERS"
        >
          <span style={{ fontSize: 'clamp(3.5rem, 8vw, 5.625rem)' }}>GANO</span>
          <span style={{ fontSize: 'clamp(2.3rem, 5.2vw, 3.66rem)' }}>JEWELERS</span>
        </h1>
        <div className="hero-fade-3">
          <div
            style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }}
            className="mx-auto mb-10"
          />
          <p
            style={{
              color: 'rgba(248,248,248,0.85)',
              maxWidth: '500px',
              lineHeight: '2',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.15rem',
              fontWeight: 300,
              textShadow: '0 0 8px rgba(255, 215, 160, 0.15)',
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
