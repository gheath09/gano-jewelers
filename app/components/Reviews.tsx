'use client';

const testimonials = [
  'I lost a ring my mother gave me, and Galina recreated it perfectly from just a photo. I still can\'t believe it.',
  'She found me a Rolex I had been searching for everywhere. Nobody else could.',
  'My fiancé is extremely particular, and she created the exact ring we couldn\'t find anywhere else.',
  'She came to me and resized my ring the same day. That level of service is rare.',
  'She created my dream engagement ring. I will never go anywhere else.',
];

export default function Reviews() {
  return (
    <section style={{ backgroundColor: '#0B0B0B' }} className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-20 font-medium"
        >
          Client Testimonials
        </p>
        <div className="flex flex-col gap-14">
          {testimonials.map((quote, i) => (
            <div key={i} className="review-card px-0 py-0 flex gap-10 items-start">
              <span
                style={{ color: 'rgba(212,175,55,0.35)', fontFamily: 'Georgia, serif', lineHeight: '1', flexShrink: 0 }}
                className="text-5xl font-light mt-1"
              >
                &ldquo;
              </span>
              <div>
                <p
                  style={{ color: 'rgba(248,248,248,0.72)', lineHeight: '1.9' }}
                  className="review-quote text-xl font-light"
                >
                  {quote}
                </p>
                <div
                  style={{ width: '24px', height: '1px', backgroundColor: 'rgba(212,175,55,0.4)' }}
                  className="mt-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
