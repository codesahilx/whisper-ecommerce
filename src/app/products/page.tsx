import Link from 'next/link';

export default function Products() {
  const products = [
    {
      category: "Ultra Protection",
      items: [
        {
          name: "Ultra Clean XL Wings",
          features: ["50% longer back", "Extra wide design", "Triple layer core"],
          price: "₹299",
          image: "🛡️"
        },
        {
          name: "Ultra Soft Maxi",
          features: ["Cottony soft cover", "All-around protection", "Odor control"],
          price: "₹249",
          image: "☁️"
        },
        {
          name: "Ultra Night",
          features: ["40cm length", "Anti-leak walls", "12hr protection"],
          price: "₹329",
          image: "🌙"
        }
      ]
    },
    {
      category: "Organic Collection",
      items: [
        {
          name: "Organic Cotton Pads",
          features: ["100% organic cotton", "Chemical-free", "Biodegradable"],
          price: "₹399",
          image: "🌿"
        },
        {
          name: "Organic Panty Liners",
          features: ["Natural materials", "Hypoallergenic", "Eco-friendly"],
          price: "₹199",
          image: "🍃"
        },
        {
          name: "Organic Overnight",
          features: ["Extended coverage", "Organic certified", "Sustainable"],
          price: "₹449",
          image: "🌾"
        }
      ]
    },
    {
      category: "Active Lifestyle",
      items: [
        {
          name: "Choice Slim Wings",
          features: ["Ultra-thin design", "Stays in place", "Barely-there feel"],
          price: "₹219",
          image: "⚡"
        },
        {
          name: "Active Fit",
          features: ["Flex-fit technology", "Active lifestyle", "Moves with you"],
          price: "₹279",
          image: "💃"
        },
        {
          name: "Sport Ultra Thin",
          features: ["Athletic design", "Maximum flexibility", "Secure fit"],
          price: "₹289",
          image: "🏃"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container text-center">
          <h1 className="animate-fadeIn">Our Products</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Discover our range of innovative feminine hygiene products designed for every need
          </p>
        </div>
      </section>

      {/* Product Categories */}
      {products.map((category, idx) => (
        <section 
          key={idx}
          className="section-padding" 
          style={{ background: idx % 2 === 0 ? '#ffffff' : 'var(--secondary-pink)' }}
        >
          <div className="container">
            <h2 className="text-center">{category.category}</h2>

            <div className="grid-3">
              {category.items.map((product, productIdx) => (
                <div key={productIdx} className="product-card">
                  <div className="product-image">
                    <div className="flex-center" style={{ fontSize: '4rem' }}>
                      {product.image}
                    </div>
                  </div>

                  <div className="card-content">
                    <h3>{product.name}</h3>
                    
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {product.features.map((feature, featureIdx) => (
                        <li key={featureIdx} style={{ 
                          padding: '0.5rem 0', 
                          borderBottom: '1px solid #f0f0f0',
                          fontSize: '0.95rem',
                          color: '#666'
                        }}>
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>

                    <div style={{ 
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '2px solid var(--primary-pink)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 'bold',
                        color: 'var(--primary-purple)'
                      }}>
                        {product.price}
                      </span>
                      <Link href="/store-locator" className="btn btn-primary">
                        Find Store
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Product Comparison */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Why Choose Whisper?</h2>

          <div className="grid-3">
            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🔬</span>
              </div>
              <h3>Scientifically Tested</h3>
              <p>All products undergo rigorous dermatological and quality testing</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🌟</span>
              </div>
              <h3>Premium Materials</h3>
              <p>Made with the finest materials for comfort and protection</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🛡️</span>
              </div>
              <h3>Leak Protection</h3>
              <p>Advanced technology for maximum leak protection and confidence</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💚</span>
              </div>
              <h3>Eco Options</h3>
              <p>Sustainable and organic choices for the environmentally conscious</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>✨</span>
              </div>
              <h3>Odor Control</h3>
              <p>Innovative odor-neutralizing technology keeps you fresh all day</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🤝</span>
              </div>
              <h3>Trusted Brand</h3>
              <p>Millions of women worldwide trust Whisper for their period care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Find Your Perfect Match</h2>

          <div className="grid-2">
            <div className="card">
              <h3>🌅 Light Days</h3>
              <p style={{ marginBottom: '1rem' }}>
                For lighter flow days, panty liners and slim pads provide comfortable, barely-there protection.
              </p>
              <p style={{ fontWeight: '600', color: 'var(--primary-purple)' }}>
                Recommended: Choice Slim Wings, Organic Panty Liners
              </p>
            </div>

            <div className="card">
              <h3>☀️ Regular Days</h3>
              <p style={{ marginBottom: '1rem' }}>
                Medium flow days require reliable protection with comfort. Our regular pads offer the perfect balance.
              </p>
              <p style={{ fontWeight: '600', color: 'var(--primary-purple)' }}>
                Recommended: Ultra Soft Maxi, Active Fit
              </p>
            </div>

            <div className="card">
              <h3>🌧️ Heavy Days</h3>
              <p style={{ marginBottom: '1rem' }}>
                Heavy flow needs maximum protection. Our Ultra and XL ranges provide extended coverage and absorption.
              </p>
              <p style={{ fontWeight: '600', color: 'var(--primary-purple)' }}>
                Recommended: Ultra Clean XL Wings, Sport Ultra Thin
              </p>
            </div>

            <div className="card">
              <h3>🌙 Overnight</h3>
              <p style={{ marginBottom: '1rem' }}>
                Sleep soundly with our specially designed overnight pads offering extra length and leak protection.
              </p>
              <p style={{ fontWeight: '600', color: 'var(--primary-purple)' }}>
                Recommended: Ultra Night, Organic Overnight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <h2>Ready to Experience the Difference?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Find Whisper products at a store near you or explore more about our commitment to your comfort.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/store-locator" className="btn btn-primary">
              Find a Store
            </Link>
            <Link href="/faq" className="btn btn-outline">
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
