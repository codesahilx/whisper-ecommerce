import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="card-gradient text-white section-padding">
        <div className="container text-center">
          <h1 className="animate-fadeIn">About Whisper</h1>
          <p className="text-xl" style={{ maxWidth: '900px', margin: '0 auto' }}>
            Empowering women through comfort, confidence, and care since the beginning
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="text-center">
            <h2>Our Mission</h2>
            <p className="text-xl" style={{ maxWidth: '900px', margin: '0 auto' }}>
              At Whisper, we believe that every woman deserves comfort and confidence during her period. 
              We create innovative products that empower women everywhere to live their lives without limits, 
              pursuing their dreams and passions every single day of the month.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💪</span>
              </div>
              <h3>Empowerment</h3>
              <p>We believe in empowering women to feel confident and unstoppable</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>🌸</span>
              </div>
              <h3>Comfort</h3>
              <p>Providing the highest quality products designed for ultimate comfort</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💜</span>
              </div>
              <h3>Care</h3>
              <p>Caring for women's health and wellbeing in every product we create</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Our Story</h2>

          <div className="grid-2" style={{ gap: '4rem', marginTop: '3rem' }}>
            <div className="card">
              <div className="stat-box">
                <h3>1980s</h3>
                <p>The Beginning</p>
              </div>
              <h3>Innovation Born</h3>
              <p>
                Whisper was founded with a revolutionary vision: to create feminine hygiene products 
                that truly understand and support women's needs. We started with a simple goal—to make 
                periods more comfortable and help women feel confident every day.
              </p>
            </div>

            <div className="card">
              <div className="stat-box">
                <h3>2000s</h3>
                <p>Global Expansion</p>
              </div>
              <h3>Going Global</h3>
              <p>
                As we grew, so did our impact. Whisper expanded globally, bringing innovative 
                menstrual care to millions of women across the world. We introduced new technologies 
                and continued to listen to women's feedback to improve our products.
              </p>
            </div>

            <div className="card">
              <div className="stat-box">
                <h3>2015+</h3>
                <p>Sustainability</p>
              </div>
              <h3>Eco-Friendly Focus</h3>
              <p>
                Recognizing our responsibility to the planet, we launched our organic line and 
                committed to sustainable practices. Today, we continue to innovate with both 
                comfort and environmental impact in mind.
              </p>
            </div>

            <div className="card">
              <div className="stat-box">
                <h3>Today</h3>
                <p>Leading the Way</p>
              </div>
              <h3>Empowering Tomorrow</h3>
              <p>
                With millions of satisfied customers worldwide, we remain committed to our original 
                mission: empowering women through superior comfort, protection, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Our Core Values</h2>

          <div className="grid-2">
            <div className="card">
              <h3>Quality First</h3>
              <p>
                Every product undergoes rigorous testing to ensure it meets our high standards 
                for comfort, protection, and reliability.
              </p>
            </div>

            <div className="card">
              <h3>Innovation</h3>
              <p>
                We continuously research and develop new technologies to provide better 
                protection and comfort for women.
              </p>
            </div>

            <div className="card">
              <h3>Sustainability</h3>
              <p>
                We're committed to reducing our environmental impact through eco-friendly 
                materials and sustainable manufacturing practices.
              </p>
            </div>

            <div className="card">
              <h3>Education</h3>
              <p>
                We believe in breaking taboos and providing comprehensive education about 
                menstrual health and hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container text-center">
          <h2>Join the Whisper Family</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Experience the difference that quality, innovation, and care can make in your life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="btn btn-primary">
              Shop Products
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
