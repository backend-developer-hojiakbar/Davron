
import React from 'react';

const MaintenanceBanner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap relative z-[100] border-b border-red-700 shadow-lg">
      <div className="flex animate-marquee">
        <span className="mx-4 font-bold uppercase tracking-widest text-sm">
          ⚠️ DIQQAT: Saytda texnik ishlar olib borilmoqda. Ayrim xizmatlar vaqtincha ishlamasligi mumkin. ⚠️
        </span>
        <span className="mx-4 font-bold uppercase tracking-widest text-sm">
          ⚠️ DIQQAT: Saytda texnik ishlar olib borilmoqda. Ayrim xizmatlar vaqtincha ishlamasligi mumkin. ⚠️
        </span>
        <span className="mx-4 font-bold uppercase tracking-widest text-sm">
          ⚠️ DIQQAT: Saytda texnik ishlar olib borilmoqda. Ayrim xizmatlar vaqtincha ishlamasligi mumkin. ⚠️
        </span>
        <span className="mx-4 font-bold uppercase tracking-widest text-sm">
          ⚠️ DIQQAT: Saytda texnik ishlar olib borilmoqda. Ayrim xizmatlar vaqtincha ishlamasligi mumkin. ⚠️
        </span>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
