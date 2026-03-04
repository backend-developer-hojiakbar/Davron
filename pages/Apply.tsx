
import React, { useState } from 'react';
import { TRANSLATIONS } from '../constants';
import { useGlobal } from '../GlobalContext';
import { Send, FileText, CheckCircle2 } from 'lucide-react';

const Apply: React.FC = () => {
  const { lang } = useGlobal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="max-w-md w-full px-6 text-center animate-in zoom-in duration-500">
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-2xl border border-transparent dark:border-slate-800">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-4">Arizangiz qabul qilindi!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Mutaxassislarimiz tez orada siz bilan bog'lanishadi. Iltimos, telefoningizni va Telegramingizni kuzatib boring.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Yangi ariza topshirish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white mb-6">{t.nav.apply}</h1>
          <p className="text-slate-500 dark:text-slate-400">Quyidagi formani to'ldiring va xalqaro karerangizni boshlang.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.fullName}</label>
                <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-all" placeholder="Ali Valiyev" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.phone}</label>
                <input required type="tel" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-all" placeholder="+998 90 123 45 67" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Telegram</label>
                <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-all" placeholder="@username" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.birthDate}</label>
                <input required type="date" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.passport}</label>
              <div className="flex space-x-4">
                <label className="flex-1 flex items-center justify-center p-4 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                  <input type="radio" name="passport" className="hidden" />
                  <span className="font-semibold text-slate-600 dark:text-slate-400">{t.forms.yes}</span>
                </label>
                <label className="flex-1 flex items-center justify-center p-4 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors">
                  <input type="radio" name="passport" className="hidden" />
                  <span className="font-semibold text-slate-600 dark:text-slate-400">{t.forms.no}</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.targetCountry}</label>
              <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-all">
                <option>Germaniya</option>
                <option>Polsha</option>
                <option>Chexiya</option>
                <option>Litva/Latviya</option>
                <option>Boshqa</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.experience}</label>
              <textarea rows={4} className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-all" placeholder="Ish tajribangiz haqida qisqacha ma'lumot..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.forms.uploadCv}</label>
              <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[32px] p-8 text-center hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/20 transition-all cursor-pointer group">
                <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3 group-hover:text-indigo-400 transition-colors" />
                <p className="text-slate-500 dark:text-slate-400 font-medium">Faylni tanlang yoki shu yerga tashlang</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">PDF, JPG (Max 5MB)</p>
                <input type="file" className="hidden" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-5 rounded-[24px] font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none flex items-center justify-center space-x-2"
            >
              <span>{loading ? 'Yuborilmoqda...' : t.forms.submit}</span>
              {!loading && <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;