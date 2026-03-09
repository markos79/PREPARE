/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Brain, Cpu, BarChart3, Layers, Database, 
  Globe, Users, Newspaper, Mail, GraduationCap, BookOpen, 
  Sparkles, Zap, ShieldCheck, Clock, MessageSquare, Smartphone,
  ExternalLink, ArrowRight, Info
} from 'lucide-react';
import { content } from './content';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateTo = (id: string) => {
    if (id === 'results') {
      setActiveTab('project');
      setTimeout(() => scrollToSection('results-section'), 100);
    } else if (['tech', 'innovation', 'pillars'].includes(id)) {
      setActiveTab('home');
      setTimeout(() => scrollToSection(`${id}-section`), 100);
    } else {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home navigateTo={navigateTo} />;
      case 'project': return <Project />;
      case 'partners': return <Partners />;
      case 'dissemination': return <Dissemination />;
      case 'contact': return <Contact />;
      // These are now part of the Home page or sub-sections
      case 'tech': return <Technology />;
      case 'innovation': return <Innovation />;
      case 'results': return <Results />;
      case 'team': return <Team />;
      default: return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 relative bg-white">
      {/* Sophisticated Research Background */}
      <div className="fixed inset-0 -z-20 bg-white overflow-hidden">
        {/* Soft Radial Gradients */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-blue-50/50 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-slate-50/50 blur-[100px]" />
        </div>

        {/* Neural Line Pattern - Very Faint */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#2563eb" />
              <circle cx="100" cy="50" r="1" fill="#2563eb" />
              <circle cx="180" cy="120" r="1" fill="#2563eb" />
              <path d="M10 10 L100 50 L180 120" stroke="#2563eb" strokeWidth="0.5" fill="none" />
              <path d="M100 50 L50 150" stroke="#2563eb" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="150" r="1" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>

        {/* Minimal Geometric Texture - Very Faint */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.01]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#475569" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm" : "bg-transparent py-8 border-b border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => navigateTo('home')}
          >
            <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <img src="https://res.cloudinary.com/direhbhyf/image/upload/v1772526755/Logo_only_k1npho.jpg" alt="PREPARE Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <span className="text-2xl sm:text-4xl font-black tracking-tighter text-slate-900 font-sans relative overflow-hidden group">
              <span className="relative z-10">PREPARE</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {content.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={cn(
                  "text-sm font-bold tracking-widest transition-all duration-300 relative py-2 group",
                  activeTab === item.id ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300",
                  activeTab === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-100 border-b border-slate-200 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {content.navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-left text-sm uppercase tracking-wider font-bold transition-all",
                      activeTab === item.id 
                        ? "text-blue-800 bg-blue-800/10" 
                        : "text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white text-slate-600 py-16 mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://res.cloudinary.com/direhbhyf/image/upload/v1772526755/Logo_only_k1npho.jpg" alt="PREPARE Logo" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                <span className="text-4xl font-bold text-slate-900 tracking-tight">PREPARE</span>
              </div>
              <p className="max-w-md mb-6 leading-relaxed text-slate-600">
                {content.home.hero.description}
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer shadow-sm">
                  <Globe size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer shadow-sm">
                  <Mail size={18} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-6">Πλοήγηση</h4>
              <ul className="space-y-3">
                {content.navigation.slice(0, 6).map(item => (
                  <li key={item.id}>
                    <button onClick={() => navigateTo(item.id)} className="hover:text-blue-600 transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-semibold mb-6">Επικοινωνία</h4>
              <ul className="space-y-3 text-sm">
                <li>{content.contact.institution}</li>
                <li>{content.contact.lab}</li>
                <li>{content.contact.email}</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col gap-2">
                <p className="text-sm">© {new Date().getFullYear()} PREPARE Research Project. Με την υποστήριξη του ΔΙΠΑΕ.</p>
                <a 
                  href="https://www.epiteliki.minedu.gov.gr/?page_id=4083&lang=el" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                  Χρηματοδοτικός Φορέας: ΕΠΙΤΕΛΙΚΗ ΔΟΜΗ ΕΣΠΑ ΥΠΑΙΘΑ <ExternalLink size={12} />
                </a>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/5">
                <img 
                  src="https://res.cloudinary.com/direhbhyf/image/upload/v1772527328/footnote2_1_mik5sc.jpg" 
                  alt="Funding Partners" 
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Page Components */

function Home({ navigateTo }: { navigateTo: (id: string) => void }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
            alt="Learning Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-10 border border-blue-100/50">
                <Sparkles size={14} className="animate-pulse" />
                ΣΥΜΠΡΑΞΕΙΣ ΕΡΕΥΝΗΤΙΚΗΣ ΑΡΙΣΤΕΙΑΣ (SUB.1.1)
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] text-slate-900 font-sans relative">
                <span className="relative z-10">{content.home.hero.title}</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10" />
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-sans italic text-slate-600 mb-8 leading-relaxed mx-auto">
                {content.home.hero.subtitle}
              </p>
              <p className="text-lg sm:text-xl text-slate-500 mb-14 leading-relaxed max-w-2xl font-light mx-auto">
                {content.home.hero.description}
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                {content.home.hero.cta.map((cta, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo(cta.target)}
                    className={cn(
                      "px-10 py-5 rounded-full font-bold transition-all duration-500 flex items-center gap-3 text-sm tracking-widest uppercase group",
                      idx === 0 
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1" 
                        : "bg-white text-slate-900 border border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1"
                    )}
                  >
                    {cta.label}
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Soft Floating Geometry */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-blue-50 rounded-full opacity-60" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-slate-50/50 rounded-[4rem] rotate-12 opacity-40 blur-sm" />
            <div className="absolute top-1/3 right-1/2 w-4 h-4 bg-blue-400/20 rounded-full blur-sm" />
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section - Moved to beginning */}
      <section className="bg-white py-16 text-slate-900 overflow-hidden relative border-b border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/[0.01] skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Μετασχηματίζοντας την Εκπαίδευση με Τεχνολογία Αιχμής</h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12 font-light">
              Το έργο PREPARE δεν είναι απλώς μια προσθήκη στο Moodle. Είναι ένας θεμελιώδης επανασχεδιασμός του τρόπου με τον οποίο αλληλεπιδρούμε με τα ψηφιακά περιβάλλοντα μάθησης.
            </p>
            <div className="space-y-6">
              {[
                'Αυτοματοποιημένη παραγωγή υλικού υψηλής ποιότητας',
                'Προσαρμοστική μάθηση βασισμένη σε δεδομένα',
                'Εμβυθιστικές εμπειρίες AR για καλύτερη κατανόηση'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ChevronRight size={16} />
                  </div>
                  <span className="text-lg font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full">
            <a 
              href="https://adaptivelms.ict.ihu.gr/my/courses.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block aspect-video bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgb(0,0,0,0.05)] relative group border border-slate-100 cursor-pointer"
            >
              <img 
                src="https://res.cloudinary.com/direhbhyf/image/upload/v1772528304/Moodle-come-funziona-768x512_mzg3qc.jpg" 
                alt="Education Tech" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent flex items-end p-12">
                <div className="text-slate-900">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-blue-600">Platform Preview</p>
                  <h4 className="text-2xl font-bold font-sans flex items-center gap-2">
                    Intelligent Moodle Dashboard
                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars-section" className="py-16 bg-[#F8FAFC] border-b border-slate-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Βασικοί Πυλώνες</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full opacity-80" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {content.home.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(37,99,235,0.05)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-8 shadow-inner">
                  {pillar.id === 'genai' && <Cpu size={28} />}
                  {pillar.id === 'adaptive' && <Zap size={28} />}
                  {pillar.id === 'analytics' && <BarChart3 size={28} />}
                  {pillar.id === 'ar' && <Smartphone size={28} />}
                  {pillar.id === 'moodle' && <GraduationCap size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 leading-tight">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="flex flex-col">
        <div id="tech-section" className="scroll-mt-32 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Τεχνολογική Υλοποίηση</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full opacity-80" />
          </div>
          <Technology />
        </div>

        <div id="innovation-section" className="scroll-mt-32 py-16 bg-[#F8FAFC] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Καινοτομία & Επιστημονική Συνεισφορά</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full opacity-80" />
          </div>
          <Innovation />
        </div>
      </section>

      {/* Funding Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] bg-white border border-slate-100 text-slate-900 relative overflow-hidden shadow-[0_30px_100px_rgb(0,0,0,0.03)]">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] -z-10" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Χρηματοδότηση Έργου</h2>
              <div className="space-y-4 text-slate-600 text-lg sm:text-xl leading-relaxed font-light">
                <p>
                  <span className="font-bold text-slate-900">Προϋπολογισμός έργου:</span> 525.905,00 €
                </p>
                <p>
                  <span className="font-bold text-slate-900">Χρηματοδότηση ΕΕ:</span> 365.137,50 €
                </p>
                <p className="text-base sm:text-lg">
                  Το έργο υλοποιείται στο πλαίσιο της δράσης «Προώθηση της ποιότητας, της καινοτομίας και της εξωστρέφειας στα πανεπιστήμια» (Strategy for Excellence in Universities & Innovation) (ID 16289)» του Ταμείου Ανάκαμψης και Ανθεκτικότητας.
                </p>
              </div>
            </div>
            <a 
              href="https://www.epiteliki.minedu.gov.gr/?page_id=4083&lang=el" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 sm:px-12 py-4 sm:py-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-500 flex items-center gap-3 whitespace-nowrap shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              ΕΠΙΤΕΛΙΚΗ ΔΟΜΗ ΕΣΠΑ
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Project() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16">
      <header className="mb-12 sm:mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 tracking-tight font-sans">{content.project.title}</h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full opacity-80" />
      </header>
      
      <div className="space-y-12 sm:space-y-16 mb-20">
        {content.project.sections.map((section, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 group"
          >
            <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-slate-100 bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 font-sans text-xl sm:text-2xl font-bold">
                {idx + 1}
              </div>
              {idx < content.project.sections.length - 1 && (
                <div className="hidden sm:block w-px h-full bg-slate-100 mt-8" />
              )}
            </div>
            <div className="flex-1 pt-0 sm:pt-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">{section.title}</h3>
              <p className="text-slate-500 text-lg sm:text-xl leading-relaxed font-light">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {content.project.images?.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-slate-100"
          >
            <img src={img} alt={`Project visualization ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>

      {/* Results Section moved here */}
      <div className="pt-16 border-t border-slate-100">
        <header className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">{content.results.title}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full opacity-80" />
        </header>
        <Results />
      </div>
    </div>
  );
}

function Technology() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="space-y-16">
        {/* AI Pipeline */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 text-slate-900 relative overflow-hidden border border-slate-100 shadow-[0_20px_60px_rgb(0,0,0,0.02)]">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-blue-600 hidden sm:block">
            <Cpu size={160} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 tracking-tight">{content.tech.aiPipeline.title}</h2>
          <p className="text-slate-500 mb-10 text-lg sm:text-xl font-light leading-relaxed">{content.tech.aiPipeline.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.tech.aiPipeline.items.map((item, i) => (
              <div key={i} className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4 group hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)] group-hover:bg-white" />
                <span className="font-semibold text-slate-700 text-sm tracking-tight group-hover:text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.tech.features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-500 bg-white shadow-sm hover:shadow-md group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {i === 0 && <MessageSquare size={22} />}
                  {i === 1 && <Users size={22} />}
                  {i === 2 && <Database size={22} />}
                  {i === 3 && <BarChart3 size={22} />}
                  {i === 4 && <Clock size={22} />}
                  {i === 5 && <Zap size={22} />}
                  {i === 6 && <ArrowRight size={22} />}
                  {i === 7 && <ShieldCheck size={22} />}
                  {i === 8 && <ShieldCheck size={22} />}
                </div>
                <h4 className="font-bold text-slate-900 text-lg tracking-tight">{feature.title}</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Innovation() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {content.innovation.points.map((point, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
              {i === 0 && <Layers size={32} />}
              {i === 1 && <Zap size={32} />}
              {i === 2 && <Users size={32} />}
              {i === 3 && <ShieldCheck size={32} />}
              {i === 4 && <Database size={32} />}
              {i === 5 && <BarChart3 size={32} />}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">{point.title}</h3>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-light">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Results() {
  const renderDescription = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline font-bold"
          >
            {part.includes('adaptivelms') ? 'Δείτε το εδώ' : part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {content.results.items.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.2rem] sm:rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 font-sans text-2xl sm:text-3xl font-bold">
              {i + 1}
            </div>
            <div className="pt-0 sm:pt-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-base sm:text-lg">
                {renderDescription(item.description)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Dissemination() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <header className="mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 tracking-tight font-sans">Διάχυση Έργου</h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full opacity-80" />
      </header>

      {/* Activities Section */}
      <div className="mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-slate-900 tracking-tight border-l-4 border-blue-600 pl-6">Διάχυση & Συνέδρια</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.dissemination.activities.map((activity, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {i === 0 && <Globe size={28} />}
                {i === 1 && <GraduationCap size={28} />}
                {i === 2 && <Smartphone size={28} />}
                {i === 3 && <Zap size={28} />}
                {i === 4 && <Users size={28} />}
                {i === 5 && <ArrowRight size={28} />}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{activity.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-lg">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Publications Section */}
      <div className="pt-16 border-t border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-slate-900 tracking-tight border-l-4 border-blue-600 pl-6">Δημοσιεύσεις</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.publications.list.map((pub, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-50 text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-100">
                  {pub.type}
                </span>
                <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-100/50">
                  {pub.year}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300">{pub.title}</h3>
              <p className="text-slate-500 mb-6 sm:mb-8 font-light text-base sm:text-lg italic">{pub.authors}</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-slate-50">
                <span className="text-xs sm:text-sm font-medium text-slate-400 font-sans">{pub.venue}</span>
                {pub.link ? (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn"
                  >
                    View Paper 
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                ) : (
                  <button className="text-blue-600 hover:text-blue-700 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                    View Paper 
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <header className="mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 tracking-tight font-sans">{content.team.title}</h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full opacity-80" />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {content.team.members.map((member, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-slate-50 mb-6 sm:mb-8 overflow-hidden shadow-inner">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">{member.name}</h3>
            <p className="text-blue-600 font-bold text-[10px] sm:text-xs mb-4 sm:mb-6 uppercase tracking-[0.2em]">{member.role}</p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <header className="mb-12 sm:mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-slate-900 tracking-tight font-sans">{content.partners.title}</h1>
        <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Σύμπραξη ακαδημαϊκών και εκπαιδευτικών φορέων για την επίτευξη των στόχων του έργου.
        </p>
      </header>

      <div className={cn(
        "grid grid-cols-1 gap-8 sm:gap-10",
        content.partners.list.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3"
      )}>
        {content.partners.list.map((partner, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-50 border border-slate-100 text-center flex flex-col items-center group hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 sm:mb-10 group-hover:scale-110 transition-transform duration-500 p-6">
              {partner.image ? (
                <img src={partner.image} alt={partner.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              ) : (
                i === 0 ? <GraduationCap size={48} className="text-blue-600 sm:size-[56px]" /> : <Globe size={48} className="text-slate-300 sm:size-[56px]" />
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">{partner.name}</h3>
            <p className="text-slate-500 leading-relaxed font-light text-base sm:text-lg">{partner.description}</p>
          </motion.div>
        ))}
      </div>

      {content.partners.footerText && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-500 text-lg sm:text-xl font-light leading-relaxed italic">
            "{content.partners.footerText}"
          </p>
        </motion.div>
      )}
    </div>
  );
}

function News() {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16">
      <header className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight font-sans">{content.news.title}</h1>
        <p className="text-slate-500 text-lg sm:text-xl font-light">
          Μείνετε ενημερωμένοι για την πρόοδο και τις δράσεις του PREPARE.
        </p>
      </header>

      <div className="space-y-8">
        {content.news.posts.map((post, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 sm:gap-12 p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-500 group"
          >
            <div className="md:w-48 flex-shrink-0">
              <span className="text-xs sm:text-sm font-bold text-blue-600 tracking-[0.2em] uppercase">{post.date}</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">{post.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light text-base sm:text-lg mb-6 sm:mb-8">{post.content}</p>
              <button className="text-slate-900 font-bold flex items-center gap-3 group/btn uppercase tracking-widest text-[10px] sm:text-xs">
                Διαβάστε περισσότερα 
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <header className="mb-12 sm:mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight font-sans">{content.contact.title}</h1>
        <p className="text-slate-500 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
          Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή συνεργασία.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-10 sm:space-y-16">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="text-[10px] font-bold mb-1 uppercase tracking-[0.2em] text-slate-400">Email</h4>
              <p className="text-slate-900 text-xl sm:text-2xl font-medium tracking-tight break-all">{content.contact.email}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="text-[10px] font-bold mb-1 uppercase tracking-[0.2em] text-slate-400">Ίδρυμα</h4>
              <p className="text-slate-900 text-xl sm:text-2xl font-medium tracking-tight">{content.contact.institution}</p>
              <p className="text-slate-500 text-base sm:text-lg font-light">{content.contact.lab}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
              <Globe size={28} />
            </div>
            <div>
              <h4 className="text-[10px] font-bold mb-1 uppercase tracking-[0.2em] text-slate-400">Διεύθυνση</h4>
              <p className="text-slate-900 text-xl sm:text-2xl font-medium tracking-tight leading-tight">{content.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-12 border border-slate-100 shadow-[0_30px_100px_rgb(0,0,0,0.03)]">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 tracking-tight">Στείλτε μας ένα μήνυμα</h3>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Όνομα</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 outline-none transition-all duration-300" placeholder="Το όνομά σας" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 outline-none transition-all duration-300" placeholder="email@example.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Θέμα</label>
              <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 outline-none transition-all duration-300" placeholder="Θέμα μηνύματος" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Μήνυμα</label>
              <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-600 outline-none transition-all duration-300 resize-none" placeholder="Το μήνυμά σας..."></textarea>
            </div>
            <button className="w-full py-6 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-500 shadow-xl shadow-blue-100 hover:shadow-blue-200 uppercase tracking-widest text-sm">
              Αποστολή Μηνύματος
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
