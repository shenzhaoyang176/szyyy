import React from 'react';
import { PersonalityId } from '../types';

interface IllustrationProps {
  className?: string;
  size?: number | string;
}

// 1. Sofa Illustration (Plush tufted modern Nordic sofa)
export const SofaIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_12px_0px_rgba(0,0,0,0.15)]">
        {/* Soft shadow base */}
        <ellipse cx="200" cy="245" rx="150" ry="20" fill="#1b4d32" opacity="0.25" />
        
        {/* Wooden legs */}
        <path d="M 90 220 L 75 255" stroke="#4a2e1d" strokeWidth="12" strokeLinecap="round" />
        <path d="M 130 220 L 125 255" stroke="#4a2e1d" strokeWidth="12" strokeLinecap="round" />
        <path d="M 270 220 L 275 255" stroke="#4a2e1d" strokeWidth="12" strokeLinecap="round" />
        <path d="M 310 220 L 325 255" stroke="#4a2e1d" strokeWidth="12" strokeLinecap="round" />

        {/* Sofa Main Frame / Backrest - Curved Tufted Plush Bumps */}
        <path
          d="M 60 140 C 60 80, 100 60, 150 60 C 180 60, 200 70, 200 70 C 200 70, 220 60, 250 60 C 300 60, 340 80, 340 140 L 340 190 Q 340 210, 320 210 L 80 210 Q 60 210, 60 190 Z"
          fill="#1b5c3a"
          stroke="#0d331f"
          strokeWidth="6"
        />

        {/* Back Cushion Bumps (Plush Tufting) */}
        <path d="M 80 120 C 80 80, 110 80, 130 110 C 145 75, 175 75, 195 110 C 215 75, 245 75, 260 110 C 280 80, 310 80, 320 120" stroke="#0d331f" strokeWidth="5" fill="none" />

        {/* Left Armrest */}
        <rect x="45" y="110" width="55" height="90" rx="25" fill="#2d8259" stroke="#0d331f" strokeWidth="5" />
        {/* Right Armrest */}
        <rect x="300" y="110" width="55" height="90" rx="25" fill="#2d8259" stroke="#0d331f" strokeWidth="5" />

        {/* Bottom Cushion Seat */}
        <rect x="85" y="150" width="230" height="55" rx="18" fill="#3fa070" stroke="#0d331f" strokeWidth="5" />
        <line x1="160" y1="150" x2="160" y2="205" stroke="#0d331f" strokeWidth="4" />
        <line x1="240" y1="150" x2="240" y2="205" stroke="#0d331f" strokeWidth="4" />

        {/* Cozy Pillows */}
        {/* Yellow Mustard Pillow */}
        <rect x="95" y="125" width="45" height="45" rx="10" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="4" transform="rotate(-12 110 140)" />
        {/* Coral Orange Pillow */}
        <rect x="255" y="125" width="50" height="45" rx="12" fill="#cf533b" stroke="#1a1a1a" strokeWidth="4" transform="rotate(10 280 140)" />

        {/* Blanket/Throw draped */}
        <path d="M 180 155 Q 210 170, 205 230 Q 185 235, 175 205 Z" fill="#e8eedf" stroke="#0d331f" strokeWidth="4" />
        <line x1="182" y1="225" x2="182" y2="238" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="190" y1="227" x2="190" y2="240" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="198" y1="226" x2="198" y2="239" stroke="#1a1a1a" strokeWidth="2" />

        {/* Tag on sofa */}
        <rect x="320" y="165" width="22" height="12" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="2" />
        <text x="323" y="174" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="#1a1a1a">IKEA</text>
      </svg>
    </div>
  );
};

