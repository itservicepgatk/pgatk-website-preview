import { MenuItem, NewsItem } from './types';

export const MAIN_MENU: MenuItem[] = [
  {
    label: "Главная",
    href: "/"
  },
  {
    label: "Колледж",
    href: "/kolledg",
    submenu: [
      { label: "Администрация", href: "/kolledg/administraciy" },
      { label: "История колледжа", href: "/kolledg/istoriy-kolledga" },
      { label: "Материально-техническая база", href: "/kolledg/materialno-tekhnicheskaya-baza" },
      { label: "Наши достижения", href: "/kolledg/nashi-dostizheniya" },
      { label: "Наши контакты", href: "/kolledg/nashi-kontakty" },
      { label: "Режим работы", href: "/kolledg/rezhimraboty" },
      { label: "Мы в СМИ", href: "/kolledg/mi-v-smi" },
      { label: "Выдающиеся выпускники", href: "/kolledg/vydayushchiesya-vypusniki" },
      { label: "Виртуальная Доска почета", href: "/kolledg/virtualnaya-doska-pocheta" },
      { label: "Организационная структура", href: "/kolledg/struktura-kolledga" },
      { label: "Положение о перс. данных", href: "/images/1Novosti/2025/11Noybr/ObrabotkaPersonalnihDannih.pdf" },
      { label: "Политика конфиденциальности", href: "https://pgatkk.by/images/1Novosti/2024/Dekabr/politika_konfidencialnosti.pdf" },
      { label: "Политика обработки куки", href: "https://pgatkk.by/images/1Novosti/2024/Dekabr/poloshenie_cookie.pdf" }
    ]
  },
  {
    label: "НИКО",
    href: "/niko"
  },
  {
    label: "Абитуриентам",
    href: "/abiturientam"
  },
  {
    label: "Образовательный процесс",
    href: "/obrazovatelniy-process",
    submenu: [
      { label: "Заочная форма обучения", href: "/obrazovatelniy-process/zaochnaya-forma-obucheniya" },
      { label: "Выпускникам", href: "/obrazovatelniy-process/vypusknikam" },
      { label: "Библиотека", href: "/obrazovatelniy-process/biblioteka" },
      { label: "Обучение (междунар. договоры)", href: "/obrazovatelniy-process/obuchenie-v-ramkakh-mezhdunarodnykh-dogovorov" },
      { label: "Переподготовка", href: "/obrazovatelniy-process/perepodgotovka" }
    ]
  },
  {
    label: "Идеология и воспитание",
    href: "/ideologicheskaya-i-vospitatelnaya-rabota"
  },
  {
    label: "Методическая работа",
    href: "#",
    submenu: [
      { label: "Направления метод. работы", href: "/metodicheskaya-rabota/napravleniya-metodicheskoj-raboty" },
      { label: "Цикловые комиссии", href: "/metodicheskaya-rabota/tsiklovye-komissii" },
      { label: "Материалы к началу уч. года", href: "/metodicheskaya-rabota/materialy-k-nachalu-uchebnogo-goda" },
      { label: "Образцы документов", href: "/metodicheskaya-rabota/obraztsy-dokumentov" },
      { label: "Обобщение пед. опыта", href: "/metodicheskaya-rabota/obobshchenie-pedagogicheskogo-opyta" },
      { label: "План повышения квалификации", href: "/metodicheskaya-rabota/plan-povysheniya-kvalifikatsii-i-perepodgotovki-pedagogicheskikh-rabotnikov" },
      { label: "Состав аттестационной комиссии", href: "/metodicheskaya-rabota/sostav-attestatsionnoj-komissii" },
      { label: "Стажировка", href: "/metodicheskaya-rabota/stazhirovka" },
      { label: "Положение об аттестации", href: "https://pgatkk.by/images/Metodicheskiy/UchGod2122/PoloshenieItAttest.pdf" },
      { label: "График недель цикловых комиссий", href: "/metodicheskaya-rabota/grafik-provedeniya-nedel-tsiklovykh-komissij-na-2024-2025-uchebnyj-god" }
    ]
  },
  {
    label: "Учащимся",
    href: "/uchashchimsya",
    submenu: [
      { label: "Правила для учащихся", href: "https://pgatkk.by/images/PravilaUchashihsyIRoditeley.pdf" },
      { label: "Положение о стипендиях", href: "https://disk.yandex.com/i/kSfqLJfkT-hWiA" },
      { label: "График образовательного процесса", href: "https://disk.yandex.com/i/DESCKqlOTFo8zg" },
      { label: "Расписание учебных занятий", href: "/uchashchimsya/raspisanie" },
      { label: "График работы по распределению", href: "/uchashchimsya/grafik-raboty-po-raspredeleniyu" },
      { label: "Стоимость обучения", href: "https://disk.yandex.com/i/9G99aEWC1RDL9A" }
    ]
  },
  {
    label: "Одно окно",
    href: "/odno-okno",
    submenu: [
      { label: "Услуги населению", href: "/odno-okno/uslugi" },
      { label: "Наши контакты и реквизиты", href: "/odno-okno/kontakty" },
      { label: "Административные процедуры", href: "/odno-okno/admin-procedury" },
      { label: "Организационная структура", href: "/odno-okno/struktura" },
      { label: "Вышестоящие организации", href: "/odno-okno/vyshestoyashchie" },
      { label: "Посещение объекта инвалидом", href: "/odno-okno/invalidy" }
    ]
  },
  {
    label: "Политика ИБ",
    href: "https://pgatkk.by/images/1Novosti/2024/Dekabr/politika_ib.pdf"
  }
];

