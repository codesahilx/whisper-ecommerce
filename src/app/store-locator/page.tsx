'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('retail');

  const onlineStores = [
    {
      name: 'Amazon India',
      logo: '🛒',
      description: 'Shop all Whisper products with fast delivery and great deals',
      benefits: ['2-day delivery', 'Subscribe & Save', 'Easy Returns'],
    },
    {
      name: 'Flipkart',
      logo: '🛍️',
      description: 'Wide selection of Whisper products at competitive prices',
      benefits: ['Next-day delivery', 'COD available', 'Flipkart Assured'],
    },
    {
      name: 'BigBasket',
      logo: '🏪',
      description: 'Order Whisper along with your groceries',
      benefits: ['Same-day delivery', 'Scheduled delivery', 'BB Star benefits'],
    },
    {
      name: 'Nykaa',
      logo: '💄',
      description: 'Premium shopping experience for feminine hygiene products',
      benefits: ['Beauty rewards', 'Expert advice', 'Authentic products'],
    },
  ];

  const retailChains = [
    {
      name: 'Big Bazaar',
      icon: '🏬',
      locations: '500+ stores nationwide',
    },
    {
      name: 'Reliance Fresh',
      icon: '🛒',
      locations: '800+ stores',
    },
    {
      name: 'More Megastore',
      icon: '🏪',
      locations: '600+ stores',
    },
    {
      name: 'D-Mart',
      icon: '🏢',
      locations: '300+ stores',
    },
    {
      name: 'Spencer\'s',
      icon: '🛍️',
      locations: '200+ stores',
    },
    {
      name: 'Local Pharmacies',
      icon: '💊',
      locations: 'Thousands across India',
    },
  ];

  const cities = [
    {
      name: 'Mumbai',
      stores: 450,
      icon: '🌆',
    },
    {
      name: 'Delhi/NCR',
      stores: 520,
      icon: '🏛️',
    },
    {
      name: 'Bangalore',
      stores: 380,
      icon: '🌇',
    },
    {
      name: 'Hyderabad',
      stores: 290,
      icon: '🕌',
    },
    {
      name: 'Chennai',
      stores: 310,
      icon: '🏖️',
    },
    {
      name: 'Kolkata',
      stores: 270,
      icon: '🌉',
    },
    {
      name: 'Pune',
      stores: 220,
      icon: '🌄',
    },
    {
      name: 'Ahmedabad',
      stores: 190,
      icon: '🕍',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white section-padding" style={{ background: 'linear-gradient(135deg, var(--primary-pink), var(--primary-purple))' }}>
        <div className="container text-center">
          <h1 className="animate-fadeIn">Find Whisper Products</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Locate stores near you or shop online for convenient home delivery
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card">
            <h2 className="text-center" style={{ marginBottom: '2rem' }}>Find Stores Near You</h2>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setSearchType('retail')}
                className={searchType === 'retail' ? 'btn btn-primary' : 'btn btn-outline'}
              >
                🏪 Retail Stores
              </button>
              <button 
                onClick={() => setSearchType('online')}
                className={searchType === 'online' ? 'btn btn-primary' : 'btn btn-outline'}
              >
                🛒 Online Stores
              </button>
              <button 
                onClick={() => setSearchType('pharmacy')}
                className={searchType === 'pharmacy' ? 'btn btn-primary' : 'btn btn-outline'}
              >
                💊 Pharmacies
              </button>
            </div>

            {searchType === 'retail' && (
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Enter Your Location
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input
                    type="text"
                    placeholder="City, Pin Code, or Address"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                  <button className="btn btn-primary">
                    🔍 Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Online Stores */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container">
          <h2 className="text-center">Shop Online</h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Order Whisper products from these trusted online retailers
          </p>

          <div className="grid-2">
            {onlineStores.map((store, idx) => (
              <div key={idx} className="card">
                <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '3rem' }}>{store.logo}</span>
                </div>

                <h3>{store.name}</h3>
                <p>{store.description}</p>

                <div style={{ marginTop: '1.5rem' }}>
                  {store.benefits.map((benefit, benefitIdx) => (
                    <div 
                      key={benefitIdx}
                      style={{
                        padding: '0.5rem 0',
                        borderBottom: benefitIdx < store.benefits.length - 1 ? '1px solid #f0f0f0' : 'none',
                        fontSize: '0.95rem',
                        color: '#666'
                      }}
                    >
                      ✓ {benefit}
                    </div>
                  ))}
                </div>

                <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Chains */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-center">Retail Partners</h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Find Whisper products at these major retail chains across India
          </p>

          <div className="grid-3">
            {retailChains.map((chain, idx) => (
              <div key={idx} className="feature-box">
                <div className="icon-box mx-auto">
                  <span style={{ fontSize: '2.5rem' }}>{chain.icon}</span>
                </div>
                <h3>{chain.name}</h3>
                <p style={{ color: 'var(--primary-purple)', fontWeight: '600' }}>
                  {chain.locations}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container">
          <h2 className="text-center">Major Cities</h2>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Number of retail locations in major Indian cities
          </p>

          <div className="grid-4">
            {cities.map((city, idx) => (
              <div key={idx} className="stat-box">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {city.icon}
                </div>
                <h3>{city.stores}+</h3>
                <p>{city.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Features */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Why Shop at Our Partner Stores?</h2>

          <div className="grid-3">
            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>✅</span>
              </div>
              <h3>Authentic Products</h3>
              <p>100% genuine Whisper products guaranteed at all our partner stores</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💰</span>
              </div>
              <h3>Best Prices</h3>
              <p>Competitive pricing and regular discounts and offers on all products</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🎁</span>
              </div>
              <h3>Combo Deals</h3>
              <p>Special combo packs and bulk buying options for better value</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>📦</span>
              </div>
              <h3>Full Range</h3>
              <p>Complete range of Whisper products including new launches</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🚚</span>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery options for online orders across India</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🔄</span>
              </div>
              <h3>Easy Returns</h3>
              <p>Hassle-free return and exchange policy on all purchases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <div className="card">
            <div className="icon-box mx-auto" style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '3rem' }}>📦</span>
            </div>

            <h2>Need Bulk Orders?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Schools, offices, NGOs, and institutions can place bulk orders directly with us. 
              Get special pricing and convenient delivery options.
            </p>

            <div className="grid-2" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Volume Discounts
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Special pricing for large orders</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Direct Delivery
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Deliver directly to your location</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Customization
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Tailored product selection</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Dedicated Support
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Personal account manager</p>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Contact for Bulk Orders
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <h2>Can't Find What You're Looking For?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Our customer support team is here to help you find the nearest store or answer any questions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-primary">
              Contact Support
            </Link>
            <Link href="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
