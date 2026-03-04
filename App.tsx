
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { GlobalProvider, useGlobal } from './GlobalContext';
import Navbar from './components/Navbar';
import MaintenanceBanner from './components/MaintenanceBanner';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Apply from './pages/Apply';
import AdminDashboard from './pages/Admin';
import About from './pages/About';
import Contact from './pages/Contact';
import CareerChat from './pages/CareerChat';
import { Instagram, Facebook, Send, Mail, MapPin, Phone } from 'lucide-react';

const AppContent: React.FC = () => {
  const { lang, siteInfo } = useGlobal();
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {!isAdminPage && <MaintenanceBanner />}
      {!isAdminPage && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career-advisor" element={<CareerChat />} />
        </Routes>
      </main>

      {!isAdminPage && (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                {/* Footer Logo to match branding */}
                <div className="flex flex-col items-start leading-none">
                  <div className="flex items-center">
                    <span className="text-3xl font-display font-black lowercase tracking-tighter text-blue-400">imkon</span>
                    <div className="ml-1 w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                        <circle cx="18" cy="6" r="3" fill="#fbbf24" />
                        <path d="M4 20C4 20 6 12 12 10C14 11.5 16 16 16 20M12 10C12 8.5 11 7 11 5.5C11 4 12 3 13.5 3C15 3 16 4 16 5.5C16 7 15 8.5 15 10" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] mt-1 text-slate-400">
                    Xususiy Bandlik Agentligi
                  </span>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-sm">
                  Yevropa va boshqa davlatlarda rasmiy ish o'rinlarini taqdim etuvchi ishonchli agentlik. Biz bilan kelajagingiz kafolatlangan.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors border border-slate-700">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors border border-slate-700">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors border border-slate-700">
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6">Sahifalar</h4>
                <ul className="space-y-4 text-slate-400 text-sm font-medium">
                  <li><Link to="/" className="hover:text-white transition-colors">Bosh sahifa</Link></li>
                  <li><Link to="/jobs" className="hover:text-white transition-colors">Vakansiyalar</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">Biz haqimizda</Link></li>
                  <li><Link to="/apply" className="hover:text-white transition-colors">Ariza topshirish</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6">Aloqa</h4>
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <span>{siteInfo.address}</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <span>{siteInfo.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                    <span>{siteInfo.email}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-6">Litsenziya</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  №00124-sonli litsenziya asosida faoliyat yuritamiz.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Official Partner of EU Recruitment</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
              <p>© 2024 IMKON Agency. Barcha huquqlar himoyalangan.</p>
              <div className="space-x-6">
                <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
                <Link to="/admin" className="hover:text-white">Admin panel</Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppContent />
      </Router>
    </GlobalProvider>
  );
};

export default App;
