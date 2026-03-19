export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#0B0B0B', minHeight: '100vh' }}
      className="flex items-center justify-center text-center px-8 pt-24"
    >
      <div className="fade-in">
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-10"
        >
          Private Jeweler
        </p>
        <h1
          style={{ color: '#F8F8F8', letterSpacing: '0.04em', lineHeight: '1.1' }}
          className="text-5xl font-light mb-8"
        >
          Your Personal Jeweler
        </h1>
        <p
          style={{ color: 'rgba(248,248,248,0.55)', maxWidth: '400px' }}
          className="text-lg font-light leading-relaxed mx-auto"
        >
          I&apos;ll help you find or create something that feels right.
        </p>
        <div
          style={{ width: '1px', height: '60px', backgroundColor: 'rgba(212,175,55,0.3)' }}
          className="mx-auto mt-16"
        />
      </div>
    </section>
  );
}
