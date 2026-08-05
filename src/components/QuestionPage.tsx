import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Option } from '../types';
import { IkeaWishlistLogo, ProductTagBadge } from './IkeaBadge';

interface QuestionPageProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onSelectOption: (option: Option) => void;
  onPrevStep: () => void;
  selectedOptionLabel?: string;
}

const COLOR_TAG_MAP = {
  yellow: {
    bg: 'bg-[#fef3d6]',
    tagBg: 'bg-[#e0a92d]',
    tagText: 'text-neutral-900',
    border: 'border-neutral-900',
    activeBg: 'bg-[#fbe396]',
    activeBorder: 'border-neutral-900'
  },
  green: {
    bg: 'bg-[#e8eedf]',
    tagBg: 'bg-[#2d8259]',
    tagText: 'text-white',
    border: 'border-neutral-900',
    activeBg: 'bg-[#c3dac2]',
    activeBorder: 'border-neutral-900'
  },
  blue: {
    bg: 'bg-[#dce8f5]',
    tagBg: 'bg-[#3a6fa0]',
    tagText: 'text-white',
    border: 'border-neutral-900',
    activeBg: 'bg-[#b3d1f0]',
    activeBorder: 'border-neutral-900'
  },
  red: {
    bg: 'bg-[#fce4de]',
    tagBg: 'bg-[#cf533b]',
    tagText: 'text-white',
    border: 'border-neutral-900',
    activeBg: 'bg-[#f8bebd]',
    activeBorder: 'border-neutral-900'
  }
};

export const QuestionPage: React.FC<QuestionPageProps> = ({
  question,
  currentStep,
  totalSteps,
  onSelectOption,
  onPrevStep,
  selectedOptionLabel
}) => {
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(selectedOptionLabel);

  useEffect(() => {
    setSelectedLabel(selectedOptionLabel);
  }, [question.id, selectedOptionLabel]);

  const handleChoose = (option: Option) => {
    setSelectedLabel(option.label);
    // Slight tactile delay for animation feedback
    setTimeout(() => {
      onSelectOption(option);
    }, 280);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f4f0ea] text-neutral-900 flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none font-sans border-8 border-neutral-900">
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 z-10 mix-blend-multiply" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`
        }}
      />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between border-b-2 border-neutral-900/80 pb-3">
        <IkeaWishlistLogo className="scale-90 origin-left" />

        {/* Step Progress Pills */}
        <div className="flex items-center gap-1.5 font-mono">
          <ProductTagBadge 
            price={`STEP ${currentStep}/${totalSteps}`} 
            artNo={question.code} 
            className="scale-90 origin-right"
          />
        </div>
      </header>

      {/* Animated Question Body */}
      <AnimatePresence mode="wait">
        <motion.main
          key={question.id}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative z-20 my-auto py-4 flex flex-col items-start w-full max-w-md mx-auto"
        >
          {/* Question Code Badge Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-neutral-900 text-white font-mono font-black text-2xl px-3 py-1 rounded-none shadow-[3px_3px_0px_0px_#e0a92d]">
              {question.code}.
            </span>
            {question.subtitle && (
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600 bg-neutral-200/80 px-2 py-1 border border-neutral-900/20">
                {question.subtitle}
              </span>
            )}
          </div>

          {/* Question Text Display */}
          <div className="w-full bg-white border-2 border-neutral-900 p-4 sm:p-5 mb-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-3 -right-2 bg-yellow-400 text-neutral-900 text-[10px] font-mono font-black border border-neutral-900 px-2 py-0.5 rotate-3">
              EXHIBITION QUESTION
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug tracking-tight">
              {question.questionText}
            </h2>
          </div>

          {/* 4 Options Grid */}
          <div className="w-full flex flex-col gap-3">
            {question.options.map((option) => {
              const isSelected = selectedLabel === option.label;
              const style = COLOR_TAG_MAP[option.colorTag];

              return (
                <motion.button
                  key={option.label}
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleChoose(option)}
                  id={`option-${question.code}-${option.label}`}
                  className={`relative w-full text-left p-3.5 sm:p-4 rounded-xl border-2 ${style.border} transition-all duration-200 cursor-pointer flex items-center gap-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    isSelected ? `${style.activeBg} ring-2 ring-neutral-900 scale-[1.01]` : `${style.bg} hover:bg-white`
                  }`}
                >
                  {/* Tag A/B/C/D Pill */}
                  <div className={`w-10 h-10 shrink-0 rounded-lg ${style.tagBg} ${style.tagText} border-2 border-neutral-900 font-mono font-extrabold text-lg flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                    {option.label}
                  </div>

                  {/* Option Text */}
                  <span className="font-bold text-sm sm:text-base text-neutral-900 leading-tight pr-2">
                    {option.text}
                  </span>

                  {/* Selected Indicator Checkmark */}
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto bg-neutral-900 text-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-black shrink-0"
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.main>
      </AnimatePresence>

      {/* Footer Navigation & Progress */}
      <footer className="relative z-20 pt-4 border-t-2 border-neutral-900/80 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={onPrevStep}
          disabled={currentStep === 1}
          className={`text-xs font-mono font-bold px-3 py-2 border-2 border-neutral-900 bg-white transition-opacity ${
            currentStep === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-neutral-100 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          ← 上一题
        </button>

        {/* Progress Bar & Counter */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1 mb-1">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`w-3.5 h-2 border border-neutral-900 transition-colors ${
                  idx + 1 <= currentStep ? 'bg-[#cf533b]' : 'bg-neutral-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono font-extrabold text-neutral-800">
            {currentStep} / {totalSteps}
          </span>
        </div>

        {/* Helper status text */}
        <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
          TAP OPTION TO NEXT
        </div>
      </footer>
    </div>
  );
};
