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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="flex flex-col gap-8">
            <p
              style={{ color: 'rgba(248,248,248,0.72)', lineHeight: '2.1' }}
              className="text-xl font-light"
            >
              I&apos;m originally from Tallinn, Estonia.<br />
              My journey into jewelry didn&apos;t start in a showroom — it started with life, family, and the moments that shape us.
            </p>
            <p
              style={{ color: 'rgba(248,248,248,0.65)', lineHeight: '2.1' }}
              className="text-lg font-light"
            >
              My husband served 12 years as a U.S. Marine, and through those years of movement, change, and resilience, I found myself drawn to something lasting — something meaningful.
            </p>
            <p
              style={{ color: 'rgba(248,248,248,0.65)', lineHeight: '2.1' }}
              className="text-lg font-light"
            >
              I had the opportunity to learn under a master jeweler with over 40 years of experience. That&apos;s where everything changed. I fell in love — not just with diamonds, but with what they represent.
            </p>
            <p
              style={{ color: 'rgba(248,248,248,0.65)', lineHeight: '2.1' }}
              className="text-lg font-light"
            >
              Today, as a mother to my daughter and son, I understand more than ever how important memories are. The quiet moments, the milestones, the pieces we hold onto.
            </p>
            <p
              style={{ color: 'rgba(248,248,248,0.72)', lineHeight: '2.1' }}
              className="text-lg font-light"
            >
              Jewelry, to me, is not just something you wear.<br />
              It&apos;s something you carry — a reminder of who you are, where you&apos;ve been, and what matters most.
            </p>
            <p
              style={{ color: '#D4AF37', lineHeight: '2.1', fontStyle: 'italic' }}
              className="text-lg font-light"
            >
              Every piece I create begins with your story — and is made to last a lifetime.
            </p>
          </div>
          <div className="story-img-wrap">
            <Image
              src="/images/IMG_9659.jpeg"
              alt="Rolex Day-Date in yellow gold — inside its box"
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
