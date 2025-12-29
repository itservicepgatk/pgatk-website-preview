import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import { MOCK_NEWS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const mainNews = MOCK_NEWS[0];
  const sideNews = MOCK_NEWS.slice(1, 4);

  return (
    <main>
      <Hero />
      <QuickLinks />

      {/* ОБНОВЛЕННЫЙ КОНТЕЙНЕР: w-full max-w-[1600px] */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-20">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-primary-900">Новости и события</h2>
            <div className="h-1 w-20 bg-accent-500 mt-2 rounded-full"></div>
          </div>
          <Link to="/news" className="hidden md:flex items-center text-primary-800 font-semibold hover:text-accent-600 transition-colors">
            Все новости
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Link to={`/news/${mainNews.id}`} className="lg:col-span-2 group cursor-pointer block">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-md">
              <img 
                src={mainNews.imageUrl} 
                alt={mainNews.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="bg-accent-500 text-primary-900 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
                  {mainNews.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display mb-3 leading-tight group-hover:text-accent-400 transition-colors">
                  {mainNews.title}
                </h3>
                <p className="text-slate-300 line-clamp-2 mb-4">
                  {mainNews.summary}
                </p>
                <div className="flex items-center text-sm text-slate-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {mainNews.date}
                </div>
              </div>
            </div>
          </Link>

          <div className="space-y-6">
            {sideNews.map((news) => (
              <Link 
                key={news.id} 
                to={`/news/${news.id}`}
                className="flex gap-4 group cursor-pointer bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-accent-200 transition-colors"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                   <div className="flex items-center text-xs text-slate-500 mb-1">
                    <span className="text-accent-600 font-semibold mr-2">{news.category}</span>
                    <span>{news.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary-800 transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-primary-900 rounded-2xl overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              <div className="mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                  Год качества 2024
                </h3>
                <p className="text-slate-300 max-w-xl">
                  Мы ставим качество во главу угла: от материально-технической базы до уровня подготовки каждого специалиста.
                </p>
              </div>
              <button className="flex-shrink-0 bg-white text-primary-900 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transition-colors">
                План мероприятий
              </button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Home;