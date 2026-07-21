/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Zap, MessageSquare } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function Hero() {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Hero CTA Main");
    e.currentTarget.href = url;
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden bg-black px-4 py-12 sm:px-6 lg:px-8">
      {/* Background with Dark Nightclub Vignette and Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src={CONFIG.heroBgUrl}
          alt="La Torre Party Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-40 scale-105 filter brightness-75 contrast-125"
        />
        {/* Colorful Spotlights and Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-red-600/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Small Tagline / Presenter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-400"
        >
          <Zap className="h-3 w-3 animate-bounce text-red-500" />
          {CONFIG.eventName}
        </motion.div>

        {/* Headline & Artist Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="font-display text-5xl font-black tracking-tight text-white uppercase sm:text-7xl md:text-8xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              {CONFIG.artistName}
            </span>
            <span className="mt-2 block text-2xl font-bold tracking-[0.15em] text-red-500 sm:text-3xl md:text-4xl">
              ÚLTIMO SHOW NO BRASIL
            </span>
          </h1>
        </motion.div>

        {/* Text of Support / Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-base text-slate-300 leading-relaxed sm:text-lg md:text-xl"
        >
          “Antes da primeira turnê internacional, a despedida oficial acontece aqui no Batel.”
        </motion.p>

        {/* Objective Event Metadata Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-12 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:grid-cols-3 sm:p-6"
        >
          {/* Date */}
          <div className="flex flex-col items-center p-2 text-center">
            <div className="mb-2 rounded-full bg-blue-500/10 p-2 text-blue-400">
              <Calendar className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Data</span>
            <span className="font-display text-sm font-semibold text-white mt-1">
              {CONFIG.dateStr}
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center border-y border-white/10 py-4 sm:border-y-0 sm:border-x sm:py-0 sm:px-4 text-center">
            <div className="mb-2 rounded-full bg-red-500/10 p-2 text-red-400">
              <Clock className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Horário</span>
            <span className="font-display text-sm font-semibold text-white mt-1">
              Abertura às 22h
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center p-2 text-center">
            <div className="mb-2 rounded-full bg-emerald-500/10 p-2 text-emerald-400">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Local</span>
            <span className="font-display text-sm font-semibold text-white mt-1">
              La Torre — Batel
            </span>
          </div>
        </motion.div>

        {/* Main High Contrast Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <a
            onClick={handleCtaClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-[56px] w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-8 py-4 font-display text-base font-black tracking-wider text-white uppercase shadow-2xl shadow-red-500/30 transition-all hover:-translate-y-0.5 hover:shadow-red-500/50 active:translate-y-0 sm:w-auto"
          >
            {/* Pulsing light effect inside button */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <MessageSquare className="h-5 w-5 fill-white/10" />
            <span>{CONFIG.whatsappButtonText}</span>
          </a>

          {/* Prompt Direct Subtexts as requested */}
          <p className="mt-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            {CONFIG.whatsappSubtext}
          </p>

          <div className="mt-4 flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-blue-400 border border-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>Venda rápida e atendimento humano</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
