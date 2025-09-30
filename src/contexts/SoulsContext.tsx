import React, { createContext, useContext, useState, useEffect } from 'react';

interface PurchasedNFT {
  id: string;
  name: string;
  image: string;
  rarity: string;
  purchaseDate: string;
}

interface SoulsContextType {
  souls: number;
  purchaseNFT: (price: number, nftData: { id: string; name: string; image: string; rarity: string }) => boolean;
  addSouls: (amount: number) => void;
  ownedNFTs: PurchasedNFT[];
}

const SoulsContext = createContext<SoulsContextType | undefined>(undefined);

export const SoulsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [souls, setSouls] = useState(() => {
    const saved = localStorage.getItem('souls');
    return saved ? parseInt(saved) : 100000;
  });

  const [ownedNFTs, setOwnedNFTs] = useState<PurchasedNFT[]>(() => {
    const saved = localStorage.getItem('ownedNFTs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('souls', souls.toString());
  }, [souls]);

  useEffect(() => {
    localStorage.setItem('ownedNFTs', JSON.stringify(ownedNFTs));
  }, [ownedNFTs]);

  const purchaseNFT = (price: number, nftData: { id: string; name: string; image: string; rarity: string }): boolean => {
    if (souls >= price) {
      // Check if already owned
      if (ownedNFTs.some(nft => nft.id === nftData.id)) {
        return false;
      }
      
      setSouls(prev => prev - price);
      setOwnedNFTs(prev => [...prev, {
        ...nftData,
        purchaseDate: new Date().toISOString()
      }]);
      return true;
    }
    return false;
  };

  const addSouls = (amount: number) => {
    setSouls(prev => prev + amount);
  };

  return (
    <SoulsContext.Provider value={{ souls, purchaseNFT, addSouls, ownedNFTs }}>
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