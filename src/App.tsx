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
    if (['tech', 'innovation', 'results', 'publications', 'team', 'dissemination'].includes(id)) {
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
      case 'news': return <News />;
      case 'contact': return <Contact />;
      // These are now part of the Home page or sub-sections
      case 'tech': return <Technology />;
      case 'innovation': return <Innovation />;
      case 'results': return <Results />;
      case 'publications': return <Publications />;
      case 'dissemination': return <Dissemination />;
      case 'team': return <Team />;
      default: return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 relative">
      {/* High-Tech Elegant Research Background */}
      <div className="fixed inset-0 -z-20 bg-slate-100 overflow-hidden">
        {/* Mesh Gradient - Extremely Subtle */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[#1e40af]/[0.06] blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#0284c7]/[0.05] blur-[100px] animate-pulse" style={{ animationDuration: '15s' }} />
        </div>

        {/* Neural Network Pattern (SVG) - Faint */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#0f172a" />
              <circle cx="180" cy="70" r="1" fill="#0f172a" />
              <circle cx="100" cy="160" r="1" fill="#0f172a" />
              <circle cx="220" cy="200" r="1" fill="#0f172a" />
              <path d="M20 20 L180 70 M180 70 L100 160 M100 160 L20 20 M180 70 L220 200 M100 160 L220 200" stroke="#0f172a" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
          
          {/* Random Subtle Glowing Nodes */}
          <motion.circle 
            animate={{ opacity: [0.1, 0.4, 0.1] }} 
            transition={{ duration: 5, repeat: Infinity }}
            cx="30%" cy="25%" r="2" fill="#1e40af" 
          />
          <motion.circle 
            animate={{ opacity: [0.1, 0.3, 0.1] }} 
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            cx="80%" cy="55%" r="1.5" fill="#0284c7" 
          />
        </svg>

        {/* Soft Particles - Very Faint */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.1
              }}
              animate={{ 
                y: [null, "-=30px", "+=30px"],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{ 
                duration: 8 + Math.random() * 7, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-blue-600 rounded-full blur-[1px]"
            />
          ))}
        </div>
        
        {/* Center Negative Space (Fade) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-100/20" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-slate-100/80 backdrop-blur-md py-3 border-slate-200 shadow-sm" : "bg-transparent py-5 border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
              <Brain size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">PREPARE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {content.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={cn(
                  "px-3 py-2 rounded-md text-xs uppercase tracking-wider font-bold transition-all",
                  activeTab === item.id 
                    ? "text-blue-800 bg-blue-800/10" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                {item.label}
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
      <footer className="bg-slate-100 text-slate-600 py-16 mt-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Brain size={32} className="text-blue-600" />
                <span className="text-2xl font-bold text-slate-900">PREPARE</span>
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
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm">© {new Date().getFullYear()} PREPARE Research Project. Με την υποστήριξη του ΔΙΠΑΕ.</p>
              <a 
                href="https://www.epiteliki.minedu.gov.gr/?page_id=4083&lang=el" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline flex items-center gap-1"
              >
                Χρηματοδοτικός Φορέας: Επιτελική Δομή ΕΣΠΑ ΥΠΑΙΘΑ <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex items-center gap-8 opacity-60 hover:opacity-100 transition-all">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-900">IHU Research</span>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-900">EU Funded</span>
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
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-8 border border-blue-200"
          >
            <Sparkles size={16} />
            <span>Research & Innovation</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700">{content.home.hero.title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 font-medium mb-6 max-w-4xl mx-auto">
            {content.home.hero.subtitle}
          </p>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {content.home.hero.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {content.home.hero.cta.map((cta, idx) => (
              <button
                key={idx}
                onClick={() => navigateTo(cta.target)}
                className={cn(
                  "px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2",
                  idx === 0 
                    ? "bg-blue-800 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/40" 
                    : "bg-white text-slate-900 border border-slate-200 hover:border-blue-700 hover:bg-slate-100"
                )}
              >
                {cta.label}
                <ArrowRight size={18} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Βασικοί Πυλώνες</h2>
          <div className="w-16 h-1 bg-blue-800 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {content.home.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                {pillar.id === 'genai' && <Cpu size={24} />}
                {pillar.id === 'adaptive' && <Zap size={24} />}
                {pillar.id === 'analytics' && <BarChart3 size={24} />}
                {pillar.id === 'ar' && <Smartphone size={24} />}
                {pillar.id === 'moodle' && <GraduationCap size={24} />}
              </div>
              <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Sections (Moved from Menu) */}
      <section className="space-y-48">
        <div id="tech-section" className="scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">Τεχνολογική Υλοποίηση</h2>
            <div className="w-20 h-1.5 bg-blue-800 rounded-full" />
          </div>
          <Technology />
        </div>
        
        <div id="innovation-section" className="scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">Καινοτομία & Επιστημονική Συνεισφορά</h2>
            <div className="w-20 h-1.5 bg-blue-800 rounded-full" />
          </div>
          <Innovation />
        </div>

        <div id="results-section" className="scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">Αποτελέσματα</h2>
            <div className="w-20 h-1.5 bg-blue-800 rounded-full" />
          </div>
          <Results />
        </div>

        <div id="publications-section" className="scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">Δημοσιεύσεις</h2>
            <div className="w-20 h-1.5 bg-blue-800 rounded-full" />
          </div>
          <Publications />
        </div>

        <div id="team-section" className="scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">Ερευνητική Ομάδα</h2>
            <div className="w-20 h-1.5 bg-blue-800 rounded-full" />
          </div>
          <Team />
        </div>

        <div id="dissemination-section" className="scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-4xl font-bold mb-4">Διάχυση & Συνέδρια</h2>
            <div className="w-20 h-1.5 bg-blue-800 rounded-full" />
          </div>
          <Dissemination />
        </div>
      </section>

      {/* Funding Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="p-12 rounded-[3rem] bg-white border border-slate-200 text-slate-900 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Χρηματοδότηση Έργου</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Το έργο υλοποιείται στο πλαίσιο της δράσης «Ερευνώ – Δημιουργώ – Καινοτομώ» και συγχρηματοδοτείται από την Ελλάδα και την Ευρωπαϊκή Ένωση μέσω του Επιχειρησιακού Προγράμματος Ανταγωνιστικότητα, Επιχειρηματικότητα και Καινοτομία (ΕΠΑνΕΚ).
              </p>
            </div>
            <a 
              href="https://www.epiteliki.minedu.gov.gr/?page_id=4083&lang=el" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-900/10"
            >
              Επιτελική Δομή ΕΣΠΑ
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-slate-200 py-32 text-slate-900 overflow-hidden relative border-y border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/[0.03] skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Μετασχηματίζοντας την Εκπαίδευση με Τεχνολογία Αιχμής</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Το έργο PREPARE δεν είναι απλώς μια προσθήκη στο Moodle. Είναι ένας θεμελιώδης επανασχεδιασμός του τρόπου με τον οποίο αλληλεπιδρούμε με τα ψηφιακά περιβάλλοντα μάθησης.
            </p>
            <div className="space-y-4">
              {[
                'Αυτοματοποιημένη παραγωγή υλικού υψηλής ποιότητας',
                'Προσαρμοστική μάθηση βασισμένη σε δεδομένα',
                'Εμβυθιστικές εμπειρίες AR για καλύτερη κατανόηση'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-800">
                    <ChevronRight size={14} />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl relative group border border-slate-200">
              <img 
                src="https://picsum.photos/seed/education/800/450" 
                alt="Education Tech" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent flex items-end p-8">
                <div className="text-slate-900">
                  <p className="text-xs font-mono uppercase tracking-widest mb-2 text-blue-800">Platform Preview</p>
                  <h4 className="text-xl font-bold">Intelligent Moodle Dashboard</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Project() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{content.project.title}</h1>
        <div className="w-20 h-1.5 bg-blue-800 mx-auto rounded-full" />
      </header>
      
      <div className="space-y-12">
        {content.project.sections.map((section, idx) => (
          <div key={idx} className="flex gap-8 group">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors font-bold">
                {idx + 1}
              </div>
              {idx < content.project.sections.length - 1 && (
                <div className="w-0.5 h-full bg-slate-100 mt-4" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{section.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Technology() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* AI Pipeline */}
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white rounded-3xl p-10 text-slate-900 relative overflow-hidden border border-slate-200 shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-blue-800">
              <Cpu size={120} />
            </div>
            <h2 className="text-3xl font-bold mb-6">{content.tech.aiPipeline.title}</h2>
            <p className="text-slate-600 mb-8 text-lg">{content.tech.aiPipeline.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {content.tech.aiPipeline.items.map((item, i) => (
                <div key={i} className="bg-slate-100 border border-slate-200 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-800" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.tech.features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white shadow-sm text-blue-600">
                    {i === 0 && <MessageSquare size={20} />}
                    {i === 1 && <Users size={20} />}
                    {i === 2 && <Database size={20} />}
                    {i === 3 && <BarChart3 size={20} />}
                    {i === 4 && <Clock size={20} />}
                    {i === 5 && <Zap size={20} />}
                    {i === 6 && <ArrowRight size={20} />}
                    {i === 7 && <ShieldCheck size={20} />}
                    {i === 8 && <ShieldCheck size={20} />}
                  </div>
                  <h4 className="font-bold text-slate-900">{feature.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AR Modules */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 text-slate-900 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-blue-800">
              <Smartphone size={32} />
              <h2 className="text-2xl font-bold text-slate-900">{content.tech.arModules.title}</h2>
            </div>
            <div className="space-y-6">
              {content.tech.arModules.items.map((item, i) => (
                <div key={i} className="border-l-2 border-blue-800 pl-6 py-2">
                  <h4 className="font-bold mb-2 text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Info size={18} className="text-blue-800" />
              Τεχνολογικό Stack
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-mono">
              <li>• Python / FastAPI (AI Services)</li>
              <li>• PHP / Moodle API (Plugins)</li>
              <li>• Unity / WebXR (AR Modules)</li>
              <li>• PostgreSQL / Redis (Data)</li>
              <li>• OpenAI / Anthropic (LLMs)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Innovation() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.innovation.points.map((point, i) => (
          <div key={i} className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800 mb-8">
              {i === 0 && <Layers size={28} />}
              {i === 1 && <Zap size={28} />}
              {i === 2 && <Users size={28} />}
              {i === 3 && <ShieldCheck size={28} />}
              {i === 4 && <Database size={28} />}
              {i === 5 && <BarChart3 size={28} />}
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{point.title}</h3>
            <p className="text-slate-600 leading-relaxed">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Results() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.results.items.map((item, i) => (
          <div key={i} className="flex gap-6 p-8 rounded-3xl bg-slate-100 border border-slate-200 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-900 group-hover:bg-blue-800 group-hover:text-white transition-all">
              <span className="text-2xl font-bold">{i + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Publications() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="space-y-6">
        {content.publications.list.map((pub, i) => (
          <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-800 transition-all">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                {pub.type}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                {pub.year}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">{pub.title}</h3>
            <p className="text-slate-600 mb-4 font-medium">{pub.authors}</p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-sm italic text-slate-600">{pub.venue}</span>
              <button className="text-blue-800 hover:text-blue-900 font-bold text-sm flex items-center gap-1">
                View Paper <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dissemination() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.dissemination.activities.map((activity, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
              {i === 0 && <Globe size={24} />}
              {i === 1 && <GraduationCap size={24} />}
              {i === 2 && <Smartphone size={24} />}
              {i === 3 && <Zap size={24} />}
              {i === 4 && <Users size={24} />}
              {i === 5 && <ArrowRight size={24} />}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{activity.title}</h3>
            <p className="text-slate-600 leading-relaxed">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.team.members.map((member, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="w-20 h-20 rounded-2xl bg-slate-100 mb-6 overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/member${i}/200/200`} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
            <p className="text-blue-800 font-bold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{content.partners.title}</h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Σύμπραξη ακαδημαϊκών και εκπαιδευτικών φορέων για την επίτευξη των στόχων του έργου.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {content.partners.list.map((partner, i) => (
          <div key={i} className="p-10 rounded-3xl bg-slate-100 border border-slate-200 text-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center mb-8">
              {i === 0 ? <GraduationCap size={48} className="text-blue-800" /> : <Globe size={48} className="text-slate-400" />}
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{partner.name}</h3>
            <p className="text-slate-600 leading-relaxed">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">{content.news.title}</h1>
        <p className="text-slate-600 text-lg">
          Μείνετε ενημερωμένοι για την πρόοδο και τις δράσεις του PREPARE.
        </p>
      </header>

      <div className="space-y-8">
        {content.news.posts.map((post, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all group">
            <div className="md:w-48 flex-shrink-0">
              <span className="text-sm font-mono text-blue-800 font-bold">{post.date}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-800 transition-colors">{post.title}</h3>
              <p className="text-slate-600 leading-relaxed">{post.content}</p>
              <button className="mt-6 text-slate-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Διαβάστε περισσότερα <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">{content.contact.title}</h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία ή συνεργασία.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800 flex-shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Email</h4>
              <p className="text-slate-600 text-lg">{content.contact.email}</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Ίδρυμα</h4>
              <p className="text-slate-600 text-lg">{content.contact.institution}</p>
              <p className="text-slate-500">{content.contact.lab}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
              <Globe size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Διεύθυνση</h4>
              <p className="text-slate-600 text-lg">{content.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-3xl p-10 border border-slate-200">
          <h3 className="text-2xl font-bold mb-8">Στείλτε μας ένα μήνυμα</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Όνομα</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Το όνομά σας" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="email@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Θέμα</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Θέμα μηνύματος" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Μήνυμα</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" placeholder="Το μήνυμά σας..."></textarea>
            </div>
            <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-slate-200">
              Αποστολή Μηνύματος
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
