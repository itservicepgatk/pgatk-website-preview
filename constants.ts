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

// Текст-рыба для полного отображения новости
const LOREM_CONTENT = `
  <p>В соответствии с планом работы колледжа и с целью повышения качества образовательного процесса, было проведено масштабное мероприятие, объединившее учащихся всех курсов.</p>
  <p>В ходе встречи обсуждались ключевые вопросы развития профессиональных компетенций, внедрения инновационных технологий и перспективы трудоустройства выпускников.</p>
  <h3>Ключевые моменты:</h3>
  <ul>
    <li>Презентация новых проектов и достижений.</li>
    <li>Выступление приглашенных экспертов и гостей.</li>
    <li>Награждение активных участников грамотами и дипломами.</li>
  </ul>
  <p>Руководство колледжа отметило высокий уровень подготовки и вовлеченности учащихся в общественную жизнь.</p>
  <p>Мероприятие завершилось памятным фото и обсуждением планов на будущее.</p>
`;

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Победа в областной олимпиаде',
    date: '20 Декабря 2025',
    category: 'Достижения',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Olimpiada/Olimpiada.png',
    summary: 'Поздравляем победителей областного этапа республиканской олимпиады по учебным предметам! Наши учащиеся показали высокий уровень знаний.',
    isMain: true,
    content: LOREM_CONTENT
  },
  {
    id: '2',
    title: 'Акция "Зимний патруль"',
    date: '18 Декабря 2025',
    category: 'События',
    imageUrl: 'images/1Novosti/2025/12Dekabr/ZimniyPatrul.png',
    summary: 'Активисты МООП и БРСМ колледжа совместно с представителями ОСВОД провели профилактический рейд по водоемам.',
    content: LOREM_CONTENT
  },
  {
    id: '3',
    title: 'Профилактика: Антинаркотическая площадка',
    date: '15 Декабря 2025',
    category: 'Профилактика',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Antinarko/Antinarkoticheskay.png',
    summary: 'В рамках декады правовых знаний состоялась встреча учащихся с сотрудниками правоохранительных органов по вопросам профилактики наркомании.',
    content: LOREM_CONTENT
  },
  {
    id: '4',
    title: 'Геноцид белорусского народа: память и боль',
    date: '12 Декабря 2025',
    category: 'Патриотизм',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Genocid.png',
    summary: 'Урок памяти, посвященный расследованию уголовного дела о геноциде белорусского народа в годы Великой Отечественной войны.',
    content: LOREM_CONTENT
  },
  // Дополнительные новости для проверки пагинации (используем повторно существующие картинки)
  {
    id: '5',
    title: 'Участие в конкурсе профессионального мастерства',
    date: '10 Декабря 2025',
    category: 'Конкурсы',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Olimpiada/Olimpiada.png',
    summary: 'Команда колледжа приняла участие в региональном отборе WorldSkills Belarus.',
    content: LOREM_CONTENT
  },
  {
    id: '6',
    title: 'Единый день информирования',
    date: '08 Декабря 2025',
    category: 'Информирование',
    imageUrl: 'images/1Novosti/2025/12Dekabr/ZimniyPatrul.png',
    summary: 'Обсуждение актуальных вопросов социально-экономического развития страны.',
    content: LOREM_CONTENT
  },
  {
    id: '7',
    title: 'Волонтерская помощь ветеранам',
    date: '05 Декабря 2025',
    category: 'Волонтерство',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Genocid.png',
    summary: 'Волонтеры отряда "Доброе сердце" посетили ветеранов педагогического труда.',
    content: LOREM_CONTENT
  }
];

export const IMPORTANT_NEWS = [
  {
    id: '1',
    title: 'Оказание помощи несовершеннолетним, ставшим жертвами насилия',
    date: '15.01.2026',
    image: 'images/important/1.jpg',
    href: '#'
  },
  {
    id: '2',
    title: 'Лето-2026: Безопасность и занятость',
    date: '10.01.2026',
    image: 'images/important/2.jpg',
    href: '#'
  },
  {
    id: '3',
    title: 'Детство без насилия',
    date: '05.01.2026',
    image: 'images/important/3.jpg',
    href: '#'
  },
  {
    id: '4',
    title: '2026 — Год женщины в Республике Беларусь',
    date: '01.01.2026',
    image: 'images/important/4.jpg',
    href: '#'
  },
  {
    id: '5',
    title: 'Важно! Правила безопасности на воде в зимний период',
    date: '28.12.2025',
    image: 'images/important/5.jpg',
    href: '#'
  },
  {
    id: '6',
    title: 'Подписывайтесь на Телеграм-канал «Компас»',
    date: '25.12.2025',
    image: 'images/important/6.jpg',
    href: '#'
  },
  {
    id: '7',
    title: 'Государственный проект "Здоровые города и поселки"',
    date: '22.12.2025',
    image: 'images/important/7.jpg',
    href: '#'
  },
  {
    id: '8',
    title: 'Пакет "Безопасность": методические рекомендации',
    date: '20.12.2025',
    image: 'images/important/8.jpg',
    href: '#'
  },
  {
    id: '9',
    title: 'Курение и ответственность. Важно знать!',
    date: '18.12.2025',
    image: 'images/important/9.jpg',
    href: '#'
  },
  {
    id: '10',
    title: 'Чат-бот "Стоп Экстремизм": сообщи о нарушении',
    date: '15.12.2025',
    image: 'images/important/10.jpg',
    href: '#'
  },
  {
    id: '11',
    title: 'Анонимный чат-бот "Помощь" для пострадавших',
    date: '12.12.2025',
    image: 'images/important/11.jpg',
    href: '#'
  },
  {
    id: '12',
    title: 'Об изменении стоимости обучения в 2026 году',
    date: '10.12.2025',
    image: 'images/important/12.jpg',
    href: '#'
  },
  {
    id: '13',
    title: 'Антинаркотическая площадка: видеолекторий',
    date: '08.12.2025',
    image: 'images/important/13.jpg',
    href: '#'
  },
  {
    id: '14',
    title: 'Профилактика детского травматизма',
    date: '05.12.2025',
    image: 'images/important/14.jpg',
    href: '#'
  },
  {
    id: '15',
    title: 'Виртуальная дружба и безопасность в сети',
    date: '03.12.2025',
    image: 'images/important/15.jpg',
    href: '#'
  },
  {
    id: '16',
    title: 'Республиканская служба экстренной психологической помощи',
    date: '01.12.2025',
    image: 'images/important/16.jpg',
    href: '#'
  },
  {
    id: '17',
    title: 'СТОП Наркотик: ответственность за распространение',
    date: '28.11.2025',
    image: 'images/important/17.jpg',
    href: '#'
  },
  {
    id: '18',
    title: 'Кибербезопасность. Как не стать жертвой фишинга',
    date: '25.11.2025',
    image: 'images/important/18.jpg',
    href: '#'
  },
  {
    id: '19',
    title: 'Внимание! Мошенничество на торговых площадках',
    date: '22.11.2025',
    image: 'images/important/19.jpg',
    href: '#'
  },
  {
    id: '20',
    title: 'Правила безопасности на железнодорожном транспорте',
    date: '20.11.2025',
    image: 'images/important/20.jpg',
    href: '#'
  }
];