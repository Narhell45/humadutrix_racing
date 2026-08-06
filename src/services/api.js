import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001"
});

export const bookService = {
    getAll: () => api.get("/books"),
    getById: (id) => api.get(`/books/${id}`),
    create: (data) => api.post("/books", data),
    update: (id, data) => api.put(`/books/${id}`, data),
    remove: (id) => api.delete(`/books/${id}`),
};

export default api;