const LOREM_CONTENT = `
  <p>В соответствии с планом работы колледжа и с целью повышения качества образовательного процесса, было проведено масштабное мероприятие, объединившее учащихся всех курсов.</p>
  <p>В ходе встречи обсуждались ключевые вопросы развития профессиональных компетенций, внедрения инновационных технологий в агропромышленный комплекс и перспективы трудоустройства выпускников.</p>
  <h3>Ключевые моменты встречи:</h3>
  <ul>
    <li>Презентация новых учебных программ.</li>
    <li>Выступление приглашенных экспертов из ведущих предприятий региона.</li>
    <li>Награждение лучших студентов по итогам семестра.</li>
  </ul>
  <p>Директор колледжа отметил: "Мы стремимся не просто давать знания, а формировать личность будущего специалиста, готового к реальным вызовам современной экономики".</p>
  <p>Мероприятие завершилось праздничным концертом, подготовленным силами творческих коллективов учебного заведения.</p>
`;

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Колледж признан лучшим учреждением образования региона в 2024 году',
    date: '15 Октября 2024',
    category: 'Достижения',
    imageUrl: 'https://picsum.photos/800/600',
    summary: 'По итогам ежегодного областного конкурса профессионального мастерства наш колледж занял первое место...',
    isMain: true,
    content: LOREM_CONTENT
  },
  {
    id: '2',
    title: 'Встреча с представителями агропромышленного комплекса',
    date: '12 Октября 2024',
    category: 'События',
    imageUrl: 'https://picsum.photos/400/300',
    summary: 'Обсуждение перспектив трудоустройства выпускников.',
    content: LOREM_CONTENT
  },
  {
    id: '3',
    title: 'Старт спартакиады "Золотой колос"',
    date: '10 Октября 2024',
    category: 'Спорт',
    imageUrl: 'https://picsum.photos/401/301',
    summary: 'Приглашаем всех желающих принять участие в соревнованиях.',
    content: LOREM_CONTENT
  },
  {
    id: '4',
    title: 'День открытых дверей: фотоотчет',
    date: '08 Октября 2024',
    category: 'Абитуриенту',
    imageUrl: 'https://picsum.photos/402/302',
    summary: 'Как прошла встреча с будущими студентами.',
    content: LOREM_CONTENT
  },
  {
    id: '5',
    title: 'Конкурс профессионального мастерства WorldSkills',
    date: '01 Октября 2024',
    category: 'Конкурсы',
    imageUrl: 'https://picsum.photos/403/303',
    summary: 'Наши студенты вышли в финал республиканского этапа.',
    content: LOREM_CONTENT
  },
  {
    id: '6',
    title: 'Обновление библиотечного фонда',
    date: '28 Сентября 2024',
    category: 'Библиотека',
    imageUrl: 'https://picsum.photos/404/304',
    summary: 'Поступили новые учебники по спецдисциплинам.',
    content: LOREM_CONTENT
  },
  {
    id: '7',
    title: 'Волонтерская акция "Чистый берег"',
    date: '25 Сентября 2024',
    category: 'Волонтерство',
    imageUrl: 'https://picsum.photos/405/305',
    summary: 'Учащиеся очистили набережную реки Пина.',
    content: LOREM_CONTENT
  }
];