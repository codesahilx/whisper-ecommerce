'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuizQuestion {
  id: string;
  question: string;
  answers: Array<{
    text: string;
    value: string;
    emoji?: string;
  }>;
}

interface QuizResult {
  product: string;
  description: string;
  emoji: string;
  href: string;
}

interface ProductFinderProps {
  onComplete?: (result: QuizResult) => void;
}

const questions: QuizQuestion[] = [
  {
    id: 'flow',
    question: 'What\'s your typical menstrual flow like?',
    answers: [
      { text: 'Light flow', value: 'light', emoji: '💧' },
      { text: 'Moderate flow', value: 'moderate', emoji: '💦' },
      { text: 'Heavy flow', value: 'heavy', emoji: '🌊' },
    ],
  },
  {
    id: 'duration',
    question: 'How long is your menstrual cycle?',
    answers: [
      { text: 'Short (less than 5 days)', value: 'short', emoji: '📅' },
      { text: 'Normal (5-7 days)', value: 'normal', emoji: '📆' },
      { text: 'Long (more than 7 days)', value: 'long', emoji: '🗓️' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'What\'s your lifestyle like?',
    answers: [
      { text: 'Active & athletic', value: 'active', emoji: '🏃‍♀️' },
      { text: 'Everyday routine', value: 'everyday', emoji: '👩‍💼' },
      { text: 'Mix of both', value: 'mixed', emoji: '🌟' },
    ],
  },
  {
    id: 'preference',
    question: 'Do you prefer natural or regular products?',
    answers: [
      { text: 'Organic & eco-friendly', value: 'organic', emoji: '🌿' },
      { text: 'Regular products', value: 'regular', emoji: '✨' },
      { text: 'No preference', value: 'any', emoji: '🤷‍♀️' },
    ],
  },
];

const productRecommendations: Record<string, QuizResult> = {
  light: {
    product: 'Soft Pads',
    description: 'Perfect for light flow days. Ultra-soft materials for maximum comfort.',
    emoji: '🌸',
    href: '/products',
  },
  moderate: {
    product: 'Comfort Guard Pads',
    description: 'Our most popular choice. Balanced protection and comfort.',
    emoji: '💜',
    href: '/products',
  },
  heavy: {
    product: 'Night Pads',
    description: 'Extra-long design for heavy flow and overnight protection.',
    emoji: '🌙',
    href: '/products',
  },
  organic: {
    product: 'Organic Pads',
    description: '100% natural fibers. Gentle on skin and eco-friendly.',
    emoji: '🌿',
    href: '/products',
  },
};

export default function ProductFinder({ onComplete }: ProductFinderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (value: string) => {
    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate result based on first answer (flow type)
      const flowType = newAnswers['flow'] || 'moderate';
      const recommendedProduct =
        productRecommendations[flowType] ||
        productRecommendations['moderate'];
      setResult(recommendedProduct);
      onComplete?.(recommendedProduct);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="quiz-result">
        <div className="quiz-result-content">
          <div className="result-emoji">{result.emoji}</div>
          <h3>Your Perfect Match!</h3>
          <h2>{result.product}</h2>
          <p>{result.description}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={result.href} className="btn btn-primary">
              Shop {result.product}
            </Link>
            <button onClick={resetQuiz} className="btn btn-outline">
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="product-finder-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="progress-text">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <div className="quiz-question">
        <h3>{question.question}</h3>
        <div className="quiz-answers">
          {question.answers.map((answer) => (
            <button
              key={answer.value}
              className="quiz-answer-btn"
              onClick={() => handleAnswer(answer.value)}
              aria-label={answer.text}
            >
              {answer.emoji && <span className="answer-emoji">{answer.emoji}</span>}
              <span>{answer.text}</span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button onClick={goBack} className="btn btn-ghost" style={{ marginTop: '2rem' }}>
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
