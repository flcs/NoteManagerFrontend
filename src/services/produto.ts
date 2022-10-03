import api from "./api";

interface IProdutoData {
    name: string;
    categoria: string;
    preco: string;
}

export const apiGetProdutos = () => api.get("/produtos");
export const apiGetProduto = (id: string) => api.get(`/produtos?id=${id}`);
export const apiPostProduto = (data: IProdutoData) => api.post("/produto", data);
export const apiUpdateProduto = (data: IProdutoData) => api.put(`/produto`, data);
export const apiDeleteProduto = (id: string) => api.delete(`/produtos?id=${id}`);
