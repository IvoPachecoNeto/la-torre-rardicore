/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame, X } from "lucide-react";
import { handleWhatsAppClickTrack } from "../lib/tracking";

interface NotificationItem {
  nome: string;
  qtd: number;
  lote: string;
  tempo: string;
}

const NOTIFICACOES: NotificationItem[] = [
  { nome: "Lucas S.", qtd: 2, lote: "2º Lote", tempo: "Há 1 minuto" },
  { nome: "Marina T.", qtd: 1, lote: "2º Lote", tempo: "Há 3 minutos" },
  { nome: "Pedro H.", qtd: 4, lote: "1º Lote", tempo: "Há 5 minutos" },
  { nome: "Beatriz C.", qtd: 2, lote: "2º Lote", tempo: "Há 8 minutos" },
  { nome: "Rafael M.", qtd: 1, lote: "2º Lote", tempo: "Há 11 minutos" },
  { nome: "Juliana F.", qtd: 2, lote: "2º Lote", tempo: "Há 12 minutos" },
  { nome: "Gabriel N.", qtd: 3, lote: "2º Lote", tempo: "Há 14 minutos" },
  { nome: "Camila P.", qtd: 1, lote: "2º Lote", tempo: "Há 16 minutos" },
  { nome: "Bruno G.", qtd: 2, lote: "1º Lote", tempo: "Há 19 minutos" },
  { nome: "Amanda R.", qtd: 1, lote: "2º Lote", tempo: "Há 21 minutos" },
  { nome: "Gustavo C.", qtd: 3, lote: "2º Lote", tempo: "Há 24 minutos" },
  { nome: "Isabela M.", qtd: 2, lote: "2º Lote", tempo: "Há 27 minutos" },
  { nome: "Felipe S.", qtd: 5, lote: "1º Lote", tempo: "Há 30 minutos" },
  { nome: "Larissa K.", qtd: 1, lote: "2º Lote", tempo: "Há 33 minutos" },
  { nome: "Matheus A.", qtd: 2, lote: "2º Lote", tempo: "Há 36 minutos" },
  { nome: "Sofia V.", qtd: 2, lote: "2º Lote", tempo: "Há 39 minutos" },
  { nome: "Rodrigo L.", qtd: 4, lote: "1º Lote", tempo: "Há 41 minutos" },
  { nome: "Carolina D.", qtd: 1, lote: "2º Lote", tempo: "Há 45 minutos" },
  { nome: "Thiago P.", qtd: 2, lote: "2º Lote", tempo: "Há 48 minutos" },
  { nome: "Letícia M.", qtd: 1, lote: "2º Lote", tempo: "Há 51 minutos" },
  { nome: "Daniel O.", qtd: 3, lote: "2º Lote", tempo: "Há 54 minutos" },
  { nome: "Mariana B.", qtd: 2, lote: "2º Lote", tempo: "Há 57 minutos" },
  { nome: "Vinícius R.", qtd: 1, lote: "2º Lote", tempo: "Há 59 minutos" },
  { nome: "Gabriela S.", qtd: 2, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Leonardo F.", qtd: 4, lote: "1º Lote", tempo: "Há 1 hora" },
  { nome: "Eduarda T.", qtd: 1, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Diego M.", qtd: 2, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Helena P.", qtd: 1, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Renan B.", qtd: 3, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Luana G.", qtd: 2, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Henrique S.", qtd: 2, lote: "1º Lote", tempo: "Há 1 hora" },
  { nome: "Clara N.", qtd: 1, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Murilo F.", qtd: 3, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Fernanda R.", qtd: 2, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Vitor O.", qtd: 1, lote: "2º Lote", tempo: "Há 1 hora" },
  { nome: "Alice C.", qtd: 2, lote: "1º Lote", tempo: "Há 1 hora" },
  { nome: "Igor D.", qtd: 4, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Yasmin L.", qtd: 1, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Otávio B.", qtd: 2, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Valentina G.", qtd: 2, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Caio S.", qtd: 1, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Manuela M.", qtd: 3, lote: "1º Lote", tempo: "Há 2 horas" },
  { nome: "Guilherme P.", qtd: 2, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Lorena F.", qtd: 1, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "André K.", qtd: 4, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Cecília D.", qtd: 2, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Danilo R.", qtd: 2, lote: "1º Lote", tempo: "Há 2 horas" },
  { nome: "Júlia V.", qtd: 1, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Arthur M.", qtd: 3, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Vitória S.", qtd: 2, lote: "2º Lote", tempo: "Há 2 horas" },
  { nome: "Marcelo T.", qtd: 1, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Bianca C.", qtd: 2, lote: "1º Lote", tempo: "Há 3 horas" },
  { nome: "Erick F.", qtd: 2, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Patricia A.", qtd: 1, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Renato L.", qtd: 4, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Aline J.", qtd: 2, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Fábio R.", qtd: 3, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Giovanna H.", qtd: 1, lote: "1º Lote", tempo: "Há 3 horas" },
  { nome: "Samuel P.", qtd: 2, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Bruna N.", qtd: 2, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Alexandre S.", qtd: 1, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "Melissa E.", qtd: 2, lote: "2º Lote", tempo: "Há 3 horas" },
  { nome: "William G.", qtd: 5, lote: "1º Lote", tempo: "Há 4 horas" },
  { nome: "Natália O.", qtd: 1, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Douglas M.", qtd: 2, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Rebeca D.", qtd: 2, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Ricardo F.", qtd: 4, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Tainá C.", qtd: 1, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Maurício V.", qtd: 2, lote: "1º Lote", tempo: "Há 4 horas" },
  { nome: "Mirella B.", qtd: 3, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Augusto S.", qtd: 1, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Rafaela P.", qtd: 2, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Vinicius K.", qtd: 2, lote: "2º Lote", tempo: "Há 4 horas" },
  { nome: "Suelen L.", qtd: 1, lote: "1º Lote", tempo: "Há 4 horas" },
  { nome: "Heitor J.", qtd: 3, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Nicole G.", qtd: 2, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Alan B.", qtd: 2, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Thaís M.", qtd: 1, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Wesley F.", qtd: 4, lote: "1º Lote", tempo: "Há 5 horas" },
  { nome: "Isabel D.", qtd: 2, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Jonas T.", qtd: 3, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Sabrina R.", qtd: 1, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Cauan P.", qtd: 2, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Brenda V.", qtd: 2, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Marcos N.", qtd: 1, lote: "1º Lote", tempo: "Há 5 horas" },
  { nome: "Estela S.", qtd: 2, lote: "2º Lote", tempo: "Há 5 horas" },
  { nome: "Kaique A.", qtd: 5, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Carla C.", qtd: 1, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Erick M.", qtd: 2, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Lívia H.", qtd: 3, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Andrey O.", qtd: 1, lote: "1º Lote", tempo: "Há 6 horas" },
  { nome: "Sarah F.", qtd: 2, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Patrick B.", qtd: 2, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Monique S.", qtd: 1, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Ronaldo L.", qtd: 4, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Debora R.", qtd: 2, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Iago G.", qtd: 3, lote: "1º Lote", tempo: "Há 6 horas" },
  { nome: "Elisa C.", qtd: 2, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Adriel S.", qtd: 1, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Kamilly P.", qtd: 2, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Cesar W.", qtd: 3, lote: "2º Lote", tempo: "Há 6 horas" },
  { nome: "Naira M.", qtd: 2, lote: "1º Lote", tempo: "Há 6 horas" }
];

const INTERVALO_MS = 7000;      // a cada quantos ms aparece uma nova notificação
const DURACAO_VISIVEL_MS = 5000; // por quanto tempo ela fica visível antes de sumir

export default function SocialProofNotification() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before showing the first notification
    const initialTimeout = setTimeout(() => {
      if (!hasDismissed) {
        setIsVisible(true);
      }
    }, 2500);

    return () => clearTimeout(initialTimeout);
  }, [hasDismissed]);

  useEffect(() => {
    if (hasDismissed) return;

    const interval = setInterval(() => {
      // Hide current notification
      setIsVisible(false);

      // Advance index after a small delay to allow transition-out to complete
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % NOTIFICACOES.length);
        setIsVisible(true);
      }, 400);

    }, INTERVALO_MS);

    return () => clearInterval(interval);
  }, [hasDismissed]);

  // Handle auto-hiding after DURACAO_VISIVEL_MS
  useEffect(() => {
    if (!isVisible || hasDismissed) return;

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, DURACAO_VISIVEL_MS);

    return () => clearTimeout(hideTimeout);
  }, [isVisible, index, hasDismissed]);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setHasDismissed(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const item = NOTIFICACOES[index];
    const url = handleWhatsAppClickTrack(`Social Proof Notification - ${item.nome}`);
    e.currentTarget.href = url;
  };

  const item = NOTIFICACOES[index];

  return (
    <AnimatePresence>
      {isVisible && !hasDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-50 w-80 max-w-[calc(100vw-32px)]"
        >
          <a
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 bg-neutral-900/95 border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-white/20 hover:bg-neutral-900 group"
          >
            {/* Pulsing indicator icon */}
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-500 relative">
              <span className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping" />
              <Flame className="h-4 w-4 fill-orange-500/20" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-semibold leading-tight group-hover:text-red-500 transition-colors">
                {item.nome} acabou de garantir!
              </p>
              <p className="text-slate-300 text-[11px] mt-1 leading-normal">
                Comprado {item.qtd}x ingresso{item.qtd > 1 ? "s" : ""} de <span className="font-medium text-white">{item.lote}</span> via WhatsApp.
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-[10px]">
                <span className="text-slate-500">{item.tempo}</span>
                <span className="text-slate-600">•</span>
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-[9px]">
                  WhatsApp Vendas
                </span>
              </div>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 text-slate-500 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors -mr-1 -mt-1"
              aria-label="Fechar notificação"
              type="button"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
