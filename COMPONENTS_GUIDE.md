# Interactive Components Guide

## 🎠 Product Slider Component

### Location
`src/components/Slider.tsx`

### Usage in Home Page
```tsx
<Slider 
  items={productSliderItems} 
  autoPlay={true} 
  autoPlayInterval={6000} 
/>
```

### Features
- **Auto-play**: Automatically cycles through products every 6 seconds
- **Navigation Arrows**: Previous (←) and Next (→) buttons
- **Dot Indicators**: Visual progress dots at bottom
- **Keyboard Support**: Tab through dots to navigate
- **Responsive**: Stacks properly on mobile devices
- **Accessible**: ARIA labels for screen readers

### Data Structure
```tsx
const productSliderItems = [
  {
    id: 'soft-pads',
    title: 'Soft Pads',
    description: 'Ultra-soft protection for daily use',
    emoji: '🌸',
    cta: { text: 'Shop Soft Pads', href: '/products' },
  },
  // ... more items
];
```

### CSS Classes
- `.slider-container`: Main wrapper
- `.slider-content`: Content area
- `.slider-item`: Individual slide (with fadeIn animation)
- `.slider-arrow`: Navigation buttons (hover effect)
- `.slider-dots`: Dot navigation (active state highlighted)

---

## 🧩 Product Finder Quiz Component

### Location
`src/components/ProductFinder.tsx`

### Usage in Home Page
```tsx
<ProductFinder 
  onComplete={(result) => console.log(result)}
/>
```

### Features
- **Multi-Step Quiz**: 4 questions about menstrual needs
- **Progress Bar**: Visual feedback of quiz progress
- **Emoji Answers**: Fun, engaging answer options with emojis
- **Smart Recommendations**: Suggests products based on answers
- **Result Screen**: Shows recommended product with CTA
- **Quiz Again**: Option to retake the quiz
- **Mobile-Friendly**: Responsive grid layout

### Questions
1. **Flow Intensity**
   - 💧 Light flow
   - 💦 Moderate flow
   - 🌊 Heavy flow

2. **Duration**
   - 📅 Short (< 5 days)
   - 📆 Normal (5-7 days)
   - 🗓️ Long (> 7 days)

3. **Lifestyle**
   - 🏃‍♀️ Active & athletic
   - 👩‍💼 Everyday routine
   - 🌟 Mix of both

4. **Preference**
   - 🌿 Organic & eco-friendly
   - ✨ Regular products
   - 🤷‍♀️ No preference

### Result Recommendations
- **Light Flow** → Soft Pads (🌸)
- **Moderate Flow** → Comfort Guard Pads (💜)
- **Heavy Flow** → Night Pads (🌙)
- **Organic** → Organic Pads (🌿)

### CSS Classes
- `.product-finder-container`: Main wrapper
- `.quiz-progress`: Progress bar section
- `.progress-bar`: Progress container
- `.progress-fill`: Animated progress
- `.quiz-question`: Question display area
- `.quiz-answers`: Grid of answer buttons
- `.quiz-answer-btn`: Individual answer button (with hover effect)
- `.answer-emoji`: Emoji styling
- `.quiz-result`: Result display section
- `.result-emoji`: Large result emoji (bounce animation)

---

## 🎨 Enhanced Typography System

### Font Hierarchy
```
H1: 3rem (desktop) | 1.75rem (mobile) | Weight 800 | Leading 1.2-1.3
H2: 2.5rem (desktop) | 1.5rem (mobile) | Weight 800 | Leading 1.25
H3: 2rem (desktop) | 1.25rem (mobile) | Weight 700 | Leading 1.3
H4: 1.5rem (desktop) | 1.125rem (mobile) | Weight 700
H5: 1.25rem | Weight 600
H6: 1rem | Weight 600

Body: 1rem | Color #666666 | Leading 1.8 | Letter-spacing 0.3px
```

### Text Utilities
- `.text-lg`: 1.125rem, line-height 1.75
- `.text-sm`: 0.875rem, line-height 1.5
- `.text-xs`: 0.75rem, line-height 1.25
- `.text-base`: 1rem, line-height 1.6
- `.text-center`, `.text-left`, `.text-right`: Alignment
- `.text-gradient`: Gradient text effect
- `.text-muted`: Light gray text

---

## 🎯 Interactive Button States

### Button Variants
```tsx
<Link href="/products" className="btn btn-primary">Shop Now</Link>
<Link href="/about" className="btn btn-secondary">Learn More</Link>
<Link href="/" className="btn btn-outline">Back</Link>
<button className="btn btn-ghost">Cancel</button>
```

### Button Sizes
- **Mobile**: min-height 44px, min-width 44px (touch targets)
- **Desktop**: Standard 0.875rem × 2.5rem padding
- **Touch-friendly**: 1.5rem padding on mobile

### States
- **Default**: Gradient background
- **Hover**: Translate up (-2px), enhanced shadow
- **Focus**: 3px pink outline with 2px offset
- **Active**: Slight scale/opacity change

---

## 🔄 Slider Animations

### Entrance Animations
- **slideInLeft**: Content enters from left (0.6s)
- **slideInRight**: Hero image enters from right (0.6s)
- **slideInUp**: Slider/modal enters from bottom (0.6s)

