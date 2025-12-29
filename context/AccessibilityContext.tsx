import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'normal' | 'large' | 'extra';
type Contrast = 'normal' | 'bw' | 'wb' | 'blue';

interface AccessibilityContextType {
  fontSize: FontSize;
  contrast: Contrast;
  setFontSize: (size: FontSize) => void;
  setContrast: (contrast: Contrast) => void;
  resetSettings: () => void;
  isPanelOpen: boolean;
  togglePanel: () => void;
  closePanel: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Загружаем настройки из localStorage или используем дефолтные
  const [fontSize, setFontSizeState] = useState<FontSize>(() => 
    (localStorage.getItem('access-fontSize') as FontSize) || 'normal'
  );
  const [contrast, setContrastState] = useState<Contrast>(() => 
    (localStorage.getItem('access-contrast') as Contrast) || 'normal'
  );
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('access-fontSize', size);
  };

  const setContrast = (c: Contrast) => {
    setContrastState(c);
    localStorage.setItem('access-contrast', c);
  };

  const resetSettings = () => {
    setFontSize('normal');
    setContrast('normal');
  };

  const togglePanel = () => setIsPanelOpen(prev => !prev);
  const closePanel = () => setIsPanelOpen(false);

  // Применяем классы к HTML тегу
  useEffect(() => {
    const html = document.documentElement;
    
    // Сброс классов
    html.classList.remove('font-normal', 'font-large', 'font-extra');
    html.classList.remove('theme-normal', 'theme-bw', 'theme-wb', 'theme-blue');

    // Применение новых
    html.classList.add(`font-${fontSize}`);
    html.classList.add(`theme-${contrast}`);

  }, [fontSize, contrast]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      contrast,
      setFontSize,
      setContrast,
      resetSettings,
      isPanelOpen,
      togglePanel,
      closePanel
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};