const services = [
  'Custom engagement rings & wedding bands',
  'Diamond sourcing (natural & lab)',
  'Jewelry repair & stone setting',
  'Rolex sourcing (new & pre-owned)',
  'Private appointments & delivery',
];

export default function Services() {
  return (
    <section style={{ backgroundColor: '#0B0B0B' }} className="py-32 px-8">
      <div className="max-w-3xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-16"
        >
          Services
        </p>
        <div>
          {services.map((service, i) => (
            <div
              key={i}
              className="service-row flex items-center gap-8 py-7 last:border-0"
            >
              <span
                style={{ color: 'rgba(212,175,55,0.5)', fontVariantNumeric: 'tabular-nums' }}
                className="service-number text-xs w-6 shrink-0"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="service-text text-lg font-light">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
