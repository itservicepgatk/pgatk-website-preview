import React from 'react';

interface Partner {
  id: number;
  name: string;
  url: string;
  image: string;
}

const PARTNERS: Partner[] = [
  // ROW 1
  { 
    id: 1, 
    name: "Брестский облисполком", 
    url: "https://brest-region.gov.by", 
    image: "images/banneredu/BrObl.png" 
  },
  { 
    id: 2, 
    name: "Пинский горисполком", 
    url: "http://pinsk.gov.by", 
    image: "images/banneredu/PinskGor_.png" 
  },
  { 
    id: 3, 
    name: "ГУ 'Брестский областной учебно-методический центр ПО'", 
    url: "https://oumc.by", 
    image: "images/banneredu/UMC_PO.png" 
  },
  { 
    id: 4, 
    name: "ГИАЦ Минобразования", 
    url: "https://giac.by", 
    image: "images/banneredu/GiACentr_.png" 
  },

  // ROW 2
  { 
    id: 5, 
    name: "Министерство образования РБ", 
    url: "https://edu.gov.by", 
    image: "images/banneredu/MinObr.png" 
  },
  { 
    id: 6, 
    name: "Главное управление по образованию Брестского облисполкома", 
    url: "https://brest-edu.gov.by", 
    image: "images/banneredu/GlUpr.png" 
  },
  { 
    id: 7, 
    name: "Портал рейтинговой оценки", 
    url: "http://качество-услуг.бел", 
    image: "images/banneredu/KachUslObn.png" 
  },
  { 
    id: 8, 
    name: "Pravo.by", 
    url: "https://pravo.by", 
    image: "images/banneredu/pravo.png" 
  },

  // ROW 3
  { 
    id: 9, 
    name: "ВГМУ", 
    url: "https://www.vsmu.by", 
    image: "images/banneredu/vgmu.png" 
  },
  { 
    id: 10, 
    name: "РИПО", 
    url: "https://ripo.by", 
    image: "images/banneredu/RIPO.png" 
  },
  { 
    id: 11, 
    name: "Пiнскi Веснiк", 
    url: "https://p-v.by", 
    image: "images/banneredu/PV.png" 
  },
  { 
    id: 12, 
    name: "УМЦ Минсельхозпрод", 
    url: "http://agroedu.by", 
    image: "images/banneredu/UMC_Minselchozprod.png" 
  },

  // ROW 4
  { 
    id: 13, 
    name: "Официальный портал Президента РБ", 
    url: "https://president.gov.by", 
    image: "images/banneredu/OfIntPortalPr.jpg" 
  },
  { 
    id: 14, 
    name: "Центр наглядной профилактики", 
    url: "https://vk.com/cnpcentrpro", 
    image: "images/banneredu/CentrNaglydnoyProfilakt.jpg" 
  },
  { 
    id: 15, 
    name: "POMOGUT.BY", 
    url: "https://pomogut.by", 
    image: "images/banneredu/PomogutBy.jpg" 
  },
  { 
    id: 16, 
    name: "Belarus.by", 
    url: "https://www.belarus.by", 
    image: "images/banneredu/Belarus.jpg" 
  },

  // ROW 5
  { 
    id: 17, 
    name: "ПрофиТест", 
    url: "https://profitest.ripo.by", 
    image: "images/banneredu/ProfiTestBanner.jpg" 
  },
  { 
    id: 18, 
    name: "ПОРТАЛ Профориентация", 
    url: "https://portal.oumc.by", 
    image: "images/banneredu/Portal.jpg" 
  },
  { 
    id: 19, 
    name: "Молодежь Беларуси (БРСМ)", 
    url: "https://xn--d1acdremb9i.xn--90ais/", 
    image: "images/banneredu/molodesh.jpg" 
  },
  { 
    id: 20, 
    name: "85 лет Брестской области / 1 регион", 
    url: "https://brest-region.gov.by/ru/85let-ru", 
    image: "images/banneredu/1region.jpg" 
  },

  // ROW 6
  { 
    id: 21, 
    name: "Цели устойчивого развития", 
    url: "https://sdgs.by", 
    image: "images/banneredu/CUR.jpg" 
  },
  { 
    id: 22, 
    name: "Региональная карта помощи несовершеннолетним", 
    url: "#", 
    image: "images/banneredu/RegKarta.jpg" 
  },
  { 
    id: 23, 
    name: "ПАТРИОТ.BY", 
    url: "https://patriot.rcek.by", 
    image: "images/banneredu/patriot.jpg" 
  },
  { 
    id: 24, 
    name: "Выборы Президента 2025", 
    url: "https://rec.gov.by", 
    image: "images/banneredu/banner-vibori.png" 
  }
];

const Partners: React.FC = () => {
  // Хелпер для корректных путей на GitHub Pages
  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <div className="bg-white border-t border-slate-200 py-12">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <h3 className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">
          Полезные ресурсы и партнеры
        </h3>
        
        {/* Сетка: 2 колонки на мобильном, 4 на десктопе (согласно ТЗ) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PARTNERS.map((partner) => (
            <a 
              key={partner.id} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-24 w-full bg-white border border-slate-200 rounded-lg p-2 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
              title={partner.name}
            >
              <img 
                src={resolvePath(partner.image)} 
                alt={partner.name}
                className="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  // Фоллбэк, если картинка не найдена
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-center font-bold text-slate-400">${partner.name}</span>`;
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;