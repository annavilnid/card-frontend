import axios, { AxiosResponse } from "axios";
import { ArgRegisterType } from "@/api/auth.api";

console.log(import.meta.env.VITE_BASE_API_URL);

export const AuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + "auth/",
  withCredentials: true,
});

export const authAPI = {
  register(data: ArgRegisterType) {
    return AuthInstance.post("register", data);
  },
  login(data: any) {
    return AuthInstance.post("login", data);
  },
};
