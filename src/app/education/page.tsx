import Link from 'next/link';

export default function Education() {
  const articles = [
    {
      id: 1,
      title: 'Understanding Your Menstrual Cycle',
      category: 'Health Education',
      excerpt: 'Learn about the four phases of your cycle and what happens in your body each month.',
      readTime: '8 min read',
      icon: '📅',
    },
    {
      id: 2,
      title: 'Managing Period Pain Naturally',
      category: 'Wellness Tips',
      excerpt: 'Natural remedies and techniques to help alleviate menstrual cramps without medication.',
      readTime: '7 min read',
      icon: '🌿',
    },
    {
      id: 3,
      title: 'Nutrition for Period Health',
      category: 'Diet & Nutrition',
      excerpt: 'Discover which foods can help reduce cramps, boost energy, and balance hormones.',
      readTime: '6 min read',
      icon: '🥗',
    },
    {
      id: 4,
      title: 'Staying Active During Your Period',
      category: 'Fitness',
      excerpt: 'Exercise tips and best practices for staying active and comfortable during menstruation.',
      readTime: '5 min read',
      icon: '🏃‍♀️',
    },
    {
      id: 5,
      title: 'Period Myths Debunked',
      category: 'Facts vs Fiction',
      excerpt: 'Separating fact from fiction - common period myths and the truth behind them.',
      readTime: '10 min read',
      icon: '💡',
    },
    {
      id: 6,
      title: 'Your First Period Guide',
      category: 'For Teens',
      excerpt: 'Everything young girls need to know about getting their first period with confidence.',
      readTime: '12 min read',
      icon: '🌸',
    },
  ];

  const topics = [
    {
      title: 'Menstrual Health Basics',
      icon: '📚',
      description: 'Comprehensive guides on period care, hygiene, and health',
    },
    {
      title: 'Lifestyle & Wellness',
      icon: '✨',
      description: 'Tips for managing your period while living your best life',
    },
    {
      title: 'Teen Resources',
      icon: '👧',
      description: 'Special resources and guides for young girls and teenagers',
    },
    {
      title: 'Product Guides',
      icon: '🛍️',
      description: 'Learn how to choose and use Whisper products effectively',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-white section-padding" style={{ background: 'linear-gradient(135deg, var(--primary-pink), var(--primary-purple))' }}>
        <div className="container text-center">
          <h1 className="animate-fadeIn">Education & Resources</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Empowering you with knowledge about menstrual health, wellness, and self-care
          </p>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-center">Explore Our Topics</h2>

          <div className="grid-4">
            {topics.map((topic, idx) => (
              <div key={idx} className="feature-box">
                <div className="icon-box mx-auto">
                  <span>{topic.icon}</span>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container">
          <h2 className="text-center">Featured Articles</h2>

          <div className="grid-3">
            {articles.map((article) => (
              <div key={article.id} className="card">
                <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{article.icon}</span>
                </div>

                <div style={{ 
                  display: 'inline-block',
                  background: 'var(--primary-pink)',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {article.category}
                </div>

                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '2px solid #eee'
                }}>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>
                    ⏱️ {article.readTime}
                  </span>
                  <Link href="#" className="btn btn-outline" style={{ padding: '0.5rem 1.2rem' }}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="text-center">Important Facts Every Woman Should Know</h2>

          <div className="grid-2">
            <div className="card">
              <h3>🩸 Average Period Length</h3>
              <p>
                A typical menstrual period lasts 3-7 days, with an average of 5 days. 
                Your flow may be heavier in the first few days and lighter towards the end.
              </p>
            </div>

            <div className="card">
              <h3>🔄 Cycle Duration</h3>
              <p>
                The average menstrual cycle is 28 days, but anything between 21-35 days 
                is considered normal. Cycles can vary from month to month.
              </p>
            </div>

            <div className="card">
              <h3>💧 Blood Loss</h3>
              <p>
                The average blood loss during a period is about 2-3 tablespoons (30-40ml), 
                though it may seem like more. Heavy flow is defined as soaking through a pad every hour.
              </p>
            </div>

            <div className="card">
              <h3>🌡️ PMS Symptoms</h3>
              <p>
                Up to 90% of women experience some PMS symptoms like mood changes, bloating, 
                and cramps. These usually improve once your period starts.
              </p>
            </div>

            <div className="card">
              <h3>🏃‍♀️ Exercise Benefits</h3>
              <p>
                Light to moderate exercise during your period can actually reduce cramps 
                and boost your mood by releasing endorphins.
              </p>
            </div>

            <div className="card">
              <h3>🥤 Hydration Matters</h3>
              <p>
                Drinking plenty of water during your period helps reduce bloating and 
                can ease headaches. Aim for 8-10 glasses daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Period Tracking */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="text-center">Track Your Cycle</h2>

          <div className="card text-center">
            <div className="icon-box mx-auto" style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '4rem' }}>📱</span>
            </div>

            <h3>Download Our Period Tracker App</h3>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              Understanding your cycle is empowering! Our free period tracker app helps you 
              monitor your cycle, predict your next period, track symptoms, and receive 
              personalized health insights.
            </p>

            <div className="flex gap-4 justify-center flex-wrap" style={{ marginTop: '2rem' }}>
              <button className="btn btn-primary">
                📱 Download for iOS
              </button>
              <button className="btn btn-outline">
                🤖 Download for Android
              </button>
            </div>

            <div className="grid-3" style={{ marginTop: '3rem', textAlign: 'left' }}>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Cycle Predictions
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Get accurate predictions for your next period</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Symptom Tracking
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Monitor symptoms and identify patterns</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                  ✓ Health Insights
                </h4>
                <p style={{ fontSize: '0.95rem' }}>Receive personalized tips and reminders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <h2>Still Have Questions?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Our team is here to help. Reach out with any questions about periods, products, or women's health.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/faq" className="btn btn-primary">
              View FAQs
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
