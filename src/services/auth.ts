import api from "./api";

interface ILoginData {
  email: string;
  password: string;
}

export const signIn = (data: ILoginData) => api.post("/auth/login", data);

interface ISignUpData {
  name: string;
  categoria: string;
  preco: string;
}

export const signUp = (data: ISignUpData) => api.post("/auth/register", data);