// 2. Nightstand Illustration (Scandinavian Nightstand with Table Lamp & Clock)
export const NightstandIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_12px_0px_rgba(0,0,0,0.15)]">
        {/* Shadow */}
        <ellipse cx="160" cy="290" rx="100" ry="15" fill="#a37618" opacity="0.3" />

        {/* Nightstand Table Legs */}
        <path d="M 90 200 L 75 285" stroke="#3d2b1f" strokeWidth="10" strokeLinecap="round" />
        <path d="M 230 200 L 245 285" stroke="#3d2b1f" strokeWidth="10" strokeLinecap="round" />

        {/* Table Cabinet Main Body */}
        <rect x="70" y="130" width="180" height="90" rx="12" fill="#3a6fa0" stroke="#1a1a1a" strokeWidth="6" />

        {/* Drawer 1 */}
        <rect x="80" y="140" width="160" height="32" rx="6" fill="#588ec2" stroke="#1a1a1a" strokeWidth="4" />
        <circle cx="160" cy="156" r="6" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="3" />

        {/* Drawer 2 */}
        <rect x="80" y="178" width="160" height="34" rx="6" fill="#2d5278" stroke="#1a1a1a" strokeWidth="4" />
        <circle cx="160" cy="195" r="6" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="3" />

        {/* Cozy Mushroom Table Lamp */}
        <path d="M 140 130 Q 140 85, 120 70 Q 160 30, 200 70 Q 180 85, 180 130 Z" fill="#fff5d6" stroke="#1a1a1a" strokeWidth="5" />
        {/* Lamp Base Stem */}
        <rect x="154" y="80" width="12" height="50" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="4" />
        {/* Lamp Shade Top */}
        <path d="M 120 80 Q 160 35, 200 80 Z" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="5" />
        {/* Glow halo */}
        <circle cx="160" cy="70" r="35" fill="#ffeb99" opacity="0.35" />

        {/* Small Retro Alarm Clock */}
        <circle cx="215" cy="115" r="14" fill="#cf533b" stroke="#1a1a1a" strokeWidth="4" />
        <circle cx="215" cy="115" r="10" fill="#ffffff" />
        <path d="M 215 115 L 215 109 M 215 115 L 220 115" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        {/* Clock bells */}
        <circle cx="206" cy="103" r="4" fill="#1a1a1a" />
        <circle cx="224" cy="103" r="4" fill="#1a1a1a" />

        {/* Book on table */}
        <rect x="85" y="122" width="38" height="8" rx="2" fill="#2d8259" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="88" y="115" width="32" height="7" rx="2" fill="#d66a85" stroke="#1a1a1a" strokeWidth="2" />
      </svg>
    </div>
  );
};

// 3. Floor Lamp Illustration (Curved Arched Nordic Floor Lamp)
export const FloorLampIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_12px_0px_rgba(0,0,0,0.15)]">
        {/* Oval Rug under lamp */}
        <ellipse cx="140" cy="300" rx="90" ry="25" fill="#fbe2e8" stroke="#aa4760" strokeWidth="4" strokeDasharray="6 4" />
        <ellipse cx="140" cy="300" rx="60" ry="16" fill="#e0a92d" opacity="0.6" />

        {/* Heavy Circular Lamp Base */}
        <ellipse cx="210" cy="285" rx="35" ry="12" fill="#3a6fa0" stroke="#1a1a1a" strokeWidth="5" />

        {/* Long Curved Metal Arch Stem */}
        <path
          d="M 210 285 C 210 120, 240 40, 110 50 C 70 55, 60 90, 60 110"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Lamp Shade (Pendant Bowl) */}
        <path
          d="M 35 110 Q 60 100, 85 110 Q 90 145, 60 150 Q 30 145, 35 110 Z"
          fill="#d66a85"
          stroke="#1a1a1a"
          strokeWidth="5"
        />

        {/* Golden inner rim */}
        <ellipse cx="60" cy="148" rx="26" ry="8" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="3" />

        {/* Light Cone Ray Spray */}
        <polygon points="36,150 84,150 140,290 20,290" fill="#fff3a8" opacity="0.45" />

        {/* Small Plant Pot nearby */}
        <path d="M 220 285 L 225 255 L 245 255 L 250 285 Z" fill="#cf533b" stroke="#1a1a1a" strokeWidth="4" />
        {/* Plant Leaves */}
        <path d="M 235 255 Q 220 230, 210 240 Q 230 250, 235 255 Z" fill="#2d8259" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M 235 255 Q 250 225, 260 238 Q 242 248, 235 255 Z" fill="#2d8259" stroke="#1a1a1a" strokeWidth="2" />
      </svg>
    </div>
  );
};

// 4. Folding Chair Illustration (Bauhaus Industrial Folding Chair)
export const FoldingChairIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_12px_0px_rgba(0,0,0,0.15)]">
        {/* Floor Shadow */}
        <ellipse cx="150" cy="290" rx="85" ry="15" fill="#264f78" opacity="0.3" />

        {/* Tubular Metal Crossed Legs (X Frame) */}
        {/* Back Leg (Top Left to Bottom Right) */}
        <path d="M 85 100 L 220 280" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" />
        <path d="M 85 100 L 220 280" stroke="#9bc2e6" strokeWidth="6" strokeLinecap="round" />

        {/* Front Leg (Top Right to Bottom Left) */}
        <path d="M 210 160 L 80 280" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" />
        <path d="M 210 160 L 80 280" stroke="#d0d0d0" strokeWidth="6" strokeLinecap="round" />

        {/* Pivot Joint Hinge Ring */}
        <circle cx="152" cy="215" r="8" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="4" />

        {/* Chair Curved Backrest */}
        <rect x="75" y="60" width="130" height="50" rx="10" fill="#3a6fa0" stroke="#1a1a1a" strokeWidth="6" transform="rotate(-5 140 85)" />
        {/* Backrest slots */}
        <rect x="95" y="72" width="14" height="26" rx="4" fill="#ffffff" opacity="0.8" transform="rotate(-5 140 85)" />
        <rect x="123" y="72" width="14" height="26" rx="4" fill="#ffffff" opacity="0.8" transform="rotate(-5 140 85)" />
        <rect x="151" y="72" width="14" height="26" rx="4" fill="#ffffff" opacity="0.8" transform="rotate(-5 140 85)" />

        {/* Chair Seat Pad (Angled) */}
        <path d="M 70 165 L 225 160 L 205 185 L 90 190 Z" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="6" />

        {/* Sticker on leg */}
        <rect x="175" y="230" width="20" height="10" fill="#cf533b" stroke="#1a1a1a" strokeWidth="2" transform="rotate(25 185 235)" />
      </svg>
    </div>
  );
};

