import React from 'react';

const PARTNERS = [
  { name: "Брестский облисполком", url: "#", color: "bg-[#0055a5]" },
  { name: "Пинский горисполком", url: "#", color: "bg-[#e30613]" },
  { name: "ОУМЦ ПО", url: "#", color: "bg-[#ffd700]" },
  { name: "ГИАЦ", url: "#", color: "bg-[#0099cc]" },
  { name: "Министерство образования РБ", url: "#", color: "bg-[#006633]" },
  { name: "Главное управление по образованию", url: "#", color: "bg-[#004d99]" },
  { name: "Портал рейтинговой оценки", url: "#", color: "bg-[#2b2b2b]" },
  { name: "Pravo.by", url: "#", color: "bg-[#00aeef]" },
  { name: "ВГМУ", url: "#", color: "bg-[#330066]" },
  { name: "РИПО", url: "#", color: "bg-[#003399]" },
  { name: "Пiнскi Веснiк", url: "#", color: "bg-[#cc0000]" },
  { name: "УМЦ МСХП", url: "#", color: "bg-[#ffcc00]" },
  { name: "Президент РБ", url: "#", color: "bg-[#cc0000]" },
  { name: "Центр наглядной профилактики", url: "#", color: "bg-[#ff6600]" },
  { name: "POMOGUT.BY", url: "#", color: "bg-[#99ccff]" },
  { name: "Belarus.by", url: "#", color: "bg-[#339933]" },
  { name: "ПрофиТест", url: "#", color: "bg-[#666666]" },
  { name: "Портал профобразования", url: "#", color: "bg-[#333333]" },
  { name: "Молодежь Беларуси", url: "#", color: "bg-[#99cc00]" },
  { name: "85 лет 1 регион", url: "#", color: "bg-[#0066cc]" },
  { name: "Цели устойчивого развития", url: "#", color: "bg-[#ff9900]" },
  { name: "Региональная карта помощи", url: "#", color: "bg-[#333333]" },
  { name: "ПАТРИОТ.BY", url: "#", color: "bg-[#006633]" },
  { name: "Выборы 2025", url: "#", color: "bg-[#cc0000]" },
];

const Partners: React.FC = () => {
  return (
    <div className="bg-white border-t border-slate-200 py-12">
      {/* ОБНОВЛЕННЫЙ КОНТЕЙНЕР: w-full max-w-[1600px] */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <h3 className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
          Полезные ресурсы и партнеры
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {PARTNERS.map((partner, idx) => (
            <a 
              key={idx} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className={`w-full h-16 ${partner.color} rounded-lg shadow-sm border border-slate-100 overflow-hidden relative hover:shadow-md transition-all hover:-translate-y-1 flex items-center justify-center p-2`}>
                <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-80 transition-opacity"></div>
                <span className="text-[10px] md:text-xs text-center font-bold text-slate-800 leading-tight z-10 px-1 relative">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;