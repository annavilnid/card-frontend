import { AuthInstance } from "@/api/auth.instance";

export const AuthApi = (): void => {
  register: (params: any) => {
    return AuthInstance.post(params);
  };
};
