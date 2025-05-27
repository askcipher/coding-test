'use client';
import Link from 'next/link';
import { useFavorites } from '../context/FavouritesContext';

interface Book { id: string; title: string; author: string; }

export function BookCard({ book }: { book: Book }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFav = favorites.includes(book.id);

  return (
    <div className="border p-4 rounded mb-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-600">by {book.author}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => (isFav ? removeFavorite(book.id) : addFavorite(book.id))} className="mr-4">
          {isFav ? '★' : '☆'}
        </button>
        <Link href={`/books/${book.id}`}>View Details</Link>
      </div>
    </div>
  );
}