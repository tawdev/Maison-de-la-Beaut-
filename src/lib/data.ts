export const servicesMenu = [
  {
    category: "Massages",
    description: "Des moments de pure détente et de soin thérapeutique.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Massage thérapeutique", duration: "1h15mn", price: "700 DH" },
      { name: "Massage thérapeutique", duration: "45mn", price: "350 DH" },
      { name: "Massage lymphatique tonique", duration: "1h", price: "350 DH" },
      { name: "Massage drainage machine", duration: "1h15mn", price: "300 DH" },
      { name: "Massage colombien", duration: "30mn", price: "250 DH" },
      { name: "Massage relaxant", duration: "1h", price: "300 DH" },
      { name: "Massage relaxant + pierres chaudes", duration: "1h", price: "600 DH" },
    ],
  },
  {
    category: "Soin Visage",
    description: "Révélez l'éclat naturel de votre peau.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Soin visage basic", price: "200 DH" },
      { name: "Soin profond + masque LED", price: "500 DH" },
      { name: "Soin visage + modelage", price: "300 DH" },
      { name: "Soin hydrafacial", price: "400 DH" },
      { name: "Soin + microneedling avec vitamines", price: "700 DH" },
      { name: "Soin anti-âge + hydrafacial", price: "400 DH" },
      { name: "Soin microneedling + fil de soie anti-âge", price: "800 DH" },
      { name: "Soin + plasma pen", price: "450 DH" },
      { name: "Soin + mésothérapie (3 séances)", price: "800 DH" },
      { name: "Soin + skin booster", price: "1400 DH" },
      { name: "Soin visage + masque peel off", price: "300 DH" },
      { name: "Soin peeling au carbone laser + masque charbon", price: "400 DH" },
      { name: "Soin + peeling microneedling", price: "400 DH" },
    ],
  },
  {
    category: "Épilation Laser",
    description: "Jambes - Aisselles - Maillot - Visage",
    image: "/results/laser-final.png",
    items: [
      { name: "6 séances demi-jambes + aisselles + maillot", price: "2990 DH" },
      { name: "6 séances visage, aisselles + maillot", price: "1750 DH" },
      { name: "6 séances aisselles", price: "700 DH" },
      { name: "6 séances visage", price: "1000 DH" },
      { name: "6 séances maillot", price: "1500 DH" },
      { name: "6 séances duvet", price: "700 DH" },
      { name: 'Détatouage "en séance"', price: "1000 DH" },
    ],
  },
  {
    category: "Amincissement / Cavitation",
    description: "Remodelez votre silhouette grâce à nos technologies.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Amincissement complet + massage thérapeutique (2 séances)", price: "1000 DH" },
      { name: "Cavitation à relâchement musculaire", duration: "1h", price: "500 DH" },
      { name: "Cavitation relâchement visage et cou", duration: "1h", price: "450 DH" },
      { name: "Cavitation ventre + massage minceur", price: "800 DH" },
    ],
  },
  {
    category: "Soin Capillaire",
    description: "Redonnez force et vitalité à vos cheveux.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Soin cheveux + diagnostic (4 séances)", price: "1100 DH" },
      { name: "Soin capillaire (4 séances)", price: "950 DH" },
      { name: "Soin + mésothérapie + masque LED (3 séances)", price: "1200 DH" },
    ],
  },
  {
    category: "Lifting",
    description: "Raffermissement et lifting du corps.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Lifting colombien + massage chaud", duration: "30mn", price: "300 DH" },
      { name: "Lifting jambes et hanches", duration: "1h", price: "400 DH" },
      { name: "Lifting visage", duration: "1h", price: "250 DH" },
      { name: "Lifting poitrine + massage", duration: "45mn", price: "300 DH" },
      { name: "Lifting + massage pression thérapeutique", duration: "1h30mn", price: "600 DH" },
    ],
  },
];
// Centralized Business Information
export const businessInfo = {
  name: "Maison de la Beauté",
  description: "Institut de beauté et de bien-être haut de gamme à Marrakech.",
  address: "LOT LGUIDER N48 AV ALLAL EL FASSI, Marrakech, Maroc",
  phone: "+212 607-790956",
  phoneRaw: "212607790956",
  email: "contact@maisondelabeaute.ma",
  openingHours: "Lun – Sam : 09:00 – 20:00",
  openingHoursSchema: ["Mo-Sa 09:00-20:00"], // SEO Schema format
  closedDays: [0], // 0 = Dimanche
  location: {
    lat: 31.6295, // Approximate for Marrakech
    lng: -7.9811
  }
};

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Cliente fidèle",
    content: "Un moment de pure détente. Le massage thérapeutique est exceptionnel et l'accueil est toujours chaleureux. Je recommande vivement !",
    rating: 5
  },
  {
    name: "Yasmine K.",
    role: "Soin Visage",
    content: "J'ai testé le soin hydrafacial et les résultats sont bluffants. Ma peau n'a jamais été aussi éclatante. Merci à toute l'équipe.",
    rating: 5
  },
  {
    name: "Omar L.",
    role: "Massage Relaxant",
    content: "Une oasis de calme à Marrakech. L'endroit est magnifique et les soins sont d'une grande qualité. À faire absolument.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "Comment puis-je prendre rendez-vous ?",
    answer: "Vous pouvez prendre rendez-vous directement via notre formulaire en ligne, nous appeler au +212 607-790956, ou nous envoyer un message sur WhatsApp."
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer: "Nous vous accueillons du lundi au samedi, de 09h00 à 20h00. Nous sommes fermés le dimanche."
  },
  {
    question: "Proposez-vous des forfaits cadeaux ?",
    answer: "Oui, nous proposons des cartes cadeaux personnalisables pour tous nos soins. Contactez-nous pour plus d'informations."
  },
  {
    question: "Où se trouve l'institut ?",
    answer: "Nous sommes situés au LOT LGUIDER N48 AV ALLAL EL FASSI, à Marrakech. Un emplacement central et facile d'accès."
  }
];
