import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'zh';
type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

const getInitialLang = (): Lang => {
  try {
    const savedLang = localStorage.getItem('lang');

    // Ignore stale or invalid values left by older localhost applications.
    return savedLang === 'zh' ? 'zh' : 'en';
  } catch {
    // The application should still render when browser storage is unavailable.
    return 'en';
  }
};

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // Storage can be blocked by browser privacy settings.
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LangProvider');
  return context;
};
