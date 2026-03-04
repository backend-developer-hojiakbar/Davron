
import React from 'react';
import { Globe, Building2, UserPlus, FileText, Send } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6">Hamkorlik <span className="text-indigo-600 dark:text-indigo-400">Platformasi</span></h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">Biz Yevropa va butun dunyo bo'ylab HR agentliklari va ish beruvchilar bilan uzoq muddatli hamkorlikni yo'lga qo'yamiz.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Globe />, title: "Global Reach", desc: "O'zbekistondagi eng katta nomzodlar bazasiga kirish imkoniyati." },
            { icon: <Building2 />, title: "Verified Candidates", desc: "Biz barcha nomzodlarni qattiq saralovdan o'tkazamiz (background check)." },
            { icon: <UserPlus />, title: "Integration", desc: "Sizning CRM tizimingiz bilan oson integratsiya." },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/40 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[56px] shadow-xl overflow-hidden grid lg:grid-cols-2 border border-slate-100 dark:border-slate-800">
          <div className="p-12 lg:p-20 bg-indigo-900 dark:bg-indigo-950 text-white">
            <h2 className="text-3xl font-display font-extrabold mb-8">Hamkorlik so'rovi</h2>
            <p className="text-indigo-200 dark:text-indigo-300 mb-10 leading-relaxed">Agentligingiz haqida ma'lumot qoldiring, bizning xalqaro bo'limimiz 24 soat ichida siz bilan bog'lanadi.</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><FileText className="w-6 h-6" /></div>
                <div>
                  <div className="font-bold">Rasmiy shartnoma</div>
                  <div className="text-xs text-indigo-300">B2B Partnership Agreement</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Globe className="w-6 h-6" /></div>
                <div>
                  <div className="font-bold">Xalqaro standartlar</div>
                  <div className="text-xs text-indigo-300">Compliance & Legal Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 lg:p-20">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="EU Recruiting Ltd." />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Contact Email</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="partners@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Country</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Germany" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Tell us about your vacancies..."></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
                <span>Send Request</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
