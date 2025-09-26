import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'zh';
type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // load previous language from localStorage (optional)
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'en');

  useEffect(() => {
    localStorage.setItem('lang', lang);
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
