import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bookService } from "../services/api";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await bookService.getAll();
      setBooks(res.data);
    } catch (err) {
      setError("Gagal mengambil data buku");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin hapus buku ini?")) return;
    try {
      await bookService.remove(id);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      alert("Gagal menghapus buku");
    }
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  const genreColor = {
    Novel: "bg-blue-100 text-blue-700",
    Sejarah: "bg-amber-100 text-amber-700",
    "Self-improvement": "bg-emerald-100 text-emerald-700",
    Sains: "bg-purple-100 text-purple-700",
  };

  if (loading) {
    return <p className="text-center text-slate-500 py-10">Memuat data...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 py-10">{error}</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Daftar Buku</h2>
          <p className="text-sm text-slate-500">{books.length} buku tersedia</p>
        </div>
        <Link
          to="/create"
          className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition"
        >
          + Tambah Buku
        </Link>
      </div>

      <input
        type="text"
        placeholder="Cari judul buku..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-slate-300 w-full p-2.5 rounded-lg mb-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredBooks.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-3xl mb-2">📭</p>
          <p>Tidak ada buku yang cocok</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {filteredBooks.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-slate-200 rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold text-slate-800">{b.title}</p>
                <p className="text-sm text-slate-500">
                  {b.author} · {b.year}
                </p>
                <span
                  className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                    genreColor[b.genre] || "bg-slate-100 text-slate-600"
                  }`}
                >
                  {b.genre}
                </span>
              </div>

              <div className="text-right space-y-2">
                <p className="text-sm text-slate-500">Stok: {b.stock}</p>
                <div className="space-x-3">
                  <Link
                    to={`/edit/${b.id}`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="text-red-600 text-sm font-medium hover:underline"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}