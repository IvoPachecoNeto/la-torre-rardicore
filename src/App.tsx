/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImpactBlock from "./components/ImpactBlock";
import ArtistVideo from "./components/ArtistVideo";
import Countdown from "./components/Countdown";
import VenueSection from "./components/VenueSection";
import HowToBuy from "./components/HowToBuy";
import LocationSection from "./components/LocationSection";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileFixedBar from "./components/MobileFixedBar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import SocialProofNotification from "./components/SocialProofNotification";

import { CONFIG } from "./config";
import { initTracking } from "./lib/tracking";

export default function App() {
  useEffect(() => {
    // 1. Initialize Pixels & Google Analytics
    initTracking();

    // 2. Generate and Inject Google Structured Data (Event JSON-LD)
    const eventSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": `La Torre Rardicóri | ${CONFIG.headline}`,
      "description": `Festa oficial de despedida do ${CONFIG.artistName} antes de sua turnê internacional. Evento no ${CONFIG.locationName}, Curitiba.`,
      "startDate": CONFIG.countdownTargetIso, // "2026-08-01T22:00:00-03:00"
      "endDate": "2026-08-02T05:00:00-03:00", // Est. duration ending at 5 AM
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": CONFIG.locationName,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Vicente Machado, 770",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80420-011",
          "addressCountry": "BR"
        }
      },
      "image": [
        CONFIG.heroBgUrl,
        CONFIG.djPhotoUrl
      ],
      "performer": {
        "@type": "Person",
        "name": CONFIG.artistName,
        "jobTitle": "DJ"
      },
      "offers": {
        "@type": "Offer",
        "url": typeof window !== "undefined" ? window.location.href : "",
        "price": "40.00",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-07-21T07:12:00-03:00"
      }
    };

    const schemaId = "la-torre-schema-jsonld";
    let scriptElement = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = schemaId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }
    scriptElement.text = JSON.stringify(eventSchema);

    // Clean up on unmount
    return () => {
      const element = document.getElementById(schemaId);
      if (element) {
        element.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col antialiased selection:bg-red-600 selection:text-white">
      {/* Sticky top Navigation Header */}
      <Header />

      {/* Main Single-Screen Scrollable Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Initial Fold */}
        <Hero />

        {/* 2. Impact Section ("Não é só mais uma festa") */}
        <ImpactBlock />

        {/* 3. Vertical Video invitation by DJ Zóio */}
        <ArtistVideo />

        {/* 4. Real-time Countdown Panel */}
        <Countdown />

        {/* 5. Venue Experience & Photo Lightbox Gallery */}
        <VenueSection />

        {/* 6. Process Flow ("Como Garantir o Ingresso") */}
        <HowToBuy />

        {/* 7. Interactive Location & Directions */}
        <LocationSection />

        {/* 8. Sanfona Accordion FAQ Block */}
        <FAQ />

        {/* 9. Final Persuasive Wrap CTA */}
        <FinalCTA />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Scroll-activated bottom mobile sticky bar */}
      <MobileFixedBar />

      {/* Scroll-activated desktop bottom float WhatsApp badge */}
      <WhatsAppFloat />

      {/* Real-time social proof recent purchase notifications */}
      <SocialProofNotification />
    </div>
  );
}
