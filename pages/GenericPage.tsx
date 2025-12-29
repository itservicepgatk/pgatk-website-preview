import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ChevronRight, Home as HomeIcon, Printer, Share2, Menu as MenuIcon, ChevronDown, FileText, FolderOpen
} from 'lucide-react';
import { MAIN_MENU } from '../constants';

const GenericPage: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const currentPath = location.pathname;
  
  // 1. Ищем, к какому разделу относится текущая страница
  const parentSection = MAIN_MENU.find(item => 
    item.href === currentPath || 
    (item.submenu && item.submenu.some(sub => sub.href === currentPath))
  );

  // 2. Определяем заголовок
  let pageTitle = 'Страница';
  if (parentSection) {
    if (parentSection.href === currentPath) {
      pageTitle = parentSection.label;
    } else if (parentSection.submenu) {
      const subItem = parentSection.submenu.find(sub => sub.href === currentPath);
      if (subItem) pageTitle = subItem.label;
    }
  } else {
    const slug = currentPath.split('/').pop();
    pageTitle = slug ? decodeURIComponent(slug).charAt(0).toUpperCase() + decodeURIComponent(slug).slice(1) : 'Информация';
  }

  const sidebarLinks = parentSection?.submenu || [];
  const hasSidebar = sidebarLinks.length > 0;
  
  // 3. Проверяем: мы на главной странице раздела или внутри?
  const isSectionRoot = parentSection && parentSection.href === currentPath;

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            {parentSection && !isSectionRoot ? (
              <>
                <Link to={parentSection.href || '#'} className="hover:text-white transition-colors">{parentSection.label}</Link>
                <ChevronRight className="w-3 h-3 opacity-40" />
                <span className="text-accent-500 font-bold truncate">{pageTitle}</span>
              </>
            ) : (
              <span className="text-accent-500 font-bold truncate">{pageTitle}</span>
            )}
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR: Показываем только если мы НЕ на главной странице раздела (или на моб.) */}
          {hasSidebar && !isSectionRoot && (
            <aside className="w-full lg:w-[320px] flex-shrink-0 order-1">
              
              <div className="lg:hidden mb-4">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between text-primary-900 font-bold"
                >
                  <span className="flex items-center gap-2"><MenuIcon className="w-5 h-5" /> Навигация раздела</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                  <Link to={parentSection?.href || '#'} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-accent-600 transition-colors block">
                    {parentSection?.label}
                  </Link>
                </div>
                
                <nav className="p-2 flex flex-col space-y-1">
                  {sidebarLinks.map((link) => {
                    const isActive = link.href === currentPath;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500 translate-x-1' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent hover:translate-x-1'}`}
                      >
                        <span className="leading-snug">{link.label}</span>
                        {isActive && <ChevronRight className="w-4 h-4 text-accent-500 flex-shrink-0 ml-2" />}
                      </Link>
                    );
                  })}
                </nav>

                <div className="m-2 p-4 bg-primary-900 rounded-lg text-white text-center">
                  <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                  <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                  <p className="text-[10px] text-slate-400 mt-1">Пн-Пт: 8:00 - 17:00</p>
                </div>
              </div>
            </aside>
          )}

          {/* CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 min-h-[60vh]">
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <div className="text-sm text-slate-400">
                   {isSectionRoot ? 'Выберите раздел' : 'Обновлено: 29.12.2025'}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center text-sm text-slate-500 hover:text-primary-900 transition-colors gap-1.5 group">
                    <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Распечатать</span>
                  </button>
                  <button className="flex items-center text-sm text-slate-500 hover:text-primary-900 transition-colors gap-1.5 group">
                    <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Поделиться</span>
                  </button>
                </div>
              </div>

              {isSectionRoot && hasSidebar ? (
                <div>
                   <p className="text-lg text-slate-600 mb-8">
                     Добро пожаловать в раздел <span className="font-bold text-primary-900">{pageTitle}</span>. 
                     Пожалуйста, выберите интересующий вас подраздел:
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sidebarLinks.map((link) => (
                        <Link 
                           key={link.href} 
                           to={link.href}
                           className="group p-6 border border-slate-200 rounded-xl hover:shadow-lg hover:border-accent-500 transition-all duration-300 bg-slate-50 hover:bg-white flex flex-col items-start"
                        >
                           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform text-accent-500">
                              <FolderOpen className="w-6 h-6" />
                           </div>
                           <h3 className="font-bold text-lg text-primary-900 group-hover:text-accent-600 transition-colors mb-2">
                              {link.label}
                           </h3>
                           <span className="text-xs text-slate-400 uppercase font-bold tracking-wider group-hover:text-accent-500 flex items-center">
                              Перейти <ChevronRight className="w-3 h-3 ml-1" />
                           </span>
                        </Link>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-primary-900 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline">
                  <p className="lead">Добро пожаловать в раздел <span className="text-primary-900">«{pageTitle}»</span>. Здесь представлена актуальная информация.</p>
                  
                  <div className="not-prose my-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-col sm:flex-row items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm flex-shrink-0"><FileText className="w-6 h-6 text-blue-600" /></div>
                    <div>
                      <h3 className="text-blue-900 font-bold text-lg mb-1">Информация обновляется</h3>
                      <p className="text-sm text-blue-800/80 leading-relaxed">В данный момент страница наполняется материалами к новому учебному году.</p>
                    </div>
                  </div>

                  <h2>Общая информация</h2>
                  <p>Пинский государственный аграрно-технический колледж имени А.Е. Клещева обеспечивает подготовку специалистов высокого уровня.</p>
                  <p>Мы гордимся нашими выпускниками и преподавательским составом. Образовательный процесс строится на использовании современных методик и технологий.</p>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;