
import React from 'react';
import { Link } from 'react-router-dom';
import { TRANSLATIONS } from '../constants';
import { 
  Search, 
  MapPin, 
  Send, 
  Briefcase, 
  Users, 
  FileText, 
  CheckCircle, 
  Smartphone, 
  Scale, 
  Plane, 
  Hammer,
  ArrowRight
} from 'lucide-react';
import { useGlobal } from '../GlobalContext';

const Home: React.FC = () => {
  const { lang, siteInfo } = useGlobal();
  const t = TRANSLATIONS[lang];

  return (
    <div className="dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={siteInfo.heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
          <h1 className="text-3xl md:text-7xl font-display font-extrabold text-white mb-8 md:mb-10 tracking-tight leading-tight animate-in fade-in slide-in-from-top-10 duration-1000">
            {siteInfo.heroTitle[lang]}
          </h1>

          <div className="max-w-4xl mx-auto mb-10 md:mb-14">
            <div className="bg-white/10 backdrop-blur-xl p-2 md:p-3 rounded-[32px] md:rounded-[36px] border border-white/20">
              <div className="bg-white rounded-[26px] md:rounded-[30px] p-2 flex flex-col md:flex-row items-center">
                <div className="flex-grow flex items-center px-4 md:px-6 w-full py-3 md:py-4 bg-transparent">
                  <Search className="w-5 h-5 text-slate-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Kasb, lavozim yoki kompaniya"
                    className="w-full bg-transparent outline-none text-slate-800 text-base md:text-lg font-semibold placeholder:text-slate-400"
                  />
                </div>
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-[20px] md:rounded-[24px] font-black shadow-xl active:scale-95">
                  Qidirish
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto text-white">
            <div className="text-center md:text-left border-l-0 md:border-l-2 border-white/30 pl-0 md:pl-8">
              <div className="text-3xl md:text-4xl font-black mb-1">{siteInfo.stats.resumes}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/70 font-black">Rezume</div>
            </div>
            <div className="text-center md:text-left border-l-0 md:border-l-2 border-white/30 pl-0 md:pl-8">
              <div className="text-3xl md:text-4xl font-black mb-1">{siteInfo.stats.vacancies}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/70 font-black">Vakansiya</div>
            </div>
            <div className="text-center md:text-left border-l-0 md:border-l-2 border-white/30 pl-0 md:pl-8">
              <div className="text-3xl md:text-4xl font-black mb-1">{siteInfo.stats.companies}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/70 font-black">Kompaniya</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-12">Bizning xizmatlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {siteInfo.services.map((service, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-2xl transition-all duration-500">
                <div className="h-48 md:h-60 overflow-hidden relative">
                  <img src={service.image} alt={service.title[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title[lang]}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.desc[lang]}</p>
                  <Link to="/apply" className="inline-flex items-center text-blue-600 font-bold">
                    Batafsil <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-16">Ishga joylashish jarayoni</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {siteInfo.process.map((item, i) => (
              <div key={i} className="relative bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-50 dark:border-slate-700">
                <h4 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-3">{item.title[lang]}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">{item.desc[lang]}</p>
                <div className="absolute top-8 right-8 text-slate-100 dark:text-slate-700/50 text-4xl md:text-5xl font-black select-none">0{item.step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
