import { request } from "@/utils/http";

//登录
export const LoginApi = <T>(params: any) =>
  request.post<T>("/user/login", params, { timeout: 15000 });
