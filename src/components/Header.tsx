'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <div className="container site-header__bar-inner">
          <span>Free delivery on orders above ₹499</span>
          <span className="site-header__bar-dot" />
          <span>Customer Care: 1800-WHISPER</span>
        </div>
      </div>

      <nav className="container site-header__nav">
        <div className="site-header__row">
          {/* Logo */}
          <Link href="/" className="site-logo">
            <span className="site-logo__badge">W</span>
            <span className="site-logo__text">Whisper</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
            <li><Link href="/products" className="nav-link">Products</Link></li>
            <li><Link href="/education" className="nav-link">Education</Link></li>
            <li><Link href="/testimonials" className="nav-link">Testimonials</Link></li>
            <li><Link href="/campaigns" className="nav-link">Campaigns</Link></li>
            <li><Link href="/store-locator" className="nav-link">Store Locator</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
            <li><Link href="/faq" className="nav-link">FAQ</Link></li>
          </ul>

          <div className="site-header__actions">
            <Link href="/products" className="btn btn-primary nav-cta">
              Shop Now
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <ul className="mobile-nav__list">
              <li><Link href="/" className="mobile-nav__link">Home</Link></li>
              <li><Link href="/about" className="mobile-nav__link">About Us</Link></li>
              <li><Link href="/products" className="mobile-nav__link">Products</Link></li>
              <li><Link href="/education" className="mobile-nav__link">Education</Link></li>
              <li><Link href="/testimonials" className="mobile-nav__link">Testimonials</Link></li>
              <li><Link href="/campaigns" className="mobile-nav__link">Campaigns</Link></li>
              <li><Link href="/store-locator" className="mobile-nav__link">Store Locator</Link></li>
              <li><Link href="/contact" className="mobile-nav__link">Contact</Link></li>
              <li><Link href="/faq" className="mobile-nav__link">FAQ</Link></li>
            </ul>
            <Link href="/products" className="btn btn-primary mobile-nav__cta">
              Shop Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
