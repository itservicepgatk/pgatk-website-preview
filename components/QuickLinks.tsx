import React from 'react';
import { 
  Flower2, // Обновил импорт
  Trophy, 
  Scale, 
  FlaskConical, 
  ShieldCheck, 
  Mail, 
  MousePointerClick 
} from 'lucide-react';
import { QuickLinkItem } from '../types';

const links: QuickLinkItem[] = [
  // Обновил первый пункт
  { label: 'Год женщины', icon: Flower2, description: 'Тематика 2026', color: 'bg-rose-600' },
  { label: 'Акции, конкурсы', icon: Trophy, description: 'Наши победы', color: 'bg-amber-500' },
  { label: 'Подросток и закон', icon: Scale, description: 'Правовой уголок', color: 'bg-blue-600' },
  { label: 'Эксперимент. деятельность', icon: FlaskConical, description: 'Инновации', color: 'bg-purple-600' },
  { label: 'Профилактика коррупции', icon: ShieldCheck, description: 'Противодействие', color: 'bg-red-600' },
  { label: 'Электронное обращение', icon: Mail, description: 'Написать нам', color: 'bg-sky-600' },
  { label: 'Online-услуги', icon: MousePointerClick, description: 'Сервисы', color: 'bg-indigo-600' },
];

const QuickLinks: React.FC = () => {
  return (
    <div className="relative -mt-16 z-40 w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
        {links.map((link) => (
          <a 
            key={link.label} 
            href="#" 
            className="group bg-white p-3 md:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 md:hover:-translate-y-2 h-full justify-between"
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 ${link.color} rounded-full flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}>
              <link.icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-xs md:text-sm mb-1 leading-tight w-full break-words">
              {link.label}
            </h3>
            <div className="h-px w-8 bg-slate-100 my-2 group-hover:bg-accent-200 transition-colors"></div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">
              {link.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;