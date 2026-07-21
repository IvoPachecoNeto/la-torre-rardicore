/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CONFIG } from "../config";

export interface UtmParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
}

// Extract UTMs from URL
export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
      utm_term: null,
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
    utm_term: params.get("utm_term"),
  };
}

// Dynamically initialize tracking pixels if configured
export function initTracking() {
  if (typeof window === "undefined") return;

  // Initialize Google Analytics 4 if measurement ID exists
  if (CONFIG.gaMeasurementId) {
    const gaId = CONFIG.gaMeasurementId;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag() {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    gtag();
    (window as any).gtag("js", new Date());
    (window as any).gtag("config", gaId);
    console.log(`[Tracking] GA4 Initialized: ${gaId}`);
  }

  // Initialize Meta Pixel if ID exists
  if (CONFIG.metaPixelId) {
    const pixelId = CONFIG.metaPixelId;
    const f: any = window;
    const b: any = document;
    const e: any = "script";
    const v: any = "https://connect.facebook.net/en_US/fbevents.js";
    let n: any, t: any, s: any;
    
    if (!f.fbq) {
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }

    (window as any).fbq("init", pixelId);
    (window as any).fbq("track", "PageView");
    console.log(`[Tracking] Meta Pixel Initialized: ${pixelId}`);
  }
}

/**
 * Tracks WhatsApp button click and returns the customized WhatsApp URL
 * @param buttonPosition Position/Label of the clicked button (e.g., "Hero Section", "Countdown Section")
 */
export function handleWhatsAppClickTrack(buttonPosition: string): string {
  const utms = getUtmParams();
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const referrer = typeof document !== "undefined" ? document.referrer : "";
  const clickTime = new Date().toISOString();

  // Create event payload for logging and analytics
  const eventData = {
    event_name: "whatsapp_ticket_click",
    button_position: buttonPosition,
    page_url: pageUrl,
    referrer: referrer,
    click_time: clickTime,
    ...utms,
  };

  console.log("[Tracking] WhatsApp click tracked:", eventData);

  // 1. Fire Google Analytics 4 Custom & Lead Events
  if (typeof window !== "undefined" && (window as any).gtag) {
    // Custom event
    (window as any).gtag("event", "whatsapp_ticket_click", eventData);
    // Standard Lead event
    (window as any).gtag("event", "generate_lead", {
      currency: "BRL",
      value: 40.0, // estimated or standard lead value
      button_position: buttonPosition,
    });
  }

  // 2. Fire Meta Pixel Events
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Contact", {
      button_position: buttonPosition,
      url: pageUrl,
    });
    (window as any).fbq("track", "Lead", {
      content_name: "La Torre Ticket Sale",
      value: 40.0,
      currency: "BRL",
    });
  }

  // 3. Build WhatsApp text based on UTM Campaign
  let messageText = CONFIG.whatsappMessageTemplate;
  
  if (utms.utm_campaign) {
    messageText = `Olá! Vim pela campanha ${utms.utm_campaign} e quero garantir meu ingresso para o La Torre Rardicóri.`;
  }

  // Format WhatsApp Link
  // Clean phone number (leave only digits)
  const cleanPhone = CONFIG.whatsappNumber.replace(/\D/g, "");
  
  // Re-encode text
  const encodedText = encodeURIComponent(messageText);
  const finalUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  return finalUrl;
}
