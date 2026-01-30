import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Whisper makes me feel unstoppable even on my heaviest days. I can focus on my work and life without worry. The leak protection is truly amazing!',
      date: 'January 2026',
      productUsed: 'Ultra Clean XL Wings'
    },
    {
      id: 2,
      name: 'Anjali Mehta',
      location: 'Delhi NCR',
      rating: 5,
      text: 'I\'ve tried many pads, but Whisper gives me the confidence to move freely. The comfort is unmatched! I recommend it to all my friends.',
      date: 'December 2025',
      productUsed: 'Choice Slim Wings'
    },
    {
      id: 3,
      name: 'Sneha Kapoor',
      location: 'Bangalore, Karnataka',
      rating: 5,
      text: 'The organic pads are gentle on my sensitive skin. Finally, a product that understands what women need! No more irritation or discomfort.',
      date: 'January 2026',
      productUsed: 'Organic Cotton Pads'
    },
    {
      id: 4,
      name: 'Riya Desai',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'Night pads have been a game-changer for me. I can sleep peacefully without any worries. Thank you, Whisper!',
      date: 'November 2025',
      productUsed: 'Ultra Night'
    },
    {
      id: 5,
      name: 'Meera Nair',
      location: 'Kochi, Kerala',
      rating: 5,
      text: 'As an athlete, I need products I can trust during intense training. Whisper ultra-thin pads never let me down. Perfect for active lifestyles!',
      date: 'December 2025',
      productUsed: 'Sport Ultra Thin'
    },
    {
      id: 6,
      name: 'Pooja Singh',
      location: 'Pune, Maharashtra',
      rating: 5,
      text: 'The panty liners are so comfortable and discreet. I wear them every day for freshness. Quality product at a great price!',
      date: 'January 2026',
      productUsed: 'Organic Panty Liners'
    },
    {
      id: 7,
      name: 'Kavita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'Since switching to Whisper, my periods have become so much more manageable. The absorption technology is excellent!',
      date: 'October 2025',
      productUsed: 'Ultra Soft Maxi'
    },
    {
      id: 8,
      name: 'Simran Kaur',
      location: 'Chandigarh, Punjab',
      rating: 5,
      text: 'Love how Whisper stays in place even during my dance classes. I feel confident and comfortable all day long.',
      date: 'November 2025',
      productUsed: 'Active Fit'
    },
    {
      id: 9,
      name: 'Tanvi Patel',
      location: 'Surat, Gujarat',
      rating: 5,
      text: 'The eco-friendly options are amazing! I can take care of myself while also taking care of the planet. Win-win!',
      date: 'December 2025',
      productUsed: 'Organic Overnight'
    },
  ];

  const stats = [
    { number: '10M+', label: 'Happy Customers' },
    { number: '4.8/5', label: 'Average Rating' },
    { number: '95%', label: 'Would Recommend' },
    { number: '30+', label: 'Years of Trust' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container text-center">
          <h1 className="animate-fadeIn">Customer Testimonials</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Real stories from real women who trust Whisper every day
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container">
          <h2 className="text-center">What Our Customers Say</h2>

          <div className="grid-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="card-content">
                  {/* Rating Stars */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.25rem', 
                    marginBottom: '1rem',
                    fontSize: '1.2rem'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#FFD700' }}>★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.7', 
                    fontStyle: 'italic',
                    marginBottom: '1.5rem',
                    color: '#555'
                  }}>
                    "{testimonial.text}"
                  </p>

                  {/* Product Badge */}
                  <div style={{
                    background: 'var(--primary-pink)',
                    color: 'white',
                    display: 'inline-block',
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1.5rem'
                  }}>
                    📦 {testimonial.productUsed}
                  </div>

                  {/* Customer Info */}
                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '2px solid var(--primary-pink)'
                  }}>
                    <h4 style={{ 
                      margin: '0 0 0.5rem 0',
                      color: 'var(--primary-purple)',
                      fontSize: '1.1rem'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ 
                      margin: 0,
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      📍 {testimonial.location}<br />
                      📅 {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Why Women Trust Whisper</h2>

          <div className="grid-3">
            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🔬</span>
              </div>
              <h3>Clinically Tested</h3>
              <p>All products undergo rigorous dermatological testing for safety and comfort</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>✨</span>
              </div>
              <h3>Premium Quality</h3>
              <p>Made with the finest materials for superior absorption and protection</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💚</span>
              </div>
              <h3>Eco Options</h3>
              <p>Sustainable choices available for environmentally conscious consumers</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🛡️</span>
              </div>
              <h3>Leak Protection</h3>
              <p>Advanced technology provides maximum protection and confidence</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🌸</span>
              </div>
              <h3>Comfort First</h3>
              <p>Cottony-soft materials designed for all-day comfort</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💜</span>
              </div>
              <h3>Trusted Brand</h3>
              <p>Over 30 years of experience in women's care and hygiene</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center">Real Stories, Real Voices</h2>

          <div className="card text-center">
            <div className="icon-box mx-auto" style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '4rem' }}>🎥</span>
            </div>

            <h3>Watch Customer Stories</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Hear directly from women across India about how Whisper has made a difference in their lives.
            </p>

            <div className="grid-2" style={{ gap: '2rem', textAlign: 'left' }}>
              <div className="card">
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '1rem' }}>
                  🌟 "Confidence to Achieve My Dreams"
                </h4>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Watch Priya's journey from college student to successful entrepreneur, 
                  and how Whisper helped her stay focused on her goals.
                </p>
                <button className="btn btn-outline" style={{ width: '100%' }}>
                  ▶️ Watch Video
                </button>
              </div>

              <div className="card">
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '1rem' }}>
                  🏃‍♀️ "Never Miss a Workout"
                </h4>
                <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Meera shares how switching to Whisper Active Fit transformed 
                  her fitness routine and athletic performance.
                </p>
                <button className="btn btn-outline" style={{ width: '100%' }}>
                  ▶️ Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="section-padding bg-white">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2>Share Your Whisper Story</h2>
          <p className="text-lg" style={{ marginBottom: '2rem' }}>
            We'd love to hear about your experience with Whisper products. 
            Your story could inspire and help other women make the right choice.
          </p>

          <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Write a Review & Get Rewarded</h3>

            <div className="grid-3" style={{ marginBottom: '2rem', textAlign: 'left' }}>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Share Experience
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Tell us about your product experience</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Help Others
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Guide other women in their choice</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Win Rewards
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Get featured and win exclusive offers</p>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Submit Your Review
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container text-center">
          <h2>Ready to Experience the Difference?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Join millions of satisfied customers who trust Whisper for their period care needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="btn btn-primary">
              Shop Products
            </Link>
            <Link href="/store-locator" className="btn btn-outline">
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
