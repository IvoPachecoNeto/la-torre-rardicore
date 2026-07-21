/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Play, MessageSquare, Instagram, Heart, Send, MessageCircle, Bookmark, Volume2, VolumeX } from "lucide-react";
import { CONFIG } from "../config";
import { handleWhatsAppClickTrack } from "../lib/tracking";

export default function ArtistVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = handleWhatsAppClickTrack("Artist Video CTA");
    e.currentTarget.href = url;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch((err) => {
        console.error("Video play failed:", err);
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    // Initial mute status
    setIsMuted(video.muted);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8" ref={containerRef}>
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Vertical Video Frame mimicking a smartphone story / Instagram Reel */}
          <div className="flex justify-center lg:col-span-5">
            <div 
              onClick={togglePlay}
              className="relative aspect-[9/16] w-full max-w-[290px] sm:max-w-[330px] overflow-hidden rounded-3xl border-4 border-slate-800 bg-neutral-950 shadow-[0_0_30px_rgba(239,68,68,0.15)] group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-red-600/50"
            >
              {/* Native HTML5 Video element */}
              <video
                ref={videoRef}
                src={CONFIG.videoUrl}
                poster={CONFIG.djPhotoUrl}
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-45"}`}
              />

              {/* Instagram Brand Gradient overlay (hidden when playing to allow full video view) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 opacity-90 transition-opacity z-10" />
              )}

              {/* Instagram UI Overlay - Top Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full border border-red-500 p-[1.5px] bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500">
                    <img 
                      src={CONFIG.djPhotoUrl} 
                      alt="DJ Zóio Avatar" 
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover rounded-full border border-black" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-white flex items-center gap-1">
                      djzoio 
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500 flex items-center justify-center text-[6px] text-white font-extrabold" title="Verificado">✓</span>
                    </span>
                    <span className="text-[8px] text-slate-300">Curitiba • Original</span>
                  </div>
                </div>
                <div className="rounded-full bg-white/10 backdrop-blur-md px-2.5 py-1 flex items-center gap-1.5 text-[9px] font-semibold text-white border border-white/10">
                  <span className={`h-1.5 w-1.5 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-white/50"}`} />
                  <span>{isPlaying ? "REPRODUZINDO" : "VER CONVITE"}</span>
                </div>
              </div>

              {/* Centered Play Button (Shown when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 text-center pointer-events-none">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 group-hover:bg-red-500 transition-transform"
                  >
                    <Play className="h-6 w-6 fill-white ml-1 text-white" />
                  </motion.div>
                  <h3 className="mt-4 font-display text-xs font-black tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                    CLIQUE PARA ASSISTIR
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-300 max-w-[200px] leading-snug">
                    Assista ao recado oficial do DJ Zóio diretamente pelo reprodutor
                  </p>
                </div>
              )}

              {/* Instagram UI Overlay - Bottom Reel Info */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                {/* Real interactive Mute/Unmute toggle */}
                <div className="flex justify-end mb-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="rounded-full bg-black/60 hover:bg-black/80 text-white p-2 border border-white/15 active:scale-90 transition-transform shadow-md"
                    title={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-red-400" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-white" />
                    )}
                  </button>
                </div>

                {/* Simulated Like, Comment, Share Tray */}
                <div className="flex items-center justify-between mb-3 text-white border-t border-white/5 pt-3">
                  <div className="flex items-center gap-3">
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    <MessageCircle className="h-4 w-4" />
                    <Send className="h-4 w-4" />
                  </div>
                  <Bookmark className="h-4 w-4 text-slate-300" />
                </div>

                {/* Simulated Caption */}
                <div className="text-left text-white text-[10px]">
                  <p className="font-bold">djzoio</p>
                  <p className="text-slate-300 mt-0.5 line-clamp-2 leading-relaxed">
                    O RECADO FOI DADO! 🔥 Dia 18/08 Curitiba vai tremer. Minha despedida oficial do Brasil no La Torre Sport Bar...
                  </p>
                  <p className="text-red-500 font-semibold mt-1 text-[9px]">Ver tradução</p>
                </div>
              </div>
            </div>
          </div>

          {/* Persistent persuasive context card */}
          <div className="flex flex-col justify-center text-center lg:col-span-7 lg:text-left">
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-red-500 uppercase">
              Recado do DJ Zóio
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl md:text-5xl">
              O RECADO FOI DADO
            </h2>
            <div className="mt-3 h-1 w-20 bg-red-600 mx-auto lg:mx-0 origin-left" />
            
            <p className="mt-6 text-base text-slate-300 leading-relaxed sm:text-lg">
              Assista ao convite oficial gravado pelo próprio DJ Zóio convocando a nação rardicóri de Curitiba. Ele avisa: essa será a maior e mais pesada noite de despedida do ano antes de embarcar para a Europa.
            </p>
            
            <p className="mt-4 font-display text-lg font-bold text-red-500 italic">
              “Dia 18/08 o La Torre Sport Bar vai tremer. O recado foi dado, agora só falta você.”
            </p>

            <div className="mt-10 flex flex-col items-center lg:items-start">
              <a
                onClick={handleCtaClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3.5 font-display text-sm font-black tracking-wider text-white uppercase shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:shadow-red-500/40 active:translate-y-0"
              >
                <MessageSquare className="h-4 w-4" />
                <span>QUERO MEU INGRESSO</span>
              </a>
              <p className="mt-3 text-[11px] font-mono text-slate-400">
                Sem cadastros demorados • Atendimento direto via WhatsApp
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

