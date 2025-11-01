export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 w-80 p-5 flex flex-col items-center text-center border border-gray-200">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-56 h-72 object-cover rounded-xl mb-4 border border-gray-300 shadow-sm"
      />

      <h2 className="text-lg font-bold text-blue-700 mb-2 line-clamp-2">
        {book.title}
      </h2>

      <p className="text-gray-700 text-sm mb-1">
        👤 {book.author_name?.join(", ") || "Unknown Author"}
      </p>

      <p className="text-gray-600 text-sm mb-3">
        📅 First Published: {book.first_publish_year || "N/A"}
      </p>

      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        View on OpenLibrary
      </a>
    </div>
  );
}
