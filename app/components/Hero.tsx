export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#0B0B0B', minHeight: '100vh' }}
      className="flex items-center justify-center text-center px-8 pt-24"
    >
      <div className="fade-in">
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.5em' }}
          className="text-xs uppercase mb-10"
        >
          EST. PRIVATE JEWELER
        </p>
        <h1
          style={{ color: '#F8F8F8', letterSpacing: '0.12em', lineHeight: '1.05' }}
          className="text-6xl md:text-7xl font-light mb-10"
        >
          GANO JEWELERS
        </h1>
        <div
          style={{ width: '48px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.6 }}
          className="mx-auto mb-10"
        />
        <p
          style={{ color: 'rgba(248,248,248,0.7)', maxWidth: '480px', lineHeight: '1.85' }}
          className="text-xl font-light leading-relaxed mx-auto mb-5"
        >
          Jewelry is never just jewelry.
        </p>
        <p
          style={{ color: 'rgba(248,248,248,0.5)', maxWidth: '460px', lineHeight: '1.85' }}
          className="text-lg font-light leading-relaxed mx-auto"
        >
          It&apos;s memory, legacy, and the moments that define you.
        </p>
        <div
          style={{ width: '1px', height: '64px', backgroundColor: 'rgba(212,175,55,0.3)' }}
          className="mx-auto mt-20"
        />
      </div>
    </section>
  );
}
