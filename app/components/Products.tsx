import Image from 'next/image';

export default function Products() {
  return (
    <section style={{ backgroundColor: '#0B0B0B' }} className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div
          style={{ width: '32px', height: '1px', backgroundColor: '#D4AF37' }}
          className="mb-12"
        />
        <p
          style={{ color: '#D4AF37', letterSpacing: '0.4em' }}
          className="text-xs uppercase mb-16 font-medium"
        >
          Featured Work
        </p>

        {/* Featured large image */}
        <div className="product-img-wrap mb-10 mx-auto" style={{ maxWidth: '760px' }}>
          <Image
            src="/images/IMG_3658.jpeg"
            alt="Featured jewelry piece"
            width={1200}
            height={560}
            className="product-img"
            style={{ objectFit: 'cover', width: '100%', height: '560px' }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" style={{ maxWidth: '760px', margin: '32px auto 0' }}>
          <div className="product-img-wrap">
            <Image
              src="/images/IMG_1255.jpeg"
              alt="Custom jewelry"
              width={600}
              height={340}
              className="product-img"
              style={{ objectFit: 'cover', width: '100%', height: '340px' }}
            />
          </div>
          <div className="product-img-wrap">
            <Image
              src="/images/IMG_4476.jpeg"
              alt="Fine jewelry"
              width={600}
              height={340}
              className="product-img"
              style={{ objectFit: 'cover', width: '100%', height: '340px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
