'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';

interface SliderItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  emoji?: string;
  cta?: {
    text: string;
    href: string;
  };
}

interface SliderProps {
  items: SliderItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export default function Slider({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex((index + items.length) % items.length);
  }, [items.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || !isClient) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isPaused, isClient, autoPlayInterval, nextSlide]);

  if (!isClient) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="slider-container">
      {/* Main Slide */}
      <div className="slider-content">
        <div className="slider-item active">
          {currentItem.image && (
            <img 
              src={currentItem.image} 
              alt={currentItem.title}
              className="slider-image"
            />
          )}
          {!currentItem.image && currentItem.emoji && (
            <div className="slider-emoji">{currentItem.emoji}</div>
          )}
          <div className="slider-text">
            <h3>{currentItem.title}</h3>
            <p>{currentItem.description}</p>
            {currentItem.cta && (
              <Link href={currentItem.cta.href} className="btn btn-primary">
                {currentItem.cta.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            className="slider-arrow slider-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
            title="Previous"
          >
            ←
          </button>
          <button
            className="slider-arrow slider-next"
            onClick={nextSlide}
            aria-label="Next slide"
            title="Next"
          >
            →
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && (
        <div className="slider-dots" role="tablist" aria-label="Slide navigation">
          {items.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}`}
              title={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}