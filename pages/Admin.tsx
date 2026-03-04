
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, FileCheck, Briefcase, TrendingUp, Settings, Plus, Trash2, 
  Edit2, CheckCircle, XCircle, Phone, Lock, LogOut, LayoutDashboard,
  Globe, Mail, MapPin, Eye, Search, Filter, Image as ImageIcon, Save
} from 'lucide-react';
import { useGlobal } from '../GlobalContext';
import { Job, Language } from '../types';

const AdminDashboard: React.FC = () => {
  const { siteInfo, setSiteInfo, jobs, setJobs, applications, updateApplicationStatus, saveAllData } = useGlobal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'stats' | 'jobs' | 'apps' | 'site' | 'pages'>('stats');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'davron3821' && phone === '+998911443821') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError("Telefon raqami yoki parol noto'g'ri");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="max-w-md w-full">
          <div className="bg-slate-900/50 backdrop-blur-2xl rounded-[48px] p-12 border border-slate-800 shadow-2xl">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-12">
                <Lock className="w-10 h-10 text-white -rotate-12" />
              </div>
              <h2 className="text-3xl font-display font-extrabold text-white">Admin Panel</h2>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-slate-800/50 border border-slate-700 text-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="+998 91 144 38 21" />
              <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-800/50 border border-slate-700 text-white px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Parol" />
              {loginError && <p className="text-red-400 text-xs text-center">{loginError}</p>}
              <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-[24px] font-black shadow-xl">Kirish</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 lg:pt-0 min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col lg:flex-row transition-all duration-300">
      <aside className="w-full lg:w-80 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 flex flex-col">
        <div className="p-8">
          <div className="text-2xl font-display font-black tracking-tighter text-indigo-600 mb-10">IMKON ADMIN</div>
          <nav className="space-y-2">
            {[
              { id: 'stats', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
              { id: 'jobs', label: 'Vakansiyalar', icon: <Briefcase className="w-5 h-5" /> },
              { id: 'apps', label: 'Arizalar', icon: <Users className="w-5 h-5" /> },
              { id: 'pages', label: 'Sahifalar tahriri', icon: <ImageIcon className="w-5 h-5" /> },
              { id: 'site', label: 'Asosiy sozlamalar', icon: <Settings className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center space-x-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                  activeTab === tab.id ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <button onClick={saveAllData} className="w-full flex items-center justify-center space-x-3 bg-emerald-600 text-white px-6 py-4 rounded-2xl font-black shadow-lg">
            <Save className="w-5 h-5" />
            <span>Saqlash</span>
          </button>
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 text-red-500 font-bold px-6 py-4 rounded-2xl hover:bg-red-50">
            <LogOut className="w-5 h-5" />
            <span>Chiqish</span>
          </button>
        </div>
      </aside>

      <main className="flex-grow p-6 lg:p-12 overflow-y-auto max-h-screen">
        {activeTab === 'stats' && (
          <div className="space-y-10">
            <h1 className="text-4xl font-display font-black text-slate-900 dark:text-white">Boshqaruv Paneli</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-sm">
                <div className="text-4xl font-black text-slate-900 dark:text-white">{applications.length}</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Jami arizalar</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-sm">
                <div className="text-4xl font-black text-slate-900 dark:text-white">{jobs.length}</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Vakansiyalar</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pages' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
            <h1 className="text-4xl font-display font-black text-slate-900 dark:text-white">Sahifalarni tahrirlash</h1>
            
            {/* HERO SECTION EDITOR */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-black mb-10 flex items-center">
                <ImageIcon className="w-6 h-6 mr-3 text-blue-600" /> Bosh sahifa (Hero)
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {(['UZ', 'RU', 'EN'] as Language[]).map(l => (
                  <div key={l} className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Sarlavha ({l})</label>
                    <textarea 
                      value={siteInfo.heroTitle[l]} 
                      onChange={(e) => setSiteInfo({...siteInfo, heroTitle: {...siteInfo.heroTitle, [l]: e.target.value}})}
                      className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-2 mb-8">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Hero rasm URL</label>
                <input 
                  type="text" value={siteInfo.heroImage} 
                  onChange={(e) => setSiteInfo({...siteInfo, heroImage: e.target.value})}
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* SERVICES EDITOR */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-black mb-10 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-emerald-600" /> Xizmatlar
              </h2>
              {siteInfo.services.map((service, idx) => (
                <div key={idx} className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl mb-6 bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {(['UZ', 'RU', 'EN'] as Language[]).map(l => (
                      <div key={l} className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nomi ({l})</label>
                        <input 
                          type="text" value={service.title[l]} 
                          onChange={(e) => {
                            const updated = [...siteInfo.services];
                            updated[idx].title[l] = e.target.value;
                            setSiteInfo({...siteInfo, services: updated});
                          }}
                          className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rasm URL</label>
                    <input 
                      type="text" value={service.image} 
                      onChange={(e) => {
                        const updated = [...siteInfo.services];
                        updated[idx].image = e.target.value;
                        setSiteInfo({...siteInfo, services: updated});
                      }}
                      className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ABOUT PAGE EDITOR */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-black mb-10">Biz haqimizda (Sahifasi)</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {(['UZ', 'RU', 'EN'] as Language[]).map(l => (
                  <div key={l} className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Asosiy matn ({l})</label>
                    <textarea 
                      rows={5}
                      value={siteInfo.about.p1[l]} 
                      onChange={(e) => setSiteInfo({...siteInfo, about: {...siteInfo.about, p1: {...siteInfo.about.p1, [l]: e.target.value}}})}
                      className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="bg-white dark:bg-slate-900 rounded-[48px] p-10 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Vakansiyalar</h2>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg">Yangi qo'shish</button>
            </div>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id} className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center space-x-6">
                    <img src={job.image} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white">{job.title.UZ}</h4>
                      <div className="text-xs text-slate-500">{job.country.UZ} | {job.salary}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-3 bg-white dark:bg-slate-700 rounded-xl text-indigo-600"><Edit2 className="w-5 h-5" /></button>
                    <button onClick={() => setJobs(jobs.filter(j => j.id !== job.id))} className="p-3 bg-white dark:bg-slate-700 rounded-xl text-red-500"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'site' && (
          <div className="bg-white dark:bg-slate-900 rounded-[48px] p-12 shadow-sm">
            <h2 className="text-2xl font-black mb-12">Kontakt va Statik sozlamalar</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <input placeholder="Telefon" value={siteInfo.phone} onChange={e => setSiteInfo({...siteInfo, phone: e.target.value})} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
                <input placeholder="Email" value={siteInfo.email} onChange={e => setSiteInfo({...siteInfo, email: e.target.value})} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
                <input placeholder="Manzil" value={siteInfo.address} onChange={e => setSiteInfo({...siteInfo, address: e.target.value})} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
              </div>
              <div className="space-y-6">
                <input placeholder="Rezume soni" value={siteInfo.stats.resumes} onChange={e => setSiteInfo({...siteInfo, stats: {...siteInfo.stats, resumes: e.target.value}})} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
                <input placeholder="Vakansiya soni" value={siteInfo.stats.vacancies} onChange={e => setSiteInfo({...siteInfo, stats: {...siteInfo.stats, vacancies: e.target.value}})} className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700" />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
