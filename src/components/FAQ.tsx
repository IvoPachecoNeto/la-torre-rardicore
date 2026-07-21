/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { CONFIG } from "../config";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  // Base list of mandatory questions
  const faqs: FaqItem[] = [
    {
      question: "Como compro meu ingresso?",
      answer: "Clique em qualquer botão de ingresso desta página. Você será direcionado imediatamente para o WhatsApp da equipe do La Torre, onde concluirá sua compra com atendimento personalizado."
    },
    {
      question: "Preciso criar uma conta?",
      answer: "Não. A compra é feita diretamente pelo WhatsApp, sem necessidade de login, senhas, criação de cadastro ou download de aplicativos externos."
    },
    {
      question: "Qual é o horário do evento?",
      answer: `A abertura da casa será às 22h, com o evento marcado para ${CONFIG.dateStr.toLowerCase()}.`
    },
    {
      question: "Onde acontecerá?",
      answer: `No La Torre Sport Bar, localizado na ${CONFIG.addressStr}.`
    },
    {
      question: "Como descubro o lote disponível?",
      answer: "Entre em contato clicando em qualquer botão do site. Nossa equipe informará os lotes, valores e disponibilidade em tempo real."
    }
  ];

  // Dynamically add optional, configurable policy FAQs if defined in CONFIG
  if (CONFIG.ageRestriction) {
    faqs.push({
      question: "Qual é a classificação etária do evento?",
      answer: CONFIG.ageRestriction
    });
  }

  if (CONFIG.paymentMethods) {
    faqs.push({
      question: "Quais são as formas de pagamento?",
      answer: CONFIG.paymentMethods
    });
  }

  if (CONFIG.cancellationPolicy) {
    faqs.push({
      question: "Qual é a política de cancelamento ou reembolso?",
      answer: CONFIG.cancellationPolicy
    });
  }

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Lights background decor */}
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl">
        
        {/* Section Title */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400 border border-white/5">
            <HelpCircle className="h-3.5 w-3.5 text-blue-500" />
            Suporte e Dúvidas
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-gradient-to-r from-red-500 to-blue-500" />
        </div>

        {/* Accordion / Sanfona List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] transition-all hover:border-white/10"
              >
                {/* Header Toggle Button */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-display text-sm font-bold text-white uppercase tracking-wider sm:text-base"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/5 px-6 pb-5 pt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
