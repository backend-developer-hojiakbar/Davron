
import React from 'react';
import { MapPin, Banknote, Calendar, ArrowRight } from 'lucide-react';
import { Job, Language } from '../types';

interface JobCardProps {
  job: Job;
  lang: Language;
}

const JobCard: React.FC<JobCardProps> = ({ job, lang }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={job.image} alt={job.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
            {job.category[lang]}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2 space-x-4">
          <div className="flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-500" />
            {job.country[lang]}
          </div>
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1 text-indigo-500" />
            {job.postedAt}
          </div>
        </div>
        <h3 className="text-xl font-display font-extrabold text-slate-800 dark:text-white mb-3 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {job.title[lang]}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {job.description[lang]}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-700">
          <div className="flex items-center font-black text-indigo-600 dark:text-indigo-400">
            <Banknote className="w-5 h-5 mr-1.5" />
            {job.salary}
          </div>
          <button className="p-2.5 bg-slate-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
