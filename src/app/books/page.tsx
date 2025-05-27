'use client';
import { SearchBooks } from '../../components/SearchBooks';
import booksData from '../../data/books.json';

export default function BooksPage() {
  return <SearchBooks books={booksData} />;
}