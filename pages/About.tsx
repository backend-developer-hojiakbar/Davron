
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
      </div>
    </div>
  );
};

export default About;
