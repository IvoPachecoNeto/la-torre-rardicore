/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Timer, MessageSquare } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    // Exact absolute timestamp for August 1, 2026, 22:00 UTC-3
    const targetTime = new Date(CONFIG.countdownTargetIso).getTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false,
      });
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Setup interval to tick every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Countdown Section CTA");
    e.currentTarget.href = url;
  };

  const padZero = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const timeBlocks = [
    { label: "Dias", value: padZero(timeLeft.days) },
    { label: "Horas", value: padZero(timeLeft.hours) },
    { label: "Minutos", value: padZero(timeLeft.minutes) },
    { label: "Segundos", value: padZero(timeLeft.seconds) },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 border-y border-white/5">
      {/* Red ambient lighting backdrop */}
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-500 border border-red-500/20"
        >
          <Timer className="h-4 w-4 animate-pulse" />
          Tempo Restante
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl md:text-5xl"
        >
          A DESPEDIDA ESTÁ CHEGANDO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-sm text-slate-400"
        >
          {timeLeft.isExpired
            ? "O evento já começou! Fale com nossa equipe no WhatsApp para verificar ingressos remanescentes."
            : "Os lotes viram sem aviso prévio de acordo com a lotação da casa. Não arrisque pagar mais caro na portaria."}
        </motion.p>

        {/* Real Countdown Grid */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-4 backdrop-blur-sm sm:py-8"
            >
              <span className="font-display text-2xl font-black text-white sm:text-5xl md:text-6xl tabular-nums">
                {block.value}
              </span>
              <span className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-red-500 sm:mt-2 sm:text-xs">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Display Current Batch Information if Configured */}
        {CONFIG.batchName && CONFIG.batchPrice && !timeLeft.isExpired && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/50 px-5 py-2 text-sm text-slate-300"
          >
            <span>Lote Atual: <strong className="text-white">{CONFIG.batchName}</strong></span>
            <span className="h-4 w-px bg-white/20" />
            <span>Valor: <strong className="text-red-400 font-display">{CONFIG.batchPrice}</strong></span>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 font-medium text-slate-300 text-sm"
        >
          Consulte agora o lote disponível pelo WhatsApp.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <a
            onClick={handleCtaClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-6 py-3.5 font-display text-sm font-black tracking-wider text-white uppercase shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:shadow-red-500/40 active:translate-y-0"
          >
            <MessageSquare className="h-4 w-4" />
            <span>CONSULTAR INGRESSOS</span>
          </a>
          <p className="mt-2 text-[10px] text-slate-500">
            Sem cadastro • Resposta imediata
          </p>
        </motion.div>
      </div>
    </section>
  );
}
