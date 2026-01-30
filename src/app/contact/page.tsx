'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container text-center">
          <h1 className="animate-fadeIn">Get in Touch</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Have questions? We're here to help. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">How Can We Help You?</h2>

          <div className="grid-3">
            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>📞</span>
              </div>
              <h3>Call Us</h3>
              <p>1800-WHISPER<br/>(1800-944-7737)</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>✉️</span>
              </div>
              <h3>Email Us</h3>
              <p>support@whisper.com</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Response within 24 hours</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💬</span>
              </div>
              <h3>Live Chat</h3>
              <p>Available on our website</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Instant responses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center">Send Us a Message</h2>

          <div className="card">
            {submitted && (
              <div style={{
                padding: '1rem',
                background: 'linear-gradient(135deg, var(--primary-pink), var(--primary-purple))',
                color: 'white',
                borderRadius: '8px',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-pink)'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-pink)'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-pink)'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: 'white',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-pink)'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#333' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-pink)'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ fontSize: '1.1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Our Offices</h2>

          <div className="grid-2">
            <div className="card">
              <h3>Head Office - Mumbai</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                📍 Procter & Gamble Plaza<br/>
                Cardinal Gracious Road, Andheri (E)<br/>
                Mumbai - 400059<br/>
                Maharashtra, India
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                <strong>Phone:</strong> +91-22-2826-6000<br/>
                <strong>Fax:</strong> +91-22-2826-7000
              </p>
            </div>

            <div className="card">
              <h3>Regional Office - Delhi</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                📍 Procter & Gamble Plaza<br/>
                Plot A-31/32, Sector 58<br/>
                Noida - 201301<br/>
                Uttar Pradesh, India
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                <strong>Phone:</strong> +91-120-398-2000<br/>
                <strong>Fax:</strong> +91-120-398-2001
              </p>
            </div>

            <div className="card">
              <h3>Manufacturing Unit - Hyderabad</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                📍 P&G Industrial Area<br/>
                Pashamylaram Village<br/>
                Hyderabad - 502307<br/>
                Telangana, India
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                <strong>Phone:</strong> +91-40-3024-8000
              </p>
            </div>

            <div className="card">
              <h3>Customer Care Center - Bangalore</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                📍 Embassy TechVillage<br/>
                Devarabisanahalli, Outer Ring Road<br/>
                Bangalore - 560103<br/>
                Karnataka, India
              </p>
              <p style={{ fontSize: '0.95rem' }}>
                <strong>Toll Free:</strong> 1800-WHISPER<br/>
                <strong>Email:</strong> care.whisper@pg.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container text-center">
          <h2>Need Quick Answers?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Check out our FAQ section for immediate answers to common questions about our products.
          </p>
          <a href="/faq" className="btn btn-primary">
            View FAQs
          </a>
        </div>
      </section>
    </div>
  );
}
