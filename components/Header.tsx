import React, { useState } from 'react';
import { 
  Eye, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  MapPin, 
  Mail, 
  Instagram, 
  Youtube, 
  Phone,
  Type,
  Palette,
  RotateCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAIN_MENU } from '../constants';
import { useAccessibility } from '../context/AccessibilityContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const { 
    fontSize, 
    setFontSize, 
    contrast, 
    setContrast, 
    resetSettings,
    isPanelOpen, 
    togglePanel,
    closePanel
  } = useAccessibility();

  // Определяем, включен ли крупный шрифт
  const isLargeFont = fontSize === 'large' || fontSize === 'extra';

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md font-display bg-white" onMouseLeave={closePanel}>
      
      {/* Top Bar - Dark Theme */}
      {/* ДОБАВЛЕНО: flex-wrap и gap-y-2, чтобы элементы переносились при увеличении шрифта */}
      <div className="bg-primary-900 text-slate-200 text-xs py-2 px-4 md:px-8 transition-colors duration-300 relative z-[60]">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-x-4 gap-y-2">
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-1 text-center sm:text-left">
            <div className="flex items-center space-x-2 cursor-default whitespace-nowrap">
              <MapPin className="w-3 h-3 text-accent-500" />
              <span>г.Пинск, ул. Иркутско-Пинской дивизии, 25</span>
            </div>
            <a href="mailto:uo@pgatkk.by" className="flex items-center space-x-2 hover:text-accent-500 transition-colors whitespace-nowrap">
              <Mail className="w-3 h-3 text-accent-500" />
              <span>uo@pgatkk.by</span>
            </a>
          </div>

          <div className="flex items-center space-x-6 relative flex-wrap justify-center">
            <button 
              onClick={togglePanel}
              className={`flex items-center space-x-2 transition-colors group whitespace-nowrap ${isPanelOpen ? 'text-accent-500' : 'hover:text-white'}`}
            >
              <Eye className="w-4 h-4" />
              <span className="font-bold">Версия для слабовидящих</span>
            </button>
            
            {/* Accessibility Panel */}
            {isPanelOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 max-w-[90vw] bg-white text-slate-800 shadow-2xl rounded-xl border border-slate-200 p-4 z-[100] animate-in fade-in slide-in-from-top-2">
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary-900 mb-2">
                    <Type className="w-4 h-4" />
                    Размер шрифта
                  </div>
                  <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setFontSize('normal')} className={`flex-1 py-1 px-2 rounded text-sm ${fontSize === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-500'}`}>A</button>
                    <button onClick={() => setFontSize('large')} className={`flex-1 py-1 px-2 rounded text-base ${fontSize === 'large' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-500'}`}>A+</button>
                    <button onClick={() => setFontSize('extra')} className={`flex-1 py-1 px-2 rounded text-lg ${fontSize === 'extra' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-500'}`}>A++</button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary-900 mb-2">
                    <Palette className="w-4 h-4" />
                    Цветовая схема
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setContrast('normal')} className={`px-3 py-2 rounded text-xs border ${contrast === 'normal' ? 'border-primary-900 bg-primary-50 font-bold' : 'border-slate-200 hover:bg-slate-50'}`}>Обычная</button>
                    <button onClick={() => setContrast('bw')} className={`px-3 py-2 rounded text-xs border filter grayscale ${contrast === 'bw' ? 'border-black font-bold ring-1 ring-black' : 'border-slate-200'}`}>Ч черно-белая</button>
                    <button onClick={() => setContrast('wb')} className={`px-3 py-2 rounded text-xs border bg-black text-white ${contrast === 'wb' ? 'ring-2 ring-accent-500 font-bold' : 'border-slate-800'}`}>Инверсия</button>
                    <button onClick={() => setContrast('blue')} className={`px-3 py-2 rounded text-xs border bg-[#cce5ff] text-[#003366] ${contrast === 'blue' ? 'ring-2 ring-blue-600 font-bold' : 'border-blue-200'}`}>Синяя</button>
                  </div>
                </div>

                <button onClick={resetSettings} className="w-full py-2 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                  <RotateCcw className="w-3 h-3" />
                  Сбросить настройки
                </button>
              </div>
            )}

            <div className="h-4 w-px bg-primary-800 hidden sm:block"></div>

            <div className="flex items-center space-x-3">
              <a href="https://instagram.com" className="hover:text-accent-500 transition-colors p-1"><Instagram className="w-4 h-4" /></a>
              <a href="https://youtube.com" className="hover:text-accent-500 transition-colors p-1"><Youtube className="w-4 h-4" /></a>
              <a href="https://vk.com" className="hover:text-accent-500 transition-colors p-1 font-bold text-[10px] border border-slate-400 rounded w-5 h-5 flex items-center justify-center">VK</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white border-b border-slate-100 relative z-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6">
          <div className={`flex justify-between items-center py-4 lg:py-0 min-h-[80px] lg:h-24 ${isLargeFont ? 'flex-wrap gap-y-4' : 'flex-nowrap'}`}>
            
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0 mr-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary-900 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl border-2 border-accent-500 shadow-lg shrink-0">К</div>
              <div className="hidden xl:block">
                <h1 className="text-primary-900 font-bold text-base lg:text-lg leading-tight uppercase">Пинский государственный<br/>аграрно-технический колледж</h1>
                <p className="text-[10px] lg:text-xs text-slate-500 font-bold tracking-widest mt-0.5">ИМЕНИ А.Е. КЛЕЩЕВА</p>
              </div>
              <div className="hidden lg:block xl:hidden"><h1 className="text-primary-900 font-bold text-lg leading-tight">ПГАТК</h1></div>
              <div className="lg:hidden"><h1 className="text-primary-900 font-bold text-base leading-tight">ПГАТК</h1></div>
            </Link>

            {/* Desktop Navigation */}
            {/* ИЗМЕНЕНИЕ: Скрываем меню, если шрифт крупный (isLargeFont) */}
            {!isLargeFont && (
              <nav className="hidden 2xl:flex items-center gap-0.5 mx-auto">
                {MAIN_MENU.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.submenu ? (
                      <>
                        <Link to={item.href || '#'} className="px-1.5 py-2 text-[13px] font-bold text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md flex items-center transition-all whitespace-nowrap tracking-tight">
                          {item.label} <ChevronDown className="w-3 h-3 ml-0.5 opacity-50" />
                        </Link>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-accent-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                          <div className="py-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {item.submenu.map((sub) => (
                              <Link key={sub.label} to={sub.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-900 hover:pl-6 transition-all border-l-2 border-transparent hover:border-accent-500">
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link to={item.href || '#'} className="px-1.5 py-2 text-[13px] font-bold text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md flex items-center transition-all whitespace-nowrap tracking-tight">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            )}

            {/* Right Side */}
            <div className="flex items-center space-x-3 lg:space-x-4 flex-shrink-0 ml-auto 2xl:ml-4">
              <div className="hidden lg:flex flex-col items-end text-right">
                <a href="tel:80165300688" className="flex items-center text-primary-900 font-bold text-sm hover:text-accent-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2 fill-current" /> 8 (0165) 30-06-88
                </a>
                <span className="text-[10px] text-accent-600 font-semibold uppercase tracking-wide block">Приемная комиссия</span>
              </div>
              
              <div className="h-8 w-px bg-slate-200 hidden lg:block"></div>
              
              <button className="p-2 text-slate-500 hover:text-accent-600 transition-colors hover:bg-slate-50 rounded-full"><Search className="w-5 h-5 lg:w-6 lg:h-6" /></button>
              
              {/* Бургер меню показываем на мобильных ИЛИ если включен крупный шрифт */}
              <button 
                className={`p-2 text-slate-800 ${!isLargeFont ? '2xl:hidden' : ''}`} 
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
{/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm" onClick={toggleMobileMenu}>
          
          {/* Контейнер меню */}
          <div 
            className="bg-white w-full max-w-sm h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-left duration-200" 
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Внутренняя шапка меню с кнопкой Закрыть */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white sticky top-0 z-10">
              <span className="font-bold text-lg text-primary-900">Меню</span>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 bg-slate-100 rounded-full hover:bg-accent-100 hover:text-accent-600 transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="bg-slate-50 p-4 border-b border-slate-100">
              <div className="flex items-start space-x-3 text-sm font-medium text-slate-700">
                <Phone className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:80165300688" className="hover:text-accent-600 transition-colors">
                    8 (0165) 30-06-88 <span className="text-xs text-slate-400 block sm:inline">(Комиссия)</span>
                  </a>
                  <a href="tel:80165639293" className="hover:text-accent-600 transition-colors">
                    8 (0165) 63-92-93 <span className="text-xs text-slate-400 block sm:inline">(Приемная)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Links List */}
            <div className="py-2 flex-grow">
              {MAIN_MENU.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  {item.submenu ? (
                    <div>
                      <button 
                        className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        <span className="pr-4">{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeSubmenu === item.label && (
                        <div className="bg-slate-50 px-6 py-2 border-t border-slate-100 animate-in slide-in-from-top-2 duration-150">
                          {item.submenu.map((sub) => (
                            <Link 
                              key={sub.label} 
                              to={sub.href} 
                              className="block py-3 text-sm text-slate-600 border-l-2 border-slate-200 pl-4 hover:border-accent-500 hover:text-primary-900 transition-all"
                              onClick={toggleMobileMenu}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={item.href || '#'} 
                      className="block px-6 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;