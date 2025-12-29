/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Изумрудная палитра (основной цвет колледжа)
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#064e3b', // Используется в Header/Footer
          900: '#022c22', // Используется в фонах
          950: '#022c22',
        },
        // Янтарная палитра (акцентный цвет)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Основной акцент (кнопки, иконки)
          600: '#d97706', // Ховер состояние
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      // Анимации для выпадающих меню и панели доступности
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Для стилизации статей (класс prose)
    require('tailwindcss-animate'),     // Для плавных анимаций (опционально, если используете shadcn/ui)
  ],
}