
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Moon, Sun, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { useGlobal } from '../GlobalContext';

const Navbar: React.FC = () => {
  const { lang, setLang, theme, toggleTheme } = useGlobal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang];

  // 1. Scroll lock mechanism - fixes background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent layout shift on iOS
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.jobs, path: '/jobs' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
    { name: t.nav.chat, path: '/career-advisor', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const isHomePage = location.pathname === '/';
  const navTextColor = (isHomePage && !scrolled && !isOpen) 
    ? 'text-white' 
    : (theme === 'dark' ? 'text-slate-300' : 'text-slate-700');

  const logoColor = (isHomePage && !scrolled && !isOpen) ? 'white' : '#1e40af';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ease-in-out ${
        (scrolled || isOpen) 
          ? 'bg-white dark:bg-slate-900 shadow-lg py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex flex-col items-start leading-none group relative z-[70]">
              <div className="flex items-center">
                <span className={`text-2xl md:text-3xl font-display font-black lowercase tracking-tighter transition-colors duration-300 ${
                  (isHomePage && !scrolled && !isOpen) ? 'text-white' : 'text-blue-800 dark:text-blue-500'
                }`}>imkon</span>
                <div className="ml-1 relative w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                    <circle cx="18" cy="6" r="3" fill="#fbbf24" />
                    <path d="M4 20C4 20 6 12 12 10C14 11.5 16 16 16 20M12 10C12 8.5 11 7 11 5.5C11 4 12 3 13.5 3C15 3 16 4 16 5.5C16 7 15 8.5 15 10" stroke={logoColor === 'white' ? 'white' : '#1e40af'} strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <span className={`text-[7px] md:text-[8px] font-bold uppercase tracking-[0.15em] mt-0.5 transition-colors duration-300 ${
                (isHomePage && !scrolled && !isOpen) ? 'text-white/80' : 'text-blue-900/70 dark:text-blue-400'
              }`}>
                Xususiy Bandlik Agentligi
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-1.5 ${
                    location.pathname === item.path 
                      ? (isHomePage && !scrolled ? 'text-white' : 'text-blue-600')
                      : `${navTextColor} hover:text-blue-500`
                  }`}
                >
                  {item.icon && item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right side Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className={`flex items-center bg-black/5 dark:bg-white/5 rounded-2xl p-1 transition-colors border ${
                (isHomePage && !scrolled && !isOpen) ? 'border-white/20' : 'border-slate-200 dark:border-slate-800'
              }`}>
                {(['UZ', 'RU', 'EN'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`text-[10px] md:text-[11px] font-black px-2.5 md:px-3 py-1.5 rounded-xl transition-all ${
                      lang === l 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : `${navTextColor} opacity-60 hover:opacity-100`
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-3">
                <button 
                  onClick={toggleTheme}
                  className={`p-2.5 rounded-2xl transition-all duration-300 ${
                    (isHomePage && !scrolled && !isOpen) 
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
                <Link to="/apply" className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all shadow-xl active:scale-95 ${
                  (isHomePage && !scrolled && !isOpen)
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 dark:shadow-none'
                }`}>
                  {t.nav.apply}
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`lg:hidden p-3 rounded-2xl transition-all duration-300 z-[70] ${
                  isOpen 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                    : (isHomePage && !scrolled ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200')
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu - Solid background, fixed position, no scroll bleed */}
      <div 
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay for extra safety */}
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
        
        <div className="relative h-full flex flex-col pt-24 pb-10 px-6 overflow-y-auto">
          <div className="space-y-2 mt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-4 p-5 rounded-[28px] text-xl font-black transition-all duration-300 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                } ${
                  location.pathname === item.path 
                  ? 'bg-blue-600 text-white shadow-xl' 
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <div className={`${location.pathname === item.path ? 'text-white' : 'text-blue-500'}`}>
                  {item.icon ? item.icon : <Globe className="w-6 h-6" />}
                </div>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
            <button 
              onClick={toggleTheme}
              className="w-full flex items-center justify-between p-6 rounded-[28px] bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  {theme === 'light' ? <Moon className="w-6 h-6 text-indigo-600" /> : <Sun className="w-6 h-6 text-amber-400" />}
                </div>
                <span className="font-bold text-lg">Tungi rejim</span>
              </div>
              <div className={`w-12 h-6 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${theme === 'dark' ? 'left-7' : 'left-1'}`} />
              </div>
            </button>

            <Link
              to="/apply"
              className="block w-full text-center bg-blue-600 text-white p-6 rounded-[30px] font-black text-xl shadow-2xl active:scale-95"
            >
              {t.nav.apply}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
