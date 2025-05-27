'use client';
import { useState, useEffect } from 'react';
import { BookCard } from './BookCard';

interface Book { id: string; title: string; author: string; }

export function SearchBooks({ books }: { books: Book[] }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Book[]>(books);

  useEffect(() => {

    const handler = setTimeout(() => {
      const q = query.toLowerCase();
      setFiltered(books.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)));
    }, 300);

    return () => clearTimeout(handler);

  }, [query, books]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      {filtered.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
}