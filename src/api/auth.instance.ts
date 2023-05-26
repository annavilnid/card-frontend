import axios, { AxiosResponse } from "axios";

export const AuthInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL + "auth/",
  withCredentials: true,
});

export const authAPI = {
  register(data: any) {
    return AuthInstance.post<any, AxiosResponse<any>, any>("register", data);
  },
};

export type LoginType = {
  email: string;
  password: string;
};
