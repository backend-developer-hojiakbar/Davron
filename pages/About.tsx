
import React from 'react';
import { Shield, Target, Zap, Award, CheckCircle } from 'lucide-react';
import { useGlobal } from '../GlobalContext';

const About: React.FC = () => {
  const { lang, siteInfo } = useGlobal();
  const data = siteInfo.about;
  
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
              {data.title[lang]}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {data.p1[lang]}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {data.p2[lang]}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{data.experience}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Tajriba</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{data.clients}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Mijozlar</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={data.image} alt="Team" className="rounded-[48px] shadow-2xl" />
          </div>
        </div>

        {/* License Section */}
        <div className="bg-indigo-900 dark:bg-slate-900 rounded-[56px] p-12 lg:p-20 text-white relative overflow-hidden border border-white/5 dark:border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-800 dark:bg-indigo-900/50 rounded-full blur-[100px] opacity-50 -z-0"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-display font-extrabold mb-6">Rasmiy Litsenziya</h2>
              <p className="text-indigo-100 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                Biz O'zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi tomonidan berilgan {siteInfo.license} asosida qonuniy faoliyat yuritadigan kam sonli agentliklardan birimiz.
              </p>
              <ul className="space-y-4">
                {['Qonuniy himoya', 'Xavfsiz pul o\'tkazmalari', 'Rasmiy ish staji', 'Davlat nazorati'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-400 dark:text-indigo-500" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 dark:bg-slate-800/30 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-slate-700">
              <div className="aspect-[3/4] bg-white/20 dark:bg-slate-900/40 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/30 text-white/50 text-center px-4">
                [Litsenziya Nusxasi / License Copy]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
