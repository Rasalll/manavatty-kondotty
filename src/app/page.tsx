"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const REAL_WORKS = {
  bouquets: [
    { id: "b1", title: "Royal Crimson Orchid Clutch", image: "/images/Bouquets/bouquet_1.jpeg", desc: "Velvet crimson roses blended with exotic orchids and hand-wrapped gold cords." },
    { id: "b2", title: "Jasmine Blossom Bouquet", image: "/images/Bouquets/bouquet_2.jpeg", desc: "Aromatic white jasmine buds nestled with pastel rose clusters." },
    { id: "b3", title: "Classic Pearl White Grace", image: "/images/Bouquets/bouquet_3.jpeg", desc: "A pristine selection of white calla lilies and delicate baby breaths." },
    { id: "b4", title: "Saffron Marigold Fusion", image: "/images/Bouquets/bouquet_4.jpeg", desc: "Earthy marigolds mixed with tropical green ferns for a unique heritage vibe." },
    { id: "b5", title: "Imperial Pastel Rose Bouquet", image: "/images/Bouquets/bouquet_5.jpeg", desc: "Romantic blush pink roses hand-tied in satin lace sheets." }
  ],
  cars: [
    { id: "c1", title: "Signature Hood Spray", image: "/images/CarFlowerDecors/car_1.jpeg", desc: "Magnificent V-shape floral structure featuring fresh red roses." },
    { id: "c2", title: "Delicate Front Bonnet Arch", image: "/images/CarFlowerDecors/car_2.jpeg", desc: "A classic draping of white lilies and fresh green palm leaves." },
    { id: "c3", title: "Luxe Automobile Garland", image: "/images/CarFlowerDecors/car_3.jpeg", desc: "Elegant floral ropes draped across the window grids and bonnet lines." },
    { id: "c4", title: "Royal Maroon & Cream Spray", image: "/images/CarFlowerDecors/car_4.jpeg", desc: "Grand high-contrast floral layout for elite bridal transportation." },
    { id: "c5", title: "Traditional Saffron Bonnet Spread", image: "/images/CarFlowerDecors/car_5.jpeg", desc: "Traditional Kerala styling using golden marigold flowers and jasmine." },
    { id: "c6", title: "Modernist Orchid Draping", image: "/images/CarFlowerDecors/car_6.jpeg", desc: "A modern design with purple orchids cascading across the car glass." }
  ],
  garlands: [
    { id: "g1", title: "Imperial Jasmine & Rose Ropes", image: "/images/Garlands/garland_1.jpeg", desc: "Thickly hand-threaded white jasmine ropes accented with crimson rose nodes." },
    { id: "g2", title: "Sacred Pink Lotus Garland", image: "/images/Garlands/garland_2.jpeg", desc: "Centuries-old heritage styling with fresh pink lotus buds." },
    { id: "g3", title: "Golden Marigold Garland", image: "/images/Garlands/garland_3.jpeg", desc: "Auspicious yellow and orange marigolds perfect for traditional rituals." },
    { id: "g4", title: "Exotic Orchid Fusion Garland", image: "/images/Garlands/garland_4.jpeg", desc: "Premium light purple orchids intertwined with pure white pichi flowers." },
    { id: "g5", title: "Heritage Emerald Leaf Garland", image: "/images/Garlands/garland_5.jpeg", desc: "Lightweight, aromatic design with holy basil leaves and jasmine buds." }
  ]
};


