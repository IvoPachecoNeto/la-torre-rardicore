/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MessageSquare, MousePointerClick, CheckCircle, CreditCard } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function HowToBuy() {
  const steps = [
    {
      num: "01",
      icon: <MousePointerClick className="h-6 w-6 text-red-500" />,
      title: 'Clique em "Garantir meu ingresso"',
      desc: "Toque em qualquer botão de compra desta página para iniciar o contato de forma instantânea."
    },
    {
      num: "02",
      icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
      title: "Fale diretamente com nossa equipe",
      desc: "Você será direcionado para o WhatsApp da equipe do La Torre, com atendimento humanizado sem robôs."
    },
    {
      num: "03",
      icon: <CreditCard className="h-6 w-6 text-emerald-500" />,
      title: "Escolha o lote e pague",
      desc: "Escolha o lote ideal, faça o pagamento via Pix de forma segura e receba seu ingresso na hora."
    }
  ];

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("How To Buy CTA");
    e.currentTarget.href = url;
  };

  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Light highlights */}
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Title */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-500 uppercase">
            Como Funciona
          </span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl md:text-5xl">
            SEM LOGIN. SEM CADASTRO. SEM COMPLICAÇÃO.
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-red-500 to-blue-500" />
          <p className="mt-6 text-base text-slate-300 leading-relaxed sm:text-lg">
            Você fala com uma pessoa da nossa equipe, recebe as opções de lotes disponíveis e finaliza sua compra em menos de 2 minutos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm"
            >
              {/* Connection indicators on Desktop */}
              {idx < 2 && (
                <div className="absolute top-1/2 -right-4 hidden h-[2px] w-8 bg-gradient-to-r from-red-500/20 to-blue-500/20 md:block z-0" />
              )}
              
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-black text-white/10">
                  {step.num}
                </span>
                <div className="rounded-xl bg-white/5 p-3">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="mt-4 font-display text-lg font-bold text-white uppercase tracking-wider">
                {step.title}
              </h3>
              
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="flex flex-col items-center">
          <a
            onClick={handleCtaClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-6 py-3.5 font-display text-sm font-black tracking-wider text-white uppercase shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:shadow-red-500/40 active:translate-y-0"
          >
            <MessageSquare className="h-4 w-4" />
            <span>FALAR COM A EQUIPE AGORA</span>
          </a>
          <p className="mt-2 text-[10px] text-slate-500 uppercase tracking-widest">
            Sem burocracia • Sem aplicativos de terceiros
          </p>
        </div>

      </div>
    </section>
  );
}
