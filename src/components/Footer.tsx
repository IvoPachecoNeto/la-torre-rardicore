/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Logo from "./Logo";
import { CONFIG } from "../config";
import { Instagram, Facebook, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8 text-slate-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          {/* Logo and event wrap */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo className="h-12" />
            <p className="mt-4 max-w-md text-xs text-slate-500 leading-relaxed">
              O La Torre Sport Bar é o ponto de encontro oficial da noite de Curitiba. Viva experiências inesquecíveis com sistemas de som acústicos calibrados por profissionais e coquetelaria exclusiva no Batel.
            </p>
          </div>

          {/* Social Links & Address quick info */}
          <div className="md:col-span-6 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center gap-4 mb-4">
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-3 text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                title="Siga no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-3 text-slate-400 hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                title="Curta no Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <p className="flex items-center gap-1 text-xs font-semibold text-white/80">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>Av. Vicente Machado, 770 — Batel, Curitiba — PR</span>
            </p>
          </div>
        </div>

        {/* Fineprint & Schema metadata representation */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <p>© 2026 La Torre Sport Bar. Todos os direitos reservados. Evento "La Torre Rardicóri".</p>
          <div className="flex gap-4">
            <a href={CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 flex items-center gap-1">
              <span>Como chegar</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span>Classificação +18</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
