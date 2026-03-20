'use client';

import Image from 'next/image';
import Link from 'next/link';

function GJLogo() {
  return (
    <div className="gj-logo-wrap">
      <Image
        src="/images/logo-gold.png"
        alt="GANO JEWELERS"
        width={44}
        height={44}
        priority
        className="gj-logo-svg"
      />
    </div>
  );
}

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header-bar fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <GJLogo />
          <div className="flex flex-col leading-tight gap-0.5">
            <span className="gano-name tracking-widest">GANO</span>
            <span className="gano-sub tracking-widest">JEWELERS</span>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/collection" className="collection-nav-link text-sm px-4 py-2">
            COLLECTION
          </Link>
          <button onClick={scrollToContact} className="contact-nav-btn text-sm px-6 py-2">
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}
