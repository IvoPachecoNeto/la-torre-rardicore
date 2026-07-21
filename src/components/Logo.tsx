/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CONFIG } from "../config";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12", showText = true }: LogoProps) {
  const hasCustomLogo = CONFIG.logoUrl && CONFIG.logoUrl.trim() !== "";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {hasCustomLogo ? (
        <img
          src={CONFIG.logoUrl}
          alt={CONFIG.eventName || "La Torre Logo"}
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain max-h-14 filter drop-shadow-[0_0_8px_rgba(239,68,68,0.25)]"
        />
      ) : (
        /* Stylized Modern Tower + Equalizer Emblem */
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
        >
          {/* Outer Hexagon / Shield */}
          <path
            d="M50 5L90 28.1V71.9L50 95L10 71.9V28.1L50 5Z"
            stroke="url(#emblemGrad)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* Stylized Tower / Castle Battlement silhouette */}
          <path
            d="M32 65V45L38 48V35H44V39H50H56V39H62V35H68V48L74 45V65L50 72L32 65Z"
            fill="url(#towerGrad)"
            className="animate-pulse"
          />

          {/* Music Soundwave Bars integrated inside tower */}
          <line x1="42" y1="58" x2="42" y2="48" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="50" y1="58" x2="50" y2="43" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="58" y1="58" x2="58" y2="50" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />

          <defs>
            <linearGradient id="emblemGrad" x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EF4444" /> {/* Crimson Red */}
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#3B82F6" /> {/* Deep Royal Blue */}
            </linearGradient>
            <linearGradient id="towerGrad" x1="32" y1="50" x2="74" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>
        </svg>
      )}
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg sm:text-xl font-black tracking-wider text-white">
            LA TORRE
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] font-medium tracking-[0.25em] text-red-500 uppercase">
            Sport Bar • Club
          </span>
        </div>
      )}
    </div>
  );
}

