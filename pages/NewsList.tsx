import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Home as HomeIcon, ChevronLeft } from 'lucide-react';
import { MOCK_NEWS } from '../constants';

const ITEMS_PER_PAGE = 6;

const NewsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Скролл наверх при смене страницы пагинации
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Логика пагинации
  const totalPages = Math.ceil(MOCK_NEWS.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = MOCK_NEWS.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block (Unified Style) */}
      <div className="bg-primary-900 text-white pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Новости</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Новости и события
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 md:-mt-16 relative z-20">
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentItems.map((news) => (
            <Link 
              key={news.id} 
              to={`/news/${news.id}`}
              className="group flex flex-col bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-primary-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-400 mb-3">
                  <Calendar className="w-3 h-3 mr-1.5" />
                  {news.date}
                </div>
                
                <h3 className="text-lg font-bold font-display text-primary-900 mb-3 leading-snug group-hover:text-accent-600 transition-colors line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                  {news.summary}
                </p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center text-accent-600 font-bold text-sm">
                  Читать подробнее
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:text-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                  currentPage === page
                    ? 'bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30 scale-110'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-accent-400 hover:text-accent-600'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:text-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;