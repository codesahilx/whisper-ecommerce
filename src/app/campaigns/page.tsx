import Link from 'next/link';

export default function Campaigns() {
  const currentCampaign = {
    title: '#ShareTheCare',
    tagline: 'Helping Girls Stay in School',
    description: 'Period poverty keeps millions of girls out of school each year. Through the #ShareTheCare campaign, we\'re providing free menstrual products, hygiene education, and sanitation facilities to schools across the country.',
    stats: [
      { number: '5M+', label: 'Girls Reached' },
      { number: '10K+', label: 'Schools Partnered' },
      { number: '10M+', label: 'Pads Distributed' },
      { number: '50K+', label: 'Educators Trained' },
    ],
  };

  const pastCampaigns = [
    {
      id: 1,
      title: 'Break the Silence',
      year: '2024',
      description: 'Normalizing period conversations and breaking taboos around menstruation in communities nationwide.',
      impact: 'Reached 3 million women with awareness programs across 15 states',
      icon: '🗣️',
    },
    {
      id: 2,
      title: 'Period Proud',
      year: '2023',
      description: 'Empowering young girls to feel confident and proud during their periods through education and support.',
      impact: 'Educated 2 million teenage girls across 5,000 schools',
      icon: '💪',
    },
    {
      id: 3,
      title: 'Green Period Initiative',
      year: '2022',
      description: 'Introducing eco-friendly, biodegradable menstrual products to reduce environmental impact.',
      impact: 'Prevented 500 tons of plastic waste from landfills',
      icon: '🌿',
    },
    {
      id: 4,
      title: 'Rural Outreach Program',
      year: '2021',
      description: 'Bringing menstrual health awareness and products to rural and underserved communities.',
      impact: 'Served 1 million women in rural areas across 1,000 villages',
      icon: '🏘️',
    },
  ];

  const getInvolved = [
    {
      title: 'Donate Products',
      icon: '🎁',
      description: 'Help us provide free menstrual products to girls in need. Every pack makes a difference.',
    },
    {
      title: 'Volunteer',
      icon: '🤝',
      description: 'Join our team of volunteers educating communities about menstrual health and hygiene.',
    },
    {
      title: 'Spread Awareness',
      icon: '📢',
      description: 'Share our campaigns on social media and help break the silence around periods.',
    },
    {
      title: 'Corporate Partnership',
      icon: '💼',
      description: 'Partner with us to create workplace programs supporting women\'s health initiatives.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container text-center">
          <h1 className="animate-fadeIn">Our Campaigns</h1>
          <p className="text-xl" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Creating positive change and empowering women through impactful social initiatives
          </p>
        </div>
      </section>

      {/* Current Campaign */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-pink), var(--primary-purple))',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '12px',
            display: 'inline-block',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}>
            🎯 Current Campaign
          </div>

          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{currentCampaign.title}</h2>
          <h3 style={{ color: 'var(--primary-purple)', marginBottom: '2rem' }}>
            {currentCampaign.tagline}
          </h3>

          <div className="card">
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              {currentCampaign.description}
            </p>

            <div className="grid-4">
              {currentCampaign.stats.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div style={{ 
              marginTop: '3rem', 
              paddingTop: '2rem', 
              borderTop: '2px solid var(--primary-pink)',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Join the Movement</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact" className="btn btn-primary">
                  Get Involved
                </Link>
                <Link href="#" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Campaigns */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container">
          <h2 className="text-center">Our Impact Journey</h2>

          <div className="grid-2">
            {pastCampaigns.map((campaign) => (
              <div key={campaign.id} className="card">
                <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{campaign.icon}</span>
                </div>

                <div style={{
                  background: 'var(--primary-purple)',
                  color: 'white',
                  display: 'inline-block',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {campaign.year}
                </div>

                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '2px solid var(--primary-pink)',
                  background: 'rgba(245, 166, 200, 0.1)',
                  padding: '1rem',
                  borderRadius: '8px'
                }}>
                  <strong style={{ color: 'var(--primary-purple)' }}>Impact: </strong>
                  {campaign.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-center">How You Can Help</h2>
          <p className="text-center text-lg" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            Every contribution, big or small, helps us create a world where no girl misses school because of her period.
          </p>

          <div className="grid-4">
            {getInvolved.map((option, idx) => (
              <div key={idx} className="feature-box">
                <div className="icon-box mx-auto">
                  <span>{option.icon}</span>
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding" style={{ background: 'var(--secondary-pink)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="text-center">Success Stories</h2>

          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="icon-box mx-auto" style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '3rem' }}>⭐</span>
              </div>
              <h3 style={{ color: 'var(--primary-purple)' }}>
                "Education Changed My Life"
              </h3>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Before Whisper's program came to our school, I used to miss 3-4 days every month. 
              Now I have access to proper sanitary products and knowledge about menstrual health. 
              I haven't missed a single day of school in 6 months, and my grades have improved dramatically. 
              Thank you for helping me pursue my dreams!"
            </p>

            <div style={{ 
              textAlign: 'right',
              paddingTop: '1rem',
              borderTop: '2px solid var(--primary-pink)'
            }}>
              <strong style={{ color: 'var(--primary-purple)' }}>- Anjali, Class 10 Student</strong>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '0.5rem 0 0 0' }}>
                Maharashtra, India
              </p>
            </div>
          </div>

          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="stat-box">
              <h3>95%</h3>
              <p>School Attendance Improved</p>
            </div>
            <div className="stat-box">
              <h3>87%</h3>
              <p>Confidence Increased</p>
            </div>
            <div className="stat-box">
              <h3>92%</h3>
              <p>Knowledge Improved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <h2>Ready to Make a Difference?</h2>
          <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Join us in our mission to ensure every girl has access to menstrual products and education.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-primary">
              Partner With Us
            </Link>
            <Link href="#" className="btn btn-outline">
              Download Impact Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
