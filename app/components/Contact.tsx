export default function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: '#0F0F0F' }}
      className="py-32 px-8 text-center"
    >
      <div className="max-w-xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mx-auto mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-10"
        >
          Get in Touch
        </p>
        <p
          style={{ color: '#F8F8F8', letterSpacing: '0.15em' }}
          className="text-2xl font-light mb-3"
        >
          +1 (910) 774-0240
        </p>
        <p
          style={{ color: 'rgba(248,248,248,0.35)' }}
          className="text-sm font-light mb-12"
        >
          Private appointments available.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="tel:+19107740240" className="contact-btn-primary px-10 py-4 text-sm font-light">
            CALL
          </a>
          <a href="sms:+19107740240" className="contact-btn-secondary px-10 py-4 text-sm font-light">
            TEXT
          </a>
        </div>
      </div>
    </section>
  );
}
