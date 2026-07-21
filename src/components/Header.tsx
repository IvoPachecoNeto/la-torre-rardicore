/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Logo from "./Logo";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track click and assign final WhatsApp url dynamically
    const url = handleWhatsAppClickTrack("Header Button");
    e.currentTarget.href = url;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo className="h-10 sm:h-11" />

        <div className="flex items-center gap-4">
          <a
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 font-display text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-red-500/10 transition-all hover:scale-105 hover:shadow-red-500/20 active:scale-95"
          >
            <span className="relative z-10">Garantir Ingresso</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-red-600 transition-transform duration-300 group-hover:translate-x-0" />
          </a>
        </div>
      </div>
    </header>
  );
}
