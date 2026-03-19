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
          width: 'min(92vw, 92vh)',
          height: 'min(92vw, 92vh)',
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
            opacity: 0.12,
            filter: 'blur(1.5px) drop-shadow(0 0 32px rgba(212,175,55,0.45)) drop-shadow(0 0 80px rgba(212,175,55,0.18))',
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
            textShadow: '0 0 10px rgba(255, 215, 160, 0.30), 0 1px 2px rgba(0,0,0,0.4)',
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.18em',
          }}
          className="hero-fade-2 font-normal mb-10"
          aria-label="GANO JEWELERS"
        >
          <span
            style={{
              fontSize: 'clamp(4.5rem, 12vw, 7.5rem)',
              textShadow:
                '0 0 6px rgba(255,248,240,0.55), 0 0 18px rgba(212,175,55,0.55), 0 0 40px rgba(212,175,55,0.28), 0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            GANO
          </span>
          <span
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 2.9rem)',
              letterSpacing: '0.28em',
              textShadow:
                '0 0 6px rgba(255,248,240,0.35), 0 0 14px rgba(212,175,55,0.30), 0 0 28px rgba(212,175,55,0.14), 0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            JEWELERS
          </span>
        </h1>
        <div className="hero-fade-3">
          <p
            style={{
              color: '#D4AF37',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.35rem',
              fontWeight: 400,
              letterSpacing: '0.18em',
              marginBottom: '0.25em',
              textShadow:
                '0 0 8px rgba(212,175,55,0.5), 0 0 20px rgba(212,175,55,0.25), 0 1px 2px rgba(0,0,0,0.4)',
            }}
            className="mx-auto"
          >
            Galina Gano
          </p>
          <p
            style={{
              color: 'rgba(212,175,55,0.85)',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.78rem',
              fontWeight: 300,
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              marginBottom: '0.5em',
              textShadow:
                '0 0 6px rgba(212,175,55,0.35), 0 0 14px rgba(212,175,55,0.18), 0 1px 2px rgba(0,0,0,0.35)',
            }}
            className="mx-auto"
          >
            Professional Jeweler
          </p>
          <p
            style={{
              color: 'rgba(212,175,55,0.55)',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.68rem',
              fontWeight: 300,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              textShadow:
                '0 0 5px rgba(212,175,55,0.25), 0 1px 2px rgba(0,0,0,0.3)',
            }}
            className="mx-auto mb-10"
          >
            Serving North Carolina coastal communities
          </p>
          <div
            style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }}
            className="mx-auto mb-10"
          />
          <p
            style={{
              color: '#FFF8F0',
              maxWidth: '500px',
              lineHeight: '2',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.15rem',
              fontWeight: 300,
              textShadow: '0 0 10px rgba(255, 215, 160, 0.22), 0 1px 2px rgba(0,0,0,0.4)',
            }}
            className="mx-auto"
          >
            Fine jewelry, designed with intention and made to carry the moments that matter most.
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