// 5. Wardrobe Illustration (Scandinavian Mid-century Wooden Wardrobe)
export const WardrobeIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_12px_0px_rgba(0,0,0,0.15)]">
        {/* Shadow */}
        <ellipse cx="150" cy="315" rx="95" ry="15" fill="#9e3520" opacity="0.3" />

        {/* Wardrobe Wooden Legs */}
        <path d="M 70 280 L 60 315" stroke="#3d2218" strokeWidth="12" strokeLinecap="round" />
        <path d="M 230 280 L 240 315" stroke="#3d2218" strokeWidth="12" strokeLinecap="round" />

        {/* Outer Cabinet Main Frame */}
        <rect x="50" y="40" width="200" height="245" rx="12" fill="#cf533b" stroke="#1a1a1a" strokeWidth="6" />

        {/* Left Door */}
        <rect x="60" y="52" width="86" height="220" rx="6" fill="#e2705a" stroke="#1a1a1a" strokeWidth="4" />
        {/* Right Door (Ajar slightly to reveal messy clothes inside!) */}
        <rect x="150" y="52" width="86" height="220" rx="6" fill="#b8422c" stroke="#1a1a1a" strokeWidth="4" />

        {/* Door Handles */}
        <rect x="132" y="145" width="8" height="35" rx="4" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="2" />
        <rect x="156" y="145" width="8" height="35" rx="4" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="2" />

        {/* Clothes peeking out / overflowing from bottom crack */}
        <path d="M 130 260 C 120 275, 140 290, 160 280 C 180 295, 200 270, 180 260 Z" fill="#3a6fa0" stroke="#1a1a1a" strokeWidth="3" />
        <path d="M 150 265 Q 170 285, 185 272 Z" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="2" />

        {/* Top Coat Hanger Icon Sticker */}
        <circle cx="150" cy="28" r="16" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M 142 30 L 150 22 L 158 30 Z" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

// 6. Drawer Illustration (Retro Steel File Chest of Drawers)
export const DrawerIllustration: React.FC<IllustrationProps> = ({ className = '', size = '100%' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_12px_0px_rgba(0,0,0,0.15)]">
        {/* Floor Shadow */}
        <ellipse cx="150" cy="310" rx="90" ry="15" fill="#53326e" opacity="0.3" />

        {/* Four Cabinet Feet */}
        <rect x="65" y="280" width="16" height="25" fill="#1a1a1a" />
        <rect x="219" y="280" width="16" height="25" fill="#1a1a1a" />

        {/* Main Chest Cabinet Body */}
        <rect x="55" y="45" width="190" height="240" rx="10" fill="#7a5299" stroke="#1a1a1a" strokeWidth="6" />

        {/* Drawer 1 (Top - slightly open with messy papers) */}
        <g transform="translate(0, 0)">
          <rect x="68" y="58" width="164" height="48" rx="6" fill="#936bb3" stroke="#1a1a1a" strokeWidth="4" />
          <rect x="125" y="74" width="50" height="16" rx="4" fill="#ebdcf5" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="135" y1="82" x2="165" y2="82" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Drawer 2 (Middle Top) */}
        <g transform="translate(0, 56)">
          <rect x="68" y="58" width="164" height="48" rx="6" fill="#673f85" stroke="#1a1a1a" strokeWidth="4" />
          <rect x="125" y="74" width="50" height="16" rx="4" fill="#ebdcf5" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="135" y1="82" x2="165" y2="82" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Drawer 3 (Middle Bottom - overflowing key & sock) */}
        <g transform="translate(0, 112)">
          <rect x="68" y="58" width="164" height="48" rx="6" fill="#936bb3" stroke="#1a1a1a" strokeWidth="4" />
          <rect x="125" y="74" width="50" height="16" rx="4" fill="#ebdcf5" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="135" y1="82" x2="165" y2="82" stroke="#1a1a1a" strokeWidth="2" />
          {/* Hanging sock */}
          <path d="M 210 85 Q 220 95, 222 110 L 210 115 L 205 95 Z" fill="#cf533b" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Drawer 4 (Bottom) */}
        <g transform="translate(0, 168)">
          <rect x="68" y="58" width="164" height="48" rx="6" fill="#53326e" stroke="#1a1a1a" strokeWidth="4" />
          <rect x="125" y="74" width="50" height="16" rx="4" fill="#ebdcf5" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="135" y1="82" x2="165" y2="82" stroke="#1a1a1a" strokeWidth="2" />
        </g>

        {/* Vintage Label Tag sticker */}
        <rect x="180" y="20" width="45" height="22" rx="3" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="3" transform="rotate(-8 200 30)" />
        <text x="185" y="34" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="#1a1a1a">NO. 06</text>
      </svg>
    </div>
  );
};

