
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, Job, SiteInfo, Application } from './types';
import { MOCK_JOBS } from './constants';

interface GlobalContextType {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  siteInfo: SiteInfo;
  setSiteInfo: (info: SiteInfo) => void;
  applications: Application[];
  addApplication: (app: Omit<Application, 'id' | 'createdAt' | 'status'>) => void;
  updateApplicationStatus: (id: string, status: Application['status']) => void;
  saveAllData: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const INITIAL_SITE_INFO: SiteInfo = {
  heroTitle: {
    UZ: "Orzuingizdagi ishingizni toping",
    RU: "Найдите работу своей мечты",
    EN: "Find your dream job"
  },
  heroSubtitle: {
    UZ: "Yevropa va butun dunyo bo'ylab rasmiy va ishonchli ish o'rinlari.",
    RU: "Официальное и надежное трудоустройство в Европе и по всему миру.",
    EN: "Official and reliable job opportunities across Europe and the world."
  },
  heroImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80",
  phone: "+998 55 055 22 77",
  email: "imkonxba.info@gmail.com",
  address: "Toshkent sh., Mirzo Ulug'bek tumani, Maxtumquli ko'chasi, 45-uy",
  license: "📄 Litsenziya No.1285474",
  stats: {
    resumes: "345K+",
    vacancies: "12K+",
    companies: "31K+"
  },
  services: [
    { 
      title: { UZ: "Yevropaga ish", RU: "Работа в Европе", EN: "Jobs in Europe" },
      desc: { UZ: "EI davlatlariga kafolatlangan va qonuniy ishga ketish.", RU: "Гарантированная работа в странах ЕС.", EN: "Guaranteed legal jobs in EU." },
      // Fixed: Updated to a guaranteed working high-quality Unsplash URL representing European business
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: { UZ: "Mavsumiy ishlar", RU: "Сезонные работы", EN: "Seasonal Jobs" },
      desc: { UZ: "Qishloq xo'jaligi va mehmonxona biznesida takliflar.", RU: "Предложения в сельском хозяйстве и отелях.", EN: "Offers in agriculture and hospitality." },
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: { UZ: "Yuridik yordam", RU: "Юридическая помощь", EN: "Legal Aid" },
      desc: { UZ: "Mehnat shartnomalarini tekshirish va maslahatlar.", RU: "Проверка контрактов и консультации.", EN: "Contract verification and consulting." },
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    }
  ],
  process: [
    { step: 1, title: { UZ: "Rezyume", RU: "Резюме", EN: "Resume" }, desc: { UZ: "Ma'lumotlaringizni kiriting", RU: "Введите свои данные", EN: "Enter your details" } },
    { step: 2, title: { UZ: "Ish toping", RU: "Поиск", EN: "Find Job" }, desc: { UZ: "Vakansiyani tanlang", RU: "Выберите вакансию", EN: "Choose a vacancy" } },
    { step: 3, title: { UZ: "Suhbat", RU: "Собеседование", EN: "Interview" }, desc: { UZ: "Ish beruvchi bilan suhbat", RU: "Интервью с работодателем", EN: "Talk to employer" } },
    { step: 4, title: { UZ: "Ishlash", RU: "Работа", EN: "Work" }, desc: { UZ: "Shartnoma bilan ishlang", RU: "Работа по контракту", EN: "Work with contract" } }
  ],
  about: {
    title: { UZ: "Bizning vazifamiz — sizning muvaffaqiyatingiz", RU: "Наша миссия — ваш успех", EN: "Our mission is your success" },
    p1: { UZ: "IMKON — bu shunchaki agentlik emas. Biz 2018-yildan buyon xizmatdamiz.", RU: "IMKON — это не просто агентство. Мы работаем с 2018 года.", EN: "IMKON is not just an agency. We have been serving since 2018." },
    p2: { UZ: "Biz har bir nomzodga individual yondashamiz.", RU: "Мы подходим к каждому кандидату индивидуально.", EN: "We approach each candidate individually." },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    experience: "6+ Yillik",
    clients: "5000+"
  }
};

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangInternal] = useState<Language>(() => (localStorage.getItem('imkon_lang') as Language) || 'UZ');
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('imkon_theme') as Theme) || 'light');
  
  const [jobs, setJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem('imkon_jobs');
    return saved ? JSON.parse(saved) : MOCK_JOBS;
  });

  const [siteInfo, setSiteInfo] = useState<SiteInfo>(() => {
    const saved = localStorage.getItem('imkon_site_info');
    return saved ? JSON.parse(saved) : INITIAL_SITE_INFO;
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('imkon_apps');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('imkon_theme', theme);
  }, [theme]);

  const saveAllData = () => {
    localStorage.setItem('imkon_jobs', JSON.stringify(jobs));
    localStorage.setItem('imkon_site_info', JSON.stringify(siteInfo));
    localStorage.setItem('imkon_apps', JSON.stringify(applications));
    alert("Ma'lumotlar muvaffaqiyatli saqlandi!");
  };

  const setLang = (l: Language) => {
    setLangInternal(l);
    localStorage.setItem('imkon_lang', l);
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const addApplication = (appData: Omit<Application, 'id' | 'createdAt' | 'status'>) => {
    const newApp: Application = {
      ...appData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setApplications(prev => {
      const updated = [newApp, ...prev];
      localStorage.setItem('imkon_apps', JSON.stringify(updated));
      return updated;
    });
  };

  const updateApplicationStatus = (id: string, status: Application['status']) => {
    setApplications(prev => {
      const updated = prev.map(a => a.id === id ? { ...a, status } : a);
      localStorage.setItem('imkon_apps', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <GlobalContext.Provider value={{ 
      lang, setLang, theme, toggleTheme, jobs, setJobs, siteInfo, setSiteInfo, 
      applications, addApplication, updateApplicationStatus, saveAllData
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobal must be used within GlobalProvider');
  return context;
};