const HERO_SLIDES = [
  { src: "/images/ManavattyKondottyShowroom.jpeg", label: "Our Showroom" },
  { src: "/images/Bouquets/bouquet_1.jpeg", label: "Bridal Bouquets" },
  { src: "/images/CarFlowerDecors/car_1.jpeg", label: "Car Decoration" },
  { src: "/images/Heritage JewelleryCabinet.jpeg", label: "Heritage Jewellery" },
  { src: "/images/Garlands/garland_1.jpeg", label: "Traditional Garlands" },
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeWorkTab, setActiveWorkTab] = useState<"bouquets" | "cars" | "garlands">("bouquets");
  const [heroSlide, setHeroSlide] = useState(0);

  // Auto-rotate hero showcase every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Custom action to generate standard WhatsApp booking redirection
  const triggerWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      "Hello Manavatty Kondotty,\nI would like to schedule a wedding jewelry & styling consultation."
    );
    window.open(`https://wa.me/919846225085?text=${text}`, "_blank");
  };

  // Helper to change active masterpiece tab and scroll smoothly
  const navigateToTab = (tab: "bouquets" | "cars" | "garlands") => {
    setActiveWorkTab(tab);
    const element = document.getElementById("floral");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fef8f3] text-[#1d1b19] font-sans relative antialiased selection:bg-rose-100">

      {/* 1. Fixed Luxurious Header & Navigation */}
      <nav id="header-nav" className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/images/manavatty-main-icon.png"
              alt="Manavatty Icon"
              className="w-8 h-8 object-contain rounded-full border border-white/20 p-0.5 group-hover:rotate-12 transition-transform duration-500"
            />
            <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">Manavatty Kondotty</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center">
            <a href="#collections" className="text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-[#C9973A] transition-colors">Collections</a>
            <a href="#floral" className="text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-[#C9973A] transition-colors">Featured Works</a>
            <a href="#store" className="text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-[#C9973A] transition-colors">The Store</a>
            <a href="#footer" className="text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-[#C9973A] transition-colors">Contact</a>
          </div>

          {/* WhatsApp Direct Action Banner */}
          <div className="hidden sm:flex items-center gap-3">

            <button
              onClick={triggerWhatsAppRedirect}
              className="bg-[#8C1A42] hover:bg-[#6b002c] text-white px-5 py-2.5 text-xs uppercase tracking-widest font-semibold flex items-center gap-2 rounded transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" /> WhatsApp Desk
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded transition-colors ${mobileMenuOpen ? "text-plum-brand hover:bg-[#f3ede8]" : "text-white hover:bg-white/10"}`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#ddbfc4]/30 px-6 py-6 pb-8 space-y-4 animate-fade-in">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-plum-brand hover:text-primary-brand"
            >
              Our Collections
            </a>
            <a
              href="#floral"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-plum-brand hover:text-primary-brand"
            >
              Featured Works
            </a>

            <a
              href="#store"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-plum-brand"
            >
              Boutique Showroom
            </a>


            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerWhatsAppRedirect();
                }}
                className="w-full bg-[#25D366] text-white py-3 text-xs uppercase tracking-widest font-bold text-center rounded flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span> WhatsApp Enquire
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. Overarching Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#1E0F17] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Blossom and Grace Kondotty bridal floral backdrop"
            className="w-full h-full object-cover opacity-40 scale-110 blur-[2px]"
            src="/images/landing.png"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1E0F17] via-[#1E0F17]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">

          {/* Main Title Hero Area */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div className="flex items-center gap-2 mb-2" style={{ animation: "slide-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
              <span className="h-[1px] w-6 bg-[#C9973A]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9973A] font-bold">A Legacy of Trust Since 2008</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-[1.15] tracking-tight" style={{ animation: "slide-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
              Best Flower Decor <br />
              &amp; Fancy Shop <span className="italic text-[#C9973A] block mt-1">in Kondotty</span>
            </h1>

            <p className="font-sans text-sm md:text-base text-white/80 max-w-xl leading-relaxed" style={{ animation: "slide-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "700ms", animationFillMode: "both" }}>
              Since 2008, Manavatty Kondotty has been the trusted destination for premium flower decoration and exquisite bridal styling. From fresh wedding bouquets to traditional Kerala ornaments, we craft memories that stay beautiful forever.
            </p>


          </div>

          {/* Premium Image Showcase on Right (Desktop) */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-xl shadow-2xl border border-white/10">
              {/* Slides */}
              {HERO_SLIDES.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${i === heroSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                />
              ))}

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Current label */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="text-[10px] text-[#C9973A] font-bold uppercase tracking-[0.2em] block">
                  {String(heroSlide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
                <p className="font-serif text-lg font-bold text-white mt-0.5">{HERO_SLIDES[heroSlide].label}</p>
              </div>

              {/* Slide indicator dots */}
              <div className="absolute bottom-5 right-5 z-10 flex gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === heroSlide ? "bg-[#C9973A] w-5" : "bg-white/40 hover:bg-white/70"
                      }`}
                  />
                ))}
              </div>

              {/* Decorative gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C9973A]/50 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#C9973A]/50 rounded-bl-xl" />
            </div>
          </div>
        </div>

        {/* Delicate aesthetic waving separator line */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#1E0F17] rounded-t-full"></div>
      </section>

      {/* 3. Categories Services Section */}
      <section className="py-24 bg-[#1E0F17]" id="collections">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-[#C9973A] font-bold text-xs uppercase tracking-[0.25em] block">Fine Categories</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Best Flower Decor &amp; Fancy Shop</h2>
            <div className="w-12 h-0.5 bg-[#C9973A] mx-auto mt-3"></div>
            <p className="text-xs text-white/60 font-sans pt-2">
              We specialize in the best flower decoration and Kondotty's finest bridal jewelry and fancy store ornaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">

            {/* Card 1: Floral Services */}
            <div className="group relative overflow-hidden rounded-lg luxury-shadow bg-[#1E0F17] flex flex-col justify-end min-h-[380px] sm:min-h-[420px] md:aspect-[1.4] p-6 sm:p-8">
              <img
                alt="Bridal Hand Bouquet detail with orchids and jasmine ropes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTE9Q12-arpzFRDaOXifmxC8Sy2MRhAJ3R42ezbGeGrpO8qz1v3-1JdHZvv7TiXNf_wWkF0py9ewAYY_FyzzGx4t3caym4cNWIN62EgQty8ZHsFsrrJeKbgE-MTSFec_cyjo-P-HUetL0JZSe7WBkIXPuSoYl40eSHq2KJz5nc9Fz0CZl-3BFJ_pxlqkbxzDijR3UxtFfapPdDYtn3s3I_uZdnGz1We2hCiMX-KdDg8q6xLDKRPNsDyn8Fkq_qza2Jz_y3Y5-d8moL"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F17]/95 via-[#1E0F17]/40 to-transparent"></div>

              <div className="relative z-10 text-white space-y-3">
                <div>
                  <span className="text-[10px] text-white/60 tracking-widest uppercase font-semibold">Floristry Atelier</span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mt-1 text-white">Best Flower Decoration</h3>
                </div>

                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Tailoring grand stage architecture, bespoke table sprays, and handcrafted scent-wrapped bouquets featuring fresh imported roses and white dewy jasmine bundles.
                </p>

                <div className="flex flex-wrap gap-2 pt-1.5">
                  <span className="text-[9px] font-sans font-bold bg-white/15 px-3 py-1 rounded tracking-wider uppercase border border-white/10">Wedding Car Design</span>
                  <span className="text-[9px] font-sans font-bold bg-white/15 px-3 py-1 rounded tracking-wider uppercase border border-white/10">Stage Backdrops</span>
                  <span className="text-[9px] font-sans font-bold bg-white/15 px-3 py-1 rounded tracking-wider uppercase border border-white/10">Fresh Bouquets</span>
                </div>
              </div>
            </div>

            {/* Card 2: Fancy Store */}
            <div className="group relative overflow-hidden rounded-lg luxury-shadow bg-[#1E0F17] flex flex-col justify-end min-h-[380px] sm:min-h-[420px] md:aspect-[1.4] p-6 sm:p-8">
              <img
                alt="Fancy Bridal traditional Kerala gold-plated Temple Jewellery"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJGviKgXtEhsWH1lhlBUisBvYi_JkpoNJJvH4_geddrdE0n_nYI7TPZx2AEs430JYOQuX1UKRSVyiTACP4OrxhBjtjEajPt0kbKe6Xk3r6r3kBirqhciDyoRKUKGSWFIkjlWP-gEeaaOehVMQIWxzwKSvMAh3bMZz1gU-lDLSeERGmWfQN31ZVoHXsLQzjNNMWAxBI9KiyAVFNmiAR6S6nrQTrh3KtxdbdSsaxWs93aiCeUZ3OLZ61C-6LIevV1H30zFXM0GDYyFj4"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F17]/95 via-[#1E0F17]/40 to-transparent"></div>

              <div className="relative z-10 text-white space-y-3">
                <div>
                  <span className="text-[10px] text-white/60 tracking-widest uppercase font-semibold">The Boutique Treasury</span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mt-1 text-white">Best Fancy Shop in Kondotty</h3>
                </div>

                <p className="text-xs text-white/80 font-sans leading-relaxed">
                  Delve into our high-demand selection of traditional gold-plated ornaments, intricate leaf-design Palakka Mala strings, bridal forehead bands, and sweat-proof makeup kits.
                </p>

                <div className="flex flex-wrap gap-2 pt-1.5">
                  <span className="text-[9px] font-sans font-bold bg-white/15 px-3 py-1 rounded tracking-wider uppercase border border-white/10">Traditional Jewellery</span>
                  <span className="text-[9px] font-sans font-bold bg-white/15 px-3 py-1 rounded tracking-wider uppercase border border-white/10">Satin Hair Crowns</span>
                  <span className="text-[9px] font-sans font-bold bg-white/15 px-3 py-1 rounded tracking-wider uppercase border border-white/10">Premium Cosmetics</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Floral Creations Portfolio */}
      <section className="py-24 bg-[#f8f3ee] border-y border-[#ddbfc4]/20" id="floral">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#8C1A42] text-xs tracking-widest uppercase font-bold block mb-1">Our Masterpieces</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-plum-brand">Best Flower Decoration Portfolio</h2>
            <p className="text-xs text-on-surface-variant font-sans mt-2">
              Explore our real wedding installations and premium flower decorations in Kondotty. Tap each category to see our bridal hand bouquets, wedding car decorations, and traditional garlands.
            </p>
          </div>

          {/* Premium Portfolio Tabs */}
          <div className="flex justify-center border-b border-[#ddbfc4]/30 max-w-md mx-auto mb-12">
            <button
              onClick={() => setActiveWorkTab("bouquets")}
              className={`flex-1 text-xs uppercase font-bold tracking-widest py-3.5 border-b-2 transition-all ${activeWorkTab === "bouquets"
                ? "border-[#8C1A42] text-[#8C1A42] font-extrabold"
                : "border-transparent text-on-surface-variant hover:text-[#8C1A42]"
                }`}
            >
              Bridal Bouquets
            </button>
            <button
              onClick={() => setActiveWorkTab("cars")}
              className={`flex-1 text-xs uppercase font-bold tracking-widest py-3.5 border-b-2 transition-all ${activeWorkTab === "cars"
                ? "border-[#8C1A42] text-[#8C1A42] font-extrabold"
                : "border-transparent text-on-surface-variant hover:text-[#8C1A42]"
                }`}
            >
              Car Decors
            </button>
            <button
              onClick={() => setActiveWorkTab("garlands")}
              className={`flex-1 text-xs uppercase font-bold tracking-widest py-3.5 border-b-2 transition-all ${activeWorkTab === "garlands"
                ? "border-[#8C1A42] text-[#8C1A42] font-extrabold"
                : "border-transparent text-on-surface-variant hover:text-[#8C1A42]"
                }`}
            >
              Garlands
            </button>
          </div>

          {/* Dynamic Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_WORKS[activeWorkTab].map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-[#ddbfc4]/25 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt="Manavatty flower decor design"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#8C1A42] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-sm">
                    {activeWorkTab === "bouquets" ? "Bouquet" : activeWorkTab === "cars" ? "Car Decor" : "Garland"}
                  </span>
                </div>

                {/* Booking Action */}
                <div className="p-4">
                  <button
                    onClick={() => {
                      const text = encodeURIComponent(
                        "Hello Manavatty Kondotty, I am viewing your flower works portfolio and absolutely love this design Could you please share the estimated price and youre catalogs?"
                      );
                      window.open(`https://wa.me/919846225085?text=${text}`, "_blank");
                    }}
                    className="w-full bg-[#8C1A42] hover:bg-[#6b002c] active:scale-[0.98] text-white text-xs uppercase tracking-widest font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" /> Enquire Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 6. Inside Our Kerala Store */}
      <section className="py-24 bg-[#fef8f3]" id="store">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#C9973A] font-bold text-xs uppercase tracking-[0.25em] block">Our Sanctuary</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-plum-brand">Inside Our Kerala Store</h2>
            <div className="w-12 h-0.5 bg-[#8C1A42] mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

            {/* Big Main Showroom image */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-lg shadow-sm min-h-[300px]">
              <img
                alt="Main Showroom featuring luxury ornaments and flower setups"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="/images/ManavattyKondottyShowroom.jpeg"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-serif text-xl font-bold">Manavatty Kondotty Showroom</h4>
                <p className="text-[11px] text-white/70">Shop No 1, Thangals Rd, Kondotty, Kerala</p>
              </div>
            </div>

            {/* Jewelry showcase (spans 4 col) */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-lg shadow-sm min-h-[300px]">
              <img
                alt="Intricate golden ornaments detailed inside glass closet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="/images/Heritage JewelleryCabinet.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F17]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-serif text-lg font-bold">Heritage Jewellery Cabinet</h4>
                <p className="text-[11px] text-white/70">Traditional Kasu &amp; Palakka suites</p>
              </div>
            </div>

            {/* Cosmetics Section (spans 4 col) */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-lg shadow-sm min-h-[250px]">
              <img
                alt="Elite bridal cosmetics assortment display"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="/images/PremiumCosmeticsVault.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F17]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-serif text-base font-bold">Premium Cosmetics Vault</h4>
                <p className="text-[10px] text-white/70">Tropical sweat-proof formulas</p>
              </div>
            </div>



            {/* Bridal Collection (spans 4 col) */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-lg shadow-sm min-h-[250px]">
              <img
                alt="Draped silk sarees and accessories"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JHEoCY0SqIU_hyDgB62GhAEutnsA2CsNLk4BxOfSnUByKlkJo9R_jonU2ksPMzX35CZ0KDmC9V_yvswy3YNHM3AjwJAD4K0i0q3X4PkW8EXuCyxuF7QHtT49d5BFgWzwXuy58PKmpP9vLS43tPUM9porkEbge3xpD785AHJsukBRcjdmRxnpZRsv4-96b7gj9VAoUS84UIOmmTfselIfXAqtu3qQtH4emTGvZO4Eij8nKRI3cybTaW6JY9aRyBAQDNH-Z-TfgBlB"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F17]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-serif text-base font-bold">Silk &amp; Accessories Lounge</h4>
                <p className="text-[10px] text-white/70">Custom tailored ornaments</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 8. About Us section */}
      <section className="py-24 bg-[#1E0F17] text-white relative overflow-hidden">
        {/* Subtle decorative background light */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8C1A42]/10 blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          <div className="lg:col-span-5 relative aspect-[3/4] max-w-sm mx-auto w-full group overflow-hidden rounded-lg shadow-2xl border border-white/10">
            <img
              alt="Artisanal florist styling bouquets in classical studio setup"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwnBDEsA7rAuJa2BT-6qpUODJbEV2wcp3p2IWAHj2it3P9tfd5TGh3N2jWXHL1YmtGwB_i4qFLWK-rt4h1Sw9yJ1LapJM7Qr76mw01Pss6-8Ui0IUGn8tQpVg7nzTY_sus4k-bPYXx06YvYhniSjqtKSyR3vAV1aiP6o8cpqSwg1376hSkukPbEqJRoPoVo99KEFgZ-dLhDzrj62kVBQy1QAgpI7Yn-MAz_uKcXo0xuUtPDjgA6jm7czvo0DDylaYZ5sg2QPH2wp27"
              referrerPolicy="no-referrer"
            />
            {/* Overlay stats badges */}
            <div className="absolute bottom-6 right-6 bg-[#C9973A] text-[#1E0F17] p-5 rounded font-sans text-center transition-transform hover:scale-105 duration-300">
              <span className="block font-serif text-3xl font-extrabold text-white leading-tight">8+</span>
              <span className="text-[9px] font-bold tracking-widest uppercase block leading-tight mt-1 text-white">Years of<br />Excellence</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <div>
              <span className="text-[#C9973A] text-xs font-bold uppercase tracking-[0.25em] block mb-1">Our Heritage</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Crafting Memories Across Kerala</h2>
            </div>

            <p className="text-sm md:text-base text-white/80 leading-relaxed font-sans">
              For over eight years, Blossom &amp; Grace has been the heartbeat of luxury weddings in Kerala. We don’t just decorate; we tell stories through the delicate language of southern flowers and the timeless luster of heritage gold-plated ornaments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#C9973A] text-2xl">local_florist</span>
                <div>
                  <h4 className="text-sm font-semibold font-serif text-white">Floral Expertise</h4>
                  <p className="text-xs text-white/70 leading-relaxed mt-1">Sourcing grade-A local Jasmine and exotic orchids.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#C9973A] text-2xl">storefront</span>
                <div>
                  <h4 className="text-sm font-semibold font-serif text-white">Curated Fancy Store</h4>
                  <p className="text-xs text-white/70 leading-relaxed mt-1">Curating lightweight, non-allergic heritage temple necklaces.</p>
                </div>
              </div>


            </div>
          </div>

        </div>
      </section>

      {/* 9. Visit Our Boutique (Location & Hours) */}
      <section className="py-24 bg-[#f8f3ee] border-t border-[#ddbfc4]/20 relative overflow-hidden" id="boutique-location">
        {/* Subtle background overlay to add premium depth */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#8C1A42/0.02_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Address, Rating and Hours Info */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-[#8C1A42] text-xs font-bold uppercase tracking-[0.25em] block mb-1">Our Flagship Store</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-plum-brand">Manavatty Kondotty</h2>
              <div className="w-12 h-0.5 bg-[#C9973A] mt-4"></div>
              <p className="text-xs text-on-surface-variant font-sans mt-3 tracking-wide">
                Premium bridal jewelry and accessories boutique in Kondotty, Kerala. Step inside to discover a curated treasure chest of traditional Kasavu ornaments, forehead Netti Pattom bands, and custom designer collections.
              </p>
            </div>



            {/* Address Details */}
            <div className="space-y-4 pt-2">
              {/* Address Item */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#8C1A42]/10 flex items-center justify-center text-[#8C1A42] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-brand">Address</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1 font-sans">
                    Shop No 1, Thangals Rd, Kondotty, Kerala 673638
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#8C1A42]/10 flex items-center justify-center text-[#8C1A42] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">phone</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-brand">Phone Helpline</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1 font-sans flex flex-col gap-0.5">
                    <a href="tel:+919846225085" className="hover:text-[#8C1A42] transition-colors">+91 98462 25085</a>
                    <a href="tel:+919846225095" className="hover:text-[#8C1A42] transition-colors">+91 98462 25095</a>
                  </p>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#8C1A42]/10 flex items-center justify-center text-[#8C1A42] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-brand">Showroom Hours</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1 font-sans">
                    <span className="text-emerald-600 font-bold">Open Daily</span> · 9:00 AM – 9:00 PM <span className="text-[10px] text-stone-500 italic block mt-0.5">(Hours may vary on Eid al-Adha &amp; major holidays)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://maps.app.goo.gl/EmNYkqkFvBAzq2Dh8?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8C1A42] hover:bg-[#6b002c] active:scale-[0.98] text-white text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded transition-all flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">directions</span> Get Directions on Maps
              </a>
              <a
                href="tel:+919846225085"
                className="bg-white hover:bg-stone-50 active:scale-[0.98] text-[#8C1A42] border border-[#ddbfc4] text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded transition-all flex items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">call</span> Call Store Desk
              </a>
            </div>
          </div>

          {/* Right Column: Original Google Maps Embed */}
          <div className="lg:col-span-6 w-full aspect-[16/11] md:aspect-[16/10] overflow-hidden rounded-xl shadow-md border border-[#ddbfc4]/30 bg-stone-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.9876778949823!2d75.96263471480371!3d11.14678339207044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64f32423de36f%3A0xec447b4c42e4460c!2sManavatty%20Kondotty!5e0!3m2!1sen!2sin!4v1716723223000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manavatty Kondotty Google Map"
              className="w-full h-full transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Floating Action Button (WhatsApp) */}
      <button
        onClick={triggerWhatsAppRedirect}
        className="fixed bottom-10 right-10 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
        title="Direct WhatsApp Helpline"
      >
        <span className="material-symbols-outlined text-[30px]">chat</span>
      </button>

      {/* Luxury Editorial Footer */}
      <footer id="footer" className="bg-[#1E0F17] text-[#fdf7f2]/80 pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16 mb-16 text-left">

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/manavatty-main-icon.png"
                  alt="Manavatty Icon"
                  className="w-9 h-9 object-contain rounded-full bg-white/10 p-0.5"
                />
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">Manavatty Kondotty</h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Adorning bridal dreams and celebrating special moments since 2008. The trusted choice for elite flower decoration and traditional ornaments in Kondotty, Kerala.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 rounded-full border border-white/15 hover:bg-[#C9973A] hover:border-transparent transition-colors flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">share</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full border border-white/15 hover:bg-[#C9973A] hover:border-transparent transition-colors flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9973A] font-bold mb-6">Floral Services</h4>
              <ul className="space-y-3.5 text-xs text-white/50 font-sans">
                <li><button onClick={() => navigateToTab("cars")} className="hover:text-white transition-colors cursor-pointer text-left">Wedding Car Decoration</button></li>
                <li><button onClick={() => navigateToTab("bouquets")} className="hover:text-white transition-colors cursor-pointer text-left">Bridal Hand Bouquets</button></li>
                <li><button onClick={() => navigateToTab("garlands")} className="hover:text-white transition-colors cursor-pointer text-left">Stage Floral Garlands</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9973A] font-bold mb-6">Fancy Collections</h4>
              <ul className="space-y-3.5 text-xs text-white/50 font-sans">
                <li><a href="#store" className="hover:text-white transition-colors">Artificial Temple Jewellery</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">Forehead Netti Pattom Bands</a></li>
                <li><a href="#store" className="hover:text-white transition-colors">Premium Waterproof Cosmetics</a></li>
                <li><a href="#floral" className="hover:text-white transition-colors">Kerala Bridal Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9973A] font-bold mb-6">Boutique Contacts</h4>
              <ul className="space-y-3 text-xs text-white/50 font-sans">
                <li>Shop No 1, Thangals Rd, Kondotty, Kerala 673638</li>
                <li>hello@manavattykondotty.com</li>
                <li><a href="tel:+919846225085" className="hover:text-white transition-colors">+91 98462 25085</a></li>
                <li><a href="tel:+919846225095" className="hover:text-white transition-colors">+91 98462 25095</a></li>
                <li className="pt-2">
                  <a
                    href="https://maps.app.goo.gl/EmNYkqkFvBAzq2Dh8?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9973A] font-bold hover:underline flex items-center gap-1"
                  >
                    Get Directions <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright details */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
            <p className="text-[11px]">&copy; 2026 Manavatty Kondotty. Best Fancy Shop &amp; Flower Decor.</p>
            <div className="flex gap-6 text-[11px]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p className="text-[11px]">Made with 🌸 &amp; 🕌 in Kondotty</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
