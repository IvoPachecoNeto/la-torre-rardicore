/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Calendar, Clock, MapPin } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function FinalCTA() {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Final CTA Bottom");
    e.currentTarget.href = url;
  };

  return (
    <section className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5 text-center">
      {/* Background spotlights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs font-semibold tracking-[0.3em] text-red-500 uppercase"
        >
          Última Chance
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 font-display text-4xl font-black tracking-tight text-white uppercase sm:text-5xl md:text-6xl"
        >
          A ÚLTIMA NOITE ANTES DA TURNÊ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-base text-slate-300 leading-relaxed sm:text-lg"
        >
          O DJ Zóio se despede do Brasil no La Torre Sport Bar. Garanta sua entrada diretamente com nossa equipe no WhatsApp antes que os lotes se esgotem.
        </motion.p>

        {/* Small event detail tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 uppercase tracking-wider"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 border border-white/5">
            <Calendar className="h-3.5 w-3.5 text-red-500" />
            {CONFIG.dateStr}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 border border-white/5">
            <Clock className="h-3.5 w-3.5 text-blue-500" />
            Abertura às 22h
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 border border-white/5">
            <MapPin className="h-3.5 w-3.5 text-emerald-500" />
            Av. Vicente Machado, 770
          </span>
        </motion.div>

        {/* Huge Call To Action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center"
        >
          <a
            onClick={handleCtaClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-[60px] w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-8 py-5 font-display text-base font-black tracking-wider text-white uppercase shadow-2xl shadow-red-500/30 transition-all hover:-translate-y-0.5 hover:shadow-red-500/50 active:translate-y-0"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageSquare className="h-5 w-5 fill-white/10" />
            <span>GARANTIR MEU INGRESSO PELO WHATSAPP</span>
          </a>
          
          <p className="mt-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Sem cadastro. Sem aplicativo. Atendimento direto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
