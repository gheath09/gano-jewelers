import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <h1>Welcome to Gano Jewelers</h1>
        <Image src="https://source.unsplash.com/featured/?jewelry" alt="Jewelry" width={800} height={600} />
      </section>
      <section id="trust">
        <h2>Why Trust Us</h2>
        <Image src="https://source.unsplash.com/featured/?trust" alt="Trust" width={800} height={600} />
        <p>Gano Jewelers has been in the business for over 20 years...</p>
      </section>
      <section id="reviews">
        <h2>Customer Reviews</h2>
        <Image src="https://source.unsplash.com/featured/?reviews" alt="Reviews" width={800} height={600} />
        <p>Our customers love us! Check out what they have to say...</p>
      </section>
      <section id="where-to-start">
        <h2>Where to Start</h2>
        <Image src="https://source.unsplash.com/featured/?start" alt="Where to Start" width={800} height={600} />
        <p>Starting your journey with Gano Jewelers is easy...</p>
      </section>
      <section id="gallery">
        <h2>Gallery</h2>
        <Image src="https://source.unsplash.com/featured/?gallery" alt="Gallery" width={800} height={600} />
        <p>Explore our beautiful collection of jewelry...</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <Image src="https://source.unsplash.com/featured/?services" alt="Services" width={800} height={600} />
        <p>We offer a range of services to cater to your needs...</p>
      </section>
      <section id="story">
        <h2>Our Story</h2>
        <Image src="https://source.unsplash.com/featured/?story" alt="Our Story" width={800} height={600} />
        <p>Learn about how Gano Jewelers began...</p>
      </section>
      <section id="watches">
        <h2>Watches</h2>
        <Image src="https://source.unsplash.com/featured/?watches" alt="Watches" width={800} height={600} />
        <p>Discover our exquisite selection of watches...</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <Image src="https://source.unsplash.com/featured/?contact" alt="Contact" width={800} height={600} />
        <p>Feel free to reach out to us through our contact form...</p>
      </section>
    </div>
  );
};

export default HomePage;