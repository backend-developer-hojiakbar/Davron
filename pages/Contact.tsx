
import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-8">Biz bilan <span className="text-indigo-600 dark:text-indigo-400">Bog'laning</span></h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Savollaringiz bormi? Mutaxassislarimiz sizga yordam berishga doim tayyor. Bizning ofisimizga tashrif buyuring yoki qo'ng'iroq qiling.</p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform"><Phone /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Telefon</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">+998 71 234 56 78</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">+998 90 999 00 11</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform"><Mail /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">info@imkon.uz</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">career@imkon.uz</div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform"><MapPin /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Manzil</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">Toshkent sh., Chilonzor tumani</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Bunyodkor ko'chasi, 42-uy. Mo'ljal: Mirzo Ulug'bek metrosi</div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform"><Clock /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Ish Vaqti</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">Du - Shanba: 09:00 - 18:00</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Yakshanba: Dam olish kuni</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-10 lg:p-16 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-right-8 duration-1000">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Tezkor Murojaat</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Ismingiz" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all" />
                <input type="tel" placeholder="Telefoningiz" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all" />
              </div>
              <input type="text" placeholder="Mavzu" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all" />
              <textarea rows={5} placeholder="Xabaringiz..." className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all"></textarea>
              <button className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all shadow-xl">
                <span>Xabar yuborish</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[500px] w-full bg-slate-200 dark:bg-slate-900 rounded-[56px] overflow-hidden relative border border-slate-100 dark:border-slate-800 shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 font-bold">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>Google Maps Integration</p>
              <p className="text-sm mt-2">Toshkent, O'zbekiston</p>
              <p className="text-[10px] mt-1">41.2827° N, 69.2033° E</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
