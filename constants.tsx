
import React from 'react';
import { Translation, Job, Language } from './types';
import { Globe, Briefcase, ShieldCheck, Users } from 'lucide-react';

export const TRANSLATIONS: Record<Language, Translation> = {
  UZ: {
    nav: {
      home: "Bosh sahifa",
      jobs: "Vakansiyalar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      apply: "Ariza topshirish",
      admin: "Admin",
      chat: "AI Maslahatchi",
    },
    hero: {
      title: "Biz sizni uzoqroqqa olib boramiz",
      subtitle: "Yevropa va butun dunyo bo'ylab rasmiy va ishonchli ish o'rinlari. Kelajagingizni biz bilan quring.",
      cta: "Ariza topshirish",
    },
    stats: {
      visas: "Muvaffaqiyatli vizalar",
      partners: "Yevropalik hamkorlar",
      vacancies: "Faol vakansiyalar",
      success: "Muvaffaqiyat darajasi",
    },
    filters: {
      all: "Barchasi",
      country: "Davlat",
      sector: "Soha",
      salary: "Maosh",
    },
    forms: {
      fullName: "Ism Familiya",
      phone: "Telefon raqam",
      birthDate: "Tug'ilgan sana",
      passport: "Xorijga chiqish pasporti bormi?",
      experience: "Ish tajribasi",
      targetCountry: "Qaysi davlatga qiziqasiz?",
      uploadCv: "CV yuklash (PDF/JPG)",
      submit: "Yuborish",
      yes: "Ha",
      no: "Yo'q",
    }
  },
  RU: {
    nav: {
      home: "Главная",
      jobs: "Вакансии",
      about: "О нас",
      contact: "Контакты",
      apply: "Подать заявку",
      admin: "Админ",
      chat: "AI Чат",
    },
    hero: {
      title: "Мы ведем вас дальше",
      subtitle: "Официальное и надежное трудоустройство в Европе и по всему миру. Стройте свое будущее с нами.",
      cta: "Подать заявку",
    },
    stats: {
      visas: "Успешные визы",
      partners: "Европейские партнеры",
      vacancies: "Активные вакансии",
      success: "Уровень успеха",
    },
    filters: {
      all: "Все",
      country: "Страна",
      sector: "Сектор",
      salary: "Зарплата",
    },
    forms: {
      fullName: "Имя и Фамилия",
      phone: "Номер телефона",
      birthDate: "Дата рождения",
      passport: "Есть загранпаспорт?",
      experience: "Опыт работы",
      targetCountry: "Какая страна вас интересует?",
      uploadCv: "Загрузить CV (PDF/JPG)",
      submit: "Отправить",
      yes: "Да",
      no: "Нет",
    }
  },
  EN: {
    nav: {
      home: "Home",
      jobs: "Jobs",
      about: "About Us",
      contact: "Contact",
      apply: "Apply Now",
      admin: "Admin",
      chat: "AI Advisor",
    },
    hero: {
      title: "We take you further",
      subtitle: "Official and reliable job opportunities across Europe and the world. Build your future with us.",
      cta: "Apply Now",
    },
    stats: {
      visas: "Successful Visas",
      partners: "European Partners",
      vacancies: "Active Vacancies",
      success: "Success Rate",
    },
    filters: {
      all: "All",
      country: "Country",
      sector: "Sector",
      salary: "Salary",
    },
    forms: {
      fullName: "Full Name",
      phone: "Phone Number",
      birthDate: "Date of Birth",
      passport: "Do you have a passport?",
      experience: "Work Experience",
      targetCountry: "Which country are you interested in?",
      uploadCv: "Upload CV (PDF/JPG)",
      submit: "Submit Application",
      yes: "Yes",
      no: "No",
    }
  }
};

