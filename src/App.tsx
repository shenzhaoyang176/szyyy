/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QUESTIONS, PERSONALITIES } from './data/quizData';
import { Option, Personality, PersonalityId } from './types';
import { HomePage } from './components/HomePage';
import { QuestionPage } from './components/QuestionPage';
import { ResultPage } from './components/ResultPage';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = Home, 1..6 = Q1..Q6, 7 = Result
  const [answers, setAnswers] = useState<Record<number, Option>>({});

  // Calculate top personality based on user answers
  const calculateResult = (finalAnswers: Record<number, Option>): Personality => {
    const scores: Record<PersonalityId, number> = {
      sofa: 0,
      nightstand: 0,
      floor_lamp: 0,
      folding_chair: 0,
      wardrobe: 0,
      drawer: 0
    };

    Object.values(finalAnswers).forEach((option) => {
      if (option && option.personality) {
        scores[option.personality] = (scores[option.personality] || 0) + 1;
      }
    });

    // Find personality with max score
    let topId: PersonalityId = 'sofa';
    let maxScore = -1;

    (Object.keys(scores) as PersonalityId[]).forEach((pId) => {
      if (scores[pId] > maxScore) {
        maxScore = scores[pId];
        topId = pId;
      }
    });

    return PERSONALITIES[topId] || PERSONALITIES.sofa;
  };

  // Start test
  const handleStart = () => {
    setAnswers({});
    setCurrentStep(1);
  };

  // Handle option selection
  const handleSelectOption = (option: Option) => {
    const newAnswers = { ...answers, [currentStep]: option };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result and proceed to Result Page (Step 7)
      setCurrentStep(7);
    }
  };

  // Go to previous question
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
  };

  // Current winning personality
  const activeResult = calculateResult(answers);

  return (
    <div className="w-full h-screen bg-[#121212] flex justify-center items-start sm:items-center overflow-y-auto p-0 sm:py-6">
      {/* Container simulating Mobile H5 viewport frame */}
      <div className="w-full max-w-[430px] min-h-full sm:min-h-0 sm:h-[812px] sm:max-h-[92vh] sm:rounded-3xl sm:border-8 sm:border-neutral-800 sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-y-auto overflow-x-hidden flex flex-col relative bg-[#f4f0ea] shrink-0">
        {currentStep === 0 && (
          <HomePage
            onStart={handleStart}
          />
        )}

        {currentStep >= 1 && currentStep <= QUESTIONS.length && (
          <QuestionPage
            key={currentStep}
            question={QUESTIONS[currentStep - 1]}
            currentStep={currentStep}
            totalSteps={QUESTIONS.length}
            onSelectOption={handleSelectOption}
            onPrevStep={handlePrevStep}
            selectedOptionLabel={answers[currentStep]?.label}
          />
        )}

        {currentStep === 7 && (
          <ResultPage
            personality={activeResult}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
