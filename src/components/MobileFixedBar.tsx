/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function MobileFixedBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // Show bar after scrolling 400px down (past the hero fold)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Mobile Sticky Bar");
    e.currentTarget.href = url;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 border-t border-white/10 px-4 py-3 pb-safe-bottom backdrop-blur-lg md:hidden flex items-center justify-between gap-4 shadow-2xl"
        >
          {/* Info Text */}
          <div className="flex flex-col text-left">
            <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
              {CONFIG.shortDateStr} • {CONFIG.artistName}
            </span>
            <span className="text-[10px] text-slate-400">
              Despedida no La Torre
            </span>
          </div>

          {/* Call to Action Button */}
          <a
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-red-600/30 active:scale-95"
          >
            <MessageSquare className="h-4 w-4" />
            <span>GARANTIR INGRESSO</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
