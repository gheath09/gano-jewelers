import Image from 'next/image';

export default function Story() {
  return (
    <section style={{ backgroundColor: '#0F0F0F' }} className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-16"
        >
          Her Story
        </p>

        {/* Story text + primary image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p
              style={{ color: 'rgba(248,248,248,0.72)', lineHeight: '2' }}
              className="text-xl font-light mb-8"
            >
              I&apos;m originally from Tallinn, Estonia. My husband served 12 years as a U.S. Marine,
              and through that journey, I found my path into jewelry. I learned under a master jeweler
              with over 40 years of experience, and from that moment, I fell in love with diamonds,
              design, and the meaning behind every piece.
            </p>
            <p
              style={{ color: 'rgba(248,248,248,0.5)', lineHeight: '2' }}
              className="text-lg font-light"
            >
              Today, I work directly with each client — no middlemen, no pressure. Only the work
              of creating something that carries meaning for generations.
            </p>
          </div>
          <div className="story-img-wrap">
            <Image
              src="/images/IMG_0509.jpeg"
              alt="Galina at work"
              width={600}
              height={480}
              className="story-img"
              style={{ objectFit: 'cover', width: '100%', height: '480px' }}
            />
          </div>
        </div>

        {/* Secondary images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="story-img-wrap">
            <Image
              src="/images/IMG_0503.jpeg"
              alt="Fine jewelry craftsmanship"
              width={600}
              height={360}
              className="story-img"
              style={{ objectFit: 'cover', width: '100%', height: '360px' }}
            />
          </div>
          <div className="story-img-wrap">
            <Image
              src="/images/A199A3D5-7B74-4D33-AADB-32FA87F6BFAB.jpeg"
              alt="Diamond selection"
              width={600}
              height={360}
              className="story-img"
              style={{ objectFit: 'cover', width: '100%', height: '360px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
