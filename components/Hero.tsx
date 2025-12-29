import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Heart, Star } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: React.ElementType;
    external?: boolean;
  };
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Год благоустройства страны",
    subtitle: "Тематика 2025 года",
    description: "2025 в Республике Беларусь объявлен Годом благоустройства страны. Мы вместе делаем наш край чище, уютнее и красивее.",
    image: "https://picsum.photos/id/10/1920/1080",
    primaryAction: {
      label: "Подробнее",
      href: "#",
      icon: ArrowRight
    }
  },
  {
    id: 2,
    title: "80 лет Победы",
    subtitle: "Великая дата",
    description: "Знаковой датой отмечен 2025 год – 80-й годовщиной Победы советского народа в Великой Отечественной войне. Никто не забыт, ничто не забыто.",
    image: "https://picsum.photos/id/238/1920/1080",
    primaryAction: {
      label: "Мероприятия",
      href: "https://edu.gov.by/80-letie-osvobozhdeniya/",
      icon: Star,
      external: true
    }
  },
  {
    id: 3,
    title: "Центр патриотического воспитания",
    subtitle: "Молодежь и будущее",
    description: "Объявлен сбор средств на реконструкцию Республиканского центра патриотического воспитания молодежи. Ваш вклад важен для будущих поколений.",
    image: "https://picsum.photos/id/191/1920/1080",
    primaryAction: {
      label: "Как помочь",
      href: "#",
      icon: Heart
    }
  },
  {
    id: 4,
    title: "Абитуриенту 2025",
    subtitle: "Приемная кампания",
    description: "Выбери свое будущее в ПГАТК. Современные специальности, бюджетные места и гарантированное трудоустройство.",
    image: "https://picsum.photos/id/20/1920/1080",
    primaryAction: {
      label: "Подать документы",
      href: "/abiturientam",
      icon: GraduationCap
    }
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] bg-slate-900 overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Слайдер новостей"
    >
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear scale-100 group-hover:scale-105"
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/70 to-black/30"></div>
          </div>

          {/* ОБНОВЛЕННЫЙ КОНТЕЙНЕР: w-full max-w-[1600px] */}
          <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
            <div className={`max-w-2xl transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              <div className="inline-block px-3 py-1 bg-accent-500 text-primary-900 font-bold text-xs uppercase tracking-wider rounded-sm mb-4">
                {slide.subtitle}
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h2>

              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              
              {slide.primaryAction && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={slide.primaryAction.href}
                    target={slide.primaryAction.external ? "_blank" : "_self"}
                    rel={slide.primaryAction.external ? "noopener noreferrer" : ""}
                    className="flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-accent-500/20 transition-all hover:-translate-y-1"
                  >
                    {slide.primaryAction.icon && <slide.primaryAction.icon className="w-5 h-5" />}
                    <span>{slide.primaryAction.label}</span>
                  </a>
                  
                  <a href="/kolledg/istoriy-kolledga" className="flex items-center justify-center space-x-2 bg-transparent border-2 border-slate-300 text-white hover:bg-white hover:text-primary-900 font-bold py-4 px-8 rounded-lg transition-all hover:-translate-y-1">
                    <span>Подробнее</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-accent-500 text-white backdrop-blur-sm transition-all border border-white/20 hover:border-transparent hidden md:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-accent-500 text-white backdrop-blur-sm transition-all border border-white/20 hover:border-transparent hidden md:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-accent-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent-500 via-primary-500 to-primary-900 z-10"></div>
    </section>
  );
};

export default Hero;