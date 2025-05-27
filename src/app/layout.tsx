import './globals.css';
import { ReactNode } from 'react';
import { FavoritesProvider, useFavorites } from '../context/FavouritesContext';

function Header() {
  const { favorites } = useFavorites();
  return (
    <header className="bg-gray-100 p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Book Catalog</h1>
      <div>Favorites: {favorites.length}</div>
    </header>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>
          <Header />
          <main className="p-4">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}