import React from 'react';
import { motion } from 'motion/react';
import { IkeaWishlistLogo, ExhibitionStamp, StarburstBadge, BarcodeGraphic } from './IkeaBadge';
import { HomeCompositeArtwork } from './FurnitureIllustrations';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#f4f0ea] text-neutral-900 flex flex-col justify-between p-4 sm:p-6 overflow-hidden select-none font-sans border-8 border-neutral-900">
      {/* Paper texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-10 mix-blend-multiply" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative Color Blocks (Brutalist Modern Poster background cutouts) */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#e0a92d] rounded-full blur-2xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-20 -left-16 w-56 h-56 bg-[#2d8259] rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -right-10 w-40 h-40 bg-[#cf533b] rounded-full blur-2xl opacity-25 pointer-events-none" />

      {/* Header Section */}
      <header className="relative z-20 flex items-start justify-between gap-2 pt-2 border-b-2 border-neutral-900/80 pb-4">
        <div>
          <IkeaWishlistLogo />
          <div className="text-[10px] font-mono tracking-wider font-bold text-neutral-600 mt-1 uppercase">
            H5 INTERACTIVE QUIZ • NORDIC DESIGN
          </div>
        </div>

        {/* Exhibition Round Stamp Seal */}
        <ExhibitionStamp text="DAL 1950" date="EXHIBITION" color="#2d8259" className="scale-90" />
      </header>

      {/* Main Content Area */}
      <main className="relative z-20 my-auto py-6 flex flex-col items-center text-center">
        {/* Floating Starburst Tag */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute right-2 top-0 z-30"
        >
          <StarburstBadge text="2026 HOT" color="#e0a92d" />
        </motion.div>

        {/* Main Title Banner */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-sm mb-4"
        >
          <div className="inline-block bg-neutral-900 text-white px-3 py-1 text-xs font-mono tracking-widest font-bold uppercase mb-2 shadow-[3px_3px_0px_0px_#e0a92d]">
            FURNITURE PERSONALITY TEST
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-neutral-900">
            测一测你是哪种
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#cf533b] mt-1 drop-shadow-[2px_2px_0px_#1a1a1a]">
              家具人格？
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base font-medium text-neutral-700 bg-amber-100/80 border border-neutral-900/30 px-3 py-1.5 rounded-md inline-block">
            6种家具人格，找到最懂你的生活方式
          </p>
        </motion.div>

        {/* Animated Artwork Graphic */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full max-w-[280px] my-2"
        >
          <HomeCompositeArtwork />

          {/* Price / Catalog tag overlay */}
          <div className="absolute -bottom-2 -left-2 z-30 transform -rotate-6">
            <div className="bg-white border-2 border-neutral-900 px-2 py-0.5 text-[10px] font-mono font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              ITEM: #NORDIC-2026
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xs mt-6 flex flex-col gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onStart}
            id="start-quiz-btn"
            className="w-full bg-neutral-900 text-white font-extrabold text-lg py-4 px-6 rounded-none border-2 border-neutral-900 shadow-[5px_5px_0px_0px_#e0a92d] hover:bg-[#cf533b] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>开始测试</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>
      </main>

      {/* Footer / Barcode */}
      <footer className="relative z-20 pt-3 border-t-2 border-neutral-900/80 flex items-center justify-between text-[10px] font-mono font-bold text-neutral-600">
        <div>
          <span>DESIGNED BY NORDIC ART STUDIO</span>
          <br />
          <span>LIMITED EDITION EXHIBITION</span>
        </div>
        <BarcodeGraphic className="scale-75 origin-right" />
      </footer>
    </div>
  );
};
