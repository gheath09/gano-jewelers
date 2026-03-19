'use client';

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header-bar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <span className="gano-logo text-xl font-light">GANO</span>
        <button onClick={scrollToContact} className="contact-nav-btn text-sm px-6 py-2">
          CONTACT
        </button>
      </div>
    </header>
  );
}
