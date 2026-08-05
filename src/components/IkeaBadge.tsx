import React from 'react';

// IKEA Wishlist Logo Badge
export const IkeaWishlistLogo: React.FC<{ className?: string; dark?: boolean }> = ({ className = '', dark = false }) => {
  return (
    <div className={`inline-flex flex-col items-start select-none font-sans ${className}`}>
      <div className={`font-black tracking-tighter text-2xl leading-none flex items-baseline gap-1 ${dark ? 'text-neutral-900' : 'text-neutral-900'}`}>
        <span className="text-xl md:text-2xl tracking-tight">IKEA</span>
        <span className="font-serif italic font-normal text-lg md:text-xl text-yellow-600 dark:text-yellow-500">WISHLIST</span>
      </div>
      <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase -mt-0.5">
        EXHIBITION 2026 EDITION
      </span>
    </div>
  );
};

// Retro Exhibition Stamp Seal (Round)
export const ExhibitionStamp: React.FC<{ text?: string; date?: string; color?: string; className?: string }> = ({
  text = "DAL 1950",
  date = "2026.08",
  color = "#2d8259",
  className = ""
}) => {
  return (
    <div className={`relative w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center p-1 font-mono text-[9px] leading-tight select-none rotate-[-8deg] ${className}`} style={{ borderColor: color, color: color }}>
      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        <text fontSize="8.5" fontWeight="bold" fill={color} letterSpacing="1">
          <textPath href="#circlePath" startOffset="0%">
            • A DESIGNER'S EYE • NORDIC FURNITURE
          </textPath>
        </text>
      </svg>
      <div className="text-center font-bold font-sans">
        <div className="text-xs font-black uppercase tracking-tighter">{text}</div>
        <div className="text-[8px] opacity-80">{date}</div>
      </div>
    </div>
  );
};

// Price / Item Tag Badge
export const ProductTagBadge: React.FC<{ price?: string; artNo?: string; className?: string }> = ({
  price = "¥ 199.00",
  artNo = "804.101.99",
  className = ""
}) => {
  return (
    <div className={`bg-amber-100 text-neutral-900 border-2 border-neutral-900 px-2.5 py-1 font-mono text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      <div className="flex items-center justify-between gap-3 text-[10px] border-b border-neutral-900/30 pb-0.5 font-bold">
        <span>ITEM NO.</span>
        <span>{artNo}</span>
      </div>
      <div className="font-extrabold text-sm tracking-tight text-red-600 mt-0.5">
        {price}
      </div>
    </div>
  );
};

// Barcode Graphic
export const BarcodeGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center select-none font-mono ${className}`}>
      <div className="flex items-end h-6 gap-[2px]">
        {[2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2].map((w, i) => (
          <div key={i} className="bg-neutral-900 h-full" style={{ width: `${w * 1.5}px` }} />
        ))}
      </div>
      <span className="text-[8px] tracking-widest text-neutral-700 mt-0.5">502.812.90.2026</span>
    </div>
  );
};

// Starburst graphic shape
export const StarburstBadge: React.FC<{ text?: string; color?: string; className?: string }> = ({
  text = "NEW!",
  color = "#e0a92d",
  className = ""
}) => {
  return (
    <div className={`relative w-14 h-14 flex items-center justify-center font-sans font-black text-xs text-neutral-900 ${className}`}>
      <svg className="absolute inset-0 w-full h-full drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" viewBox="0 0 100 100" fill={color}>
        <polygon points="50,0 63,18 85,9 82,32 100,45 88,63 95,85 73,83 60,100 45,88 27,95 29,73 9,60 21,45 9,27 32,29 45,9" />
      </svg>
      <span className="relative z-10 text-[10px] uppercase font-bold text-center leading-none px-1">
        {text}
      </span>
    </div>
  );
};
