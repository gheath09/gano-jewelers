export default function Story() {
  return (
    <section style={{ backgroundColor: '#0F0F0F' }} className="py-32 px-8">
      <div className="max-w-3xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-12"
        >
          Her Story
        </p>
        <p
          style={{ color: 'rgba(248,248,248,0.65)', lineHeight: '1.9' }}
          className="text-lg font-light mb-8"
        >
          I&apos;m originally from Tallinn, Estonia. My husband served 12 years as a U.S. Marine, and
          through that journey, I found my path into jewelry. I learned under a master jeweler with
          over 40 years of experience, and from that moment, I fell in love with diamonds, design,
          and the meaning behind every piece.
        </p>
        <p
          style={{ color: 'rgba(248,248,248,0.65)', lineHeight: '1.9' }}
          className="text-lg font-light"
        >
          Today, I work directly with each client to create something personal — something that lasts
          forever.
        </p>
      </div>
    </section>
  );
}
