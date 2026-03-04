
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';
import JobCard from '../components/JobCard';
import { Search, Filter, Sparkles, MessageCircle } from 'lucide-react';
import { useGlobal } from '../GlobalContext';

const Jobs: React.FC = () => {
  const { jobs, lang } = useGlobal();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  const t = TRANSLATIONS[lang];

  // Important: Reset filter when language changes because category names change
  useEffect(() => {
    setActiveFilter('All');
  }, [lang]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.country[lang].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || job.category[lang] === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', ...new Set(jobs.map(j => j.category[lang]))];

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6">{t.nav.jobs}</h1>
          
          {/* AI Helper Card */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 rounded-[40px] p-10 mb-10 text-white shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Sparkles className="w-48 h-48" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full mb-4 border border-white/20">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Next-Gen Support</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-display font-extrabold mb-4">
                  AI Karera Maslahatchisi
                </h3>
                <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                  Savollaringiz bormi? Qaysi davlat yoki soha sizga ko'proq mos kelishini bilmoqchimisiz? 
                  Sun'iy intellekt yordamchimiz bilan hoziroq suhbatlashing.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Viza jarayoni', 'Yashash xarajatlari', 'Soha tanlash'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
              <Link 
                to="/career-advisor"
                className="whitespace-nowrap bg-white text-indigo-900 px-10 py-5 rounded-[24px] font-black text-lg hover:bg-indigo-50 transition-all flex items-center shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3 text-indigo-600" />
                Chatni boshlash
              </Link>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Davlat yoki kasb bo'yicha qidiruv..."
                className="w-full pl-14 pr-4 py-5 rounded-[24px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-black transition-all ${
                    activeFilter === cat 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                  }`}
                >
                  {cat === 'All' ? t.filters.all : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} lang={lang} />
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-white dark:bg-slate-900 rounded-[48px] border border-dashed border-slate-200 dark:border-slate-800">
              <div className="text-slate-400 mb-4 text-lg">Hozircha bunday vakansiyalar mavjud emas</div>
              <button 
                onClick={() => {setSearchTerm(''); setActiveFilter('All');}}
                className="text-indigo-600 font-black hover:underline text-lg"
              >
                Filtrlarni tozalash
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;