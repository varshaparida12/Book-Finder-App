import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={submit} className="flex justify-center w-full max-w-2xl mb-8">
      <input
        type="text"
        placeholder="🔎 Search by title, author, or subject..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow border border-gray-300 rounded-l-xl p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 rounded-r-xl text-lg font-semibold hover:bg-blue-700 transition-all"
      >
        Search
      </button>
    </form>
  );
}
