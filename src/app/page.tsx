import { servicesMenu } from "@/lib/data";
import { Sparkles, Calendar, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      
      {/* HEADER / NAVIGATION */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="text-2xl font-serif text-secondary tracking-wider font-bold">
          Maison de la Beauté
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-foreground/80 font-medium">
          <a href="#about" className="hover:text-secondary transition-colors">À Propos</a>
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#tarifs" className="hover:text-secondary transition-colors">Tarifs</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:flex px-6 py-3 bg-secondary text-white text-sm uppercase tracking-wider hover:bg-secondary/90 transition-all rounded-sm shadow-md">
          Prendre RDV
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
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

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/50 text-xs uppercase tracking-widest">Découvrir</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </FadeIn>
      </section>

      {/* ABOUT SECTION - NEW */}
      <section id="about" className="w-full py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <FadeIn className="flex-1 w-full relative">
              <div className="border border-secondary/30 p-2 rounded-t-[100px] rounded-b-sm">
                <div className="h-[500px] w-full rounded-t-[90px] rounded-b-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-[1000ms]">
                  <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Maison de la beauté Spa" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/10"></div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="flex-1">
              <h2 className="text-4xl font-serif text-foreground mb-6">L'Art du Bien-Être</h2>
              <div className="w-16 h-1 bg-secondary mb-8"></div>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Bienvenue à la <strong className="text-foreground">Maison de la Beauté</strong>, votre havre de paix dédié à la relaxation et aux soins esthétiques de pointe. 
                Nous mettons notre savoir-faire au service de votre beauté à travers des traitements personnalisés allant du massage thérapeutique profond jusqu'aux technologies minceur avancées.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Nos professionnelles qualifiées utilisent des produits d'excellence et les dernières machines (Hijama, Microneedling, Laser) pour vous garantir des résultats visibles en toute sécurité.
              </p>
              <a href="#services" className="inline-flex items-center text-sm font-semibold text-secondary uppercase tracking-wider hover:text-foreground transition-colors border-b border-secondary pb-1">
                Découvrir nos spécialités <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </FadeIn>
          </div>
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
                      href="#tarifs"
                      className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-secondary transition-all duration-300 group/btn"
                    >
                      Voir tous les tarifs
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
      <section id="tarifs" className="w-full py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-serif text-foreground mb-4">La Carte des Soins</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </FadeIn>

          <div className="flex flex-col gap-16">
            {servicesMenu.map((category, idx) => (
              <div key={idx} className="w-full">
                <FadeIn className="text-center mb-10">
                  <h3 className="text-3xl font-serif text-secondary inline-block relative">
                    {category.category}
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-primary"></span>
                  </h3>
                </FadeIn>
                <div className="flex flex-col md:flex-row gap-8 lg:gap-14 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/20">
                  {/* Category Image */}
                  <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-inner h-64 md:h-auto relative">
                    <img src={category.image} alt={category.category} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Category List */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <ul className="space-y-6">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex justify-between items-end border-b border-foreground/5 pb-3 border-dashed relative">
                          <div className="pr-4 bg-white">
                            <span className="font-semibold text-foreground text-lg">{item.name}</span>
                            {item.duration && (
                              <span className="block text-sm text-foreground/50 mt-1 md:inline md:mt-0 md:ml-3">
                                <Clock className="w-3 h-3 inline mr-1 text-secondary/60 relative -top-[1px]" />
                                {item.duration}
                              </span>
                            )}
                          </div>
                          <div className="pl-4 font-serif text-secondary text-xl font-bold bg-white whitespace-nowrap">
                            {item.price}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section id="contact" className="w-full py-20 bg-[#1f1d1b] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#2a2724] border border-[#3b3733] rounded-3xl p-10 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Elegant luxury overlay pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col justify-center">
              <span className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Venez nous rendre visite
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-6 leading-tight">
                Réservez votre moment <br /><span className="italic text-secondary">d'Évasion</span>
              </h2>
              <p className="text-white/60 mb-10 max-w-md leading-relaxed">
                Notre équipe d'expertes vous attend dans un environnement luxueux pour sublimer votre beauté.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-white/90 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg">Appelez-nous</h4>
                    <span className="text-white/60">+212 (0) XXX XX XX XX</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-white/90 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg">Notre Adresse</h4>
                    <span className="text-white/60">Rue des soins, Marrakech</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-white/90 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg">Horaires</h4>
                    <span className="text-white/60">Lundi - Samedi : 09:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white/5 p-8 lg:p-12 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col justify-center items-center text-center relative z-10">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Demande de RDV Directe</h3>
              <p className="text-white/60 mb-8 max-w-sm">Contactez-nous directement par téléphone ou via nos réseaux sociaux pour bloquer votre créneau.</p>
              <a href="tel:+123456789" className="block w-full py-4 px-8 bg-secondary text-white uppercase text-sm tracking-wider font-semibold hover:bg-secondary/90 transition-colors rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                Appeler maintenant
              </a>
              <div className="mt-8 flex justify-center gap-6">
                <a href="#" className="flex flex-col items-center gap-2 group">
                  <div className="p-4 bg-white/10 group-hover:bg-secondary group-hover:-translate-y-1 transition-all duration-300 rounded-full text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-secondary">Instagram</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 text-center text-foreground/50 text-sm border-t border-primary/20 bg-background">
        <p>&copy; {new Date().getFullYear()} Maison de la Beauté. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
