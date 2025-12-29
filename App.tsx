import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import OneWindow from './pages/OneWindow';
import ServicesPage from './pages/ServicesPage'; // <--- ИМПОРТ
import { AccessibilityProvider } from './context/AccessibilityContext';

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<NewsList />} />
            <Route path="news/:id" element={<NewsDetail />} />
            
            <Route path="odno-okno" element={<OneWindow />} />
            
            {/* НОВЫЙ МАРШРУТ */}
            <Route path="odno-okno/uslugi" element={<ServicesPage />} />
            
            <Route path="*" element={<GenericPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessibilityProvider>
  );
};

export default App;