import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import BookForm from "./pages/BookForm";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <h1 className="text-lg font-semibold text-slate-800">
              📚 Perpustakaan Mini
            </h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/create" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;