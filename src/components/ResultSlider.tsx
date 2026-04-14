"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, label }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] rounded-t-full overflow-hidden cursor-ew-resize border border-white/5 bg-[#1a1815]"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="Après" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clip Path) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Avant" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-[2px] bg-secondary/80 shadow-[0_0_15px_rgba(197,160,89,0.5)] z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-[#1a1815] shadow-xl flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="m11 17-5-5 5-5m2 10 5-5-5-5"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur-md text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
        Avant
      </div>
      <div className="absolute top-6 right-6 z-10 bg-secondary/80 backdrop-blur-md text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
        Après
      </div>

      {itemLabel(label)}
    </div>
  );
}

function itemLabel(label?: string) {
  if (!label) return null;
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
      <span className="text-secondary text-[10px] uppercase tracking-[0.4em] font-bold drop-shadow-lg shadow-black">
        {label}
      </span>
    </div>
  );
}
