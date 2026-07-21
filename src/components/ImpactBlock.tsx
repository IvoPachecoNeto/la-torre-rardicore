/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, Music, Flame } from "lucide-react";

export default function ImpactBlock() {
  const highlights = [
    {
      icon: <Award className="h-6 w-6 text-red-500" />,
      title: "Último show no Brasil",
      desc: "Sua única oportunidade de ver a energia incomparável do DJ Zóio no país antes do embarque.",
    },
    {
      icon: <Flame className="h-6 w-6 text-blue-500" />,
      title: "Festa oficial de despedida",
      desc: "Um set exclusivo estendido, reunindo os maiores sucessos e a vibe incomparável que consagrou o artista.",
    },
    {
      icon: <Music className="h-6 w-6 text-emerald-500" />,
      title: "Nova fase noturna do La Torre",
      desc: "Experiência de som de última geração e iluminação de pista premium em um dos pontos mais nobres do Batel.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-mono text-xs font-semibold tracking-[0.25em] text-red-500 uppercase"
          >
            A Noite do Ano
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mt-2 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
          >
            NÃO É SÓ MAIS UMA FESTA
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-red-500 to-blue-500 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-base text-slate-300 leading-relaxed sm:text-lg"
          >
            É a despedida oficial do DJ Zóio antes de sua primeira turnê internacional. Uma noite criada para marcar a nova fase noturna do La Torre.
          </motion.p>
        </div>

        {/* 3 Highlights Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              {/* Top border glowing highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                {item.title}
              </h3>
              
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
