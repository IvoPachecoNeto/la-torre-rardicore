/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Wine, Moon, Compass, X, ZoomIn } from "lucide-react";
import { CONFIG } from "../config";

export default function VenueSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      title: "Localização no Batel",
      desc: "Localizado no coração do Batel, o bairro mais nobre e vibrante da noite de Curitiba."
    },
    {
      icon: <Wine className="h-5 w-5 text-blue-500" />,
      title: "Estrutura de Bar Completa",
      desc: "Coquetelaria artesanal clássica, cervejas premium, chopp gelado e atendimento impecável."
    },
    {
      icon: <Moon className="h-5 w-5 text-emerald-500" />,
      title: "Ambiente Noturno Premium",
      desc: "Luzes de pista, fumaça, som de alta fidelidade e climatização de ponta para total conforto."
    },
    {
      icon: <Compass className="h-5 w-5 text-purple-500" />,
      title: "Endereço de Fácil Identificação",
      desc: "Na famosa Av. Vicente Machado, ponto tradicional com acesso simples para transporte por aplicativo."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-black px-4 py-20 sm:px-6 lg:px-8">
      {/* Light highlights */}
      <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Title */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-500 uppercase">
            A Experiência
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl md:text-5xl">
            UMA NOITE NO LA TORRE
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-red-500 to-blue-500" />
          <p className="mt-6 text-base text-slate-300 leading-relaxed">
            O La Torre Sport Bar inaugura sua nova fase noturna com som, estrutura e ambiente preparados para uma despedida à altura do DJ Zóio.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:border-white/10 transition-colors"
            >
              <div className="mb-3 inline-flex rounded-lg bg-white/5 p-2.5">
                {feat.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                {feat.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Image Gallery */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CONFIG.venuePhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveImageIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900 border border-white/5 cursor-pointer shadow-lg"
            >
              {/* Image element with required referrerPolicy */}
              <img
                src={photo.url}
                alt={photo.caption}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              {/* Overlay with Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
              {/* Title / Caption label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3 text-[10px] font-semibold text-white/95 tracking-wide uppercase">
                {photo.caption}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Modal for Photo Viewing */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          >
            {/* Modal Close Overlay */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveImageIndex(null)} />
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-2"
            >
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              >
                <X className="h-5 w-5" />
              </button>
              
              <img
                src={CONFIG.venuePhotos[activeImageIndex].url}
                alt={CONFIG.venuePhotos[activeImageIndex].caption}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
              />
              
              <div className="p-4 text-center">
                <span className="font-display text-sm font-bold tracking-widest text-white uppercase">
                  {CONFIG.venuePhotos[activeImageIndex].caption}
                </span>
                <span className="mt-1 block font-mono text-[10px] text-slate-500">
                  Foto real • La Torre Sport Bar
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
