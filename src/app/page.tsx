"use client";

import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Calendar,
  Award,
  ShieldCheck,
  Star,
  Quote,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  Gem,
  Sparkle
} from "lucide-react";
import { servicesMenu, businessInfo, testimonials, faqs } from "@/lib/data";
import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { ReservationForm } from "@/components/ReservationForm";
import { BeforeAfterSlider } from "@/components/ResultSlider";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // JSON-LD for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": businessInfo.name,
    "description": businessInfo.description,
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LOT LGUIDER N48 AV ALLAL EL FASSI",
      "addressLocality": "Marrakech",
      "addressCountry": "MA"
    },
    "telephone": businessInfo.phone,
    "url": "https://maisondelabeaute.ma",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <main className="w-full flex flex-col items-center">
      {/* LOCAL SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-therapist-doing-a-facial-massage-on-a-woman-39827-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-receiving-a-massage-in-a-spa-39828-large.mp4" type="video/mp4" />
        </video>
        
        {/* Warm gold tone overlay for brand coherence */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-secondary/20 z-0"></div>

        <FadeIn className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
          <span className="text-secondary font-medium tracking-[0.3em] uppercase mb-4 flex items-center gap-2 drop-shadow-md">
            <Sparkles className="w-4 h-4" /> Institut & Spa
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Révélez votre beauté <br /> <span className="text-secondary italic">Naturelle</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-10 font-sans tracking-wide drop-shadow-md">
            Découvrez nos soins esthétiques sur-mesure, massages thérapeutiques, et protocoles anti-âge dans un espace luxueux dédié à votre bien-être.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#tarifs" className="px-8 py-4 bg-secondary text-white uppercase tracking-widest text-sm hover:bg-secondary/90 transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] rounded-sm">
              Découvrir la carte
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent text-white border border-white/50 uppercase tracking-widest text-sm hover:bg-white/10 transition-all shadow-sm rounded-sm backdrop-blur-sm">
              Nous contacter
            </a>
          </div>

        </FadeIn>

        {/* Scroll indicator - Positioned at bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-default z-10">
          <span className="text-white/30 text-[9px] uppercase tracking-[0.4em]">Découvrir</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full py-32 bg-[#fdfaf6] relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <FadeIn className="flex-1 w-full relative">
              <div className="relative">
                {/* Arch Shape styling */}
                <div className="aspect-[4/5] w-full rounded-t-full overflow-hidden border border-secondary/20 p-3 bg-white shadow-xl shadow-secondary/5">
                  <div className="w-full h-full rounded-t-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1500ms]">
                    <img 
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="L'expérience Maison de la beauté" 
                      className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2000ms]"
                    />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-secondary/30 rounded-br-3xl"></div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[10px] flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-secondary/40"></div> Notre Philosophie
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1a1815] leading-tight">
                  L'excellence au service de votre <span className="text-secondary italic">Sérénité</span>
                </h2>
              </div>
              <p className="text-[#1a1815]/70 leading-relaxed font-light text-lg">
                Au cœur d'un espace intimiste et raffiné, notre institut redéfinit l'art de la haute esthétique. Nous croyons que chaque visage raconte une histoire et chaque peau mérite un protocole d'exception.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  { icon: Award, label: "Expertise", text: "15+ Ans d'expérience" },
                  { icon: ShieldCheck, label: "Confiance", text: "Protocoles certifiés" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#1a1815]/40 font-bold">{item.label}</p>
                      <p className="text-[#1a1815] font-serif italic">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / BENEFITS */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.1} className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary/[0.03] border border-secondary/10">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Gem className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4 font-bold">Luxe & Élégance</h3>
              <p className="text-foreground/60 leading-relaxed italic">
                Un environnement raffiné conçu pour votre confort absolu et votre sérénité.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary/[0.03] border border-secondary/10">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4 font-bold">Produits Premium</h3>
              <p className="text-foreground/60 leading-relaxed italic">
                Nous utilisons exclusivement des produits de haute qualité pour des résultats durables.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary/[0.03] border border-secondary/10">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Sparkle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4 font-bold">Expertise Certifiée</h3>
              <p className="text-foreground/60 leading-relaxed italic">
                Une équipe de professionnels passionnés et formés aux dernières technologies.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION - BEFORE/AFTER SLIDERS */}
      <section className="w-full py-32 bg-[#14120f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <FadeIn>
            <span className="text-secondary font-medium tracking-[0.4em] uppercase text-[10px]">L'Art de la Transformation</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 italic tracking-tight">Nos Résultats <span className="text-secondary opacity-80">Sublimes</span></h2>
            <p className="text-white/30 max-w-2xl mx-auto font-light leading-relaxed">
              Glissez pour découvrir l'efficacité réelle de nos soins. Un éclat retrouvé et une peau visiblement transformée.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
             { 
               tag: "Soin Visage Hydrafacial", 
               img: "/results/Gemini_Generated_Image_565o91565o91565o.png"
             },
             { 
               tag: "Lifting Colombien", 
               img: "/results/Gemini_Generated_Image_mt3ednmt3ednmt3e.png"
             },
             { 
               tag: "Peeling au Carbone", 
               img: "/results/Gemini_Generated_Image_4rfycn4rfycn4rfy.png"
             }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <BeforeAfterSlider 
                beforeImage={item.img} 
                afterImage={item.img} 
                label={item.tag} 
              />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW — Luxury Panel Layout */}
      <section id="services" className="w-full py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-serif text-foreground mb-4">Notre Expertise</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
              Nous combinons le savoir-faire traditionnel et les dernières technologies esthétiques pour vous offrir des résultats d'exception.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-4">
          {servicesMenu.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.08}>
              <div className={`group relative flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[650px] overflow-hidden`}>
                {/* Image Side — wider on desktop */}
                <div className="w-full md:w-[55%] relative overflow-hidden min-h-[380px] md:min-h-[650px]">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1400ms] absolute inset-0"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-${idx % 2 === 0 ? "r" : "l"} from-transparent to-black/40 group-hover:to-black/20 transition-all duration-700`}></div>

                  {/* Badge: nb of services */}
                  <div className="absolute top-8 left-8 bg-white/15 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-full">
                    <span className="text-xs tracking-widest uppercase font-medium">{category.items.length} Soins disponibles</span>
                  </div>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-[45%] flex items-center bg-white px-12 md:px-20 py-20 min-h-[380px] md:min-h-[650px] relative overflow-hidden ${idx % 2 === 0 ? "" : ""}`}>
                  {/* Decorative large number watermark */}
                  <span className="absolute -bottom-10 -right-6 text-[180px] font-serif font-bold text-foreground/[0.03] select-none leading-none pointer-events-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="w-full relative z-10">
                    <span className="text-secondary tracking-[0.4em] uppercase text-xs font-bold mb-6 block flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-secondary inline-block"></span>
                      Soin N°{String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-[1.1]">
                      {category.category}
                    </h3>
                    <div className="w-16 h-[2px] bg-secondary mb-8"></div>
                    <p className="text-foreground/60 mb-10 text-lg leading-relaxed max-w-xs">
                      {category.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex gap-8 mb-12 border-t border-b border-foreground/10 py-6">
                      <div>
                        <span className="text-3xl font-serif font-bold text-foreground">{category.items.length}</span>
                        <p className="text-xs uppercase tracking-widest text-foreground/40 mt-1">Soins</p>
                      </div>
                      <div className="w-px bg-foreground/10"></div>
                      <div>
                        <span className="text-3xl font-serif font-bold text-secondary">
                          {Math.min(...category.items.map(i => parseInt(i.price)))} DH
                        </span>
                        <p className="text-xs uppercase tracking-widest text-foreground/40 mt-1">À partir de</p>
                      </div>
                    </div>

                    <a
                      href={`#category-${idx}`}
                      className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 text-[11px] font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-300 group/btn"
                    >
                      Voir {category.category}
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* DETAILED PRICING (CARTE DES SOINS) */}
      <section id="tarifs" className="w-full py-32 bg-[#fdfaf6] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.03] -skew-x-12 transform origin-top-right"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-24">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Menu de Bien-être</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1815] tracking-tight">Tarifs & <span className="text-secondary italic">Privilèges</span></h2>
            <div className="w-16 h-[1px] bg-secondary mx-auto mt-8 opacity-40"></div>
          </FadeIn>

          <div className="space-y-32">
            {servicesMenu.map((category, idx) => (
              <FadeIn key={idx} className="group">
                <div id={`category-${idx}`} className="flex flex-col lg:flex-row gap-16 items-start scroll-mt-32">
                  <div className="w-full lg:w-2/5 sticky top-32">
                    <div className="relative">
                      <div className="aspect-[4/5] rounded-t-full overflow-hidden border border-secondary/20 p-2 bg-white shadow-xl shadow-secondary/5">
                        <img src={category.image} alt={category.category} className="w-full h-full rounded-t-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-secondary text-white p-6 rounded-tr-3xl shadow-2xl">
                        <h4 className="font-serif text-2xl tracking-wide">{category.category}</h4>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 pt-8">
                    <div className="flex flex-col gap-10">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="group/item relative pb-6 border-b border-[#1a1815]/5 last:border-0 hover:border-secondary/20 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <h5 className="text-[#1a1815] font-medium text-lg group-hover/item:text-secondary transition-colors duration-300 tracking-wide">
                                {item.name}
                              </h5>
                              {item.duration && (
                                <div className="flex items-center gap-2 mt-2 text-[#1a1815]/40 text-[11px] uppercase tracking-widest font-bold">
                                  <Clock className="w-3 h-3 text-secondary/50" />
                                  <span>Durée: {item.duration}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right ml-6">
                              <p className="text-secondary font-serif text-2xl font-bold tracking-tight">{item.price}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <a
                              href={`?service=${encodeURIComponent(item.name)}#contact`}
                              className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#1a1815]/40 hover:text-[#1a1815] transition-all group-hover/item:translate-x-[-8px] font-bold"
                            >
                              Réserver ce soin
                              <div className="w-6 h-6 rounded-full border border-[#1a1815]/10 flex items-center justify-center group-hover/item:border-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shadow-sm">
                                <Calendar className="w-3 h-3" />
                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="temoignages" className="w-full py-32 bg-[#14120f] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-20">
            <span className="text-secondary font-medium tracking-[0.4em] uppercase text-[10px]">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Ce que disent nos <span className="text-secondary italic">Clients</span></h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20" />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed font-light">"{t.content}"</p>
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-secondary/60 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full py-32 bg-[#fdfaf6]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-secondary mx-auto mb-6 opacity-40" />
            <h2 className="text-4xl font-serif text-[#1a1815]">Questions Fréquentes</h2>
            <div className="w-16 h-[1px] bg-secondary mx-auto mt-6"></div>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05} className="border-b border-secondary/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-serif text-[#1a1815] group-hover:text-secondary transition-colors italic">
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <Minus className="w-5 h-5 text-secondary" />
                  ) : (
                    <Plus className="w-5 h-5 text-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#1a1815]/60 leading-relaxed font-light mt-4">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION — Premium Integrated Look */}
      <section className="w-full h-[650px] relative overflow-hidden group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.9634934898495!2d-7.983611023533!3d31.6348610741639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafec03a45c6131%3A0xc3f60f64c6328637!2sLOT%20LGUIDER%20N48%20AV%20ALLAL%20EL%20FASSI!5e0!3m2!1sfr!2sma!4v1713100000000!5m2!1sfr!2sma"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1500ms]"
        ></iframe>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1815]/80 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-secondary/5 pointer-events-none border-y border-secondary/10"></div>

        {/* Floating Info Card */}
        <div className="max-w-7xl mx-auto px-6 h-full relative pointer-events-none">
          <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-0 z-20 max-w-sm w-full pointer-events-auto">
            <FadeIn>
              <div className="bg-[#1a1815]/95 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <span className="text-secondary font-bold tracking-[0.4em] uppercase text-[9px] block">Notre Emplacement</span>
                    <h3 className="text-3xl font-serif text-white italic leading-tight">Maison de la Beauté</h3>
                    <div className="w-12 h-1 bg-secondary rounded-full opacity-60"></div>
                  </div>
                  
                  <div className="space-y-5 py-4 border-y border-white/5">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-secondary" />
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {businessInfo.address}
                      </p>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-secondary" />
                      </div>
                      <p className="text-white/60 text-sm font-medium">
                        {businessInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a 
                      href="https://maps.google.com/maps?q=LOT+LGUIDER+N48+AV+ALLAL+EL+FASSI+Marrakech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-secondary text-white py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-white hover:text-secondary transition-all shadow-xl shadow-secondary/10"
                    >
                      Ouvrir dans Google Maps
                    </a>
                    <a 
                      href="#contact" 
                      className="w-full bg-white/5 border border-white/10 text-white/50 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:text-white hover:border-white/20 transition-all font-sans"
                    >
                      Nous Contacter
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <Sparkles className="w-10 h-10 text-secondary mx-auto mb-6 opacity-40" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1815] mb-4 italic">Offrez-vous une pause <span className="text-secondary">Privilégiée</span></h2>
            <p className="text-[#1a1815]/60 mb-10 max-w-xl mx-auto font-light">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives, conseils beauté et nouveautés directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 px-6 py-4 bg-[#fdfaf6] border border-secondary/20 rounded-sm focus:outline-none focus:border-secondary transition-colors text-sm"
                required
              />
              <button className="px-8 py-4 bg-secondary text-white uppercase tracking-widest text-[10px] font-bold hover:bg-secondary/90 transition-all rounded-sm shadow-lg shadow-secondary/20">
                S'abonner
              </button>
            </form>
            <p className="mt-4 text-[10px] text-[#1a1815]/30 uppercase tracking-widest font-bold">
              Zéro spam. Uniquement de la beauté.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT & RESERVATION */}
      <section id="contact" className="w-full py-20 bg-[#1a1815] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <h2 className="text-4xl font-serif text-white mb-4">Réservez votre Soin</h2>
            <div className="w-24 h-[2px] bg-secondary mx-auto"></div>
            <p className="mt-5 text-white/50 max-w-xl mx-auto">Remplissez le formulaire ci-dessous et notre équipe vous confirmera votre rendez-vous dans les plus brefs délais.</p>
          </FadeIn>

          <FadeIn className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* LEFT — Info Panel */}
            <div className="lg:col-span-2 bg-[#2a2724] p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-2">Nos Coordonnées</h3>
                <div className="w-10 h-[2px] bg-secondary mb-8"></div>

                <div className="space-y-7">
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                      <Phone className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Téléphone</p>
                      <a href={`tel:${businessInfo.phoneRaw}`} className="text-white font-medium hover:text-secondary transition-colors">{businessInfo.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Adresse</p>
                      <p className="text-white font-medium leading-relaxed">{businessInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${businessInfo.email}`} className="text-white font-medium hover:text-secondary transition-colors">{businessInfo.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Horaires</p>
                      <p className="text-white font-medium">{businessInfo.openingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="relative z-10 mt-12 flex gap-3">
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href={`https://wa.me/212607790956`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                </a>
              </div>
            </div>

            {/* RIGHT — Reservation Form */}
            <div className="lg:col-span-3 bg-[#201e1b] p-10 lg:p-12">
              <h3 className="text-2xl font-serif text-white mb-2">Demande de Réservation</h3>
              <div className="w-10 h-[2px] bg-secondary mb-8"></div>
              <ReservationForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#1a1815] text-white">
        {/* Top footer */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif text-secondary mb-4 tracking-wide">Maison de la Beauté</h3>
            <div className="w-12 h-[1px] bg-secondary mb-6"></div>
            <p className="text-white/60 leading-relaxed max-w-xs mb-8">
              Institut esthétique dédié à votre bien-être, alliant soins traditionnels et technologies de pointe pour une beauté révélée.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest">
              <span className="w-5 h-[1px] bg-secondary/60"></span>
              Hijama · Massage · Épilation Laser · Soins Visage
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-secondary"></span> Navigation
            </h4>
            <ul className="space-y-4">
              {["À Propos", "Nos Services", "La Carte", "Témoignages", "FAQ", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${i === 0 ? "about" : i === 1 ? "services" : i === 2 ? "tarifs" : i === 3 ? "temoignages" : i === 4 ? "faq" : "contact"}`}
                    className="text-white/60 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-secondary/50 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-secondary"></span> Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-secondary transition-colors">{businessInfo.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-secondary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-secondary transition-colors">{businessInfo.email}</a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span>{businessInfo.openingHours}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-secondary hover:bg-secondary/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={`https://wa.me/${businessInfo.phoneRaw}`} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            Site créé par{" "}
            <a
              href="https://cdigital.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors font-semibold tracking-wider uppercase"
            >
              Cdigital.ma
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
