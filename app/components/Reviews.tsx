'use client';

const testimonials = [
  'I lost a ring my mother gave me, and Galina recreated it exactly from a photo.',
  "She found me a Rolex I couldn't find anywhere else.",
  'My fiancé is very particular, and she made the perfect ring.',
  'She came to me and resized my ring the same day.',
  'She created my dream engagement ring.',
];

export default function Reviews() {
  return (
    <section style={{ backgroundColor: '#0B0B0B' }} className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-16"
        >
          Client Testimonials
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((quote, i) => (
            <div key={i} className="review-card p-8">
              <span style={{ color: '#D4AF37' }} className="text-3xl font-light leading-none block mb-4">
                &ldquo;
              </span>
              <p style={{ color: 'rgba(248,248,248,0.65)' }} className="font-light leading-relaxed">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