### Continuous Animations
- **float**: Gentle floating motion (3s infinite)
- **pulse**: Pulsing scale effect (campaign heart)
- **bounce**: Quiz result celebration (0.8s)

### Transition Timings
- `--transition-fast`: 200ms cubic-bezier
- `--transition-base`: 300ms cubic-bezier
- `--transition-slow`: 500ms cubic-bezier

---

## 📱 Mobile-First Responsive Design

### Touch Targets
```css
/* Minimum 44px × 44px for mobile */
button, a.btn {
  min-height: 44px;
  min-width: 44px;
}
```

### Grid Layouts
- **Mobile** (0-640px):
  - `.grid-2`: 1 column
  - `.grid-3`: 1 column
  - `.grid-4`: 1 column
  
- **Tablet** (641-768px):
  - `.grid-2`: 2 columns
  - `.grid-3`: 2 columns
  - `.grid-4`: 2 columns

- **Desktop** (768px+):
  - `.grid-2`: 2 columns (gap: 3rem)
  - `.grid-3`: 3 columns (gap: 3rem)
  - `.grid-4`: 4 columns (gap: 2.5rem)

### Card Spacing
- **Mobile**: 1.5rem padding
- **Desktop**: 2rem-2.5rem padding
- **Gap between items**: 1rem (within flex)
- **Grid gap**: 2.5rem-3rem

---

## ♿ Accessibility Features

### ARIA Labels
```tsx
<button aria-label="Toggle menu" aria-expanded={isMenuOpen}>
  Menu
</button>

<div role="img" aria-label="Woman illustration">👩‍🦰</div>

<div role="tablist" aria-label="Slide navigation">
  {/* Dots */}
</div>
```

### Keyboard Navigation
- **Tab**: Navigate through buttons and links
- **Enter**: Activate buttons
- **Arrow Keys**: Navigate sliders (dots)
- **Focus Visible**: Clear 3px pink outline

### Screen Reader Text
```tsx
<span aria-label="Rating 4.9 out of 5 stars">⭐ 4.9</span>
<span aria-label="12500 customer reviews">(12,500+ reviews)</span>
```

### Semantic HTML
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- `<h1>` through `<h6>` proper hierarchy
- `<blockquote>` for testimonials
- `<figure>` for illustrations
- `<button>` for interactive elements
- `<Link>` for navigation

---

## 🎨 Color System

### Primary Colors
- **Pink**: #f5a6c8 (Main CTA, links, accents)
- **Purple**: #d8b5e8 (Secondary accents, gradients)

### Secondary Colors
- **Light Pink**: #fce4ec (Light backgrounds)
- **Accent Purple**: #9b7cb0 (Borders, hover states)

### Gradients
- `linear-gradient(135deg, #f5a6c8, #d8b5e8)` - Primary gradient
- `linear-gradient(135deg, #fce4ec, #f9f5ff)` - Light gradient
- `linear-gradient(180deg, #ffffff, #fef6f9)` - Soft gradient

### Text Colors
- **Dark**: #2d2d2d (Headings, primary text)
- **Light**: #666666 (Body text, secondary)
- **Muted**: #9ca3af (Tertiary text)
- **White**: #ffffff (On dark backgrounds)

---

## 📊 Component Data Flow

### Slider Component
```
Props: items, autoPlay, autoPlayInterval, showDots, showArrows
State: currentIndex
Events: nextSlide(), prevSlide(), goToSlide(index)
```

### Product Finder Quiz
```
Props: onComplete callback
State: currentQuestion, answers, result
Events: handleAnswer(value), goBack(), resetQuiz()
Flow: Question 1 → Question 2 → Question 3 → Question 4 → Result
```

---

## 🚀 Performance Optimizations

### CSS
- Minimal repaints with `transform` instead of `width`
- GPU-accelerated animations
- Efficient selector specificity
- Consolidated spacing utilities

### JavaScript
- Client-side component rendering ('use client')
- Efficient state management with `useState`
- useCallback for memoized functions
- Minimal re-renders

### Accessibility
- Focus management preserved
- No content reflow on focus
- Outline offsets prevent cropping
- ARIA updates on state changes

---

## 📝 Usage Examples

### Adding a New Slider
```tsx
import Slider from '@/components/Slider';

const items = [
  { id: '1', title: 'Product 1', description: 'Desc', emoji: '🌸' },
  { id: '2', title: 'Product 2', description: 'Desc', emoji: '🌙' },
];

<Slider items={items} autoPlay={true} autoPlayInterval={5000} />
```

### Customizing Quiz
Edit questions in `ProductFinder.tsx`:
```tsx
const questions = [
  {
    id: 'your-id',
    question: 'Your question?',
    answers: [
      { text: 'Answer 1', value: 'value1', emoji: '😊' },
      { text: 'Answer 2', value: 'value2', emoji: '😄' },
    ],
  },
];
```

### Button Styling
```tsx
<Link href="/products" className="btn btn-primary">Shop</Link>
<button className="btn btn-secondary">Learn More</button>
<Link href="/" className="btn btn-outline">Back</Link>
```

---

All components are fully accessible, responsive, and production-ready! ✨