export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: { UZ: "Logistika Ombormoni", RU: "Работник склада логистики", EN: "Logistics Warehouse Worker" },
    country: { UZ: "Germaniya", RU: "Германия", EN: "Germany" },
    salary: "€2,200 - €2,800",
    category: { UZ: "Logistika", RU: "Логистика", EN: "Logistics" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: {
      UZ: "Germaniyaning yetakchi logistika markazida ishlash imkoniyati.",
      RU: "Возможность работы в ведущем логистическом центре Германии.",
      EN: "Opportunity to work in a leading German logistics center."
    },
    requirements: {
      UZ: ["Rus tili (A2)", "Sog'lom bo'lish", "Intizom"],
      RU: ["Русский язык (A2)", "Здоровье", "Дисциплина"],
      EN: ["Russian language (A2)", "Good health", "Discipline"]
    },
    benefits: {
      UZ: ["Turar joy bepul", "Sug'urta", "Haftalik ish vaqti 40 soat"],
      RU: ["Бесплатное жилье", "Страховка", "40 часов в неделю"],
      EN: ["Free housing", "Insurance", "40 hours per week"]
    },
    postedAt: "2024-05-15"
  },
  {
    id: "2",
    title: { UZ: "Qurilish ustasi", RU: "Мастер-строитель", EN: "Construction Specialist" },
    country: { UZ: "Polsha", RU: "Польша", EN: "Poland" },
    salary: "€1,500 - €2,000",
    category: { UZ: "Qurilish", RU: "Строительство", EN: "Construction" },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    description: {
      UZ: "Polshadagi yirik ob'ektlarda qurilish ishlari.",
      RU: "Строительные работы на крупных объектах в Пномпене.",
      EN: "Construction work on large projects in Poland."
    },
    requirements: {
      UZ: ["Tajriba kamida 1 yil", "Pasport bo'lishi"],
      RU: ["Опыт не менее 1 года", "Наличие паспорта"],
      EN: ["At least 1 year experience", "Passport availability"]
    },
    benefits: {
      UZ: ["Yotoqxona bilan ta'minlanadi", "Tushlik beriladi"],
      RU: ["Предоставляется общежитие", "Обеды включены"],
      EN: ["Hostel provided", "Lunch included"]
    },
    postedAt: "2024-05-18"
  },
  {
    id: "3",
    title: { UZ: "CNC Operatori", RU: "Оператор ЧПУ", EN: "CNC Operator" },
    country: { UZ: "Chexiya", RU: "Чехия", EN: "Czech Republic" },
    salary: "€1,800 - €2,400",
    category: { UZ: "Ishlab chiqarish", RU: "Производство", EN: "Manufacturing" },
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=800&q=80",
    description: {
      UZ: "Zamonaviy zavodda CNC dastgohlari bilan ishlash.",
      RU: "Работа на станках с ЧПУ на современном заводе.",
      EN: "Work with CNC machines in a modern factory."
    },
    requirements: {
      UZ: ["Soha bo'yicha ma'lumot", "Chizmalarni o'qiy olish"],
      RU: ["Профильное образование", "Умение читать чертежи"],
      EN: ["Technical education", "Ability to read drawings"]
    },
    benefits: {
      UZ: ["Rasmiy shartnoma", "Transport xizmati"],
      RU: ["Официальный контракт", "Транспортные услуги"],
      EN: ["Official contract", "Transport service"]
    },
    postedAt: "2024-05-20"
  }
];

export const ADVANTAGES = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: { UZ: "Rasmiy litsenziya", RU: "Официальная лицензия", EN: "Official License" },
    desc: { UZ: "Davlat tomonidan berilgan №1285474-sonli ruxsatnoma.", RU: "Разрешение государственного образца №1285474.", EN: "State-authorized permission №1285474." }
  },
  {
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    title: { UZ: "Yevropa ish beruvchlari", RU: "Европейские работодатели", EN: "European Employers" },
    desc: { UZ: "To'g'ridan-to'g'ri hamkorlik.", RU: "Прямое сотрудничество.", EN: "Direct collaboration." }
  },
  {
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: { UZ: "100% Shaffof jarayon", RU: "100% Прозрачный процесс", EN: "100% Transparent Process" },
    desc: { UZ: "Yashirin to'lovlar yo'q.", RU: "Никаких скрытых платежей.", EN: "No hidden fees." }
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: { UZ: "Professional konsultatsiya", RU: "Профессиональная консультация", EN: "Professional Consultation" },
    desc: { UZ: "Har bir bosqichda ko'mak.", RU: "Поддержка на каждом этапе.", EN: "Support at every step." }
  }
];
