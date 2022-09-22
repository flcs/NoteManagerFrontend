import api from "./api";

interface ILoginData {
  email: string;
  password: string;
}

export const signIn = (data: ILoginData) => api.post("/auth/login", data);
