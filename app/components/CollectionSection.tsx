import Link from 'next/link';

export default function CollectionSection() {
  return (
    <section
      style={{ backgroundColor: '#0F0F0F', borderTop: '1px solid rgba(212,175,55,0.12)', borderBottom: '1px solid rgba(212,175,55,0.12)' }}
      className="py-28 px-8 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mx-auto mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-8 font-medium"
        >
          Available Pieces
        </p>
        <h2
          style={{
            color: '#FFF8F0',
            letterSpacing: '0.18em',
            lineHeight: '1.15',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 300,
            textShadow: '0 0 18px rgba(212,175,55,0.22), 0 1px 2px rgba(0,0,0,0.5)',
          }}
          className="mb-6"
        >
          The Collection
        </h2>
        <p
          style={{
            color: 'rgba(255,248,240,0.7)',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: '1.9',
            letterSpacing: '0.04em',
          }}
          className="mb-14 mx-auto"
        >
          Explore available pieces — custom rings, fine bands, and one-of-a-kind
          jewelry crafted with intention.
        </p>
        <Link
          href="/collection"
          className="collection-cta-btn text-sm px-14 py-5"
          style={{ letterSpacing: '0.28em' }}
        >
          VIEW COLLECTION
        </Link>
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37', opacity: 0.45 }}
          className="mx-auto mt-16"
        />
      </div>
    </section>
  );
}
