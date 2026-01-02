import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, FileText, Newspaper, ChevronRight, Hash } from 'lucide-react';
import { MAIN_MENU, MOCK_NEWS } from '../constants';

interface SearchResult {
  id: string;
  type: 'page' | 'news';
  title: string;
  subtitle?: string;
  href: string;
  date?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Фокус на инпут при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Закрытие по ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Блокировка скролла фона
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // ЛОГИКА ПОИСКА
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const foundItems: SearchResult[] = [];

    // 1. Поиск по Меню (Страницы)
    MAIN_MENU.forEach(item => {
      // Главные пункты
      if (item.label.toLowerCase().includes(searchQuery) && item.href && item.href !== '#') {
        foundItems.push({
          id: `menu-${item.label}`,
          type: 'page',
          title: item.label,
          subtitle: 'Раздел меню',
          href: item.href
        });
      }

      // Подпункты
      if (item.submenu) {
        item.submenu.forEach(sub => {
          if (sub.label.toLowerCase().includes(searchQuery)) {
            foundItems.push({
              id: `sub-${sub.label}`,
              type: 'page',
              title: sub.label,
              subtitle: `Раздел: ${item.label}`,
              href: sub.href
            });
          }
        });
      }
    });

    // 2. Поиск по Новостям
    MOCK_NEWS.forEach(news => {
      if (news.title.toLowerCase().includes(searchQuery) || news.summary.toLowerCase().includes(searchQuery)) {
        foundItems.push({
          id: `news-${news.id}`,
          type: 'news',
          title: news.title,
          subtitle: news.summary, // Показываем начало текста
          href: `/news/${news.id}`,
          date: news.date
        });
      }
    });

    setResults(foundItems.slice(0, 8)); // Ограничиваем выдачу
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-4 sm:pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 ring-1 ring-slate-900/5">
        
        {/* Search Header */}
        <div className="relative flex items-center px-4 py-4 border-b border-slate-100">
          <Search className="w-6 h-6 text-slate-400 ml-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по сайту..."
            className="w-full px-4 py-2 text-xl text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          <button 
            onClick={onClose}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar bg-slate-50">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <Hash className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p className="text-lg font-medium">Ничего не найдено</p>
              <p className="text-sm">Попробуйте изменить запрос</p>
            </div>
          )}

          {!query && (
            <div className="py-12 text-center text-slate-400">
              <p>Введите текст для поиска...</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Результаты поиска
              </div>
              {results.map((result) => (
                <Link
                  key={result.id}
                  to={result.href}
                  onClick={onClose}
                  className="flex items-start gap-4 px-6 py-4 hover:bg-white border-b border-slate-100 last:border-0 transition-colors group cursor-pointer"
                >
                  <div className={`mt-1 p-2 rounded-lg ${result.type === 'news' ? 'bg-accent-100 text-accent-600' : 'bg-primary-50 text-primary-600'}`}>
                    {result.type === 'news' ? <Newspaper className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-bold text-slate-800 text-base group-hover:text-primary-900 transition-colors truncate">
                        {result.title}
                      </h4>
                      {result.type === 'news' && (
                        <span className="text-xs text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">
                          Новость
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-slate-500 line-clamp-1">
                      {result.subtitle}
                    </p>
                    
                    {result.date && (
                      <span className="text-xs text-slate-400 mt-1 block">
                        {result.date}
                      </span>
                    )}
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 self-center" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="bg-white border-t border-slate-100 px-4 py-3 text-xs text-slate-400 flex justify-between items-center">
          <span>Найдено результатов: <b>{results.length}</b></span>
          <span className="hidden sm:inline">Используйте <b>ESC</b> для закрытия</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;