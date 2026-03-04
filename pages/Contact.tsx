
import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Clock, Building2 } from 'lucide-react';
import { useGlobal } from '../GlobalContext';

const Contact: React.FC = () => {
  const { siteInfo } = useGlobal();

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-8">Biz bilan <span className="text-indigo-600 dark:text-indigo-400">Bog'laning</span></h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Savollaringiz bormi? Mutaxassislarimiz sizga yordam berishga doim tayyor. Bizning ofisimizga tashrif buyuring yoki qo'ng'iroq qiling.</p>
            
            <div className="space-y-10 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0 group-hover:scale-110 transition-transform"><Phone /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Telefon</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{siteInfo.phone}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform"><Mail /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{siteInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform"><MapPin /></div>
                <div>
                  <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Manzil</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{siteInfo.address}</div>
                  <div className="text-sm text-slate-500 font-medium">Mo'ljal: Amir Temur xiyoboni</div>
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

        {/* Google Map Integration */}
        <div className="mt-24 h-[500px] w-full bg-slate-200 dark:bg-slate-900 rounded-[56px] overflow-hidden relative border border-slate-100 dark:border-slate-800 shadow-2xl group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.682143428458!2d69.2797371!3d41.3123333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sHotel%20Uzbekistan!5e0!3m2!1suz!2s!4v1709533000000!5m2!1suz!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="IMKON Agency Location"
            className="w-full h-full transition-all duration-700 opacity-100"
          ></iframe>
          <div className="absolute bottom-6 left-6 right-6 md:right-auto">
            <a 
              href="https://maps.google.com/?q=45+Maxtumquli+ko'chasi,+Tashkent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-xl text-slate-900 dark:text-white font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
            >
              <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white" />
              <span>Google Maps'da ochish</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
