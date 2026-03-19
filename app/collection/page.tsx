import Header from '../components/Header';

const pieces = [
  {
    id: 'piece-1',
    title: 'Diamond Ring',
    description: 'A timeless solitaire set in platinum, crafted to order.',
    price: 'Price upon request',
  },
  {
    id: 'piece-2',
    title: 'Custom Engagement Ring',
    description: 'Bespoke design tailored to your vision and story.',
    price: 'Price upon request',
  },
  {
    id: 'piece-3',
    title: 'Diamond Band',
    description: 'Pavé-set diamonds in an elegant, continuous band.',
    price: 'Price upon request',
  },
  {
    id: 'piece-4',
    title: 'Signature Pendant',
    description: 'A refined pendant designed for everyday luxury.',
    price: 'Price upon request',
  },
  {
    id: 'piece-5',
    title: 'Artisan Earrings',
    description: 'Hand-crafted drop earrings with fine stone accents.',
    price: 'Price upon request',
  },
  {
    id: 'piece-6',
    title: 'Bespoke Bracelet',
    description: 'A custom link bracelet built to your exact specifications.',
    price: 'Price upon request',
  },
];

export default function CollectionPage() {
  return (
    <main>
      <Header />
      <section
        style={{ backgroundColor: '#0B0B0B', minHeight: '100vh' }}
        className="pt-32 pb-24 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div
            style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
            className="mb-12"
          />
          <p
            style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
            className="text-xs uppercase mb-4 font-medium"
          >
            The Collection
          </p>
          <h1
            style={{
              color: '#FFF8F0',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '0.1em',
              lineHeight: 1.1,
            }}
            className="mb-16"
          >
            Crafted with Intention
          </h1>

          <div className="collection-grid">
            {pieces.map((piece) => (
              <div key={piece.id} className="collection-card">
                <div className="collection-placeholder" aria-hidden="true" />
                <div className="collection-card-body">
                  <h2 className="collection-card-title">{piece.title}</h2>
                  <p className="collection-card-desc">{piece.description}</p>
                  <p className="collection-card-price">{piece.price}</p>
                  <a href="/#contact" className="collection-inquire-btn">
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
