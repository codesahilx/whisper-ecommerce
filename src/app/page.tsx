'use client';

import Link from 'next/link';
import Slider from '@/components/Slider';
import ProductFinder from '@/components/ProductFinder';

export default function Home() {
  const productSliderItems = [
    {
      id: 'soft-pads',
      title: 'Soft Pads',
      description: 'Ultra-soft protection for daily use with superior comfort',
      image: '/images/products/p1.avif',
      emoji: '🌸',
      cta: { text: 'Shop Soft Pads', href: '/products' },
    },
    {
      id: 'night-pads',
      title: 'Night Pads',
      description: 'Extra-long design for worry-free sleep and 12-hour protection',
      image: '/images/products/p2.avif',
      emoji: '🌙',
      cta: { text: 'Shop Night Pads', href: '/products' },
    },
    {
      id: 'organic-pads',
      title: 'Organic Pads',
      description: '100% natural fibers - gentle on skin and eco-friendly',
      image: '/images/products/p3.avif',
      emoji: '🌿',
      cta: { text: 'Shop Organic', href: '/products' },
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="hero-gradient section-padding" aria-label="Hero section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="animate-slideInLeft">
              <h1 className="text-gradient">
                Confidence Every Day,<br />Comfort Every Step
              </h1>
              <p className="text-lg">
                Empowering women to live life to the fullest, without limits
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="btn btn-primary" aria-label="Shop our menstrual care products">
                  Shop Now
                </Link>
                <Link href="/about" className="btn btn-outline" aria-label="Learn more about Whisper">
                  Learn More
                </Link>
              </div>
            </div>
            <figure className="relative rounded-large shadow-xl overflow-hidden animate-slideInRight" style={{ width: '100%', aspectRatio: '1 / 1', maxWidth: '400px', margin: '0 auto' }} aria-label="Hero banner">
              <img src="/images/hero/hero.jpg" alt="Whisper Hero Banner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </figure>
          </div>
        </div>
      </section>

      {/* Quick Brand Introduction */}
      <section className="section-padding bg-white" aria-label="Why choose Whisper">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="text-center">
            <h2>Why Women Choose Whisper</h2>
          </div>
          <div className="grid-4 mt-12">
            <div className="feature-box">
              <div className="icon-box mx-auto" role="img" aria-label="Protection image">
                <img src="/images/products/f1.jpg" alt="Protection" />
              </div>
              <h4>Protection</h4>
              <p>Advanced leak-lock technology</p>
            </div>
            <div className="feature-box">
              <div className="icon-box mx-auto" role="img" aria-label="Comfort image">
                <img src="/images/products/f2.jpg" alt="Comfort" />
              </div>
              <h4>Comfort</h4>
              <p>Ultra-soft materials</p>
            </div>
            <div className="feature-box">
              <div className="icon-box mx-auto" role="img" aria-label="Eco-Friendly image">
                <img src="/images/products/f3.jpg" alt="Eco-Friendly" />
              </div>
              <h4>Eco-Friendly</h4>
              <p>Sustainable options</p>
            </div>
            <div className="feature-box">
              <div className="icon-box mx-auto" role="img" aria-label="Care image">
                <img src="/images/products/f4.jpg" alt="Care" />
              </div>
              <h4>Care</h4>
              <p>Women-first approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }} aria-label="Featured products carousel">
        <div className="container">
          <div className="text-center">
            <h2>Featured Products</h2>
            <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
              Choose from our trusted range of menstrual care products designed for every need
            </p>
          </div>

          {/* Product Slider Component */}
          <Slider items={productSliderItems} autoPlay={true} autoPlayInterval={6000} />
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-white" aria-label="Full product catalog">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Our Complete Range</h2>
          </div>

          <div className="grid-3">
            {/* Product 1 */}
            <article className="product-card">
              <div className="product-image" style={{ background: 'linear-gradient(135deg, var(--primary-pink), var(--primary-purple))', position: 'relative', overflow: 'hidden' }} role="img" aria-label="Soft pads product image" >
                <img src="/images/products/p1.avif" alt="Soft Pads" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-content">
                <h3>Soft Pads</h3>
                <p className="text-sm badge badge-primary">Ultra-soft protection</p>
                <p>Perfect for daily use with superior comfort and protection.</p>
                <div className="flex items-center gap-2 text-sm">
                  <span aria-label="Rating 4.9 out of 5 stars">⭐ 4.9</span>
                  <span style={{ color: 'var(--text-light)' }} aria-label="12500 customer reviews">(12,500+ reviews)</span>
                </div>
                <Link href="/products" className="btn btn-primary w-full text-center" aria-label="View Soft Pads product details">
                  View Product
                </Link>
              </div>
            </article>

            {/* Product 2 */}
            <article className="product-card">
              <div className="product-image" style={{ background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-purple))', position: 'relative', overflow: 'hidden' }} role="img" aria-label="Night pads product image">
                <img src="/images/products/p2.avif" alt="Night Pads" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-content">
                <h3>Night Pads</h3>
                <p className="text-sm badge badge-primary">12-hour protection</p>
                <p>Extra-long design for worry-free sleep all night long.</p>
                <div className="flex items-center gap-2 text-sm">
                  <span aria-label="Rating 4.8 out of 5 stars">⭐ 4.8</span>
                  <span style={{ color: 'var(--text-light)' }} aria-label="8900 customer reviews">(8,900+ reviews)</span>
                </div>
                <Link href="/products" className="btn btn-primary w-full text-center" aria-label="View Night Pads product details">
                  View Product
                </Link>
              </div>
            </article>

            {/* Product 3 */}
            <article className="product-card">
              <div className="product-image" style={{ background: 'linear-gradient(135deg, var(--accent-purple), var(--primary-pink))', position: 'relative', overflow: 'hidden' }} role="img" aria-label="Organic pads product image">
                <img src="/images/products/p3.avif" alt="Organic Pads" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-content">
                <h3>Organic Pads</h3>
                <p className="text-sm badge badge-success">100% natural fibers</p>
                <p>Gentle on skin with eco-friendly materials you can trust.</p>
                <div className="flex items-center gap-2 text-sm">
                  <span aria-label="Rating 4.9 out of 5 stars">⭐ 4.9</span>
                  <span style={{ color: 'var(--text-light)' }} aria-label="6200 customer reviews">(6,200+ reviews)</span>
                </div>
                <Link href="/products" className="btn btn-primary w-full text-center" aria-label="View Organic Pads product details">
                  View Product
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link href="/products" className="btn btn-secondary" aria-label="View all menstrual care products">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Product Finder Quiz Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--secondary-pink) 0%, #f9f5ff 100%)' }} aria-label="Find your perfect product">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Find Your Perfect Product</h2>
            <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Answer a few quick questions to discover the Whisper product that's perfect for your needs
            </p>
          </div>
          <ProductFinder />
        </div>
      </section>

      {/* Campaign Highlight */}
      <section className="section-padding bg-white" aria-label="ShareTheCare campaign">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <article className="card card-gradient">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <h2 style={{ color: 'white' }}>#ShareTheCare</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                  Helping girls stay in school with hygiene education and access to menstrual products. 
                  Together, we're breaking barriers and empowering the next generation.
                </p>
                <Link href="/campaigns" className="btn" style={{ background: 'white', color: 'var(--primary-pink)' }} aria-label="Join the ShareTheCare movement">
                  Join the Movement
                </Link>
              </div>
              <figure className="flex-center" aria-label="ShareTheCare image">
                <div className="rounded-large overflow-hidden shadow-lg" style={{ maxWidth: '400px' }}>
                  <img src="/images/about/sharethecare.jpg" alt="ShareTheCare Campaign" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
              </figure>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonial Teaser */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }} aria-label="Customer testimonials">
        <div className="container">
          <div className="text-center">
            <h2>What Women Say About Whisper</h2>
            <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Join 50+ million women worldwide who trust Whisper for comfort and confidence
            </p>
          </div>

          <div className="grid-3">
            <article className="testimonial-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex-center text-2xl shrink-0" style={{ background: 'linear-gradient(to bottom right, var(--primary-pink), var(--primary-purple))' }} role="img" aria-label="Profile avatar">
                  👩
                </div>
                <div>
                  <h4>Priya S.</h4>
                  <div className="flex gap-1 text-yellow-400 text-sm" aria-label="5 star rating">
                    ★★★★★
                  </div>
                </div>
              </div>
              <blockquote className="italic">
                "Whisper makes me feel unstoppable even on my heaviest days. I can focus on my work without worry."
              </blockquote>
            </article>

            <article className="testimonial-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex-center text-2xl shrink-0" style={{ background: 'linear-gradient(to bottom right, var(--primary-purple), var(--accent-purple))' }} role="img" aria-label="Profile avatar">
                  👨‍🦰
                </div>
                <div>
                  <h4>Anjali M.</h4>
                  <div className="flex gap-1 text-yellow-400 text-sm" aria-label="5 star rating">
                    ★★★★★
                  </div>
                </div>
              </div>
              <blockquote className="italic">
                "Best pads I've ever used! Perfect for active days. Highly recommend to all my friends."
              </blockquote>
            </article>

            <article className="testimonial-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex-center text-2xl shrink-0" style={{ background: 'linear-gradient(to bottom right, var(--accent-purple), var(--primary-pink))' }} role="img" aria-label="Profile avatar">
                  👱‍♀️
                </div>
                <div>
                  <h4>Sneha K.</h4>
                  <div className="flex gap-1 text-yellow-400 text-sm" aria-label="5 star rating">
                    ★★★★★
                  </div>
                </div>
              </div>
              <blockquote className="italic">
                "Organic pads that are gentle on skin - finally a brand that truly understands women's needs!"
              </blockquote>
            </article>
          </div>

          <div className="text-center">
            <Link href="/testimonials" className="btn btn-primary" aria-label="Read all customer stories">
              Read All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white" aria-label="Final call to action">
        <div className="container text-center">
          <h2>Ready to Experience the Whisper Difference?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Find your perfect product and join millions of women who trust Whisper for comfort and confidence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="btn btn-primary" aria-label="Shop menstrual care products now">
              Shop Now
            </Link>
            <Link href="/store-locator" className="btn btn-outline" aria-label="Find a Whisper store near you">
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
