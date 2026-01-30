'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Product Information",
      questions: [
        {
          q: "What makes Whisper pads different from other brands?",
          a: "Whisper pads feature advanced absorption technology, a cottony-soft top layer for comfort, and a unique design that offers superior leak protection. Our products are dermatologically tested and designed to move with your body for all-day comfort."
        },
        {
          q: "Are Whisper products safe for sensitive skin?",
          a: "Yes! All Whisper products are dermatologically tested and hypoallergenic. Our organic line is made from 100% certified organic cotton, perfect for those with extra-sensitive skin."
        },
        {
          q: "What's the difference between Ultra, Choice, and Organic ranges?",
          a: "Ultra offers maximum protection with enhanced absorption and leak guards. Choice is our slim, flexible option for active lifestyles. Organic is made from sustainable, chemical-free materials for environmentally conscious consumers."
        },
        {
          q: "How long can I wear a Whisper pad?",
          a: "For optimal hygiene and comfort, we recommend changing your pad every 4-6 hours, or more frequently on heavy flow days. Our overnight pads are designed for up to 8-12 hours of protection."
        }
      ]
    },
    {
      category: "Usage & Care",
      questions: [
        {
          q: "How do I choose the right pad size?",
          a: "Choose based on your flow: panty liners for light days, regular pads for medium flow, and XL/overnight for heavy flow or nighttime use. Our product pages have detailed guides to help you select the perfect fit."
        },
        {
          q: "Can I use Whisper pads for postpartum bleeding?",
          a: "Yes, many women use Whisper Ultra Night or XL pads for postpartum care. However, we recommend consulting with your healthcare provider for personalized advice on postpartum care."
        },
        {
          q: "How should I dispose of used pads?",
          a: "Wrap used pads in their wrapper or toilet paper, and dispose of them in a waste bin. Never flush pads down the toilet as they can cause plumbing issues. Our packaging includes disposal instructions."
        },
        {
          q: "Can I swim or exercise while wearing a Whisper pad?",
          a: "Our Active Fit range is designed for light exercise and movement. For swimming, we recommend using tampons or menstrual cups instead, as pads are not designed for water activities."
        }
      ]
    },
    {
      category: "Health & Wellness",
      questions: [
        {
          q: "Is it normal to experience odor during periods?",
          a: "Some odor is normal during menstruation. Whisper pads include odor-neutralizing technology to keep you feeling fresh. Change your pad regularly (every 4-6 hours) and maintain good hygiene for best results."
        },
        {
          q: "What if I experience irritation while using pads?",
          a: "If you experience irritation, try our Organic Cotton range which is gentler on sensitive skin. Change pads frequently, and if irritation persists, consult a healthcare provider as it might indicate an allergy or infection."
        },
        {
          q: "Can young girls use Whisper products?",
          a: "Absolutely! We offer various sizes suitable for young girls just starting their periods. Our slim designs are comfortable and easy to use. Visit our Education section for resources for first-time users."
        },
        {
          q: "Do Whisper pads contain harmful chemicals?",
          a: "No, Whisper pads are made with safety-tested materials. While some materials are synthetic for absorption, our Organic line is completely chemical-free. All products meet international safety standards."
        }
      ]
    },
    {
      category: "Purchasing & Availability",
      questions: [
        {
          q: "Where can I buy Whisper products?",
          a: "Whisper products are available at supermarkets, pharmacies, convenience stores, and online retailers across India. Use our Store Locator to find the nearest retailer carrying our products."
        },
        {
          q: "Do you offer subscription services?",
          a: "Yes! Many of our online retail partners offer subscription services where you can receive Whisper products regularly at your doorstep with special discounts."
        },
        {
          q: "What's your return policy?",
          a: "If you're not satisfied with a Whisper product, contact our customer service team. We stand behind our products and will work with you to ensure satisfaction. Keep your receipt for returns."
        },
        {
          q: "Do you offer bulk or wholesale purchasing?",
          a: "For bulk orders or wholesale inquiries, please contact our business development team through our Contact page. We offer special pricing for institutions and bulk purchases."
        }
      ]
    },
    {
      category: "Sustainability",
      questions: [
        {
          q: "Are Whisper products environmentally friendly?",
          a: "We're committed to sustainability. Our Organic line uses biodegradable materials, and we're continuously working to reduce packaging waste and environmental impact across all product lines."
        },
        {
          q: "Can I recycle Whisper packaging?",
          a: "Our outer packaging is recyclable where facilities exist. Check your local recycling guidelines. The pads themselves should be disposed of with regular waste as they contain absorbent materials."
        },
        {
          q: "What is Whisper doing to reduce plastic waste?",
          a: "We're actively reducing plastic in our packaging, exploring biodegradable alternatives, and investing in recycling programs. Our goal is to achieve 100% recyclable or reusable packaging by 2030."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container text-center">
          <h1 className="animate-fadeIn">Frequently Asked Questions</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Find answers to common questions about Whisper products and period care
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid-4">
            <div className="stat-box">
              <h3>1000+</h3>
              <p>Questions Answered</p>
            </div>
            <div className="stat-box">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <p>Satisfaction Focus</p>
            </div>
            <div className="stat-box">
              <h3>2hr</h3>
              <p>Avg Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqs.map((category, categoryIdx) => (
        <section 
          key={categoryIdx}
          className="section-padding" 
          style={{ background: categoryIdx % 2 === 0 ? 'var(--secondary-pink)' : '#ffffff' }}
        >
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 className="text-center">{category.category}</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {category.questions.map((faq, faqIdx) => {
                const globalIndex = categoryIdx * 10 + faqIdx;
                const isOpen = openIndex === globalIndex;

                return (
                  <div 
                    key={faqIdx}
                    className="card"
                    style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <h3 style={{ 
                        margin: 0, 
                        fontSize: '1.1rem',
                        color: 'var(--primary-purple)'
                      }}>
                        {faq.q}
                      </h3>
                      <span style={{ 
                        fontSize: '1.5rem',
                        color: 'var(--primary-pink)',
                        flexShrink: 0,
                        transition: 'transform 0.3s',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        ▼
                      </span>
                    </div>

                    {isOpen && (
                      <div style={{ 
                        marginTop: '1.5rem',
                        paddingTop: '1.5rem',
                        borderTop: '2px solid var(--primary-pink)',
                        animation: 'fadeIn 0.3s ease-in'
                      }}>
                        <p style={{ 
                          margin: 0, 
                          color: '#555',
                          lineHeight: '1.7'
                        }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Still Have Questions?</h2>

          <div className="grid-3">
            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>📞</span>
              </div>
              <h3>Call Us</h3>
              <p>1800-WHISPER</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>✉️</span>
              </div>
              <h3>Email Support</h3>
              <p>support@whisper.com</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>24-48 hour response</p>
            </div>

            <div className="feature-box">
              <div className="icon-box mx-auto">
                <span>💬</span>
              </div>
              <h3>Live Chat</h3>
              <p>Chat with our team</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Available now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container text-center">
          <h2>Need More Information?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Explore our education resources or contact our support team for personalized assistance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/education" className="btn btn-primary">
              Education Center
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
