import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  ChevronRight, 
  Clock, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Hammer, 
  Tractor, 
  Utensils, 
  Wrench,
  Zap,
  HardHat,
  ArrowRight,
  FileText
} from 'lucide-react';

interface Specialty {
  id: string;
  title: string;
  code: string;
  qualification: string;
  duration: string;
  budget: number;
  paid: number;
  image: string;
  icon: React.ElementType;
  description: string;
}

// Данные на основе реальных специальностей ПГАТК
const SPECIALTIES: Specialty[] = [
  {
    id: 'mech',
    title: 'Техническое обеспечение процессов с/х производства',
    code: '5-04-0810-01',
    qualification: 'Техник-механик',
    duration: '3 года 6 месяцев',
    budget: 50,
    paid: 5,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop',
    icon: Tractor,
    description: 'Организация эксплуатации, техобслуживания и ремонта машин и оборудования в агропромышленном комплексе.'
  },
  {
    id: 'road',
    title: 'Строительство и эксплуатация автомобильных дорог',
    code: '5-04-0732-01',
    qualification: 'Техник-строитель',
    duration: '3 года 7 месяцев',
    budget: 25,
    paid: 0,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
    icon: HardHat,
    description: 'Проектирование, строительство, реконструкция и ремонт автомобильных дорог и транспортных объектов.'
  },
  {
    id: 'civil',
    title: 'Промышленное и гражданское строительство',
    code: '5-04-0732-02',
    qualification: 'Техник-строитель',
    duration: '3 года 6 месяцев',
    budget: 25,
    paid: 5,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
    icon: Hammer,
    description: 'Возведение зданий и сооружений, контроль качества строительно-монтажных работ.'
  },
  {
    id: 'repair',
    title: 'Ремонтно-обслуживающее производство в сельском хозяйстве',
    code: '5-04-0810-06',
    qualification: 'Техник-механик',
    duration: '3 года 6 месяцев',
    budget: 25,
    paid: 0,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62496096b?q=80&w=1000&auto=format&fit=crop',
    icon: Wrench,
    description: 'Технический сервис, диагностика и восстановление работоспособности сельскохозяйственной техники.'
  },
  {
    id: 'cook',
    title: 'Общественное питание',
    code: '3-02-0911-01',
    qualification: 'Повар 4 разряда',
    duration: '1 год 6 месяцев',
    budget: 25,
    paid: 0,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000&auto=format&fit=crop',
    icon: Utensils,
    description: 'Приготовление блюд и кулинарных изделий, оформление и отпуск порций, обслуживание посетителей.'
  },
  {
    id: 'weld',
    title: 'Технология сварочных работ',
    code: '3-02-0715-01',
    qualification: 'Электрогазосварщик',
    duration: '1 год 6 месяцев',
    budget: 25,
    paid: 0,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop',
    icon: Zap,
    description: 'Выполнение сварочных работ ручной дуговой и газовой сваркой, резка металлов.'
  }
];

const Specialties: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Абитуриентам</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Выбери профессию будущего
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              ПГАТК предлагает востребованные специальности в сфере агропромышленного комплекса, строительства и обслуживания. 
              Получи качественное образование и гарантированное трудоустройство.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-16 relative z-20">
        
        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-accent-500 flex items-center gap-4">
            <div className="p-3 bg-accent-50 rounded-full text-accent-600">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">75+</div>
              <div className="text-sm text-slate-500 font-medium">Лет успешной работы</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-emerald-500 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 rounded-full text-emerald-600">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">20 000+</div>
              <div className="text-sm text-slate-500 font-medium">Выпускников</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">100%</div>
              <div className="text-sm text-slate-500 font-medium">Трудоустройство</div>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 font-display border-l-8 border-accent-500 pl-6">
            Специальности 2025
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec) => (
              <div key={spec.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-1">
                
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/0 transition-colors z-10"></div>
                  <img 
                    src={spec.image} 
                    alt={spec.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-primary-900">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                    Код: {spec.code}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight group-hover:text-accent-600 transition-colors">
                    {spec.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-primary-50 text-primary-800 text-sm font-semibold px-3 py-1 rounded-md mb-3">
                      {spec.qualification}
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {spec.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-700">
                      <Clock className="w-4 h-4 mr-3 text-slate-400" />
                      <span className="font-medium">{spec.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Users className="w-4 h-4 mr-3 text-slate-400" />
                      <span>План приема: </span>
                      <span className="ml-auto font-bold">
                        <span className="text-emerald-600">{spec.budget} бюдж.</span>
                        {spec.paid > 0 && <span className="text-slate-400 mx-1">/</span>}
                        {spec.paid > 0 && <span className="text-accent-600">{spec.paid} плат.</span>}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-primary-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Готов сделать первый шаг к карьере?
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Ознакомься с правилами приема, сроками подачи документов и проходными баллами прошлого года. Приемная комиссия ответит на все вопросы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/abiturientam" // Можно заменить на реальную ссылку с правилами
                  className="inline-flex items-center justify-center bg-accent-500 text-primary-900 font-bold py-4 px-8 rounded-xl hover:bg-accent-400 hover:-translate-y-1 transition-all shadow-lg shadow-accent-500/20"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Правила приема
                </Link>
                <Link 
                  to="/contacts" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-slate-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-900 hover:border-white hover:-translate-y-1 transition-all"
                >
                  Контакты комиссии
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Visual Badge/Icon */}
            <div className="hidden md:block relative">
              <div className="w-64 h-64 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                <div className="text-center">
                  <div className="text-primary-900 font-bold text-6xl font-display mb-1">2025</div>
                  <div className="text-primary-900 font-bold uppercase tracking-widest text-sm">Приемная<br/>кампания</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Specialties;