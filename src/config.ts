/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EventConfig {
  eventName: string;
  artistName: string;
  headline: string;
  subHeadline: string;
  description: string;
  dateStr: string;
  shortDateStr: string;
  timeStr: string;
  locationName: string;
  addressStr: string;
  googleMapsUrl: string;
  
  // WhatsApp & Sales
  whatsappNumber: string;
  whatsappMessageTemplate: string; // Message template
  whatsappButtonText: string;
  whatsappSubtext: string;
  
  // Policies (Configurable)
  ageRestriction: string | null;
  paymentMethods: string | null;
  cancellationPolicy: string | null;
  
  // Batch details (Configurable)
  salesActive: boolean;
  batchName: string | null;       // e.g., "1º Lote" or null
  batchPrice: string | null;      // e.g., "R$ 40" or null
  quantityRemaining: number | null; // e.g., 15 or null (if null, does not show scarcity phrases)
  
  // Countdown
  countdownTargetIso: string;    // ISO string for target date, e.g. "2026-08-01T22:00:00-03:00"
  countdownTimezone: string;    // timezone label, e.g. "America/Sao_Paulo"
  
  // Assets
  logoUrl?: string;             // Custom logo image link (optional)
  heroBgUrl: string;
  djPhotoUrl: string;
  videoPlaceholderUrl: string;
  videoUrl: string;             // Artist video url (e.g. mp4) or placeholder
  venuePhotos: Array<{ url: string; caption: string }>;
  
  // Tracking
  metaPixelId: string;          // e.g., "PIXEL-ID-HERE"
  gaMeasurementId: string;      // e.g., "G-XXXXXX"
  
  // Social links
  instagramUrl: string;
  facebookUrl: string;
}

export const CONFIG: EventConfig = {
  eventName: "La Torre Rardicóri",
  artistName: "DJ Zóio",
  headline: "DJ ZÓIO — ÚLTIMO SHOW NO BRASIL",
  subHeadline: "Antes de iniciar sua primeira turnê internacional, DJ Zóio comanda sua festa oficial de despedida do Brasil no La Torre Sport Bar.",
  description: "A noite mais intensa e rardicóri do ano em Curitiba. O último set do mestre DJ Zóio antes da turnê na Europa.",
  dateStr: "Terça-feira, 18 de agosto de 2026",
  shortDateStr: "18/08",
  timeStr: "Abertura da casa às 22h",
  locationName: "La Torre Sport Bar",
  addressStr: "Av. Vicente Machado, 770 — Batel, Curitiba — PR",
  googleMapsUrl: "https://maps.google.com/?q=La+Torre+Sport+Bar+Av.+Vicente+Machado+770+Batel+Curitiba+PR",
  
  whatsappNumber: "+5541996602235",
  whatsappMessageTemplate: "Olá! Vim pela página do La Torre Rardicóri e quero garantir meu ingresso. Pode me passar os lotes disponíveis?",
  whatsappButtonText: "GARANTIR MEU INGRESSO",
  whatsappSubtext: "Sem cadastro. Atendimento direto pelo WhatsApp.",
  
  // Configure batch information here
  salesActive: true,
  batchName: "1º Lote Geral",
  batchPrice: "R$ 40,00",
  quantityRemaining: null, // Set to a number to show a clean remaining ticket indicator. If null, no false scarcity indicators will be shown.
  
  // Exact date/time: Terça-feira, 18/08/2026 às 22:00 America/Sao_Paulo (UTC -3)
  countdownTargetIso: "2026-08-18T22:00:00-03:00",
  countdownTimezone: "America/Sao_Paulo",
  
  // Premium Nightclub visual references
  logoUrl: "", // Paste your real logo image URL here (PNG/JPG) to replace the default SVG logo
  heroBgUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
  djPhotoUrl: "https://images.unsplash.com/photo-1571266028243-e4bb333c5c14?q=80&w=800&auto=format&fit=crop",
  videoPlaceholderUrl: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?q=80&w=800&auto=format&fit=crop",
  
  // If a real vertical video is hosted, replace this URL.
  // We provide a premium interactive player with custom thumbnail and mock loading for perfect realism.
  videoUrl: "https://drive.google.com/uc?export=download&id=1Z69Wk6myDri1i3loTR3iphlLPOQdFasy",
  
  venuePhotos: [
    {
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop",
      caption: "Nosso Bar Premium"
    },
    {
      url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
      caption: "Ambiente Confortável no Batel"
    },
    {
      url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
      caption: "Coquetelaria e Bebidas Selecionadas"
    },
    {
      url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
      caption: "Pista de Dança com Sistema de Som de Alta Fidelidade"
    }
  ],

  // Configurable event policies (Can be changed or set to null by owner)
  ageRestriction: "Entrada permitida somente para maiores de 18 anos. Obrigatória apresentação de documento oficial físico com foto na portaria.",
  paymentMethods: "Pix (chave enviada no atendimento do WhatsApp) ou cartão diretamente com nossos operadores.",
  cancellationPolicy: "Cancelamento garantido em até 7 dias após a compra, desde que solicitado até 48 horas antes da abertura do evento.",
  
  // Analytics IDs (Leave empty if not setup, script will check and load safely)
  metaPixelId: "", // Owner can insert e.g. "1234567890"
  gaMeasurementId: "", // Owner can insert e.g. "G-XXXXXXXXXX"
  
  instagramUrl: "https://instagram.com", // Replace with real La Torre instagram
  facebookUrl: "https://facebook.com",
};
