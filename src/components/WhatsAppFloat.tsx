/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Desktop Floating WhatsApp");
    e.currentTarget.href = url;
  };

  return (
    <a
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 rounded-full bg-emerald-600 p-3.5 text-white shadow-2xl transition-all hover:scale-110 hover:bg-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
      title="Falar com a Equipe"
    >
      {isHovered && (
        <span className="font-display text-xs font-black uppercase tracking-wider pl-2 pr-1 animate-fade-in">
          Garantir Ingressos
        </span>
      )}
      <MessageCircle className="h-6 w-6 fill-white/10" />
    </a>
  );
}
