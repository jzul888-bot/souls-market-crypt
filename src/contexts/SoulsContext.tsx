import React, { createContext, useContext, useState, useEffect } from 'react';

interface SoulsContextType {
  souls: number;
  purchaseNFT: (price: number) => boolean;
  addSouls: (amount: number) => void;
}

const SoulsContext = createContext<SoulsContextType | undefined>(undefined);

export const SoulsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [souls, setSouls] = useState(() => {
    const saved = localStorage.getItem('souls');
    return saved ? parseInt(saved) : 100000; // Comenzar con muchas almas
  });

  useEffect(() => {
    localStorage.setItem('souls', souls.toString());
  }, [souls]);

  const purchaseNFT = (price: number): boolean => {
    if (souls >= price) {
      setSouls(prev => prev - price);
      return true;
    }
    return false;
  };

  const addSouls = (amount: number) => {
    setSouls(prev => prev + amount);
  };

  return (
    <SoulsContext.Provider value={{ souls, purchaseNFT, addSouls }}>
      {children}
    </SoulsContext.Provider>
  );
};

export const useSouls = () => {
  const context = useContext(SoulsContext);
  if (context === undefined) {
    throw new Error('useSouls must be used within a SoulsProvider');
  }
  return context;
};