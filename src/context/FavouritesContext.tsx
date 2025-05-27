'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (id: string) => string;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    return "Favorite added";
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(f => f !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}