// Composite Artwork for Home Page
export const HomeCompositeArtwork: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center ${className}`}>
      {/* Background Poster Color Cutout */}
      <div className="absolute inset-0 bg-emerald-700/10 rounded-3xl border-2 border-dashed border-neutral-800/30 rotate-[-2deg]" />
      
      {/* Red Chair + Green Plant + Yellow Lamp Stack */}
      <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[6px_10px_0px_rgba(0,0,0,0.1)]">
        {/* Base rug */}
        <ellipse cx="180" cy="310" rx="130" ry="25" fill="#fbe2e8" stroke="#aa4760" strokeWidth="3" />
        
        {/* Red Lounge Chair */}
        <path d="M 120 230 C 100 160, 150 140, 200 170 C 250 140, 290 160, 270 230 Z" fill="#cf533b" stroke="#1a1a1a" strokeWidth="5" />
        <ellipse cx="195" cy="245" rx="80" ry="25" fill="#e2705a" stroke="#1a1a1a" strokeWidth="5" />
        <path d="M 140 260 L 130 305 M 250 260 L 260 305" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />

        {/* Green Plush Pouf / Sofa element */}
        <rect x="60" y="220" width="90" height="65" rx="20" fill="#2d8259" stroke="#1a1a1a" strokeWidth="5" transform="rotate(-10 100 250)" />

        {/* Yellow Mushroom Lamp sitting on stool */}
        <circle cx="280" cy="140" r="28" fill="#ffeb99" opacity="0.6" />
        <path d="M 260 140 Q 280 100, 300 140 Z" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="4" />
        <rect x="277" y="140" width="6" height="30" fill="#1a1a1a" />
        <rect x="265" y="170" width="30" height="8" rx="2" fill="#3a6fa0" stroke="#1a1a1a" strokeWidth="3" />

        {/* Hanging Pothos Plant Leaf Decorative Doodles */}
        <path d="M 90 80 Q 70 120, 85 150 Q 110 120, 90 80 Z" fill="#2d8259" stroke="#1a1a1a" strokeWidth="3" />
        <path d="M 110 95 Q 130 130, 120 160 Q 95 140, 110 95 Z" fill="#3fa070" stroke="#1a1a1a" strokeWidth="3" />
        
        {/* Wall Clock */}
        <circle cx="180" cy="75" r="30" fill="#ffffff" stroke="#1a1a1a" strokeWidth="5" />
        <circle cx="180" cy="75" r="24" fill="#ebdcf5" />
        <line x1="180" y1="75" x2="180" y2="58" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
        <line x1="180" y1="75" x2="192" y2="75" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
        
        {/* Graphic Doodle Star */}
        <path d="M 310 60 L 315 75 L 330 80 L 315 85 L 310 100 L 305 85 L 290 80 L 305 75 Z" fill="#e0a92d" stroke="#1a1a1a" strokeWidth="2" />
      </svg>
    </div>
  );
};

// Dispatcher for Personality Illustrations
export const PersonalityIllustration: React.FC<{ id: PersonalityId; className?: string; size?: number | string }> = ({
  id,
  className = '',
  size = '100%'
}) => {
  switch (id) {
    case 'sofa':
      return <SofaIllustration className={className} size={size} />;
    case 'nightstand':
      return <NightstandIllustration className={className} size={size} />;
    case 'floor_lamp':
      return <FloorLampIllustration className={className} size={size} />;
    case 'folding_chair':
      return <FoldingChairIllustration className={className} size={size} />;
    case 'wardrobe':
      return <WardrobeIllustration className={className} size={size} />;
    case 'drawer':
      return <DrawerIllustration className={className} size={size} />;
    default:
      return <SofaIllustration className={className} size={size} />;
  }
};
