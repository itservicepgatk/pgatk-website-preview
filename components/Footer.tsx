import React from 'react';
import { MapPin, Phone, Mail, Globe, Shield } from 'lucide-react';
import Partners from './Partners';

const Footer: React.FC = () => {
  // Хелпер для путей
  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <footer>
      <Partners />

      <div className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-accent-500">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: College Info & Symbols */}
            <div>
              {/* ГРУППА СИМВОЛИКИ (СЕТКА 2x2) */}
              <div className="bg-slate-800/80 rounded-xl border border-slate-700 mb-6 inline-block overflow-hidden">
                <div className="grid grid-cols-2">
                  
                  {/* 1. Герб РБ */}
                  <div className="flex items-center justify-center p-4 border-r border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                    <img 
                      src={resolvePath('images/Gerb.gif')} 
                      alt="Герб РБ" 
                      className="h-12 w-auto object-contain" 
                      title="Государственный герб Республики Беларусь"
                    />
                  </div>

                  {/* 2. Логотип ПГАТК */}
                  <div className="flex items-center justify-center p-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                    <img 
                      src={resolvePath('images/logo/logo_pgatkk.png')} 
                      alt="Логотип ПГАТК" 
                      className="h-12 w-auto object-contain" 
                      title="ПГАТК им. А.Е. Клещева"
                    />
                  </div>

                  {/* 3. 80 лет Победы */}
                  <div className="flex items-center justify-center p-4 border-r border-slate-700 hover:bg-slate-700/50 transition-colors">
                    <img 
                      src={resolvePath('images/symbols/80let.png')} 
                      alt="80 лет Победы" 
                      className="h-12 w-auto object-contain" 
                      title="80 лет освобождения Беларуси"
                    />
                  </div>

                  {/* 4. Год 2026 */}
                  <div className="flex items-center justify-center p-4 hover:bg-slate-700/50 transition-colors">
                    <img 
                      src={resolvePath('images/symbols/year2026.png')} 
                      alt="Год 2026" 
                      className="h-12 w-auto object-contain" 
                      title="2026 — Год женщины"
                    />
                  </div>

                </div>
              </div>

              <h3 className="text-white font-display font-bold text-lg mb-6">ПГАТК им. А.Е. Клещева</h3>
              <div className="space-y-4 text-sm">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>225710, Брестская область,<br/>г. Пинск, ул. Иркутско-Пинской Дивизии, 25</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>+375 (165) 31-22-11</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>uo@pgatkk.by</span>
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-6">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent-500 transition-colors">Карта сайта</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Обращения граждан</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Административные процедуры</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Версия для слабовидящих</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-6">Информационные ресурсы</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://president.gov.by" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>Президент Республики Беларусь</span>
                  </a>
                </li>
                <li>
                  <a href="https://edu.gov.by" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>Министерство образования</span>
                  </a>
                </li>
                <li>
                  <a href="http://качество-услуг.бел" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>Портал рейтинговой оценки</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Год женщины */}
            <div>
               <h3 className="text-white font-display font-bold text-lg mb-6">Год женщины</h3>
               <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <p className="text-xs text-slate-400 mb-2">Тематика 2026</p>
                  <div className="font-bold text-accent-500 text-xl">2026 — Год женщины</div>
                  <p className="text-xs mt-2">Славим женщину-мать, труженицу и хранительницу очага.</p>
               </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-slate-400">
                &copy; {new Date().getFullYear()} УО "Пинский государственный аграрно-технический колледж имени А.Е.Клещева"
              </p>
              <p>Регистрационное свидетельство №2142335835</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:items-center">
              <a href="/politika-konfidencialnosti" className="flex items-center hover:text-white transition-colors">
                <Shield className="w-3 h-3 mr-1.5" />
                Политика конфиденциальности
              </a>
              
              <div className="flex items-center gap-2">
                <span>Разработка сайта:</span>
                <a href="mailto:program@pgatkk.by" className="text-accent-500 hover:text-white transition-colors">
                  program@pgatkk.by
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;