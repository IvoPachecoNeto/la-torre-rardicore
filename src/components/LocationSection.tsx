/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, MessageSquare } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function LocationSection() {
  const handleTicketClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Location Section Ticket CTA");
    e.currentTarget.href = url;
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Light highlights */}
      <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          
          {/* Address & CTA column (Left side, takes 5 cols) */}
          <div className="flex flex-col justify-center text-center lg:col-span-5 lg:text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-500 uppercase">
              O Local
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
              COMO CHEGAR
            </h2>
            <div className="mt-3 h-1 w-20 bg-red-500 mx-auto lg:mx-0" />

            <div className="mt-8 flex items-start gap-4 text-left rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="rounded-full bg-red-500/10 p-3 text-red-500 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                  La Torre Sport Bar
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {CONFIG.addressStr}
                </p>
                <p className="mt-2 font-mono text-[11px] text-slate-500 uppercase">
                  Bairro Batel • Curitiba — PR
                </p>
              </div>
            </div>

            {/* Address navigation action (does not compete with ticket CTA) */}
            <div className="mt-6">
              <a
                href={CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-white"
              >
                <Navigation className="h-4 w-4" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>

            {/* Prominent Ticket CTA */}
            <div className="mt-12 flex flex-col items-center lg:items-start">
              <a
                onClick={handleTicketClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-6 py-3.5 font-display text-sm font-black tracking-wider text-white uppercase shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:shadow-red-500/40 active:translate-y-0"
              >
                <MessageSquare className="h-4 w-4" />
                <span>GARANTIR MEU INGRESSO</span>
              </a>
              <p className="mt-2 text-[10px] text-slate-500">
                Atendimento rápido pelo WhatsApp
              </p>
            </div>
          </div>

          {/* Interactive Google Map Embedding column (Right side, takes 7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
            >
              {/* Premium dark overlay mask over google maps iFrame for brand harmony */}
              <iframe
                title="La Torre Sport Bar Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.addressStr)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
