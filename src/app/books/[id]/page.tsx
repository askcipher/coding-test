import booksData from '../../../data/books.json';

interface Book { id: string; title: string; author: string; description: string; }

export async function generateStaticParams() {
  return booksData.map((b: Book) => ({ id: b.id }));
}

export default function BookDetail({ params }: { params: { id: string } }) {
  const book = booksData.find(b => b.id === params.id);
  if (!book) return <div>Book not found</div>;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <h2 className="text-xl text-gray-700 mb-4">by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}