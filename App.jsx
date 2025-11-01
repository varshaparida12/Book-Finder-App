import { useState } from "react";
import SearchBar from "./SearchBar";
import BookCard from "./BookCard";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query || !query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const q = encodeURIComponent(query.trim());
      const res = await fetch(`https://openlibrary.org/search.json?q=${q}`);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setBooks(data.docs.slice(0, 24));
    } catch (err) {
      setError("❌ Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex flex-col justify-center items-center text-center p-8">
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-blue-800 mb-10 drop-shadow-lg font-heading tracking-wide">
        📚 Book Finder
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading & Error Messages */}
      {loading && (
        <p className="text-center mt-6 text-blue-500 animate-pulse">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-center text-red-600 mt-6 font-semibold">{error}</p>
      )}

      {/* Message if no books */}
      {!loading && !error && books.length === 0 && (
        <p className="text-center text-gray-700 mt-8 text-lg">
          🔍 Try searching by <strong>title</strong>, <strong>author</strong>, or{" "}
          <strong>subject</strong>.
        </p>
      )}

      {/* Book Cards (Centered Grid) */}
      <div className="flex justify-center w-full mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}


