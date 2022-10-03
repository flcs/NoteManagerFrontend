import api from "./api";

interface IProdutoData {
    name: string;
    categoria: string;
    preco: string;
}

export const getProdutos = () => api.get("/produtos");
export const getProduto = (id: string) => api.get(`/produtos?id=${id}`);
export const postProduto = (data: IProdutoData) => api.post("/produto", data);
export const updateProduto = (data: IProdutoData) => api.put(`/produto`, data);
export const deleteProduto = (id: string) => api.delete(`/produtos?id=${id}`);
