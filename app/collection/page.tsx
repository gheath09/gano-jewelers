import Image from 'next/image';
import Header from '../components/Header';

const pieces = [
  {
    id: 'piece-1',
    src: '/images/IMG_3658.jpeg',
    alt: 'Featured engagement ring',
    caption: 'Custom Engagement Ring',
  },
  {
    id: 'piece-2',
    src: '/images/IMG_1255.jpeg',
    alt: 'Custom jewelry piece',
    caption: 'Custom Design',
  },
  {
    id: 'piece-3',
    src: '/images/IMG_4476.jpeg',
    alt: 'Fine jewelry',
    caption: 'Fine Jewelry',
  },
  {
    id: 'piece-4',
    src: '/images/IMG_0501.jpeg',
    alt: 'Jewelry collection piece',
    caption: 'Signature Piece',
  },
  {
    id: 'piece-5',
    src: '/images/IMG_0503.jpeg',
    alt: 'Jewelry collection piece',
    caption: 'Artisan Craft',
  },
  {
    id: 'piece-6',
    src: '/images/IMG_0509.jpeg',
    alt: 'Jewelry collection piece',
    caption: 'Bespoke Creation',
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
                <Image
                  src={piece.src}
                  alt={piece.alt}
                  width={600}
                  height={320}
                  className="collection-img"
                  style={{ objectFit: 'cover', width: '100%', height: '320px' }}
                />
                <p className="collection-caption">{piece.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
