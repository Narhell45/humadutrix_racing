import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookService } from "../services/api";

export default function BookForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    stock: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEdit) {
      bookService.getById(id).then((res) => {
        setForm(res.data);
      });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Judul wajib diisi";
    if (!form.author.trim()) newErrors.author = "Penulis wajib diisi";
    if (!form.year || Number(form.year) <= 0) newErrors.year = "Tahun tidak valid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      if (isEdit) {
        await bookService.update(id, form);
      } else {
        await bookService.create(form);
      }
      navigate("/");
    } catch (err) {
      alert("Gagal menyimpan buku");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "border border-slate-300 w-full p-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold text-slate-800 mb-5">
        {isEdit ? "Edit Buku" : "Tambah Buku"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-4"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-slate-700">
            Judul
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.title && (
            <p className="text-red-600 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-slate-700">
            Penulis
          </label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.author && (
            <p className="text-red-600 text-xs mt-1">{errors.author}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-slate-700">
            Genre
          </label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">
              Tahun
            </label>
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.year && (
              <p className="text-red-600 text-xs mt-1">{errors.year}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-slate-700">
              Stok
            </label>
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {submitting ? "Menyimpan..." : "Simpan"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm font-medium px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}