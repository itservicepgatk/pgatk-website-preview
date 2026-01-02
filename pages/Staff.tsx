import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import PersonCard, { PersonProps } from '../components/PersonCard';

// MOCK DATA - Данные об администрации
const ADMINISTRATION_DATA: PersonProps[] = [
  {
    name: "Колб Игорь Михайлович",
    position: "Директор колледжа",
    // photoUrl: "https://via.placeholder.com/150", // Раскомментируйте, если есть фото
    phone: "8 (0165) 31-22-11",
    email: "director@pgatkk.by",
    description: "Общее руководство деятельностью колледжа. Прием граждан: 2-й вторник месяца с 08.00 до 14.00."
  },
  {
    name: "Бегер Олег Александрович",
    position: "Заместитель директора по учебной работе",
    phone: "8 (0165) 32-45-67",
    email: "upr@pgatkk.by",
    description: "Организация учебного процесса, контроль выполнения учебных планов и программ."
  },
  {
    name: "Пашкевич Семен Васильевич",
    position: "Заместитель директора по воспитательной работе",
    phone: "8 (0165) 32-45-68",
    email: "vosp@pgatkk.by",
    description: "Идеологическая и воспитательная работа, социальная защита учащихся."
  },
  {
    name: "Билинская Лариса Андреевна",
    position: "Заместитель директора по учебно-методической работе",
    phone: "8 (0165) 32-45-69",
    description: "Методическое обеспечение образовательного процесса, аттестация педагогических работников."
  },
  {
    name: "Кулеш Игорь Леонидович",
    position: "Заместитель директора по производственному обучению",
    phone: "8 (0165) 32-45-70",
    description: "Организация производственного обучения и практики, связь с предприятиями-заказчиками кадров."
  },
  {
    name: "Харитонович Дмитрий Степанович",
    position: "Заместитель директора по хозяйственной работе",
    phone: "8 (0165) 32-45-71",
    description: "Материально-техническое обеспечение, охрана труда и техника безопасности."
  },
  {
    name: "Куницкая Наталия Михайловна",
    position: "Главный бухгалтер",
    phone: "8 (0165) 31-22-15",
    description: "Финансово-экономическая деятельность учреждения."
  }
];

const Staff: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/kolledg" className="hover:text-white transition-colors">Колледж</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Администрация</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Администрация колледжа
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 min-h-[60vh]">
          
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-600">
              Руководство колледжа обеспечивает эффективную организацию образовательного процесса, 
              создание комфортных условий для обучения и воспитания будущих специалистов.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ADMINISTRATION_DATA.map((person, index) => (
              <PersonCard 
                key={index}
                {...person}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Staff;