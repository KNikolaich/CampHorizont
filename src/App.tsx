/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trees, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  Star,
  ArrowRight,
  Calendar,
  Heart,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О лагере', href: '#about' },
    { name: 'Программы', href: '#programs' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 border-b border-slate-200/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="bg-emerald-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Trees className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-display font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            HORIZON
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
            Забронировать
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden md:hidden border-t border-slate-100"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-900 flex justify-between items-center"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </a>
              ))}
              <button className="bg-emerald-600 text-white px-6 py-4 rounded-2xl font-bold text-center">
                Забронировать место
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070" 
          alt="Camp Background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full text-emerald-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Лето 2026 • Открыто бронирование
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight mb-8">
            ТВОЕ ЛУЧШЕЕ <br />
            <span className="text-emerald-500">ЛЕТО ТУТ.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Премиальный отдых для детей и подростков. Развиваем навыки будущего в окружении природы и единомышленников.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/30 flex items-center justify-center gap-3 group active:scale-95">
              Смотреть смены
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              О лагере
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Badges */}
      <div className="absolute bottom-12 left-0 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Лицензия МОН</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Страхование 24/7</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Собственный пляж</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest">IT-лаборатория</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />,
      title: "Безопасность",
      desc: "Закрытая территория, 64 камеры наблюдения и круглосуточный медпункт."
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-600" />,
      title: "Команда",
      desc: "Вожатые с педагогическим образованием и опытом работы от 3-х лет."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
      title: "Развитие",
      desc: "Мастер-классы по софт-скиллам, лидерству и критическому мышлению."
    },
    {
      icon: <Heart className="w-10 h-10 text-emerald-600" />,
      title: "Комфорт",
      desc: "Проживание в современных номерах по 3-4 человека с удобствами."
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-[11px] font-bold uppercase tracking-widest mb-6">
              О нашем проекте
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.1]">
              Больше чем просто <br /> детский отдых
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Horizon — это пространство, где каждый ребенок может найти свое призвание. Мы объединили классические традиции лагеря с современными образовательными методиками.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i}>
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" 
                alt="Camp Life" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-emerald-600 p-10 rounded-[2rem] text-white shadow-2xl hidden md:block">
              <div className="text-5xl font-display font-bold mb-1">15</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Лет создаем <br /> счастливое детство</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Digital Creators",
      age: "10-14 лет",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      tags: ["IT", "Media"],
      price: "от 45 000 ₽"
    },
    {
      title: "Art & Performance",
      age: "8-16 лет",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=800",
      tags: ["Art", "Drama"],
      price: "от 42 000 ₽"
    },
    {
      title: "Survival Skills",
      age: "12-17 лет",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800",
      tags: ["Sport", "Nature"],
      price: "от 48 000 ₽"
    }
  ];

  return (
    <section id="programs" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Направления</h2>
          <p className="text-4xl md:text-6xl font-display font-bold text-slate-900">Выберите свою смену</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-slate-900">{p.title}</h3>
                  <span className="text-emerald-600 font-bold text-sm">{p.price}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-8">
                  <Users className="w-4 h-4" /> {p.age}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all active:scale-95">
                  Подробнее о смене
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Готовы к <br /> приключениям?
              </h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Оставьте заявку, и мы поможем подобрать идеальную смену для вашего ребенка.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-emerald-50" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1">Телефон</p>
                    <p className="text-xl font-bold text-white">+7 (800) 555-35-35</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-emerald-50" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1">Email</p>
                    <p className="text-xl font-bold text-white">go@horizon.camp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ваше имя</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="Александр" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Телефон</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="+7 (___) ___-__-__" />
                </div>
                <button className="w-full bg-emerald-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20 active:scale-95">
                  Отправить заявку
                </button>
                <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с условиями <br /> обработки персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2.5">
            <div className="bg-slate-900 p-1.5 rounded-lg">
              <Trees className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-display font-bold tracking-tight text-slate-900">
              HORIZON
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-emerald-600 transition-colors">О лагере</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Программы</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Документы</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Контакты</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-600 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>© 2026 HORIZON CAMP. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <p>СДЕЛАНО С ЛЮБОВЬЮ К ДЕТЯМ</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
