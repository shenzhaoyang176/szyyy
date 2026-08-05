import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';
import { Personality } from '../types';
import { PersonalityIllustration } from './FurnitureIllustrations';
import { IkeaWishlistLogo, ExhibitionStamp, BarcodeGraphic, ProductTagBadge } from './IkeaBadge';

interface ResultPageProps {
  personality: Personality;
  onRestart: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  personality,
  onRestart
}) => {
  const posterRef = useRef<HTMLDivElement>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Trigger celebratory confetti on reveal
  useEffect(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#e0a92d', '#2d8259', '#3a6fa0', '#cf533b', '#7a5299']
      });
    } catch {
      // safe fallback
    }
  }, [personality]);

  // Handle saving poster image as PNG
  const handleSavePoster = async () => {
    if (!posterRef.current || isGeneratingImage) return;
    setIsGeneratingImage(true);

    try {
      const dataUrl = await toPng(posterRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        style: {
          transform: 'scale(1)',
        }
      });

      const link = document.createElement('a');
      link.download = `家具人格-${personality.name}-海报.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate poster image:', err);
      // Fallback share logic: copy text to clipboard
      handleShareText();
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleShareText = () => {
    const shareText = `【测一测你是哪种家具人格？】我的测试结果是：${personality.name}！关键词：${personality.keywords.join('、')}。“${personality.quote}” 快来测测你的家具人格吧！`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="relative w-full min-h-full bg-[#1a1a1a] text-neutral-900 flex flex-col items-center justify-start p-3 sm:p-5 pb-16 select-none font-sans overflow-y-auto overflow-x-hidden">
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-md flex items-center justify-between mb-3 text-white text-xs font-mono shrink-0">
        <button
          onClick={onRestart}
          className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded border border-neutral-700 text-yellow-400 font-bold cursor-pointer"
        >
          <span>↺</span> 重新测试
        </button>
      </div>

      {/* Main Exhibition Poster Canvas Card */}
      <motion.div
        ref={posterRef}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-md p-4 sm:p-5 border-8 border-neutral-900 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-start gap-3 my-1 shrink-0"
        style={{ backgroundColor: personality.paperBg }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30 z-10 mix-blend-multiply overflow-hidden rounded-sm" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`
          }}
        />

        {/* Decorative Top Banner */}
        <div className="relative z-20 flex items-start justify-between border-b-2 border-neutral-900 pb-3">
          <div>
            <IkeaWishlistLogo />
            <div className="text-[9px] font-mono font-bold tracking-widest text-neutral-600 uppercase mt-0.5">
              PERSONALITY EXHIBITION POSTER
            </div>
          </div>

          <ExhibitionStamp
            text={personality.titleName}
            date="100% MATCH"
            color={personality.themeColor}
            className="scale-90 origin-right"
          />
        </div>

        {/* Poster Main Personality Title */}
        <div className="relative z-20 my-3">
          <div className="inline-block bg-neutral-900 text-white px-2.5 py-0.5 text-[10px] font-mono tracking-widest font-black uppercase mb-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            YOUR FURNITURE TYPE
          </div>

          {/* Furniture Name strictly on a single line */}
          <div className="w-full overflow-hidden">
            <h1 
              className="text-2xl sm:text-3.5xl font-black tracking-tight leading-tight whitespace-nowrap flex items-baseline gap-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.12)]"
              style={{ color: personality.themeColor }}
            >
              <span className="text-lg sm:text-2xl font-bold text-neutral-800 shrink-0">你是——</span>
              <span className="shrink-0">{personality.name}</span>
            </h1>
          </div>

          <div className="text-[11px] font-mono tracking-widest font-extrabold text-neutral-500 uppercase mt-1">
            {personality.englishTitle}
          </div>
        </div>

        {/* Keywords Tags Section */}
        <div className="relative z-20 flex flex-wrap gap-1.5 my-2">
          {personality.keywords.map((kw, i) => (
            <span
              key={i}
              className="bg-white border-2 border-neutral-900 font-bold text-xs sm:text-sm px-2.5 py-1 shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] text-neutral-900"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* Large Vector Illustration from below animation */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-20 my-3 w-full max-w-[240px] mx-auto py-2"
        >
          <PersonalityIllustration id={personality.id} size={220} className="mx-auto" />
          
          {/* Badge Tag */}
          <div className="absolute -bottom-1 right-2">
            <ProductTagBadge artNo={personality.badgeCode} price={`MATCH ${personality.matchRate}`} />
          </div>
        </motion.div>

        {/* Personality Description Box */}
        <div className="relative z-20 bg-white border-2 border-neutral-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-3">
          <div className="flex items-center justify-between border-b-2 border-neutral-900/20 pb-1.5 mb-2.5">
            <span className="text-[10px] font-mono font-black text-neutral-500 uppercase tracking-wider">
              ANALYSIS ▪ 人格特质深度解剖
            </span>
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
          </div>

          <div className="space-y-2 text-xs sm:text-sm font-semibold text-neutral-800 leading-relaxed">
            {personality.descriptionLines.map((line, idx) => (
              <p key={idx} className="flex items-start gap-2">
                <span className="text-red-500 font-extrabold shrink-0 mt-0.5">●</span>
                <span>{line}</span>
              </p>
            ))}
          </div>

          {/* Quote Strip */}
          <div className="mt-3.5 pt-3 border-t-2 border-neutral-900/30 bg-amber-50/80 -mx-4 -mb-4 p-3 rounded-b-md">
            <p className="font-serif italic text-xs sm:text-sm font-bold text-neutral-900 text-center leading-normal">
              “{personality.quote}”
            </p>
          </div>
        </div>

        {/* Compatibility Matrix Footer Tag */}
        <div className="relative z-20 bg-neutral-900 text-white p-3 border-2 border-neutral-900 text-xs font-mono my-2 shadow-[3px_3px_0px_0px_#e0a92d]">
          <div className="flex items-center justify-between border-b border-neutral-700 pb-1 mb-1 font-bold">
            <span className="text-yellow-400">● 最佳灵魂搭档:</span>
            <span className="text-white font-extrabold">{personality.compatibilityBest}</span>
          </div>
          <div className="flex items-center justify-between font-bold">
            <span className="text-red-400">▲ 相爱相杀冤家:</span>
            <span className="text-neutral-300">{personality.compatibilityWorst}</span>
          </div>
        </div>

        {/* Footer Barcode */}
        <footer className="relative z-20 pt-3 border-t-2 border-neutral-900 flex items-end justify-between">
          <div className="text-[9px] font-mono text-neutral-600 font-bold">
            NORDIC FURNITURE PERSONALITY EXHIBITION
            <br />
            SCAN TO SHARE YOUR LIFE STYLE
          </div>
          <BarcodeGraphic className="scale-75 origin-right" />
        </footer>
      </motion.div>

      {/* Action Bar Bottom */}
      <div className="w-full max-w-md mt-4 flex flex-col gap-2.5 shrink-0">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSavePoster}
          disabled={isGeneratingImage}
          id="save-poster-btn"
          className="w-full bg-[#cf533b] text-white font-extrabold text-base py-3.5 px-6 border-2 border-white shadow-[4px_4px_0px_0px_#e0a92d] hover:bg-red-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {isGeneratingImage ? (
            <span>正在生成高精海报...</span>
          ) : (
            <>
              <span>📸 保存/生成海报</span>
              <span className="text-xs bg-black/30 px-2 py-0.5 rounded font-mono">PNG</span>
            </>
          )}
        </motion.button>

        <div className="flex gap-2">
          <button
            onClick={handleShareText}
            className="flex-1 bg-white text-neutral-900 font-bold text-xs py-2.5 px-3 border-2 border-neutral-900 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] hover:bg-yellow-100 transition-colors flex items-center justify-center gap-1"
          >
            {copiedLink ? '✓ 结果文本已复制!' : '🔗 复制结果文案'}
          </button>

          <button
            onClick={onRestart}
            className="flex-1 bg-neutral-800 text-white font-bold text-xs py-2.5 px-3 border-2 border-neutral-600 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] hover:bg-neutral-700 transition-colors flex items-center justify-center gap-1"
          >
            <span>再测一次 ↺</span>
          </button>
        </div>
      </div>
    </div>
  );
};
